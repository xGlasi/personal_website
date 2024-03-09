function BlogCard({ title, excerpt, imageUrl, date, tags }) {
    return (
      <div className="bg-white rounded shadow p-4 flex flex-col">
        {imageUrl && <img src={imageUrl} alt={`Cover for ${title}`} className="rounded-t mb-4" />}
        <div className="flex-grow">
          <h3 className="text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{excerpt}</p>
        </div>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
          <ul className="flex">
            {tags.map(tag => (
              <li key={tag} className="mr-2">{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  