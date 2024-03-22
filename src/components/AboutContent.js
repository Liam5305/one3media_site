import React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function AboutContent() {
  return (
    <>
      <div>
        <Container
          maxWidth="lg"
          sx={{
            bgcolor: "grey",
            color: "white",
          }}
        >
          <Typography
          sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: 32,
              textAlign: "center",
              padding: "5px",
              textDecoration: "underline"
          }}>About One3Media</Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: "medium",
              fontSize: 18,
              textAlign: "center",
              padding: "25px",
            }}
          >
            Welcome to my professional realm of visual storytelling. As a seasoned filmmaker and photographer based in Scotland, 
            I specialize in crafting bespoke cinematic experiences for weddings. Whether you envisage a serene countryside union or a dynamic urban celebration, 
            I am dedicated to translating your love story into a captivating visual narrative.
            <br></br>
            <br></br>
            AWhile I am rooted in Glasgow, I am well-equipped to travel far and wide to capture your special day. My portfolio boasts a diverse array of weddings spanning Scotland, 
            from the picturesque north to the enchanting Scottish Borders. Moreover, I am enthusiastic about undertaking destination weddings, wherever they may be.
            <br></br>
            <br></br>
            With nearly 15 years of full-time experience and over 600 weddings documented, I thrive on the inherent diversity of each event. 
            Each occasion presents its own set of nuances and intricacies, ensuring that no two weddings are alike. 
            This continual variation fuels my passion, ensuring that I approach each assignment with fresh eyes and unwavering dedication. 
            <br></br>
            <br></br>
            While proficient in both photography and videography, my true passion lies in the art of filmmaking. 
            I find immense satisfaction in immortalizing your special moments in motion, 
            allowing you and your loved ones to relive the magic time and time again.
            <br></br>
            <br></br>
            If my approach resonates with your vision for your wedding day, I invite you to take the next step. 
            Please visit the contact me page to initiate the process of bringing your dream celebration to fruition. 
            Let us collaborate to create a timeless masterpiece together. - Mikey x.
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default AboutContent;
