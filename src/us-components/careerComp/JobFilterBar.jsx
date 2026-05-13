import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  MenuItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const JobFilterBar = ({ onFilter }) => {
  const theme = useTheme();
  const [filters, setFilters] = useState({
    search: "",
    category: "All Openings",
    type: "All",
  });

  const isMobile = useMediaQuery("(max-width:768px)");

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const handleApplyFilter = () => {
    onFilter(filters);
  };

  const categories = [
    "All Openings",
    "IT",
    "Accounts",
    "Tax",
    "Virtual Assistance",
    "Business Development",
    "Digital Marketing",
  ];

  const types = ["All", "Full Time", "Part Time"];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        mb: 3,
        p:3,
      }}
    >
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {/* Search */}
        <TextField
          placeholder="Search for jobs or keywords"
          size="small"
          fullWidth
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />,
          }}
          sx={{ maxWidth: isMobile ? "100%" : 300 }}
        />

        {/* Category */}
        <TextField
          select
          label="Category"
          size="small"
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          sx={{ minWidth: 180 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {/* Type */}
        <TextField
          select
          label="Type"
          size="small"
          value={filters.type}
          onChange={(e) => handleChange("type", e.target.value)}
          sx={{ minWidth: 150 }}
        >
          {types.map((t) => (
            <MenuItem key={t} value={t}>
              {t}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.secondary.main,
            borderRadius: "20px",
            px: 3,
            textTransform: "none",
            "&:hover": { bgcolor: theme.palette.secondary.dark ?? "#0f281c" },
          }}
          onClick={handleApplyFilter}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
};

export default JobFilterBar;
