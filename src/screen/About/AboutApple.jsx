import { topics, articles, videos } from "../../assets/data/data";

export const AboutApple = () => {
  const topics = [
    { title: "iPhone Evolution", description: "A look at how the iPhone has evolved over the years." },
    { title: "Mac vs. PC", description: "A comparison of Apple Macs and traditional PCs." },
    { title: "Apple Ecosystem", description: "How Apple devices work together seamlessly." },
    { title: "iOS vs. Android", description: "A deep dive into the differences between iOS and Android." }
  ];

  const articles = [
    { title: "The Future of Apple Silicon", link: "#" },
    { title: "Why Apple Removed the Headphone Jack", link: "#" },
    { title: "The History of macOS", link: "#" },
    { title: "Apple's Privacy Policies Explained", link: "#" }
  ];

  const videos = [
    { title: "Introduction to the iPhone 16", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Why MacBooks Last Longer", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "Inside Apple's Product Design", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  ];




  return (
  <>
  <div className="max-w-5xl mx-auto p-6">
     
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Apple Products</h1>

    
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Topics</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {topics.map((topic, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Articles</h2>
        <ul className="list-disc pl-5">
          {articles.map((article, index) => (
            <li key={index} className="mb-2">
              <a href={article.link} className="text-blue-500 hover:underline">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                Watch Video
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  </>

  );
};
