import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsApp from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@mui/material/IconButton";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://instagram.com/durga_reddy2k?igshid=MzNlNGNkZWQ4Mg==">
            <IconButton size="small">
              <InstagramIcon fontSize="inherit"  />
            </IconButton>
          </a>
          
          <a href="https://www.linkedin.com/in/durga-prasad-k-5892ba199">
            <IconButton size="small">
              <LinkedInIcon fontSize="inherit"  />
            </IconButton>
          </a>
        <a href="https://github.com/durgaprasad435">
            <IconButton size="small">
              <GitHubIcon fontSize="inherit"  />
            </IconButton>
          </a>
      </div>
      <p> &copy; 2023 durgaprasadkampali.com</p>
    </div>
  );
}

export default Footer;