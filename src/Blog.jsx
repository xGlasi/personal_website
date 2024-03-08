const posts = [
    {
      title: "Bill Walsh leadership lessons",
      date: "Sunday, 1 Jan 2023",
      excerpt: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Leadership", "Management", "Presentation"],
      imageUrl: ""
    },
    {
      title: "PM mental models",
      date: "Sunday, 1 Jan 2023",
      excerpt: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Product", "Research", "Frameworks"],
      imageUrl: ""
    },
    {
      title: "What is Wireframing?",
      date: "Sunday, 1 Jan 2023",
      excerpt: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Design", "Research", "Presentation"],
      imageUrl: ""
    },
    {
      title: "How collaboration makes us better designers",
      date: "Sunday, 1 Jan 2023",
      excerpt: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Design", "Research", "Presentation"],
      imageUrl: ""
    }
  ];
  
  export default function Blog() {
      return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
              {posts.map((post, index) => (
                  <div key={index} className="bg-white rounded shadow p-4 flex flex-col">
                      <img src={post.imageUrl} alt={post.title} className="rounded-t mb-4" />
                      <div className="flex-grow">
                          <p className="text-gray-900 mb-2">{post.title}</p>
                          <p className="text-gray-700 mb-4">{post.excerpt}</p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-600">
                          <span>{post.date}</span>
                          <span>{post.tags.join(', ')}</span>
                      </div>
                  </div>
              ))}
          </div>
      );
  }
  