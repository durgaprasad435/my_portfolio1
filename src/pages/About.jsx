import React from "react";
import durga from "../assets/DD.png";
import "../Styles/About.css";
import CV from "../assets/Durga's-Exp-Resume.pdf";

const downloadCV = () => {
  fetch(CV).then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'durga_CV.pdf';
          alink.click();
      })
  })
}
function About() {
  return (
    <div>
      <div className="abt_container ">
        <div className="img ">
          <h1 className="abt_main_head">ABOUT ME</h1>
          <img src={durga} alt="" className="image" />
        </div>
        <div className="card_cont">
          <div>
            <h2 className="abt_heading">
              I'm a Frontend<br></br>
              <span className="abt_span">Developer</span>
            </h2>
            <div className="about_para_cont">
            <p className="abt_para">
              I am a creative designer and developer, who aims to work with
              small businesses and marginalized communities to bring their
              passions to life. I offer both design and development services of
              web applications or websites!
            </p>
            <p className="abt_para">
              I love combining the worlds of logic and creative design to make
              eye-catching,accessible,and user-friendly websites and
              applications.
            </p>
            <p className="abt_para">
              I'm excited to make the leap and continue refining my skills with
              the right company.Drop me a line in the contact form.
            </p>
            </div>
            <div className="abt_btn_cont">
            <button onClick={downloadCV} className="cv_button">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
