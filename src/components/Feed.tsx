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

interface MediumFeedItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  description: string;
}

export function Feed() {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Using a CORS proxy to fetch Medium's RSS feed
        const response = await fetch('https://corsproxy.io/?https://medium.com/feed/@atziranis');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        
        const items = xmlDoc.getElementsByTagName("item");
        const processedPosts: MediumPost[] = [];

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const title = item.getElementsByTagName("title")[0]?.textContent || "";
          const link = item.getElementsByTagName("link")[0]?.textContent || "";
          const pubDate = item.getElementsByTagName("pubDate")[0]?.textContent || "";
          const content = item.getElementsByTagName("content:encoded")[0]?.textContent || "";
          
          // Extract first image from content
          const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
          const thumbnail = imgMatch ? imgMatch[1] : '/blog-placeholder.jpg';
          
          // Extract description
          const description = item.getElementsByTagName("description")[0]?.textContent || "";
          const cleanDescription = description.replace(/<[^>]*>/g, '').slice(0, 150) + '...';

          processedPosts.push({
            title,
            link,
            pubDate: new Date(pubDate).toLocaleDateString(),
            thumbnail,
            description: cleanDescription
          });
        }

        // Sort by date (newest first)
        processedPosts.sort((a, b) => 
          new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );

        console.log('Processed Posts:', processedPosts); // Debug log
        setPosts(processedPosts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setError(error instanceof Error ? error.message : 'Failed to load posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500">Error loading posts: {error}</p>
        <p className="text-sm text-gray-500 mt-2">Please try refreshing the page</p>
      </div>
    );
  }

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

  if (posts.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No posts found</p>
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