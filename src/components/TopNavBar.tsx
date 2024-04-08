// import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";

const TopNavBar = () => {
  // const [activeSearch, setActiveSearch] = useState([]);

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="flex items-center justify-between h-20 px-8 ">
      {/* <div>
        <h1 className="text-3xl font-bold ">menuactive</h1>
      </div> */}
      <div className=" shrink-0">
        <img src="/logo.png" alt="logo" className="object-contain h-12 px-2" />
      </div>
      <div className="relative w-full ">
        <form className="relative w-2/3 mx-auto ">
          <input
            type="search"
            placeholder="Type Here"
            className="w-full px-4 py-3 rounded-full bg-background-primary"
            // onChange={(e) => handleSearch(e)}
          />
          <button className="absolute p-3 -translate-y-1/2 rounded-full right-1 top-1/2 bg-background-soft">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      <div className=" shrink-0">
        <ul className="flex gap-2 text-text-normal ">
          <li className=" navlist">
            <BiCommentAdd className="text-xl -scale-x-100" />
            ตั้งกระทู้
          </li>
          <li className=" navlist">
            <GrGroup className="text-xl " />
            คอมมูนืตี้
          </li>
          <li className=" navlist">เข้าสู่ระบบ/สมัครสมาชิก</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavBar;
