import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInputs from "./TextInputs";
import CircleComponent from "./CircleComponent";

const New_login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputchange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  console.log(formData);

  const handleLoginClick = (e) => {
    e.preventDefault();

    console.log("login button clicked", formData);

    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="flex w-2/3 h-3/4 border border-[#CACACA] rounded-xl overflow-hidden ">
          <div className="w-1/2 relative overflow-hidden bg-[#C1E0C2]">
            <div className="absolute top-5 left-5 z-20 text-xl text-[#118615] font-bold">
              Welcome!
            </div>
            <div className="absolute flex flex-col justify-center items-center w-full h-full ">
              <div className="w-44 h-20 rounded-xl bg-white z-30">
                <img className="cover" src="/images/logoj.png" alt="logo" />
              </div>
              <h1 className="text-xs text-[#5E5E5E] mt-2">
                Energizing Greener Future
              </h1>
            </div>
            <div className="absolute top-0 bottom-0 flex -ml-28 items-center">
              <CircleComponent />
            </div>
            <div className="absolute h-full right-0 flex flex-col  justify-between -mr-24">
              <div className="-rotate-45 -mt-28 ">
                <CircleComponent mw={20} />
              </div>
              <div className="rotate-45 -mb-28">
                <CircleComponent />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-5 w-1/2   ">
            <div className="p-5 w-3/4  bg-white">
              <div className="flex justify-center items-center text-lg text-[#6B6A6A] font-bold w-full">
                <div className="w-full border-b border-[#CACACA]"></div>

                <span className="mx-5"> Login</span>
                <div className="w-full border-b border-[#CACACA]"></div>
              </div>
              <div className="w-auto ">
                <form onSubmit={handleLoginClick}>
                  <div className="my-8 ">
                    <div className="w-full mb-8 ">
                      <TextInputs
                        type={"text"}
                        title={"Username "}
                        name="username"
                        value={formData.username}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("username", value)
                        }
                      />
                    </div>
                    <div className="w-full">
                      <TextInputs
                        type={"password"}
                        title={"Password"}
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onInputChange={(value) =>
                          handleInputchange("password", value)
                        }
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[#118615] underline text-sm">
                        Forgot Password
                      </span>
                    </div>
                  </div>

                  <div className="md:flex items-center">
                    <div className="flex justify-center w-full">
                      <button
                        // onClick={handleLoginClick}
                        type="submit"
                        className="w-full p-1 bg-[#118615] text-xl text-white rounded-md "
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-sm text-center my-2 text-[#666666]">
                  Don’t have an account?
                  <Link
                    to={"/newregister"}
                    className="text-[#118615] underline "
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default New_login;
