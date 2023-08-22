import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { downloadKeys } from '../../services/downloadKeys'
import Button from "../../../src/components/shared/Button/Button";
import { useRadioGroup } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DownloadKeys(props) {
  const [open, setOpen] = React.useState(props.isOpen);
  const handleClose = () => setOpen(false);

  const download = () => {
    downloadKeys({
        "username": props.userId
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Download your security keys!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You will download public and private keys.
          </Typography>
          <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
            Private key is required for rewards redemption and reset password.
          </Typography>
          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
            Public key is your idenitication in decentralized network.
          </Typography>
          <Typography
            id="modal-modal-description3"
            sx={{ mt: 2, fontWeight: "bold" }}
            color="secondary"
          >
            Note: This is a mandatory step.
          </Typography>
          <Button
            color="primary"
            size="small"
            variant="contained"
            sx={{ mt: 4 }}
            onClick={download}
          >
            Download
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
