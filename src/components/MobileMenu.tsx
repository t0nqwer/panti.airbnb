import { FooterMenu } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { toggleMenu } from "../state/mobilemenu/mobileSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MobileMenu = () => {
  const dispatch = useDispatch<AppDispatch>();
  const mobileMenu = useSelector((state: RootState) => state.mobileMenu.isOpen);
  if (!mobileMenu) return null;
  return (
    <div
      className="z-[2000] w-full h-full fixed bg-background-body py-10"
      onClick={() => dispatch(toggleMenu())}
    >
      <div
        className="fixed top-4 right-4 "
        onClick={() => dispatch(toggleMenu())}
      >
        <IoIosCloseCircleOutline
          className="text-5xl text-text-normal"
          onClick={() => dispatch(toggleMenu())}
        />
      </div>
      <div className="">
        {FooterMenu.map((item, i1) => (
          <div
            key={i1}
            className="flex flex-col items-center justify-center py-3 space-y-5 border-b border-background-soft"
          >
            {item.map((item, i2) => (
              <a
                key={`${i1}-${i2}`}
                href={item.link}
                className="text-base text-text-light text-text-normal hover:text-text-normal hover:underline"
              >
                {item.title}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
