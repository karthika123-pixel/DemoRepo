import React from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ContactForm from "./ContactForm";

const ContactPopup = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "16px",
          boxShadow: "0px 10px 40px rgba(0,0,0,0.2)",
          padding: { xs: "10px", sm: "20px" },
          backgroundColor: "#fffaf3",
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, pb: 0, textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#1d4230", pb: "15px" }}>
          Our Free Consultation request
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "#1d4230",
            backgroundColor: "rgba(29, 66, 48, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(29, 66, 48, 0.2)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <ContactForm onSuccess={handleClose} />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;
