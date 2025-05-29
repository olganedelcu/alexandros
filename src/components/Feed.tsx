import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

export function Feed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts from @atziranis Medium feed
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@atziranis');
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.map((item: any) => {
            // Extract first image from content
            const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
            const thumbnail = imgMatch ? imgMatch[1] : '/blog-placeholder.jpg';
            
            return {
              title: item.title,
              link: item.link,
              pubDate: new Date(item.pubDate).toLocaleDateString(),
              thumbnail: thumbnail,
              description: item.description.replace(/<[^>]*>/g, '').slice(0, 150) + '...'
            };
          }));
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6 animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.link}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{post.pubDate}</span>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.description}
                </p>
              </div>
            </a>
          </Card>
        </motion.div>
      ))}
    </div>
  );
} 