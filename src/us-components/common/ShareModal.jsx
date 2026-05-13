import React, { useState } from "react";
import { Box, Button, Typography, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ShareModal = ({ buttonText = "Share", content }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        {buttonText}
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 300, sm: 400 },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Title */}
          <Typography variant="h6" sx={{ mb: 2 }}>
            Share
          </Typography>

          {/* Custom Content */}
          <Box>{content}</Box>
        </Box>
      </Modal>
    </>
  );
};

export default ShareModal;
