import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="card bg-base-100 shadow-md">
      {/* Card Header */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <figure className="mb-4">
          <img src={thumbnail_url} alt="thumbnail" className="w-full rounded" />
        </figure>
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-orange-500 cursor-pointer"> Read More</span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center gap-1 text-orange-500">
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <span className="text-sm font-semibold text-gray-800">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
