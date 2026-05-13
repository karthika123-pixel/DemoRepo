import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import JobDetails from "./JobDetails"; // IMPORTANT: import this

const JobList = ({ jobs, selectedJob, onSelectJob, isMobile }) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
      {jobs.map((job) => (
        <Box key={job.id}>
          {/* --- Job Card --- */}
          <Box
            onClick={() => onSelectJob(job)}
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              p: 2,
              cursor: "pointer",
              border:
                selectedJob?.id === job.id
                  ? `2px solid ${theme.palette.secondary.main}`
                  : "1px solid #ddd",
              "&:hover": { boxShadow: "0 3px 8px rgba(0,0,0,0.1)" },
              transition: "0.3s",
            }}
          >
            <Typography variant="h6" fontWeight={600} color={theme.palette.secondary.main}>
              {job.title}
            </Typography>

            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon fontSize="small" color="success" />
              <Typography variant="body2" color="text.secondary">
                {job.location}
              </Typography>
            </Stack>

            <Typography variant="body2" sx={{ mt: 1 }}>
              {job.experience}
            </Typography>

            <Button
              size="small"
              sx={{
                bgcolor: job.type === "Full Time" ? "#E0F8E0" : "#FFF5E0",
                color: "#00796b",
                textTransform: "none",
                mt: 1,
                fontWeight: 600,
              }}
            >
              {job.type}
            </Button>
          </Box>

          {/* --- MOBILE ONLY: Show Details Under the Card --- */}
          {isMobile && selectedJob?.id === job.id && (
            <Box sx={{ mt: 1, p: 2, borderRadius: 2, bgcolor: "#fafafa" }}>
              <JobDetails job={job} />
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default JobList;
