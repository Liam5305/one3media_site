import React from "react";
import { Typography } from "@mui/material";

const BtmFooter = () => (
    <footer className="footer">
        <Typography 
        sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: 25,
            textAlign: "center",
            padding: "5px",
            textDecoration: 'underline'
        }}>HOURS OF OPERATION   
        </Typography>
        <Typography
        sx={{
            color: "white",
            fontWeight: "lightest",
            fontSize: 14,
            textAlign: "center",
            justifyContent: 'space-between'     
        }}> Mon - Sat | 9.30am - 5.00pm
        </Typography>
        {/* <Typography
        sx={{
            color: "white",
            fontWeight: "lightest",
            fontSize: 14,
            textAlign: "center",
            justifyContent: 'space-between' 
        }}> 60 Mollinsburn Street
            <br></br>
            Glasgow
            <br></br>
            G21 4SF
        </Typography> */}
    </footer>
);

export default BtmFooter;