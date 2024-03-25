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
            <Grid container spacing={1} margin={"10px"} minHeight={70} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <Grid xs={1}>
                  <a href="https://www.facebook.com">
                    <FacebookIcon />
                    </a>
                </Grid>
                <Grid xs={1}>
                <a href="https://www.Instagram.com">
                    <InstagramIcon />
                    </a>
                </Grid>
                <Grid xs={1}>
                <a href="https://www.YouTube.com">
                    <YouTubeIcon />
                    </a>
                </Grid>
                <Grid xs={1}>
                <a href="https://www.LinkedIn.com">
                    <LinkedInIcon />
                    </a>
                </Grid>
                <Grid xs={1}>
                <a href="https://twitter.com/home">
                    <XIcon />
                  </a>
                </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
