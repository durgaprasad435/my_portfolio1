import React, { useState } from "react";
import "../Styles/Home.css";
//import { IconButton } from "@chakra-ui/button";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";
import Bootstrap from "../assets/bootstrap.jpeg";
import CProgramming from "../assets/c programming.png";
import CSS from "../assets/css.png";
import HTML from "../assets/HTML.png";
import Javascript from "../assets/js1.png";
import NodeJs from "../assets/njs.png";
import ReactJs from "../assets/react.png";
import Python from "../assets/python.png";
import About from "./About";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Image,
  CardFooter,
} from "@chakra-ui/react";

function Home() {
  const [skills, setSkills] = useState(false);
  const [viewSkills, setViewSkills] = useState(true);
  const ViewSkills = async () => {
    setSkills(true);
    await setTimeout(() => {
      setViewSkills(false);
    }, 2000);
  };

  return (
    <div>
      <div className="bg_container">
        <div className="home_container">
          <div className="text_cont">
            <h2 className="heading">
              Hi, I'm <span className="name">Durga Prasad</span>
            </h2>
            <p className="para">
              A Frontend Developer with a passion for learning and creating.
            </p>
          </div>
          <div>
            <div className="sm_icons">
              <a href="https://github.com/durgaprasad435" className="a_icon">
                <IconButton size="large">
                  <GitHubIcon fontSize="inherit" className="icon_color" />
                </IconButton>
              </a>
              <a href="mailto:durgaprasadkampali@gmail.com" className="a_icon">
                <IconButton size="large">
                  <EmailIcon fontSize="inherit" className="icon_color" />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/durga-prasad-k-5892ba199">
                <IconButton size="large">
                  <LinkedInIcon fontSize="inherit" className="icon_color" />
                </IconButton>
              </a>
            </div>
          </div>
          <div>
            {viewSkills ? (
              <button
                onClick={ViewSkills}
                className={viewSkills ? "view_s" : null}
              >
                VIEW SKILLS
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {skills ? (
        <div>
          <h1 className="skills_heading">
            <span className="spn1">S</span>
            <span className="spn2">K</span>
            <span className="spn3">I</span>
            <span className="spn4">L</span>
            <span className="spn5">L</span>
            <span className="spn6">S</span>
          </h1>
          <div className="skills_section">
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={HTML}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    HTML
                  </Heading>
                </Stack>
              </CardBody>
            </Card>

            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={CSS}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    CSS
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={Javascript}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    JavaScript
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={Bootstrap}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    BootStrap
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          </div>

          <div className="skills_section">
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={ReactJs}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    React Js
                  </Heading>
                </Stack>
              </CardBody>
            </Card>

            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={Python}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    Python
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={CProgramming}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    C
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
            <Card maxW="sm" className="skills_card_cont">
              <CardBody>
                <Image
                  src={NodeJs}
                  alt=""
                  borderRadius="sm"
                  className="skills_card"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" className="skills_name">
                    Node Js
                  </Heading>
                </Stack>
              </CardBody>
            </Card>
          </div>
        </div>
      ) : null}
      <About/>
    </div>
  );
}

export default Home;
