export default function BlogCard({ title, excerpt, imageUrl, date, tags, blogUrl }) {

    const handleClick = () => {
      window.location.href = blogUrl; // Weiterleitung zur blogUrl
  };

    return (
      <div onClick={handleClick} className="border border-customLightGray rounded shadow p-4 flex flex-col cursor-pointer">
        {imageUrl && <img src={imageUrl} alt={`Cover for ${title}`} className="rounded-t mb-4" />}
        <div className="flex-grow">
          <h3 className="text-customBlue font-extrabold mb-2">{title}</h3>
          <p className="text-white font-medium mb-4">{excerpt}</p>
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
  