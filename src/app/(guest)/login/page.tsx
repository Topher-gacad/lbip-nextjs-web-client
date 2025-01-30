"use client";

import { Box, Checkbox, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Link from "next/link";

const LogIn = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        bgcolor: "#F3F4F6",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "#FEFEFE",
            width: "500px",
            height: "450px",
            padding: "20px",
            borderRadius: "6px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              padding: "32px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Box
              sx={{
                bgcolor: "#CCCCCC",
                width: "100px",
                height: "100px",
                borderRadius: "6px",
              }}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <Box>
                <Typography sx={{ marginBottom: "12px" }}>Email</Typography>
                <TextField
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D1D5DB",
                    },
                  }}
                />
              </Box>
              <Box>
                <Typography sx={{ marginBottom: "12px" }}>Password</Typography>
                <TextField
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D1D5DB",
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "-10px",
                }}
              >
                <Checkbox />
                <Typography>Remember Password?</Typography>
              </Box>
              <Box>
                <Typography
                  component={Link}
                  href="/forgot-password"
                  sx={{
                    color: "#5E72E4",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "50px",
                backgroundColor: "#5E72E4",
                color: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "#4A60C4",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LogIn;
