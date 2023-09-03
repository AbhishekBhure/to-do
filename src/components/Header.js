import { Link } from "react-router-dom";

export default function Header({ heading, paragraph, linkName, linkUrl }) {
  return (
    <div className="md:pt-[100px] bg-white dark:bg-black">
      <div className="flex justify-center items-center">
        <img src="" alt="" className="h-14 w-14" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 dark:text-white">
        {paragraph}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {" "}
          {linkName}{" "}
        </Link>
      </p>
    </div>
  );
}
