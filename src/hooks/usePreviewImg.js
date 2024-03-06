import { useState } from "react";
import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2mb

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Corrected spelling: 'files' instead of 'file'
    if (file.size > maxFileSizeInBytes) {
      showToast("Error", "File size must be less than 2mb", "error");
      setSelectedFile(null);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Additional check for a selected file
  const clearSelectedFile = () => {
    setSelectedFile(null);
  };

  return { selectedFile, handleImageChange, clearSelectedFile }; // Corrected typo: 'setSelectedFile' instead of 'setectedFile'
};

export default usePreviewImg;
