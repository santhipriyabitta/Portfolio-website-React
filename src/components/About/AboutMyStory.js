import { Container, Row, Col } from "react-bootstrap";
import HeadingDivider from "../UI-Elements/HeadingDivider";
import laptopAsset from "../../Assets/laptop-asset.png";
const AboutMyStory = () => {
  return (
    <Container fluid>
      <h2 className="heading-mystory"> My Story </h2>
      <HeadingDivider color={"white"} />
      <Row style={{ justifyContent: "left", position: "relative" }}>
        <Col md={8}>
          <p className="mystory">
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{" "}
            <span style={{ color: "#c770f0" }}>Hello there,</span> I'm Santhi Priya,
             hailing from the charming city of Hydreabad in Telangana, India.
              Armed with a B.com degree in Computer.
            <div className="mystory-div"></div> I've honed my skills in a
            variety of languages and technologies, including{" "}
            <span style={{ color: "#c770f0" }}>
              {" "}
              JavaScript, Java, C,  HTML, CSS3, Bootstrap, MySQL, 
              Oracle, ReactJS, NodeJS, Postman.
            </span>{" "}
            and more.
            <div className="mystory-div"></div>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now, I'm on the
            lookout for an opportunity as a{" "}
            <span style={{ color: "#c770f0" }}>
              Fullstack/Software Developer
            </span>{" "}
            to further my career in this dynamic field.
          </p>
        </Col>
        <Col md={4} className="mystory-image">
          <img src={laptopAsset} alt="about" className="img-about" />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMyStory;
