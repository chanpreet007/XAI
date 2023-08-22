import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import UploadImageModal from "./UploadImageModal";

export default function UploadButtons() {
  const [currentFile, setCurrentFile] = React.useState(undefined)
  const [previewImage, setpreviewImage] = React.useState(undefined)
  const [base64, setBase64] = React.useState('');
  const [isModalOpen, setModalVisiblity] = React.useState(false);

  const handleOnclose = () => {
    setModalVisiblity(false)
    setBase64('')
  }
  const uploadImage = async (e: React.FormEvent<EventTarget>) => {
    let target = e.target
    const file = target.files[0];
    // const base64 = await convertBase64(file);
    setCurrentFile(file);
    setpreviewImage(URL.createObjectURL(file))
    setModalVisiblity(true)
  };

  //function to convert our image to base64
  // const convertBase64 = (file: Blob) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

 

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label">
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={
            uploadImage
          }
        />
      </Button>
      {/* <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton> */}
      {isModalOpen && <UploadImageModal isOpen={isModalOpen} src={previewImage} currentFile = {currentFile} handleOnclose={handleOnclose}/>}
    </Stack>
  );
}
