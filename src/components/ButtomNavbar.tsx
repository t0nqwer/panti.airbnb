import { BiHomeAlt, BiCommentAdd } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

const ButtomNavbar = () => {
  return (
    <div className=" sm:hidden block fixed bottom-0 z-[100]   bg-background-harder w-full">
      <div className="flex justify-around px-10 py-2 ">
        <BiHomeAlt className="m-2 text-xl text-text-normal" />
        <GrGroup className="m-2 text-xl text-text-normal" />
        <BiCommentAdd className="m-2 text-xl text-text-normal" />
        <LuMail className="m-2 text-xl text-text-normal" />
        <IoIosNotificationsOutline className="m-2 text-xl text-text-normal" />
      </div>
    </div>
  );
};

export default ButtomNavbar;
