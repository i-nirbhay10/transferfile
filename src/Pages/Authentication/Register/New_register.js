import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextInputs from "./TextInputs";
import CircleComponent from "./CircleComponent";

const New_register = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    contact: "",
    email: "",
    department: "",
    role: "",
    password: "",
    confirm_password: "",
  });

  const [role, setRole] = useState([
    { role: "Engineer", section: "Engineering Department" },
    { role: "Salesperson", section: "Sales Department" },
    { role: "Administrator", section: "Administration Department" },
    { role: "HR Specialist", section: "HR Department" },
    { role: "Accountant", section: "Accounting Department" },
  ]);

  const [department, setDepartment] = useState([
    { depart: "IT", section: "IT Management" },
    { depart: "Sale", section: "Sale Management" },
    { depart: "Admin", section: "Admin Management" },
    { depart: "HR", section: "HR Management" },
    { depart: "Accounts", section: "Accounts Management" },
  ]);

  const handleInputchange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  console.log(formData);

  const handleSignupClick = () => {
    // Handle logic for adding buyer information

    console.log(" button clicked", formData);

    setFormData({
      name: "",
      username: "",
      contact: "",
      email: "",
      department: "",
      role: "",
      password: "",
      confirm_password: "",
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-screen ">
        <div className="flex w-full xl:w-2/3 h-3/4 border border-[#CACACA] rounded-xl overflow-hidden ">
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
          {/* <--------------form/------------------------> */}
          <div className="flex justify-center items-center px-5 w-1/2   ">
            <div className="px-5">
              <div className="flex items-center justify-center mx-16">
                <div className="w-full border-b border-[#CACACA]"></div>
                <span className="text-lg text-[#6B6A6A] mx-5 font-bold">
                  Signup
                </span>
                <div className="w-full border-b border-[#CACACA]"></div>
              </div>

              <div className="w-auto ">
                <div className="my-8 ">
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"text"}
                        title={"Name"}
                        name="name"
                        value={formData.name}
                        placeholder="Enter your name"
                        onInputChange={(value) =>
                          handleInputchange("name", value)
                        }
                      />
                    </div>
                    <div className="w-full ">
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
                  </div>
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"text"}
                        title={"Contact"}
                        name="contact"
                        value={formData.contact}
                        placeholder="Enter your contact"
                        onInputChange={(value) =>
                          handleInputchange("contact", value)
                        }
                      />
                    </div>
                    <div className="w-full ">
                      <TextInputs
                        type={"text"}
                        title={"Email"}
                        name="email"
                        value={formData.email}
                        placeholder="Enter your username"
                        onInputChange={(value) =>
                          handleInputchange("email", value)
                        }
                      />
                    </div>
                  </div>
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="relative w-full mb-8 md:mb-0">
                      <span className="px-2 rounded-xl bg-white text-sm text-[#118615] align-center absolute  -top-3 left-4">
                        Department
                      </span>
                      <select
                        value={formData.department}
                        className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] text-[#6A6A6A] "
                        onChange={(e) =>
                          handleInputchange("department", e.target.value)
                        }
                      >
                        <option>Select Category</option>
                        {department.map((items, index) => (
                          <option key={index} value={items.depart}>
                            {items.section}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative w-full ">
                      <span className="px-2 rounded-xl bg-white text-sm text-[#118615] align-center absolute -top-3 left-4">
                        Role
                      </span>
                      <select
                        value={formData.role}
                        className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] text-[#6A6A6A]"
                        onChange={(e) =>
                          handleInputchange("role", e.target.value)
                        }
                      >
                        <option>Select Category</option>
                        {role.map((items, index) => (
                          <option key={index} value={items.role}>
                            {items.section}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="md:flex gap-5 my-8 md:my-8">
                    <div className="w-full mb-8 md:mb-0">
                      <TextInputs
                        type={"password"}
                        title={"Password"}
                        name="password"
                        value={formData.password}
                        placeholder="Enter your password"
                        onInputChange={(value) =>
                          handleInputchange("password", value)
                        }
                      />
                    </div>
                    <div className="w-full ">
                      <TextInputs
                        type={"password"}
                        title={"Confirm Password"}
                        name="confirm_password"
                        value={formData.confirm_password}
                        placeholder="Enter your confirm_password"
                        onInputChange={(value) =>
                          handleInputchange("confirm_password", value)
                        }
                      />
                    </div>
                  </div>
                  {/* <div className="w-full mb-8 ">
                    <select
                      value={formData.department}
                      className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] "
                      onChange={(e) =>
                        handleInputchange("department", e.target.value)
                      }
                    >
                      <option>Select Category</option>
                      {department.map((items, index) => (
                        <option key={index} value={items.depart}>
                          {items.section}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  {/* <div className="w-full">
                    <TextInputs
                      type={"password"}
                      title={"Password"}
                      name="password"
                      value={formData.value}
                      placeholder="Password"
                      onInputChange={(value) =>
                        handleInputchange("password", value)
                      }
                    />
                  </div> */}
                </div>

                <div className="md:flex justify-center items-center">
                  <div className="flex justify-center w-2/3">
                    <button
                      onClick={handleSignupClick}
                      className="w-full p-1 bg-[#118615] text-xl text-white rounded-md "
                    >
                      Sign up
                    </button>
                  </div>
                </div>
                <div className="text-sm text-center my-2 text-[#666666]">
                  Already have an account?
                  <Link to={"/newlogin"} className="text-[#118615] underline ">
                    Login
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

export default New_register;
