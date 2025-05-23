
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/2f91ecf5-0509-425f-8412-80cb318ab6c8.png" 
              alt="AKT Logo" 
              className="h-16 w-16 mx-auto mb-4 filter invert"
            />
            <h3 className="text-2xl font-bold mb-2">Alexandros Tziranis</h3>
            <p className="text-gray-400">Growing at the Speed of Trust</p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 mb-4">
              Ready to unlock your greatness? Book your consultation today.
            </p>
            <a 
              href="https://intro.co/AlexandrosTziranis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              https://intro.co/AlexandrosTziranis
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500 text-sm">
            <p>&copy; 2024 Alexandros Tziranis. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
