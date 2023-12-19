import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import teamteddyone from "../Assets/Image/team-1.png";
import teamteddytwo from "../Assets/Image/team-2.png";
import teamteddythree from "../Assets/Image/team-3.png";
const Ourteam = () => {
  return (
    <div className="mt_2">
      {" "}
      <div id="Team" className="bg-color overflow-hidden">
        <Container>
          <p className="fs-50 fw-semibold ff-pop white team text-center pt-sm-5">
            Our Team
          </p>
          <Row className=" align-items-center justify-content-center pb-5">
            <Col lg={4} md={6} sm={12}>
              <img className="mt-5 w-100" src={teamteddyone} alt="#" />

              <p className="fs-30 fw-semibold ff-pop white mt-4 text-center">
                Prime Bullister{" "}
              </p>
              <p className="fs-18 fw-normal white ff-pop text-center">
                Pruduct Designer{" "}
              </p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img className="mt-5 w-100" src={teamteddytwo} alt="#" />

              <p className="fs-30 fw-semibold ff-pop white mt-4 text-center">
                Solvador Bulli{" "}
              </p>
              <p className="fs-18 fw-normal white ff-pop text-center">
                Artist{" "}
              </p>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <img className="mt-5 w-100" src={teamteddythree} alt="#" />

              <p className="fs-30 fw-semibold ff-pop white mt-4 text-center">
                Solvador Bulli{" "}
              </p>
              <p className="fs-18 fw-normal white ff-pop text-center">
                Developer{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ourteam;
