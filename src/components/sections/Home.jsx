import { useState, useEffect } from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import style from "./Home.module.css";

const Home = () => {
  const [text, setText] = useState("Front-end Developer");
  let arrayText = ["Front-end Developer", "Gamer", "Warhammer Enthusiast"];

  useEffect(() => {
    let i = 0;
    setInterval(
      () => {
        setText(arrayText[i]);
        console.log(arrayText[i]);
        if (i === 2) {
          i = 0;
        } else {
          i++;
        }
      },
      2000,
      i
    );
    // eslint-disable-next-line
  }, []);

  return (
    <section
      id="home"
      className={style.section}
    >
      <div className={style.card}>
        <img src="./me.jpg" alt="me" />
        <h1>Koray Uymaz</h1>
        <div>
          I am a <span className={style.textAnimation}>{text}</span>
        </div>
        <div className={style.social}>
          <a
            href="https://github.com/korayuymaz"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/koray-uymaz-22103a73/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/filozofolcam/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
        </div>
        <a className={style.button} href="#contact">
          Hire Me
        </a>
      </div>
      <a href="#about" className={style.scrollDown}>
        <div>Scroll Down</div>
        <div className={style.mouse}>
          <span className={style.wheel}></span>
        </div>
      </a>
    </section>
  );
};

export default Home;
