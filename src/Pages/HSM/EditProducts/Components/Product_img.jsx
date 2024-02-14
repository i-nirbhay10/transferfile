import React, { useState } from "react";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";


const Product_img = ({ galleryImages,
  GalleryImages,
  thumbnailImage,
  timage,
  gimage,
  ThumbnailImage, }) => {


  const handleGalleryImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => file);
    GalleryImages(selectedImages);
  };

  const handleThumbnailImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const selectedImages = files.map((file) => file);
    ThumbnailImage(selectedImages);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...thumbnailImage];
    newImages.splice(index, 1);
    ThumbnailImage(newImages);

    // fileInputRef.current.value = newImages.length;
  };

  const handleImageClick = () => {
    // Handle the click event if needed
  };

  return (
    <div>
      <div className="bg-[#EEEEEE] p-5 rounded-md shadow-md border">
        <p className="pb-5">Product Image</p>
        <form className=" grid grid-cols-2 gap-5 overflow-hidden" action="submit">
          <div>
            <label className="grid " style={{ fontSize: "15px" }}>
              Thumbnail Photo
              <input
                className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                style={{ border: "2px solid lightgray" }}
                type="file"
                placeholder=""
                accept="image/*"
                onChange={handleThumbnailImageUpload}

              />
            </label>
            <div style={{ width: "600px", marginTop: "10px" }}>
              {thumbnailImage ? thumbnailImage.length > 0 && (
                <div className="grid grid-cols-6 gap-2">
                  {thumbnailImage.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)} // replace with your image source
                        alt={image.name} // replace with your image alt text
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }} // set width, height, object-fit, and margin-right styles
                      />
                      <button
                        className="absolute top-0 text-white"
                        style={{ right: 5 }}
                        onClick={() => handleRemoveImage(index)}>
                        <DisabledByDefaultRoundedIcon style={{ fill: "red" }} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-6 gap-2">
                  <div className="relative">
                    <img
                      src={timage.url} // replace with your image source
                      // alt={image.name} // replace with your image alt text
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        marginRight: "10px",
                      }} // set width, height, object-fit, and margin-right styles
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="grid " style={{ fontSize: "15px" }}>
              Slider Photos
              <input
                className=" file:bg-black file:px-6 file:py-3 file:border-none file:rounded file:text-white file:cursor-pointer placeholder-transparent mt-3 rounded appearance-none placeholder-transparent"
                style={{ border: "2px solid lightgray" }}
                type="file"
                placeholder=""
                accept="image/*"
                onChange={handleGalleryImageUpload}
                multiple
              />
            </label>
            {/* </div> */}
            <div style={{ width: "600px", marginTop: "10px" }}>
              {galleryImages ? galleryImages.length > 0 && (
                <div className="grid grid-cols-6 gap-2">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)} // replace with your image source
                        alt={image.name} // replace with your image alt text
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }} // set width, height, object-fit, and margin-right styles
                      />

                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-6 gap-2">
                  {gimage?.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={image.url} // replace with your image source
                        // alt={image.name} // replace with your image alt text
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "10px",
                        }} // set width, height, object-fit, and margin-right styles
                      />

                    </div>
                  ))}
                </div>

              )}
            </div>
            <div style={{ fontSize: "10px", marginTop: "8px" }}>
              <ul className="list-disc ml-3 text-gray-500">
                <li>Allowed banner image extension .jpg | .jpeg | .png</li>
                <li>
                  Max banner image file size <a className="text-red-500">5MB</a>
                </li>
                <li>
                  Recommended Banner image size{" "}
                  <a className="text-red-500">1900px * 700px</a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product_img;
