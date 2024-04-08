import React from "react";
import { FooterMenu, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="w-full px-20 pt-16 pb-6 mt-10 bg-background-harder">
      <div className="flex justify-between w-2/3">
        {FooterMenu.map((menu, i1) => {
          return (
            <div key={i1} className="">
              <div className="flex flex-col space-y-2">
                {menu.map((item, i2) => {
                  return (
                    <a
                      key={`${i1}-${i2}`}
                      href={item.link}
                      className="text-sm text-text-light text-text-normal hover:text-text-normal hover:underline "
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mt-5 border-t ">
        <div className="py-5 text-sm text-text-light text-text-normal">
          © 2024 Internet Marketing co., ltd
        </div>
        <div className="flex space-x-2">
          {socialMedia.map((item, i) => {
            return (
              <a key={i} href={item.link} className="text-lg text-white">
                <item.icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
