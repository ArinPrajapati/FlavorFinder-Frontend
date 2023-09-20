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
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={selectedImage} alt="Restaurant Logo" />}
    </div>
  );
}
