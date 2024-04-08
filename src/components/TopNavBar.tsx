import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { resetSearch, updateSearch } from "../state/search/searchSlice";
import { multiFormatDateString } from "../utils/time";
import { HiMenu } from "react-icons/hi";
import { toggleMenu } from "../state/mobilemenu/mobileSlice";
const TopNavBar = () => {
  const [menuShow, setMenuShow] = useState<boolean>(false);
  const [searchFocus, setSearchFocus] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const search = useSelector((state: RootState) => state.search.value);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(resetSearch());
      return;
    }
    dispatch(updateSearch(e.target.value));
  };

  return (
    <div className="relative flex-col items-center justify-center mt-5 space-y-3 sm:flex-row sm:justify-between sm:h-20 sm:px-8 sm:mt-0 sm:flex ">
      <div className="absolute block top-3 sm:hidden left-5">
        <HiMenu
          className="text-3xl text-text-normal "
          onClick={() => dispatch(toggleMenu())}
        />
      </div>
      <div className="flex justify-center shrink-0">
        <img src="/logo.png" alt="logo" className="object-contain h-12 px-2" />
      </div>
      <div className="relative w-full ">
        <form className="relative w-5/6 mx-auto xl:w-2/3 ">
          <input
            type="search"
            placeholder="ค้นหาใน Pantip"
            className="w-full px-4 py-3 rounded-full bg-background-primary text-text-normal focus:outline-none focus:ring-2 focus:ring-background-harder "
            onChange={(e) => handleSearch(e)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <button className="absolute p-3 -translate-y-1/2 rounded-full right-1 top-1/2 bg-background-soft">
            <AiOutlineSearch />
          </button>
          {search.length > 0 && searchFocus && (
            <div className="absolute z-50 w-full mt-2 overflow-hidden overflow-y-auto rounded-md shadow-md h-96 bg-background-primary rounded-b-xl text-text-normal ">
              <ul className="">
                {search.map((item, index) => {
                  return (
                    <li
                      key={item.topic_id}
                      className="relative px-2 py-3 border-b cursor-pointer line-clamp-2 border-boxborder hover:bg-background-soft"
                    >
                      <p className=" pr-36">{item.title}</p>

                      <div className="absolute text-xs transform -translate-y-1/2 w-36 right-2 top-1/2 ">
                        <p className="line-clamp-1">{item.author.name}</p>
                        <p>{multiFormatDateString(item.created_time)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </form>
      </div>
      <div className="hidden shrink-0 lg:block">
        <ul className="flex gap-1 xl:gap-2 text-text-normal ">
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
      <div className="hidden sm:block shrink-0 lg:hidden">
        <HiMenu
          className="text-3xl text-text-normal "
          onClick={() => setMenuShow((prev) => !prev)}
        />
      </div>
      {menuShow && (
        <div className="absolute z-50 p-5 rounded-lg right-9 -bottom-40 bg-background-harder ">
          <ul className="flex flex-col text-text-normal">
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
      )}
    </div>
  );
};

export default TopNavBar;
