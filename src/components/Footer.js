import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <>
      <div className="footer-socials">
            <Grid container sx={{ color: "grey" }}>
            <Grid container spacing={1} minHeight={70} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Grid xs={1}>
                    <FacebookIcon />
                </Grid>
                <Grid xs={1}>
                    <InstagramIcon />
                </Grid>
                <Grid xs={1}>
                    <YouTubeIcon />
                </Grid>
                <Grid xs={1}>
                    <LinkedInIcon />
                </Grid>
                <Grid xs={.5}>
                    <XIcon />
                </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
