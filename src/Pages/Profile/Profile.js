import React, { useState, useEffect } from "react";
import { getUserLogin } from "../User_Management/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

const Profile = () => {
  const [show, setShow] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [usernameEdit, setusernameEdit] = useState(false);
  const [nameEdit, setnameEdit] = useState(false);
  const [contactEdit, setcontactEdit] = useState(false);
  const [emailEdit, setemailEdit] = useState(false);
  const [departEdit, setdepartEdit] = useState(false);
  const [selectdepart, setselectdepart] = useState("");
  const [department, setDepartment] = useState([
    { depart: "IT", section: "IT Management" },
    { depart: "Sale", section: "Sale Management" },
    { depart: "Admin", section: "Admin Management" },
    { depart: "HR", section: "HR Management" },
    { depart: "Accounts", section: "Accounts Management" },
  ]);
  const [roleEdit, setroleEdit] = useState(false);
  const [selectrole, setselectrole] = useState("");
  const [role, setRole] = useState([
    { role: "IT", section: "IT Management" },
    { role: "Sale", section: "Sale Management" },
    { role: "Admin", section: "Admin Management" },
    { role: "HR", section: "HR Management" },
    { role: "Accounts", section: "Accounts Management" },
  ]);

  const [editedUserData, setEditedUserData] = useState({
    name: "",
    uname: "",
    contact: "",
    email: "",
    department: "",
    role: "",
  });

  const dispatch = useDispatch();

  const logdUserData = useSelector(
    (state) => state.userManagement.getUserLogin
  );

  useEffect(() => {
    dispatch(getUserLogin(localStorage.getItem("uid")));
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditable(true);
    setEditedUserData(logdUserData); // Initialize edited data with current data
    console.log(editedUserData);
  };

  const handleSaveClick = () => {
    setIsEditable(false);

    console.log(editedUserData, selectdepart, selectrole);
    // Implement logic to update user data on the server
    // You can use `editedUserData` to send updated data to the server
  };

  const handleModalClose = () => {
    setShow(false);
  };

  const handleInputChange = (fieldName, value) => {
    console.log(editedUserData);
    setEditedUserData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="w-full bg-green-50 h-screen ml-14">
      <div className="">
        <div className="m-4 px-10">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold mb-4">User Profiles</h1>
            <img
              onClick={() => setShow(true)}
              className="rounded-full p-1  h-20 w-20 border-2 border-green-400 cursor-pointer"
              src={
                logdUserData.pic_url === "undefined" || !logdUserData.pic_url
                  ? "https://placekitten.com/100/100"
                  : logdUserData.pic_url
              }
              alt="User"
            />
          </div>

          {/* <div className=" "> */}
          <div>
            <div className="flex mb-4 gap-8 w-full">
              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>Name :</div>

                  {!nameEdit ? (
                    <>{logdUserData.name}</>
                  ) : (
                    <div>
                      <input
                        className="appearance-none bg-transparent border-b-2 border-blue-400 outline-none  "
                        placeholder="Enter your name"
                        type="text"
                        value={editedUserData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (nameEdit === false) {
                      setnameEdit(true);
                    } else {
                      setnameEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>

              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>User name :</div>

                  {!usernameEdit ? (
                    <>{logdUserData.uname}</>
                  ) : (
                    <div>
                      <input
                        className="appearance-none bg-transparent border-b-2 border-blue-400 outline-none  "
                        placeholder="Enter username"
                        type="text"
                        value={editedUserData.uname}
                        onChange={(e) =>
                          handleInputChange("uname", e.target.value)
                        }
                        required
                      />
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (usernameEdit === false) {
                      setusernameEdit(true);
                    } else {
                      setusernameEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className="flex mb-4 gap-8 w-full">
              {/* <div className="w-1/2">contact : {logdUserData.contact} </div> */}
              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>Contact :</div>

                  {!contactEdit ? (
                    <>{logdUserData.contact}</>
                  ) : (
                    <div>
                      <input
                        className="appearance-none bg-transparent border-b-2 border-blue-400 outline-none  "
                        placeholder="Enter contact number"
                        type="text"
                        value={editedUserData.contact}
                        onChange={(e) =>
                          handleInputChange("contact", e.target.value)
                        }
                        required
                      />
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (contactEdit === false) {
                      setcontactEdit(true);
                    } else {
                      setcontactEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>
              {/* <div>Email : {logdUserData.email}</div> */}
              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>Email :</div>

                  {!emailEdit ? (
                    <>{logdUserData.email}</>
                  ) : (
                    <div>
                      <input
                        className="appearance-none bg-transparent border-b-2 border-blue-400 outline-none  "
                        typlaceholder="Enter email"
                        type="email"
                        value={editedUserData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (emailEdit === false) {
                      setemailEdit(true);
                    } else {
                      setemailEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className="flex mb-4 gap-8 w-full">
              {/* <div className="w-1/2">
                    Department : {logdUserData.designation}
                  </div> */}
              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>Department :</div>

                  {!departEdit ? (
                    <>{logdUserData.department}</>
                  ) : (
                    <div>
                      <select
                        className="px-1 w-auto py-1 drop-shadow-md rounded-md"
                        value={selectdepart}
                        onChange={(e) => setselectdepart(e.target.value)}
                      >
                        <option>select Department</option>
                        {department.map((items) => {
                          return (
                            <option value={items.depart}>
                              {items.section}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (departEdit === false) {
                      setdepartEdit(true);
                    } else {
                      setdepartEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>

              {/* <div>Role : {logdUserData.role}</div> */}
              <div className="flex justify-between w-1/2 p-3">
                <div className="flex gap-3">
                  <div>Role :</div>

                  {!roleEdit ? (
                    <>{logdUserData.role}</>
                  ) : (
                    <div>
                      <select
                        className="px-1 w-auto py-1 drop-shadow-md rounded-md  "
                        value={selectrole}
                        onChange={(e) => setselectrole(e.target.value)}
                      >
                        <option>select Role</option>
                        {role.map((items) => {
                          return (
                            <option value={items.role}>{items.section}</option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                </div>
                <button
                  className="mr-8"
                  onClick={() => {
                    setEditedUserData(logdUserData);
                    if (roleEdit === false) {
                      setroleEdit(true);
                    } else {
                      setroleEdit(false);
                    }
                  }}
                >
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className="">
              <button
                className="py-2 px-5 text-white rounded bg-blue-500 hover:bg-blue-400"
                onClick={handleSaveClick}
              >
                Save
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>

        {show && (
          <div
            onClick={handleModalClose}
            className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50"
          >
            {/* <div className="bg-white p-8 rounded-lg"> */}
            <img
              className="rounded-full p-1 h-96 w-96 border-2 border-green-400 "
              src={
                logdUserData.pic_url === "undefined" || !logdUserData.pic_url
                  ? "https://placekitten.com/100/100"
                  : logdUserData.pic_url
              }
              alt="User"
            />
            {/* <button
            onClick={handleModalClose}
            className="bg-blue-500 text-white px-2 py-1 rounded-md mt-4"
          >
            Close
          </button> */}
            {/* </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

// import React, { useState, useEffect } from "react";
// import { getUserLogin } from "../User_Management/features/userSlice";
// import { useSelector, useDispatch } from "react-redux";

// const Profile = () => {
//   const [show, setShow] = useState(false);
//   const [isEditable, setIsEditable] = useState(false);
//   const [editedUserData, setEditedUserData] = useState({
//     name: "",
//     uname: "",
//     contact: "",
//     email: "",
//     designation: "",
//     role: "",
//   });

//   const dispatch = useDispatch();

//   const logdUserData = useSelector(
//     (state) => state.userManagement.getUserLogin
//   );

//   useEffect(() => {
//     dispatch(getUserLogin(localStorage.getItem("uid")));
//   }, [dispatch]);

//   const handleEditClick = () => {
//     setIsEditable(true);
//     setEditedUserData(logdUserData); // Initialize edited data with current data
//     console.log(editedUserData);
//   };

//   const handleSaveClick = () => {
//     setIsEditable(false);

//     console.log(editedUserData);
//     // Implement logic to update user data on the server
//     // You can use `editedUserData` to send updated data to the server
//   };

//   const handleModalClose = () => {
//     setShow(false);
//   };

//   const handleInputChange = (fieldName, value) => {
//     console.log(editedUserData);
//     setEditedUserData((prevData) => ({
//       ...prevData,
//       [fieldName]: value,
//     }));
//   };

//   return (
//     <div className="w-full bg-green-50 h-screen">
//       <div className="mt-4 ml-72 relative">
//         <div className="m-4 px-10">
//           <div className="flex justify-between mx-4">
//             <h1 className="text-4xl font-bold mb-4">User Profiles</h1>
//             <img
//               onClick={() => setShow(true)}
//               className="rounded-full p-1  h-20 w-20 border-2 border-green-400 cursor-pointer"
//               src={
//                 logdUserData.pic_url === "undefined" || !logdUserData.pic_url
//                   ? "https://placekitten.com/100/100"
//                   : logdUserData.pic_url
//               }
//               alt="User"
//             />
//           </div>

//           <div className="m-4">
//             {!isEditable ? (
//               <div>
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">Name : {logdUserData.name} </div>
//                   <div>User name : {logdUserData.uname}</div>
//                 </div>
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">contact : {logdUserData.contact} </div>
//                   <div>Email : {logdUserData.email}</div>
//                 </div>
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">
//                     Designation : {logdUserData.designation}{" "}
//                   </div>
//                   <div>Role : {logdUserData.role}</div>
//                 </div>
//                 <div className="w-full mt-10">
//                   <button
//                     className="py-2 px-5 bg-blue-500 text-white input rounded hover:bg-blue-400"
//                     onClick={handleEditClick}
//                   >
//                     Edit
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="">
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">
//                     <label className="input">
//                       Name :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter your name"
//                         type="text"
//                         value={editedUserData.name}
//                         onChange={(e) =>
//                           handleInputChange("name", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>
//                   <div>
//                     <label className="input">
//                       User name :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter username"
//                         type="text"
//                         value={editedUserData.uname}
//                         onChange={(e) =>
//                           handleInputChange("uname", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">
//                     <label className="input">
//                       contact :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter contact number"
//                         type="text"
//                         value={editedUserData.contact}
//                         onChange={(e) =>
//                           handleInputChange("contact", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>
//                   <div>
//                     <label className="input">
//                       Email :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter email"
//                         type="email"
//                         value={editedUserData.email}
//                         onChange={(e) =>
//                           handleInputChange("email", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex mb-4 gap-8 w-full">
//                   <div className="w-1/2">
//                     <label className="input">
//                       Designation :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter designation"
//                         type="text"
//                         value={editedUserData.designation}
//                         onChange={(e) =>
//                           handleInputChange("designation", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>

//                   <div>
//                     <label className="input">
//                       Role :
//                       <input
//                         className="input_edit"
//                         placeholder="Enter role"
//                         type="text"
//                         value={editedUserData.role}
//                         onChange={(e) =>
//                           handleInputChange("role", e.target.value)
//                         }
//                         required
//                       />
//                     </label>
//                   </div>
//                 </div>
//                 <div className="flex mt-10 gap-8 w-full">
//                   <button
//                     className="py-2 px-5 bg-blue-500 text-white rounded input hover:bg-blue-400"
//                     onClick={handleSaveClick}
//                   >
//                     Save
//                   </button>

//                   <button
//                     className="py-2 px-5 bg-blue-500 text-white rounded input hover:bg-blue-400"
//                     onClick={() => setIsEditable(false)}
//                   >
//                     Back
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {show && (
//           <div
//             onClick={handleModalClose}
//             className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50"
//           >
//             {/* <div className="bg-white p-8 rounded-lg"> */}
//             <img
//               className="rounded-full p-1 h-96 w-96 border-2 border-green-400 "
//               src={
//                 logdUserData.pic_url === "undefined" || !logdUserData.pic_url
//                   ? "https://placekitten.com/100/100"
//                   : logdUserData.pic_url
//               }
//               // src={
//               //   logdUserData.pic_url
//               //     ? logdUserData.pic_url
//               //     : "https://placekitten.com/100/100"
//               // }
//               alt="User"
//             />
//             {/* <button
//             onClick={handleModalClose}
//             className="bg-blue-500 text-white px-2 py-1 rounded-md mt-4"
//           >
//             Close
//           </button> */}
//             {/* </div> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;
