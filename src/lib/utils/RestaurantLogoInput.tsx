import React, { useState } from "react";
import { compressAndEncodeImage } from "./imageutil"; // Import the image compression function

export default function RestaurantLogoInput({ onLogoChange }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const compressedImageData = await compressAndEncodeImage(
        URL.createObjectURL(file)
      );
      setSelectedImage(compressedImageData);
      onLogoChange(compressedImageData); // Pass the compressed image data to the parent component
    }
  };

  return (
    <div className="flex flex-row justify-between items-center w-[80%]">
      <label htmlFor="filein" className="bg-[#3c5164] text-white p-2 rounded-md mt-10">Select Image for Logo</label>
      <input
        type="file"
        id="filein"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
      {selectedImage && (
        <img
          className="w-32 rounded-full h-32 absolute top-4 right-52 pro_img"
          src={selectedImage}
          alt="Restaurant Logo"
        />
      )}
    </div>
  );
}
