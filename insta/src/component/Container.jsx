import { IoMdGrid } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { RiContactsBook2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Container = () => {
  return (
    <div className="flex items-center justify-center gap-16 text-3xl pt-12 mb-2 ">
      <Link>
        <IoMdGrid />
      </Link>
      <Link>
        <FaBookmark />
      </Link>
      <Link>
        <RiContactsBook2Line />
      </Link>
    </div>
  );
};

export default Container;
