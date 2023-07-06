import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ProjectList } from "../helpers/ProjectList";
import "../Styles/Projects.css";


function Projects() {
  return (
    <div>
      <h1 className="pro_heading"> My Personal Projects</h1>
      <div className="pro_cont">
        {ProjectList.map((item) => (
          <Card maxW="sm">
            <CardBody className="projectList">
              <Image
                className="pro_img"
                src={item.image}
                alt=""
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <>
                  <Heading className="pro_head">{item.name}</Heading>

                  <Text className="pro_text">
                    <span className="pro_skills">Skills : </span>
                    {item.skills}
                  </Text>
                </>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Projects;
