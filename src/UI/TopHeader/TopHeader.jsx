import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUserLogin } from "../../Pages/User_Management/features/userSlice";
import { useLocation, Link } from "react-router-dom";

const TopHeader = (props) => {
  const location = useLocation();

  const home = `/home` === location.pathname;

  const dispatch = useDispatch();
  const LuserData = useSelector((state) => state.userManagement.getUserLogin);

  useEffect(() => {
    dispatch(getUserLogin(localStorage.getItem("uid")));
  }, [dispatch]);

  const name = LuserData.uname;
  const role = LuserData.role;
  const pic = LuserData.pic_url;
  console.log(pic);

  // console.log(LuserData);
  return (
    <div
      className="w-full h-32 "
      // style={{ marginLeft: "17.3rem", zIndex: "9" }}
    >
      <div className="flex h-32 mx-5 items-center justify-between">
        <div className="text-2xl  font-semibold">
          {home ? (
            <div className="">
              <h1 className="text-3xl text-[#118615] ">Welcome to Jouls,</h1>
              <h1 className="text-sm text-[#707070] ">
                Your daily dashboard and information is here
              </h1>
            </div>
          ) : (
            <span className="">{props.head}</span>
          )}
        </div>
        <div className="py-2 px-4  rounded-xl border-2  border-[#118615] ">
          <Link
            to="/home/Profile"
            className="flex items-center justify-evenly cursor-pointer"
          >
            <img
              className="h-11 w-11 mr-3 rounded-full"
              src={
                pic === "undefined" || !pic
                  ? "https://placekitten.com/100/100"
                  : pic
              }
              alt="profile"
            />
            <div>
              <div className="text-xl text-[#118615] font-bold">
                System Admin
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

{
  /* <div className="text-sm font-semibold">Develpoer</div> */
}
{
  /* <div className="text-lg font-bold">{name}</div>
              <div className="text-sm font-semibold">{role}</div> */
}
// <img
//   className="h-28"
//   src="/images/logoj.png"
//   alt="logo"
//   srcSet=""
// />
