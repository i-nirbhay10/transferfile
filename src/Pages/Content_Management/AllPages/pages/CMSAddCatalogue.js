import React, { useState, useEffect } from "react";
import TopHeader from "../../../../UI/TopHeader/TopHeader";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../Assets/index";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Button, IconButton } from "@mui/material";
import { Grid } from "react-loader-spinner";
import {
  updatehome,
  getHomePage_cms,
  addBanner,
  DeleteBanner,
  getHomePage_cms_meta,
  updateHome_cms_meta,
  addCatalogue,
  getalllook,
} from "../../../User_Management/features/userSlice";
import { getUserLogin } from "../../../User_Management/features/userSlice";
import Table from "../../../../UI/CommonTable/Table";

const Action = ({
  banner_id,
  banner_title,
  button_title,
  button_link,
  banner_image_url,
  setLoading,
}) => {
  const dispatch = useDispatch();
  const handlePhotoChange = (event) => {
    let img = event.target.files[0];
    setPhoto(img);
  };
  const handlePhotoRemove = () => {
    setPhoto(null);
  };
  const style = {
    display: "grid",
    placeItems: "center",
    zIndex: "10",
  };
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState(banner_title);
  const [btn, setBtn] = useState(button_title);
  const [btnlink, setBtnlink] = useState(button_link);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const LuserData = useSelector((state) => state.userManagement.getUserLogin);
  useEffect(() => {
    dispatch(getUserLogin(localStorage.getItem("uid")));
  }, [dispatch]);
  const handleSubmit = async () => {
    console.log("clicked");

    // setLoading(true);
    // await dispatch(addCatalogue(formData));
    // setLoading(false);
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <div>
        {LuserData.role == "admin" || LuserData.role == "editor" ? (
          <Button variant="contained" onClick={handleOpen}>
            <img
              src={editIcon}
              className="w-6 me-2 "
              style={{ cursor: "pointer", filter: "brightness(6.5)" }}
              alt="edit"
            />
            Edit
          </Button>
        ) : (
          <div>Not Accessible</div>
        )}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style}
      >
        <div className="w-[60vw]">
          <div className="bg-[#EEEEEE] relative rounded-md drop-shadow-md mb-3 items-end borders mt-5 p-5 ">
            <label className="grid ">
              {photo ? (
                <div className="grid  gap-3 mb-3">
                  <div className="w-full h-52 rounded  overflow-hidden">
                    <img
                      src={URL.createObjectURL(photo)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <Button
                      color="error"
                      variant="contained"
                      size="small"
                      onClick={handlePhotoRemove}
                    >
                      Replace
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-full h-52 rounded  overflow-hidden">
                      <img
                        src={banner_image_url}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <input
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    // required
                    className="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent w-[50vh] mb-3"
                    style={{}}
                  />
                </>
              )}
            </label>
            <div className="grid gap-3 grid-cols-2">
              <label className="grid pr-6 ">
                Banner Title
                <input
                  type="add"
                  value={title}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className="grid pr-6 ">
                Button Title
                <input
                  type="add"
                  value={btn}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBtn(e.target.value)}
                />
              </label>
              <label className="grid pr-6 ">
                Button Link
                <input
                  type="link"
                  value={btnlink}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBtnlink(e.target.value)}
                />
              </label>
            </div>
            <div className="flex mt-5 gap-5 items-center">
              <button
                className="rounded bg-[#c93a0e] hover:bg-[#c91b0e]"
                style={{
                  width: "130px",
                  height: "55px",
                  color: "white",
                }}
                type="submit"
                onClick={handleSubmit}
              >
                SAVE
              </button>
              <NavLink to="/home/pages">
                <button
                  className="rounded bg-black hover:bg-gray-800"
                  style={{
                    width: "130px",
                    height: "55px",
                    color: "white",
                  }}
                >
                  Back
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const CMSAddCatalogue = ({ setActiveTab, setExpand }) => {
  const dispatch = useDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30rem",
    boxShadow: 24,
    borderRadius: "20px",
    backgroundColor: "white",
    padding: "20px 30px",
  };
  setActiveTab("catalogue");
  setExpand("contentManagement");
  const head = "Add Catalogue";
  const [open, setOpen] = React.useState(true);
  const [imagePreview, setImagePreview] = useState(null);
  const [imagePreview1, setImagePreview1] = useState(null);
  const [imagePreview2, setImagePreview2] = useState(null);
  const [offerImg1, setOfferImg1] = useState(null);
  const [offerImg2, setOfferImg2] = useState(null);

  const [gridImg1, setGridImg1] = useState(null);
  const [gridImg2, setGridImg2] = useState(null);
  const [gridImg3, setGridImg3] = useState(null);
  const [gridImg4, setGridImg4] = useState(null);

  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      await dispatch(getalllook());
    };
    getdata();
  }, [dispatch]);

  const getalllookdata = useSelector(
    (state) => state.userManagement.getalllook
  );
  // debugger;
  console.log(getalllookdata);

  const ProfilePhoto = ({ picUrl }) => {
    return (
      <div>
        <img
          className="w-12 h-12 rounded-full"
          style={{ objectFit: "cover" }}
          src={picUrl}
          alt="photo"
        />
      </div>
    );
  };
  const ActionLooks = ({}) => {
    // navigate krana hai
    return (
      <>
        <div className=" h-6 flex gap-3 cursor-pointer">
          <img src={editIcon} onClick={"handleClick"} alt="edit" />
          <img src={deleteIcon} onClick={"handleDeleteClick"} alt="Delete" />
        </div>
      </>
    );
  };

  const data = getalllookdata.map((user) => ({
    photo: <ProfilePhoto picUrl={user?.thumbnail.url} />,
    page: user.title,
    action: <ActionLooks />,
  }));

  const pageSize = 5;
  // const data = [];
  const columns = [
    {
      header: "Photo",
      accessor: "photo",
    },
    {
      header: "Looks",
      accessor: "page",
    },

    {
      header: "Action",
      accessor: "action",
    },
  ];

  const greenClicked = () => {
    navigate("/home/addLook");
  };
  const handleOfferImageChange1 = (event) => {
    const file = event.target.files[0];
    setOfferImg1(file);
  };

  const handleOfferImageRemove1 = () => {
    setOfferImg1(null);
  };

  const handleOfferImageChange2 = (event) => {
    const file = event.target.files[0];
    setOfferImg2(file);
  };

  const handleOfferImageRemove2 = () => {
    setOfferImg2(null);
  };

  const handleGridImageChange1 = (event) => {
    const file = event.target.files[0];
    setGridImg1(file);
  };

  const handleGridImageRemove1 = () => {
    setGridImg1(null);
  };

  const handleGridImageChange2 = (event) => {
    const file = event.target.files[0];
    setGridImg2(file);
  };

  const handleGridImageRemove2 = () => {
    setGridImg2(null);
  };

  const handleGridImageChange3 = (event) => {
    const file = event.target.files[0];
    setGridImg3(file);
  };

  const handleGridImageRemove3 = () => {
    setGridImg3(null);
  };

  const handleGridImageChange4 = (event) => {
    const file = event.target.files[0];
    setGridImg4(file);
  };

  const handleGridImageRemove4 = () => {
    setGridImg4(null);
  };
  const handleBgImageChange = (event) => {
    const file = event.target.files[0];
    setBgImage(file);
  };

  const handleBgImageRemove = () => {
    setBgImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImagePreview(file);
  };

  const handleImageRemove = () => {
    setImagePreview(null);
  };

  const handleImageChange1 = (event) => {
    const file = event.target.files[0];
    setImagePreview1(file);
  };

  const handleImageRemove1 = () => {
    setImagePreview1(null);
  };

  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    setImagePreview2(file);
  };

  const handleImageRemove2 = () => {
    setImagePreview2(null);
  };
  //   const dispatch = useDispatch();
  const location = useLocation();

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      // setLoading(true);
      // await dispatch(getHomePage_cms());
      // await dispatch(getHomePage_cms_meta());
      setLoading(false);
    };
    fetchUserData();
  }, [dispatch]);
  const homeData = useSelector((state) => state.userManagement.getHomePage_cms);
  const seoData = useSelector(
    (state) => state.userManagement.getHomePage_cms_meta
  );
  //   const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  console.log(seoData);

  const handlePhotoChange = (event) => {
    let img = event.target.files[0];
    setPhoto(img);
  };

  const handlePhotoRemove = () => {
    setPhoto(null);
  };
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [btn, setBtn] = useState("");
  const [btnlink, setBtnlink] = useState("");
  const [New, setNew] = useState(false);
  const [metatitle, setMetaTitle] = useState("");
  const [metadesc, setMetaDesc] = useState("");
  const [metakeywords, setMetaKeywords] = useState("");
  const [metaphoto, setMetaPhoto] = useState();

  const [banner1Title1, setBanner1Title1] = useState("");
  const [banner1imagelink4, setBanner1imagelink4] = useState("");
  const [banner1Context4, setBanner1context4] = useState("");
  const [banner1Button5, setBanner1Button5] = useState("");
  const [banner1Title3, setBanner1Title3] = useState("");

  const [banner1Name, setBanner1Name] = useState("");
  const [banner1Offer, setBanner1Offer] = useState("");
  const [banner1SubTitle, setBanner1SubTitle] = useState("");

  const [banner2Title, setBanner2Title] = useState("");

  const [banner3ButtonTitle, setBanner3ButtonTitle] = useState("");

  const [banner4ImageLink, setBanner4ImageLink] = useState("");
  const [banner5CenterText, setbanner5CenterText] = useState("");
  const [banner5ButtonText, setbanner5ButtonText] = useState("");

  useEffect(() => {
    setMetaTitle(seoData.metaTitle);
    setMetaDesc(seoData.metaDesc);
    setMetaKeywords(seoData.metaKey);
  }, [seoData]);
  const openNew = () => setNew(true);
  const closeNew = () => setNew(false);

  const handleDeleteLink = async (banner_id) => {
    setLoading(true);
    await dispatch(DeleteBanner(banner_id))
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleMetaTitleChange = (event) => {
    setMetaTitle(event.target.value);
  };
  const handleMetaDescChange = (event) => {
    setMetaDesc(event.target.value);
  };
  const handleMetaKeywordChange = (event) => {
    setMetaKeywords(event.target.value);
  };

  const handleMetaPhotoChange = (event) => {
    let img = event.target.files[0];
    setMetaPhoto(img);
  };
  const handleMetaPhotoRemove = () => {
    setMetaPhoto(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("inputArea1[title]", banner1Title1);
    formData.append("inputArea1[subtitle1]", banner1Offer);
    formData.append("inputArea1[subtitle2]", banner1SubTitle);
    formData.append("inputArea2[imagelink]", banner3ButtonTitle);
    formData.append("inputArea3[Title]", banner1Title3);
    formData.append("inputArea4[imagelink]", banner1imagelink4);
    formData.append("inputArea5[conText]", banner1Context4);
    formData.append("inputArea5[buttonText]", banner1Button5);

    formData.append("inputArea1", bgImage);
    formData.append("inputArea2", offerImg1);
    formData.append("inputArea3", imagePreview1);
    formData.append("inputArea4", offerImg2);
    formData.append("inputArea5", imagePreview2);

    console.log("430bgimage", bgImage);
    console.log("430bgimage", offerImg1);
    console.log("430bgimage", imagePreview1);
    console.log("430bgimage", offerImg2);
    console.log("430bgimage", imagePreview2);

    setLoading(true);
    await dispatch(addCatalogue(formData));
    setLoading(false);
    // navigate("/home/home")
    // window.location.reload();
  };
  const handleSeoSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("metaDesc", metadesc);
    formData.append("metaImage", metaphoto);
    formData.append("metaTitle", metatitle);
    formData.append("metaKey", metakeywords);

    setLoading(true);
    // await dispatch(editContactPage_cms(formData));
    // await dispatch(updateHome_cms_meta(formData))
    setLoading(false);

    window.location.reload();
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
      <div className="" style={{ background: "white" }}>
        <TopHeader className="fixed " head={head} />
      </div>
      {/* Same */}
      <div
        className="ml-80 my-20 relative w-[70vw] "
        style={{ marginTop: "100px" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area1</div>
            Background Image
            <div className="relative border border-gray-300 rounded-md w-full h-32 overflow-hidden">
              <input
                type="file"
                id="imageInput0"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleBgImageChange(e)}
              />
              {!bgImage ? (
                <label
                  htmlFor="imageInput0"
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </label>
              ) : (
                <>
                  <div
                    className="absolute top-0 right-0 m-1 bg-red-500 cursor-pointer"
                    onClick={() => handleBgImageRemove()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <img
                    src={URL.createObjectURL(bgImage)}
                    className="object-cover w-full h-full"
                    alt="Preview 0"
                  />
                </>
              )}
            </div>
            <div className="grid gap-3 grid-cols-2">
              <label className="grid pr-6 ">
                Title
                <input
                  type="add"
                  value={banner1Title1}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1Title1(e.target.value)}
                />
              </label>
              {/* <label className="grid pr-6 ">
                  Name
                  <input
                    type="add"
                    value={banner1Name}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner1Name(e.target.value)}
                  />
                </label> */}
              <label className="grid pr-6 ">
                Subtitle1
                <input
                  type="link"
                  value={banner1Offer}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1Offer(e.target.value)}
                />
              </label>
              <label className="grid pr-6 ">
                Subtitle2
                <input
                  type="link"
                  value={banner1SubTitle}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1SubTitle(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area 2</div>

            <div className="grid gap-3 grid-cols-2">
              <label className="grid pr-6 ">
                Image Link
                <textarea
                  type="add"
                  value={banner3ButtonTitle}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 h-56 "
                  placeholder=""
                  onChange={(e) => setBanner3ButtonTitle(e.target.value)}
                />
              </label>
              <label className="grid pr-6 ">
                <div className="relative border border-gray-300 rounded-md w-full h-60 overflow-hidden">
                  <input
                    type="file"
                    id="imageInput0"
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    onChange={(e) => handleOfferImageChange1(e)}
                  />
                  {!offerImg1 ? (
                    <label
                      htmlFor="imageInput0"
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </label>
                  ) : (
                    <>
                      <div
                        className="absolute top-0 right-0 m-1 bg-red-500 cursor-pointer"
                        onClick={() => handleOfferImageRemove1()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <img
                        src={URL.createObjectURL(offerImg1)}
                        className="object-cover w-full h-full"
                        alt="Preview 0"
                      />
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area 3</div>
            Background Image
            <div className="relative border border-gray-300 rounded-md w-full h-32 overflow-hidden">
              <input
                type="file"
                id="imageInput0"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleImageChange1(e)}
              />
              {!imagePreview1 ? (
                <label
                  htmlFor="imageInput0"
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </label>
              ) : (
                <>
                  <div
                    className="absolute top-0 right-0 m-1 bg-red-500 cursor-pointer"
                    onClick={() => handleImageRemove2()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <img
                    src={URL.createObjectURL(imagePreview1)}
                    className="object-cover w-full h-full"
                    alt="Preview 0"
                  />
                </>
              )}
            </div>
            <div className="grid gap-3 w-full">
              <label className="grid pr-6 ">
                Title
                <input
                  type="add"
                  value={banner1Title3}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1Title3(e.target.value)}
                />
              </label>
              {/* <label className="grid pr-6 ">
                  Name
                  <input
                    type="add"
                    value={banner1Name}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner1Name(e.target.value)}
                  />
                </label> */}
            </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area 4</div>

            <div className="grid gap-3 grid-cols-2">
              <label className="grid pr-6 ">
                <div className="relative border border-gray-300 rounded-md w-full h-60 overflow-hidden">
                  <input
                    type="file"
                    id="imageInput0"
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                    onChange={(e) => handleOfferImageChange2(e)}
                  />
                  {!offerImg2 ? (
                    <label
                      htmlFor="imageInput0"
                      className="w-full h-full flex items-center justify-center cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </label>
                  ) : (
                    <>
                      <div
                        className="absolute top-0 right-0 m-1 bg-red-500 cursor-pointer"
                        onClick={() => handleOfferImageRemove2()}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <img
                        src={URL.createObjectURL(offerImg2)}
                        className="object-cover w-full h-full"
                        alt="Preview 0"
                      />
                    </>
                  )}
                </div>
              </label>
              <label className="grid pr-6 ">
                Image Link
                <textarea
                  type="add"
                  value={banner1imagelink4}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 h-56 "
                  placeholder=""
                  onChange={(e) => setBanner1imagelink4(e.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area 5</div>
            Background Image
            <div className="relative border border-gray-300 rounded-md w-full h-32 overflow-hidden">
              <input
                type="file"
                id="imageInput0"
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                onChange={(e) => handleImageChange2(e)}
              />
              {!imagePreview2 ? (
                <label
                  htmlFor="imageInput0"
                  className="w-full h-full flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </label>
              ) : (
                <>
                  <div
                    className="absolute top-0 right-0 m-1 bg-red-500 cursor-pointer"
                    onClick={() => handleImageRemove2()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <img
                    src={URL.createObjectURL(imagePreview2)}
                    className="object-cover w-full h-full"
                    alt="Preview 0"
                  />
                </>
              )}
            </div>
            <div className="grid gap-3 ">
              <label className="grid pr-6 ">
                Center Text
                <input
                  type="add"
                  value={banner1Context4}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1context4(e.target.value)}
                />
              </label>

              <label className="grid pr-6 ">
                Button Text
                <input
                  type="add"
                  value={banner1Button5}
                  className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                  placeholder=""
                  onChange={(e) => setBanner1Button5(e.target.value)}
                />
              </label>
              {/* <label className="grid pr-6 ">
                  Name
                  <input
                    type="add"
                    value={banner1Name}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner1Name(e.target.value)}
                  />
                </label> */}
            </div>
          </div>
        </form>
        {/* "ksdudvhj" */}
        <div className="flex mt-5 gap-5 items-center">
          <button
            className="rounded bg-[#c93a0e] hover:bg-[#c91b0e]"
            style={{
              width: "130px",
              height: "55px",
              color: "white",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            SAVE
          </button>
          <NavLink to="/home/catalogue">
            <button
              className="rounded bg-black hover:bg-gray-800"
              style={{
                width: "130px",
                height: "55px",
                color: "white",
              }}
            >
              Back
            </button>
          </NavLink>
        </div>
      </div>

      <div className=" ml-72 w-[75vw] relative" style={{ marginTop: "70px" }}>
        {data.length > 0 ? (
          <>
            <Table
              columns={columns}
              data={data}
              pageSize={pageSize}
              greenButtonText={"Add Look"}
              greenClicked={greenClicked}
            />
          </>
        ) : (
          <>
            <Table
              columns={columns}
              data={data}
              pageSize={pageSize}
              greenButtonText={"Add Look"}
              greenClicked={greenClicked}
            />
            <div className="flex ml-5 justify-center w-full mt-40">
              <h2 className="text-4xl font-bold text-gray-500">No Data!</h2>
            </div>
          </>
        )}
      </div>
    </div>

    // // {/*
    // //             <label className="grid pr-6">
    // //               Background Image
    // //               {bgImg ? (null) : (

    // //                 <div className="flex items-center mb-2">
    // //                   <div className="w-20 h-20 rounded overflow-hidden">
    // //                     <img
    // //                       src={editData.photo}
    // //                       className="w-full h-full object-cover"
    // //                     />
    // //                   </div>
    // //                 </div>
    // //               )
    // //               }
    // //               {photo ? (
    // //                 <div className="flex items-center">
    // //                   <div className="w-20 h-20 rounded overflow-hidden">
    // //                     <img
    // //                       src={URL.createObjectURL(photo)}
    // //                       className="w-full h-full object-cover"
    // //                     />
    // //                   </div>
    // //                   <div>
    // //                     <button
    // //                       style={{
    // //                         color: "red",
    // //                         paddingLeft: "5px",
    // //                         cursor: "pointer",
    // //                         backgroundColor: "white",
    // //                         marginLeft: "20px",
    // //                       }}
    // //                       onClick={handlePhotoRemove}>
    // //                       Remove
    // //                     </button>
    // //                   </div>
    // //                 </div>
    // //               ) : (
    // //                 <input
    // //                   type="file"
    // //                   id="photo"
    // //                   name="photo"
    // //                   accept="image/*"
    // //                   onChange={handlePhotoChange}
    // //                   // required
    // //                   class="file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent w-[50vh]"
    // //                   style={{ border: "2px solid #e6f7fe" }}
    // //                 />
    // //               )}
    // //             </label>
    // //           </div>
    // //           <div className="flex mt-10 gap-5 items-center">
    // //             <button
    // //               className="rounded bg-[#c93a0e] hover:bg-[#c91b0e]"
    // //               style={{
    // //                 width: "130px",
    // //                 height: "55px",
    // //                 color: "white",
    // //               }}
    // //               type="submit"
    // //               onSubmit={handleSubmit}>
    // //               SAVE
    // //             </button>
    // //             <NavLink to="/home/header">
    // //               <button
    // //                 className="rounded bg-black hover:bg-gray-800"
    // //                 style={{
    // //                   width: "130px",
    // //                   height: "55px",
    // //                   color: "white",
    // //                 }}>
    // //                 Back
    // //               </button>
    // //             </NavLink> */}
    // //           </div>
    // //         </form>
    // //       </div>
    // //     </div>
  );
};

export default CMSAddCatalogue;
