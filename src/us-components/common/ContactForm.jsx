import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Typography } from "@mui/material";
import { submitContactForm } from "../../api/client";

const ContactForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    serviceInterest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber ||
      formData.phoneNumber.length !== 10 ||
      !formData.serviceInterest
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);
    setStatusMessage("");
    setStatusType("");

    const response = await submitContactForm({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      serviceInterest: formData.serviceInterest,
      message: formData.message || "",
    });

    if (response.error) {
      console.error("API Error:", JSON.stringify(response.error, null, 2));
      alert("Failed to save message in database.");
      setLoading(false);
      setStatusType("error");
      setStatusMessage("Failed to submit. Please try again.");
      return;
    }

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      serviceInterest: "",
      message: "",
    });
    setLoading(false);

    if (response.emailNotification && !response.emailNotification.success) {
      setStatusType("warning");
      setStatusMessage("Sent to DB successfully but email could not be delivered. We'll follow up soon.");
    } else {
      setStatusType("success");
      setStatusMessage("Awesome! Your form has been submitted. Expect to hear from us shortly.");
    }

    if (onSuccess) {
      setTimeout(() => {
        onSuccess();
      }, 10000);
    }
  };

  const textFieldSx = {
    "& .MuiInputBase-input": {
      color: "#585555ff",
      "::placeholder": {
        color: "rgba(2, 31, 11, 0.6)",
        opacity: 1,
      },
    },
    "& .MuiInput-underline:before": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "1px solid",
      borderImage: "linear-gradient(135deg, #1d4230, #2e6f4e) 1",
    },
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 3 }, background: "transparent", borderRadius: "14px" }}>
      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mb: 3 }}>
          <TextField
            name="firstName"
            placeholder="First Name *"
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
          <TextField
            name="lastName"
            placeholder="Last Name *"
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" }, mb: 3 }}>
          <TextField
            name="email"
            placeholder="Email *"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
          <TextField
            name="phoneNumber"
            placeholder="Phone Number *"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleChange}
            variant="standard"
            sx={textFieldSx}
          />
        </Box>

        <TextField
          select
          name="serviceInterest"
          value={formData.serviceInterest}
          onChange={handleChange}
          variant="standard"
          fullWidth
          sx={{ mb: 3, ...textFieldSx }}
          SelectProps={{
            displayEmpty: true,
            renderValue: (selected) => {
              if (!selected) {
                return "Select a Service *";
              }
              return selected;
            },
          }}
        >
          <MenuItem value="" disabled>
            Service Interested *
          </MenuItem>
          <MenuItem value="Tax Service">Tax Service</MenuItem>
          <MenuItem value="Bookkeeping Service">Bookkeeping Service</MenuItem>
          <MenuItem value="CPA Service">CPA Service</MenuItem>
          <MenuItem value="Virtual Assistance">Virtual Assistance</MenuItem>
          <MenuItem value="Data Entry Service">Data Entry Service</MenuItem>
          <MenuItem value="Financial Controller Service">
            Financial Controller Service
          </MenuItem>
        </TextField>

        <TextField
          name="message"
          placeholder="Message"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          sx={textFieldSx}
          variant="standard"
        />

        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
            fontWeight: 700,
            fontSize: "1rem",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #1d4230, #2e6f4e)",
            color: "#fff",
            "&:hover": {
              background: "linear-gradient(135deg, #2e6f4e, #1d4230)",
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 20px rgba(0,0,0,0.25)",
            },
          }}
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>

        {statusMessage && (
          <Box
            sx={{
              mt: 2,
              px: 2,
              py: 1.25,
              borderRadius: 1.5,
              border: 1,
              borderColor:
                statusType === "success"
                  ? "success.main"
                  : statusType === "warning"
                    ? "warning.main"
                    : "error.main",
              backgroundColor:
                statusType === "success"
                  ? "rgba(16, 185, 129, 0.12)"
                  : statusType === "warning"
                    ? "rgba(245, 158, 11, 0.12)"
                    : "rgba(239, 68, 68, 0.12)",
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color:
                  statusType === "success"
                    ? "success.main"
                    : statusType === "warning"
                      ? "warning.main"
                      : "error.main",
                fontWeight: 700,
                fontSize: "0.95rem",
              }}
            >
              {statusMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
