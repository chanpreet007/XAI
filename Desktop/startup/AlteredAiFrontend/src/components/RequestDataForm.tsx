import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import CategorySelection from "./CategorySelection";
// import { authService } from "../services/api";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

export default function RequestDataForm({isModalOpen}) {
 
    const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const handleSubCategory = (subCategory: string) => {
    setSubCategory(subCategory);
  };
//   const uploadImage = async (e: React.FormEvent<EventTarget>) => {
//     let target = e.target
//     const file = target.files[0];
//     // const base64 = await convertBase64(file);
//     setCurrentFile(file);
//     setpreviewImage(URL.createObjectURL(file))
//     setModalVisiblity(true)
//   };

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
      {isModalOpen && 
      
         <div>
         
           {/* <div style={{display:'flex', flexDirection:'column'}}> */}
           <Box sx={style}>
             <CategorySelection
               handleSubCategory={(category: string)=> handleSubCategory(category)}
               handleCategory={(subCategory: string)=> handleCategory(subCategory)}
             />
             <Button
               onClick={() => {}}
               variant="contained"
               color="primary"
               sx={{
                 marginTop: "16px",
                 borderRadius: "16px",
                 width: "150px",
                 height: "32px",
               }}
             >
               Request Data
             </Button>
           </Box>
       </div>
}
      
    </Stack>
  );
}
