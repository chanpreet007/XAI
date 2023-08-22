import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import CategorySelection from "./CategorySelection";
import { authService } from "../services/api";

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

export default function UploadImageModal(props: {
    handleOnclose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined; isOpen: boolean; src: string ,currentFile : Blob
}) {
  const [open, setOpen] = React.useState(props.isOpen);
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");

  const handleCategory = (category: string) => {
    setCategory(category);
  };

  const handleSubCategory = (subCategory: string) => {
    setSubCategory(subCategory);
  };

  const subitImageWithPayload = () => {
    authService.postImage(props.currentFile, category, subCategory);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={props.handleOnclose    }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <div style={{display:'flex', flexDirection:'column'}}> */}
        <Box sx={style}>
          <Image
            src={props.src}
            alt="Landscape picture"
            width={300}
            height={250}
          />
          <CategorySelection
            handleSubCategory={(category: string)=> handleSubCategory(category)}
            handleCategory={(subCategory: string)=> handleCategory(subCategory)}
          />
          <Button
            onClick={() => subitImageWithPayload()}
            variant="contained"
            color="primary"
            sx={{
              marginTop: "16px",
              borderRadius: "16px",
              width: "150px",
              height: "32px",
            }}
          >
            Send Data
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
