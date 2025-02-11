import { topics, articles, videos } from "../../comps/data/data";

export const AboutApple = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        About Apple Products
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Topics</h2>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl bg-white transition-all duration-300 flex flex-col justify-center items-center"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {topic.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {topic.description}
                </p>
                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline cursor-pointer text-center"
                >
                  Explore Topic
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl bg-white transition-all duration-300"
            >
              <div className="mb-2 mt-2 ml-8 text-center mx-auto">
                <h3 className="text-xl font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Articles</h2>
        <ul className="list-disc pl-6 space-y-3">
          {articles.map((article, index) => (
            <li key={index} className="text-lg">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
