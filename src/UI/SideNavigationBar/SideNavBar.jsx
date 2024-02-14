import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import MenuIcon from "@mui/icons-material/Menu";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import axios from "axios";
import cookie from "js-cookie";
import {
  HelpCenterOutlined,
  LocalShippingOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";

function SideNavBar({ expand, setExpand, activeTab, setActiveTab }) {
  const activeMenu = true;
  const [subMenu, setSubMenu] = useState(false);

  const [showMenu, setshowMenu] = useState(false);
  console.log(activeTab);
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.clear();
      navigate("/");
      window.location.reload();
      console.log("Logged Out sucessfully");
    } catch (error) {
      console.log(error);
      console.log("Not submitting data");
    }
  };

  return (
    <>
      {!showMenu && (
        <div className="flex w-80 items-center absolute h-32 justify-between px-2 bg-white z-20">
          <div className="" onClick={() => setshowMenu(true)}>
            <MenuIcon color="success" sx={{ fontSize: 45 }} />
          </div>
          <div>
            <div className="flex px-2 py-1 bg-white shadow-lg w-44 mt-3 overflow-hidden rounded-xl items-center justify-center">
              <img
                className="object-cover h-16 w-40"
                src="/images/logoj.png"
                alt="logo"
                srcSet=""
              />
            </div>

            <p className="flex text-xs mt-3 justify-center">
              Energizing Greener Future
            </p>
          </div>
        </div>
      )}

      <div
        className={`${
          showMenu
            ? "translate-x-0 absolute md:static duration-300 w-80 shadow-xl bg-[#fff] z-20"
            : "-translate-x-96 absolute "
        } `}
      >
        <div className="flex items-center h-32 justify-between px-2 z-20 ">
          <div className="" onClick={() => setshowMenu(false)}>
            <MenuIcon color="success" sx={{ fontSize: 45 }} />
          </div>
          <div>
            <div className="flex px-2 py-1 bg-white shadow-lg w-44 mt-3 overflow-hidden rounded-xl items-center justify-center">
              <img
                className="object-cover h-16 w-40"
                src="/images/logoj.png"
                alt="logo"
                srcSet=""
              />
            </div>

            <p className="flex text-xs mt-3 justify-center">
              Energizing Greener Future
            </p>
          </div>
        </div>
        <div className=" px-3">
          {activeMenu && (
            <>
              {/* <div className=" font-semibold mt-14">MENU</div> */}
              {/* Dashboard */}
              <div className="mt-20 w-fit text-gray-500 text-lg">
                <NavLink
                  style={{
                    color: activeTab === "dashboard" ? "#fff" : "#6B6A6A",
                    fontWeight: activeTab === "dashboard" ? "bold" : "inherit",
                    backgroundColor:
                      activeTab === "dashboard" ? "green" : "inherit",
                    padding: activeTab === "dashboard" ? 10 : "inherit",
                    borderRadius: 20,
                    width: 200,
                  }}
                  activeclassname="active"
                  to="/home"
                  className="flex items-center"
                  onClick={() => {
                    setActiveTab("dashboard");
                    setExpand("dashboard");
                  }}
                >
                  <SpeedIcon style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1" onClick={() => setshowMenu(false)}>
                    Dashboard
                  </span>
                </NavLink>
              </div>
              {/* User Management */}
              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  to="/home/allUsers"
                  style={{
                    color: expand === "userManagement" ? "#171616" : "#545e6f",
                    fontWeight:
                      expand === "userManagement" ? "bold" : "inherit",
                  }}
                  onClick={() => {
                    if (expand === "userManagement") {
                      setExpand(null); // close if already open
                    } else {
                      setExpand("userManagement"); // open if closed
                    }
                  }}
                  activeclassname="active"
                  className="flex items-center"
                >
                  <PersonOutlineOutlinedIcon
                    style={{ transform: "scale(0.65)" }}
                  />
                  <span className="pl-1" onClick={() => setshowMenu(false)}>
                    User Management
                  </span>
                  <div
                    style={{
                      transform: "scale(0.65)",
                      position: "relative",
                      left: "92px",
                    }}
                  >
                    {expand === "userManagement" ? (
                      <RemoveIcon />
                    ) : (
                      <AddOutlinedIcon />
                    )}
                  </div>
                </NavLink>

                {expand === "userManagement" && (
                  <>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color: activeTab === "allUsers" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "allUsers" ? "bold" : "inherit",
                        }}
                        to="/home/allUsers"
                        onClick={() => {
                          setActiveTab("allUsers");
                          setExpand("userManagement");
                        }}
                      >
                        All Users
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "suspendUsers" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "suspendUsers" ? "bold" : "inherit",
                        }}
                        to="/home/suspendUsers"
                        onClick={() => {
                          setActiveTab("suspendUsers");
                          setExpand("userManagement");
                        }}
                      >
                        Suspend Users
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "department" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "department" ? "bold" : "inherit",
                        }}
                        to="/home/department"
                        onClick={() => {
                          setActiveTab("department");
                          setExpand("userManagement");
                        }}
                      >
                        Department
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "permission" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "permission" ? "bold" : "inherit",
                        }}
                        activeclassname="active"
                        to="/home/permission"
                        className="flex items-center"
                        onClick={() => {
                          setActiveTab("permission");
                          setExpand("userManagement");
                        }}
                      >
                        {/* <TurnedInNotOutlinedIcon style={{ transform: "scale(0.65)" }} /> */}
                        Permission and Role
                      </NavLink>
                    </div>
                  </>
                )}
              </div>
              {/* Customer Relationship */}
              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  style={{
                    color:
                      activeTab === "customerRelationship"
                        ? "#171616"
                        : "#545e6f",
                    fontWeight:
                      activeTab === "customerRelationship" ? "bold" : "inherit",
                  }}
                  activeclassname="active"
                  to="/home/customerRelationship"
                  className="flex items-center"
                  onClick={() => {
                    setActiveTab("customerRelationship");
                    setExpand("customerRelationship");
                  }}
                >
                  <PeopleAltOutlinedIcon style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1">Customer Relationship</span>
                </NavLink>
              </div>

              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  style={{
                    color:
                      activeTab === "transactionHistory"
                        ? "#171616"
                        : "#545e6f",
                    fontWeight:
                      activeTab === "transactionHistory" ? "bold" : "inherit",
                  }}
                  activeclassname="active"
                  to="/home/transactionHistory"
                  className="flex items-center"
                  onClick={() => {
                    setActiveTab("transactionHistory");
                  }}
                >
                  <LocalShippingOutlined style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1">Order Management</span>
                </NavLink>
              </div>

              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  style={{
                    color: activeTab === "helpDesk" ? "#171616" : "#545e6f",
                    fontWeight: activeTab === "helpDesk" ? "bold" : "inherit",
                  }}
                  activeclassname="active"
                  to="/home/helpDesk"
                  className="flex items-center"
                  onClick={() => {
                    setActiveTab("helpDesk");
                  }}
                >
                  <SupportAgentOutlined style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1">Support</span>
                </NavLink>
              </div>

              {/* Content Management */}
              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  to="/home/header"
                  style={{
                    color:
                      expand === "contentManagement" ? "#171616" : "#545e6f",
                    fontWeight:
                      expand === "contentManagement" ? "bold" : "inherit",
                  }}
                  onClick={() => {
                    if (expand === "contentManagement") {
                      setExpand(null); // close if already open
                    } else {
                      setExpand("contentManagement"); // open if closed
                    }
                  }}
                  activeclassname="active"
                  className="flex items-center"
                >
                  <InsertDriveFileOutlinedIcon
                    style={{ transform: "scale(0.65)" }}
                  />
                  <span className="pl-1">Content Management</span>
                  <div
                    style={{
                      transform: "scale(0.65)",
                      position: "relative",
                      left: "70px",
                    }}
                  >
                    {expand === "contentManagement" ? (
                      <RemoveIcon />
                    ) : (
                      <AddOutlinedIcon />
                    )}
                  </div>
                </NavLink>

                {expand === "contentManagement" && (
                  <>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color: activeTab === "header" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "header" ? "bold" : "inherit",
                        }}
                        to="/home/header"
                        onClick={() => {
                          setActiveTab("header");
                          setExpand("contentManagement");
                        }}
                      >
                        Header
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color: activeTab === "footer" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "footer" ? "bold" : "inherit",
                        }}
                        to="/home/footer"
                        onClick={() => {
                          setActiveTab("footer");
                          setExpand("contentManagement");
                        }}
                      >
                        Footer
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "catalogue" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "catalogue" ? "bold" : "inherit",
                        }}
                        to="/home/catalogue"
                        onClick={() => {
                          setActiveTab("catalogue");
                          setExpand("contentManagement");
                        }}
                      >
                        catalog
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color: activeTab === "pages" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "pages" ? "bold" : "inherit",
                        }}
                        to="/home/pages"
                        onClick={() => {
                          setActiveTab("pages");
                          setExpand("contentManagement");
                        }}
                      >
                        Pages
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "promocard" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "promocard" ? "bold" : "inherit",
                        }}
                        to="/home/promocard"
                        onClick={() => {
                          setActiveTab("promocard");
                          setExpand("contentManagement");
                        }}
                      >
                        Promo Card
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "generalConfig" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "generalConfig" ? "bold" : "inherit",
                        }}
                        to="/home/generalConfig"
                        onClick={() => {
                          setActiveTab("generalConfig");
                          setExpand("contentManagement");
                        }}
                      >
                        General Configurations
                      </NavLink>
                    </div>
                    {/* <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "blogs" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "blogs" ? "bold" : "inherit",
                      }}
                      to="/home/blogs"
                      onClick={() => {
                        setActiveTab("blogs");
                        setExpand("contentManagement");
                      }}>
                      Blogs
                    </NavLink>
                  </div> */}
                  </>
                )}
              </div>

              {/* <div className="mt-4 text-gray-500 text-xs">
              <NavLink
                style={{
                  color:
                    activeTab === "contentManagement" ? "#c93a0e" : "#545e6f",
                  fontWeight:
                    activeTab === "contentManagement" ? "bold" : "inherit",
                }}
                activeclassname="active"
                to="/home/contentManagement"
                className="flex items-center"
                onClick={() => {
                  setActiveTab("contentManagement");
                  setExpand("contentManagement");
                }}>
                <InsertDriveFileOutlinedIcon
                  style={{ transform: "scale(0.65)" }}
                />
                <span className="pl-1">Content Management</span>
              </NavLink>
            </div> */}

              {/* <div className="mt-4 text-gray-500 text-xs">
              <NavLink to="/home/projectList"
                style={{
                  color: expand === "showcaseManagement" ? "#c93a0e" : "#545e6f",
                  fontWeight:
                    expand === "showcaseManagement" ? "bold" : "inherit",
                }}
                onClick={() => {
                  // setExpand("showcaseManagement");
                  if (expand === "showcaseManagement") {
                    setExpand(null); // close if already open
                  } else {
                    setExpand("showcaseManagement"); // open if closed
                    console.log(expand);
                    console.log("clicked");
                  }
                }}
                activeclassname="active"
                className="flex items-center">
                <WidgetsOutlinedIcon style={{ transform: "scale(0.65)" }} />
                <span className="pl-1">Showcase Management</span>
                <div
                  style={{
                    transform: "scale(0.65)",
                    position: "relative",
                    left: "57px",
                  }}>
                  {expand === "showcaseManagement" ? (
                    <RemoveIcon />
                  ) : (
                    <AddOutlinedIcon />
                  )}
                </div>
              </NavLink>

              {expand === "showcaseManagement" && (
                <>
                  <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "projectList" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "projectList" ? "bold" : "inherit",
                      }}
                      to="/home/projectList"
                      onClick={() => {
                        setActiveTab("projectList");
                        setExpand("showcaseManagement");
                      }}>
                      Project List
                    </NavLink>
                  </div>
                  <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "crud" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "crud" ? "bold" : "inherit",
                      }}
                      to="/home/crud_category"
                      onClick={() => {
                        setActiveTab("crud");
                        setExpand("showcaseManagement");
                      }}>
                      Category
                    </NavLink>
                  </div>
                  <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "featuredProject" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "featuredProject" ? "bold" : "inherit",
                      }}
                      to="/home/bookings_psm"
                      onClick={() => {
                        setActiveTab("featuredProject");
                        setExpand("showcaseManagement");
                      }}>
                      Bookings
                    </NavLink>
                  </div>
                </>
              )}
            </div> */}

              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  to="/home/productList"
                  style={{
                    color: expand === "homeService" ? "#171616" : "#545e6f",

                    fontWeight: expand === "homeService" ? "bold" : "inherit",
                  }}
                  activeclassname="active"
                  className="flex items-center"
                  onClick={() => {
                    // setExpand("homeService");
                    if (expand === "homeService") {
                      setExpand(null); // close if already open
                    } else {
                      setExpand("homeService"); // open if closed
                    }
                  }}
                >
                  <HomeOutlinedIcon style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1">Inventory Management</span>
                  <div
                    style={{
                      transform: "scale(0.65)",
                      position: "relative",
                      left: "63px",
                    }}
                  >
                    {expand == "homeService" ? (
                      <RemoveIcon />
                    ) : (
                      <AddOutlinedIcon />
                    )}
                  </div>
                </NavLink>
                {expand == "homeService" && (
                  <>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "productList" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "productList" ? "bold" : "inherit",
                        }}
                        to="/home/productList"
                        onClick={() => {
                          setActiveTab("productList");
                          setExpand("homeService");
                        }}
                      >
                        Product List
                      </NavLink>
                    </div>
                    {/* <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "featuredProduct" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "featuredProduct" ? "bold" : "inherit",
                      }}
                      to="/home/featuredProduct"
                      onClick={() => {
                        setActiveTab("featuredProduct");
                        setExpand("homeService");
                      }}>
                      Featured Product and Services
                    </NavLink>
                  </div> */}
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "promotionManagement"
                              ? "black"
                              : "#545e6f",
                          fontWeight:
                            activeTab === "promotionManagement"
                              ? "bold"
                              : "inherit",
                        }}
                        to="/home/promotionManagement"
                        onClick={() => {
                          setActiveTab("promotionManagement");
                          setExpand("homeService");
                        }}
                      >
                        Offers and Deals
                      </NavLink>
                    </div>

                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "categoryList" ? "black" : "#545e6f",
                          fontWeight:
                            activeTab === "categoryList" ? "bold" : "inherit",
                        }}
                        to="/home/categoryList"
                        onClick={() => {
                          setActiveTab("categoryList");
                          setExpand("homeService");
                        }}
                      >
                        Category List
                      </NavLink>
                    </div>
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "productCategoryList"
                              ? "black"
                              : "#545e6f",
                          fontWeight:
                            activeTab === "productCategoryList"
                              ? "bold"
                              : "inherit",
                        }}
                        to="/home/productCategoryList"
                        onClick={() => {
                          setActiveTab("productCategoryList");
                          setExpand("homeService");
                        }}
                      >
                        Product Category List
                      </NavLink>
                    </div>
                    {/* <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "serviceCategoryList"
                            ? "black"
                            : "#545e6f",
                        fontWeight:
                          activeTab === "serviceCategoryList"
                            ? "bold"
                            : "inherit",
                      }}
                      to="/home/serviceCategoryList"
                      onClick={() => {
                        setActiveTab("serviceCategoryList");
                        setExpand("homeService");
                      }}>
                      Service Category List
                    </NavLink>
                  </div> */}
                    {/* <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color:
                          activeTab === "servicePackageList" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "servicePackageList" ? "bold" : "inherit",
                      }}
                      to="/home/servicePackageList"
                      onClick={() => {
                        setActiveTab("servicePackageList");
                        setExpand("homeService");
                      }}>
                      Service Package List
                    </NavLink>
                  </div> */}
                    <div className="ml-7 mt-2">
                      <NavLink
                        style={{
                          color:
                            activeTab === "reviewManagement"
                              ? "black"
                              : "#545e6f",
                          fontWeight:
                            activeTab === "reviewManagement"
                              ? "bold"
                              : "inherit",
                        }}
                        to="/home/reviewManagement"
                        onClick={() => {
                          setActiveTab("reviewManagement");
                          setExpand("homeService");
                        }}
                      >
                        Review Management
                      </NavLink>
                    </div>

                    {/* <div className="ml-7 mt-2">
                    <NavLink
                      style={{
                        color: activeTab === "bookings" ? "black" : "#545e6f",
                        fontWeight:
                          activeTab === "bookings" ? "bold" : "inherit",
                      }}
                      to="/home/bookings"
                      onClick={() => {
                        setActiveTab("bookings");
                        setExpand("homeService");
                      }}>
                      Bookings
                    </NavLink>
                  </div> */}
                  </>
                )}
              </div>

              {/* Settings */}
              <div className="mt-4 text-gray-500 text-xs">
                <NavLink
                  style={{
                    color: activeTab === "settings" ? "#171616" : "#545e6f",
                    fontWeight: activeTab === "settings" ? "bold" : "inherit",
                  }}
                  activeclassname="active"
                  to="/home/settings"
                  className="flex items-center"
                  onClick={() => {
                    setActiveTab("settings");
                    setExpand("settings");
                  }}
                >
                  <SettingsOutlinedIcon style={{ transform: "scale(0.65)" }} />
                  <span className="pl-1">Settings</span>
                </NavLink>
              </div>

              <div
                className="flex justify-center"
                style={{ marginTop: "150px" }}
              >
                <button onClick={handleLogout}>
                  <img src="/images/logout.png" alt="logout" srcSet="" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default SideNavBar;

// bg-[#DAF0CB]
