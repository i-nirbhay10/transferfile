import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [selectrole, setrole] = useState("");
  const [role, setRole] = useState([
    { role: "IT", section: "IT Management" },
    { role: "Sale", section: "Sale Management" },
    { role: "Admin", section: "Admin Management" },
    { role: "HR", section: "HR Management" },
    { role: "Accounts", section: "Accounts Management" },
  ]);
  const [selectdepart, setselectdepart] = useState("");
  const [department, setDepartment] = useState([
    { depart: "IT", section: "IT Management" },
    { depart: "Sale", section: "Sale Management" },
    { depart: "Admin", section: "Admin Management" },
    { depart: "HR", section: "HR Management" },
    { depart: "Accounts", section: "Accounts Management" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updateData = {
      name,
      username,
      contact,
      email,
      selectdepart,
      password,
      selectrole,
      confirmpassword,
    };

    console.log(updateData);

    const jsonData = JSON.stringify(updateData);
    console.log(jsonData);

    axios
      .post(`http://localhost:5000/user/register`, {
        name,
        username,
        contact,
        email,
        selectdepart,
        password,
        selectrole,
        confirmpassword,
      })
      .then((response) => {
        console.log(response);
      });

    // axios
    //   .post(`https://tssapis.devcorps.in/user/register`, {
    //     username,
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setUsername("");
    //     setEmail("");
    //     setPassword("");
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.error("There was an error:", error);
    //   });
  };

  return (
    <div className="login">
      <div className="login_box">
        <img className="logo" src="/images/logoj.png" alt="" />
        <div className="login_header">
          <h1 className="headl">Sign Up</h1>
          <div className="signup">
            Create your account here. Already have an account?{" "}
            <a href="/">Login</a>
          </div>
        </div>
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            <div className="flex mb-4 gap-8">
              <div>
                <label className="input">
                  Name
                  <input
                    className="input_edit"
                    placeholder="Enter your name"
                    type="text"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label className="input">
                  Username
                  <input
                    className="input_edit"
                    placeholder="Enter your username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>

            <div className="flex mb-4 gap-8">
              <div>
                <label className="input">
                  Contact
                  <input
                    className="input_edit"
                    placeholder="Enter your contact"
                    type="number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label className="input">
                  Email Address
                  <input
                    className="input_edit"
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>

            {/*--------------------------------- dropdown-------------------------------- */}
            <div className="flex mb-4 gap-8">
              <div>
                <label className="input">
                  Department
                  <select
                    className="px-3 w-96 py-2 drop-shadow-md rounded-md mt-1 "
                    value={selectdepart}
                    onChange={(e) => setselectdepart(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {department.map((item, Index) => (
                      <option key={Index} value={item.depart}>
                        {item.section}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label className="input">
                  Role
                  <select
                    className="px-3 w-96 py-2 drop-shadow-md rounded-md mt-1 "
                    value={selectrole}
                    onChange={(e) => setrole(e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {role.map((item, Index) => (
                      <option key={Index} value={item.role}>
                        {item.section}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/*--------------------------------- dropdown-------------------------------- */}

            <div className="flex mb-4 gap-8">
              <div>
                <label className="input">
                  Password
                  <input
                    className="input_edit"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div>
                <label className="input">
                  Confirm Password
                  <input
                    className="input_edit"
                    placeholder="Enter your confirm password"
                    type="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="submit">
              <button
                onClick={handleSubmit}
                className="login_button"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
