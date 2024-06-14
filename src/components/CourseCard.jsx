import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, title, author, rating, basicPrice, thumbnail } = course;
  return (
    <div className={`border border-slate-300 p-5 rounded-lg shadow-lg`}>
      <img className="w-full" src={thumbnail} alt="" />
      <div className="mt-3">
        <h5 title={title} className={`text-xl font-bold text-slate-700`}>
          {title?.slice(0, 35)}...
        </h5>
        <p className={`text-lg font-semibold my-1 text-slate-700`}>
          Author : {author}
        </p>
        <div className="flex justify-between text-xl mb-5">
          <p className={`text-3xl font-medium text-slate-700`}>
            Price ${basicPrice}
          </p>
          <p className={`flex items-center gap-1 font-medium text-slate-700`}>
            <span className="text-yellow-500">
              <BsFillStarFill />
            </span>
            {rating}
          </p>
        </div>
        <Link to={`/CourseDetails/${id}`}>
          <button
            className={`bg-slate-500 hover:bg-slate-600 w-full py-2 text-xl font-medium text-white rounded-lg duration-500`}
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
