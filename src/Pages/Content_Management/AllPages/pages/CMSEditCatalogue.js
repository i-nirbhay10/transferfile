import React, { useState, useEffect } from "react";
import TopHeader from "../../../../UI/TopHeader/TopHeader";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteIcon, editIcon } from "../Assets/index";
import { useDispatch } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { Button, IconButton } from "@mui/material";
import { Grid } from "react-loader-spinner";
import { updatehome, getHomePage_cms, addBanner, DeleteBanner, getHomePage_cms_meta, updateHome_cms_meta, getLooks_cms ,getalllook} from "../../../User_Management/features/userSlice";
import { getUserLogin } from "../../../User_Management/features/userSlice";
import Table from "../../../../UI/CommonTable/Table";

const Action = ({ url, data }) => {
    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const LuserData = useSelector((state) => state.userManagement.getUserLogin);
    useEffect(() => {
      dispatch(getUserLogin(localStorage.getItem('uid')))
    }, [dispatch])
   
    const handleClick = async () => {
     
      Navigate(`/home${url}`, { state: data });
    };
    return (
      <div>
        {LuserData.role == 'admin' || LuserData.role == 'editor' ? (
          <div className="flex gap-2">
          <img src={editIcon} onClick={handleClick} className="w-6 h-6 " style={{ cursor: 'pointer' }} alt="edit" />
          <img src={deleteIcon} className="w-6 h-6 " style={{ cursor: 'pointer' }} alt="Delete" />
          </div>
        ) : (<div>Not Accessible</div>)}
      </div>
    );
  };
  const Photo = ({ picUrl }) => {
    return (
      <div>
        <img className="w-14 h-14 rounded" src={picUrl} alt="Photo" />
      </div>
    );
  };


const CMSEditCatalogue = ({ setActiveTab, setExpand }) => {
  const dispatch = useDispatch();
    const location = useLocation();
    const samplePic = 'https://e0.pxfuel.com/wallpapers/422/676/desktop-wallpaper-mens-fashion-men-clothing-thumbnail.jpg'
    const pageSize = 5;
    const toPassData = { img : samplePic , title : "Look 1"}
   


  const getData = location.state;
  console.log(getData)

    const columns = [
        {
            header:"Photo",
            accessor:"photo",
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
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30rem',
    boxShadow: 24,
    borderRadius: '20px',
    backgroundColor: 'white',
    padding: '20px 30px',
  };
  setActiveTab("catalogue");
  setExpand("contentManagement")
  const head = "Edit Catalogue";
  const [open, setOpen] = React.useState(true);
  const [imagePreview, setImagePreview] = useState(null);
    const [imagePreview1, setImagePreview1] = useState(null);
    const [imagePreview2, setImagePreview2] = useState(null);
    const [offerImg1, setOfferImg1] = useState(null);
    const [offerImg2 , setOfferImg2] = useState(null);

    const[gridImg1 , setGridImg1 ] = useState(null);
    const [gridImg2 , setGridImg2] = useState(null);
    const [gridImg3 , setGridImg3] = useState(null);
    const [gridImg4, setGridImg4] = useState(null);

    const [bgImage, setBgImage] = useState(null);

    
    useEffect(()=>{ 
      const getdata= async()=>{
        console.log(getData.catalog_id);
        await dispatch(getalllook());
    
      }
      getdata()
    },[dispatch])
    
    const getalllookdata = useSelector((state) => state.userManagement.getalllook)
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
const ActionLooks=({})=>{
// navigate krana hai
return (<>
  <div className=" h-6 flex gap-3 cursor-pointer">
<img src={editIcon} onClick={"handleClick"} alt="edit" />
      <img src={deleteIcon} onClick={"handleDeleteClick"} alt="Delete" />
  </div>
</>)
}

// const data = getalllookdata.map((user) => ({
//   photo: <ProfilePhoto picUrl={user?.thumbnail.url} />,
//   page: user.title,
//   action:<ActionLooks />
// }));


    useEffect(()=>{
        if(getData && getData.inputArea1){
            const img1Url1 = getData.inputArea1.image.url;
            const img1Url2 = getData.inputArea2.image.url;
            const img1Url3 = getData.inputArea3.image.url;
            const img1Url4 = getData.inputArea4.image.url;
            const img1Url5 = getData.inputArea5.image.url;

            setBgImage(img1Url1);
            setImagePreview1(img1Url2);
            setImagePreview2(img1Url3);
            setOfferImg1(img1Url4);
            setOfferImg2(img1Url5);

            setBanner1Title(getData.inputArea1.title);
            setBanner1Offer(getData.inputArea1.subtitle1);
            setBanner1SubTitle(getData.inputArea1.subtitle2)

            setBanner3ButtonTitle(getData.inputArea2.imagelink)

            setBanner3Text(getData.inputArea3.Title)
            setBanner4Text(getData.banner4text)
            setBanner5Text1(getData.inputArea5.centerText)
            setBanner5Text2(getData.inputArea5.buttonText)
             // setLoading(true);
      // await dispatch(HSM_Product(prodId));
      // setLoading(false);

        }
    
    },[getData])

    useEffect(()=>{

      const fetchUserData = async () => {
        setLoading(true);
        // await dispatch(getHomePage_cms());
        await dispatch(getLooks_cms(getData.catalog_id));
        setLoading(false);
      };
      fetchUserData();

    },[getData?.catalog_id])
    const handleOfferImageChange1 = (event) => {
      const file = event.target.files[0];
      if(file){
        setOfferImg1(URL.createObjectURL(file));
  };
  };

  const handleOfferImageRemove1 = () => {
      setOfferImg1(null);
  };

  const handleOfferImageChange2 = (event) => {
    const file = event.target.files[0];
    if(file){
        setOfferImg2(URL.createObjectURL(file));
  };
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
      if(file){
        setBgImage(URL.createObjectURL(file));
  };
      }
      

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
    if(file){
        setImagePreview1(URL.createObjectURL(file));
  };
};

const handleImageRemove1 = () => {
    setImagePreview1(null);
};

const handleImageChange2 = (event) => {
  const file = event.target.files[0];
  if(file){
    setImagePreview2(URL.createObjectURL(file));
};
};

const handleImageRemove2 = () => {
  setImagePreview2(null);
};
  //   const dispatch = useDispatch();
  

  // const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      // await dispatch(getHomePage_cms());
      // await dispatch(getHomePage_cms_meta());
      setLoading(false);
    };
    fetchUserData();
  }, [dispatch]);
  const looksData = useSelector((state) => state.userManagement.getLooks_cms)
  console.log(looksData);

  const data = getalllookdata.map((item)=>{
    return({
      page: item.title,
      action: <Action url='/editLook' data={item}/>,
      photo : <Photo picurl={item.thumbnail.url}/>,

    }

    )
  });
  
  const seoData = useSelector((state) => state.userManagement.getHomePage_cms_meta)
  //   const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  // console.log(seoData);

  const handlePhotoChange = (event) => {
    let img = event.target.files[0]
    setPhoto(img);
  };

  const handlePhotoRemove = () => {
    setPhoto(null);
  };
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [btn, setBtn] = useState('')
  const [btnlink, setBtnlink] = useState('')
  const [New, setNew] = useState(false);
  const [metatitle, setMetaTitle] = useState('')
  const [metadesc, setMetaDesc] = useState('')
  const [metakeywords, setMetaKeywords] = useState('')
  const [metaphoto, setMetaPhoto] = useState();

  const [banner1Title , setBanner1Title] = useState('');
 
  const [banner1Offer , setBanner1Offer] = useState('');
  const [banner1SubTitle , setBanner1SubTitle] = useState('');
  
 
//2nd Banner
  const [banner3ButtonTitle , setBanner3ButtonTitle] = useState('');
 //
 const[banner3Text , setBanner3Text] = useState('');
 const [banner4text , setBanner4Text] = useState('');

 const [banner5Text1 , setBanner5Text1] = useState('');
 const [banner5Text2 , setBanner5Text2] = useState('');

  useEffect(() => {
    setMetaTitle(seoData.metaTitle)
    setMetaDesc(seoData.metaDesc)
    setMetaKeywords(seoData.metaKey)
  }, [seoData])
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
  }

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
    let img = event.target.files[0]
    setMetaPhoto(img);
  };
  const handleMetaPhotoRemove = () => {
    setMetaPhoto(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
   if(photo) formData.append("banner_image", photo);
   if(title)formData.append("banner_title", title);
   if(btn) formData.append("button_title", btn);
   if(btnlink) formData.append("button_link", btnlink);

    setLoading(true);
    await dispatch(addBanner(formData));
    setLoading(false);
    navigate("/home/home")
    window.location.reload();
  };
  const handleSeoSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if(metadesc)  formData.append("metaDesc", metadesc);
    if(metaphoto)  formData.append("metaImage", metaphoto);
    if(metatitle) formData.append("metaTitle", metatitle);
    if(metakeywords) formData.append("metaKey", metakeywords);

    setLoading(true);
    // await dispatch(editContactPage_cms(formData));
    await dispatch(updateHome_cms_meta(formData))
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
      <div className="ml-80 my-20 relative w-[70vw] " style={{ marginTop: "100px" }}>

      
        <form onSubmit={handleSubmit}  >

        


              <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area</div>
            Background Image
            <div className='relative border border-gray-300 rounded-md w-full h-32 overflow-hidden'>
          
      <input
        type='file'
        id='imageInput0'
        className='absolute inset-0 opacity-0 w-full h-full cursor-pointer'
        onChange={(e) => handleBgImageChange(e)}
          
      />
      {!bgImage ? (
        <label htmlFor='imageInput0' className='w-full h-full flex items-center justify-center cursor-pointer'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
          </svg>
        </label>
      ) : (
        <>
          <div className='absolute top-0 right-0 m-1 bg-red-500 cursor-pointer' 
          onClick={() => handleBgImageRemove()}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z' clipRule='evenodd' />
            </svg>
          </div>
          <img src={(bgImage)} className='object-cover w-full h-full' alt='Preview 0' />
        </>
      )}
      
    </div>
            <div className="grid gap-3 grid-cols-2">
                <label className="grid pr-6 ">
                Title
                  <input
                    type="add"
                    value={banner1Title}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner1Title(e.target.value)}
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
            <div className="text-xl mb-3 font-semibold">Input Area</div>

            
           
          
           
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
                <div className='relative border border-gray-300 rounded-md w-full h-60 overflow-hidden'>
          
          <input
            type='file'
            id='imageInput0'
            className='absolute inset-0 opacity-0 w-full h-full cursor-pointer'
            onChange={(e) => handleOfferImageChange1(e)}
              
          />
          {!offerImg1 ? (
            <label htmlFor='imageInput0' className='w-full h-full flex items-center justify-center cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
              </svg>
            </label>
          ) : (
            <>
              <div className='absolute top-0 right-0 m-1 bg-red-500 cursor-pointer' 
              onClick={() => handleOfferImageRemove1()}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z' clipRule='evenodd' />
                </svg>
              </div>
              <img src={(offerImg1)} className='object-cover w-full h-full' alt='Preview 0' />
            </>
          )}
          
        </div>
                </label>
               
              </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area</div>
            Background Image
            <div className='relative border border-gray-300 rounded-md w-full h-32 overflow-hidden'>
          
      <input
        type='file'
        id='imageInput0'
        className='absolute inset-0 opacity-0 w-full h-full cursor-pointer'
        onChange={(e) => handleImageChange1(e)}
          
      />
      {!imagePreview1 ? (
        <label htmlFor='imageInput0' className='w-full h-full flex items-center justify-center cursor-pointer'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
          </svg>
        </label>
      ) : (
        <>
          <div className='absolute top-0 right-0 m-1 bg-red-500 cursor-pointer' 
          onClick={() => handleImageRemove2()}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z' clipRule='evenodd' />
            </svg>
          </div>
          <img src={(imagePreview1)} className='object-cover w-full h-full' alt='Preview 0' />
        </>
      )}
      
    </div>
            <div className="grid gap-3 w-full">
                <label className="grid pr-6 ">
                Title
                  <input
                    type="add"
                    value={banner3Text}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner3Text(e.target.value)}
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
            <div className="text-xl mb-3 font-semibold">Input Area</div>

            
           
          
           
            <div className="grid gap-3 grid-cols-2">
            <label className="grid pr-6 ">
                <div className='relative border border-gray-300 rounded-md w-full h-60 overflow-hidden'>
          
          <input
            type='file'
            id='imageInput0'
            className='absolute inset-0 opacity-0 w-full h-full cursor-pointer'
            onChange={(e) => handleOfferImageChange2(e)}
              
          />
          {!offerImg2 ? (
            <label htmlFor='imageInput0' className='w-full h-full flex items-center justify-center cursor-pointer'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
              </svg>
            </label>
          ) : (
            <>
              <div className='absolute top-0 right-0 m-1 bg-red-500 cursor-pointer' 
              onClick={() => handleOfferImageRemove2()}
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z' clipRule='evenodd' />
                </svg>
              </div>
              <img src={(offerImg2)} className='object-cover w-full h-full' alt='Preview 0' />
            </>
          )}
          
        </div>
                </label>
                <label className="grid pr-6 ">
              
               Image Link
               
                  <textarea
                    type="add"
                    value={banner4text}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 h-56 "
                    placeholder=""
                    onChange={(e) => setBanner4Text(e.target.value)}
                  />
                </label>
               
               
              </div>
          </div>

          <div className="bg-[#EEEEEE] p-5 rounded-md drop-shadow-md borders mt-5 ">
            <div className="text-xl mb-3 font-semibold">Input Area</div>
            Background Image
            <div className='relative border border-gray-300 rounded-md w-full h-32 overflow-hidden'>
          
      <input
        type='file'
        id='imageInput0'
        className='absolute inset-0 opacity-0 w-full h-full cursor-pointer'
        onChange={(e) => handleImageChange2(e)}
          
      />
      {!imagePreview2 ? (
        <label htmlFor='imageInput0' className='w-full h-full flex items-center justify-center cursor-pointer'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
          </svg>
        </label>
      ) : (
        <>
          <div className='absolute top-0 right-0 m-1 bg-red-500 cursor-pointer' 
          onClick={() => handleImageRemove2()}
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M10 1a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1zm3 4a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5zm-6 0a1 1 0 1 1-2 0v8a1 1 0 1 1 2 0V5z' clipRule='evenodd' />
            </svg>
          </div>
          <img src={(imagePreview2)} className='object-cover w-full h-full' alt='Preview 0' />
        </>
      )}
      
    </div>
            <div className="grid gap-3 ">
                <label className="grid pr-6 ">
                Center Text
                  <input
                    type="add"
                    value={banner5Text1}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner5Text1(e.target.value)}
                  />
                </label>

                <label className="grid pr-6 ">
                Button Text
                  <input
                    type="add"
                    value={banner5Text2}
                    className="px-4 py-2 drop-shadow-md rounded-md mt-1 "
                    placeholder=""
                    onChange={(e) => setBanner5Text2(e.target.value)}
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
        <div className="flex mt-5 gap-5 items-center">
              <button
                className="rounded bg-[#c93a0e] hover:bg-[#c91b0e]"
                style={{
                  width: "130px",
                  height: "55px",
                  color: "white",
                }}
                type="submit"
                onClick={handleSubmit}>
                SAVE
              </button>
              <NavLink to="/home/catalogue">
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
      </div>


      <div className=" ml-72 w-[75vw] relative" style={{ marginTop: "70px" }}>
        {data.length > 0 ?
          (<>
            <Table
              columns={columns}
              data={data}
              pageSize={pageSize}
              greenButtonText={"Add Look"}
              greenClicked={greenClicked}
            />
          </>)
          :
          (<>
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
          </>)
        }
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

export default CMSEditCatalogue;
