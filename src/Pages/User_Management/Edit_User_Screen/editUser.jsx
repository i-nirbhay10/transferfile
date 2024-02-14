import React, { useState, useEffect } from "react";
import TopHeader from "../../../UI/TopHeader/TopHeader";
import { Form, Link, useLocation, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/userSlice";
import { Grid } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { getUserLogin } from "../features/userSlice";

const EditUser = ({ setActiveTab, setExpand }) => {
  setExpand("userManagement");
  setActiveTab("allUsers");
  const head = "Edit User";

  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location.state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(editData.username);
  const [email, setEmail] = useState(editData.email);
  const [phone, setPhone] = useState(editData.phone);
  const [userId, setUserId] = useState(editData.uid);
  const [photo, setPhoto] = useState();
  const [role, setRole] = useState(editData.role);
  const [password, setPassword] = useState();
  const [dept, setDept] = useState(editData.dept_id);
console.log(editData);
  useEffect(() => {
    //   setName(editData.username);
    //   setEmail(editData.email);
    //   setPhone(editData.phone);
    //   setUserId(editData.uid);
    // setPhoto(editData.photo)
    console.log(editData);
  }, [])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };
  const handleDeptChange = (event) => {
    setDept(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handlePhotoChange = (event) => {
    let img = event.target.files[0]
    setPhoto(img);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhotoRemove = () => {
    setPhoto(null);
  };
  const userData = useSelector((state) => state.userManagement.getUserLogin);
  useEffect(() => {
    dispatch(getUserLogin(localStorage.getItem('uid')))
  }, [dispatch])


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("uname", name);
    formData.append("email", email);
    if (password !== undefined) {
      formData.append("pass", password);
  }
    formData.append("contact", phone);
    formData.append("role", role);
    formData.append("uid", userId);
    formData.append("pic_url", photo);
    formData.append("dept_id", dept);
    console.log(photo + 'okok');
    setLoading(true);
    await dispatch(updateUser({ formData, userId }));
    setLoading(false);
    // navigate("/home/allUsers")
    // window.location.reload();
  };

  return (
    <div>
      {loading ? (
        <div className="fixed inset-0 bg-gray-700 opacity-80 flex justify-center items-center z-50">
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : null}
      <div>
        <TopHeader className="fixed" head={head} />
      </div>

      <div className="ml-80 mt-20 relative bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders w-[70vw]" style={{ marginTop: "120px" }}>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <label className="grid pr-6">
              User Name
              <input
                type="text"
                value={name}
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                onChange={handleNameChange}
                required
              />
            </label>
            <label className="grid pr-6">
              Email Address
              <input
                type="email"
                value={email}
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                onChange={handleEmailChange}
                required
              />
            </label>
            <label className="grid pr-6">
              Password
              <input
                type="tel"
                value={password}
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                placeholder="****"
                onChange={handlePasswordChange}
              // required
              />
            </label>
            <label className="grid pr-6">
              User Role
              <select
                id="label"
                name="label"
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                value={role}
                onChange={handleRoleChange}
              >
                {
                  editData.roles.map((item) =>{
                   return <option value={item.role}>{item.role}</option>
                  })
                }
                {/* <option value="">Select a Role</option> */}
                
             
               
              </select>
            </label>
            <label className="grid pr-6">
              User Department
              <select
                id="label"
                name="label"
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                value={dept}
                onChange={handleDeptChange}
              >
                <option value="">Select a Dept</option>
                {editData.deptData
                  .map((item, index) => (
                    <option value={item.dept_id}>{item.department_name}</option>
                  ))
                }
              </select>
            </label>
            <label className="grid pr-6">
              Contact No
              <input
                type="tel"
                value={phone}
                className="outline-none rounded"
                style={{
                  height: "50px",
                  // width: "380px",
                  marginTop: '5px',
                  paddingLeft: "5px",
                }}
                onChange={handlePhoneChange}
                required
              />
            </label>

            <label className="grid pr-6">
              Photo
              {photo ? (null) : (

                <div className="flex items-center mb-2">
                  <div className="w-20 h-20 rounded overflow-hidden">
                    <img
                      src={editData.photo}
                      alt="User profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
              }
              {photo ? (
                <div className="flex items-center">
                  <div className="w-20 h-20 rounded overflow-hidden">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="User profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <button
                      style={{
                        color: "red",
                        paddingLeft: "5px",
                        cursor: "pointer",
                        backgroundColor: "white",
                        marginLeft: "20px",
                      }}
                      onClick={handlePhotoRemove}>
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  accept="image/*"
                  onChange={handlePhotoChange}
                  // required
                  className="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent w-[50vh]"
                  style={{}}
                />
              )}
            </label>
          </div>
          <div className="flex mt-10 gap-5 items-center">
            <button
              className="rounded bg-[#c93a0e] hover:bg-[#c91b0e]"
              style={{
                width: "130px",
                height: "55px",
                color: "white",
              }}
              type="submit"
              onSubmit={handleSubmit}>
              SAVE
            </button>
            <NavLink to="/home/allUsers">
              <button
                className="rounded bg-black hover:bg-gray-800"
                style={{
                  width: "130px",
                  height: "55px",
                  color: "white",
                }}>
                Back
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
