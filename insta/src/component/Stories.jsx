import { IoAddOutline } from "react-icons/io5";
const Stories = () => {
  return (
    <div className="w-[84px] h-[84px] rounded-full bg-gray-800 border-3">
      <div className="w-full h-full grid items-center justify-center">
        <IoAddOutline className="text-7xl" />
      </div>
      <p className="text-center my-1.5">New</p>
    </div>
  );
};

export default Stories;
