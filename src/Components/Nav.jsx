import Container from 'react-bootstrap/Container';

const nav = () => {
  function Faq() {
    document.querySelector("#nav").classList.toggle("end-0");
    document.querySelector("body").classList.remove(".overflow_hidden");
  }
  function faq2() {
    document.querySelector(".nav").classList.toggle("end-0");
    document.querySelector("body").classList.toggle(".overflow_hidden");
  }
  return (
    <div className="min-vh-100 overflow-hidden head-bg-img">
      <div className=" d-flex justify-content-center min-vh-100 flex-column">
        <nav className="bg-clr ">
          <Container>
            <div className=" d-flex align-items-center justify-content-between py-3">
              <p className="fs-20 fw-semibold ff-pop white cur-pointer mb-0">
                Logo
              </p>

              <label for="menuIcon" onClick={Faq}>
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id="menuIcon" hidden />
              <ul
                className="nav-flip d-flex align-items-center nav  gap-5 mb-0 nav_set"
                Id="nav"
              >
                <li>
                  <a
                    onClick={faq2}
                    href="#Minting"
                    className="nav-logo fs-18 fw-medium ff-pop white text-decoration-none"
                  >
                    Minting
                  </a>
                </li>
                <li>
                  <a
                    onClick={faq2}
                    href="#Roadmap"
                    className="nav-logo fs-18 fw-medium ff-pop white text-decoration-none"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    onClick={faq2}
                    href="#Faq"
                    className="nav-logo fs-18 fw-medium ff-pop white text-decoration-none"
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    onClick={faq2}
                    href="#Team"
                    className="nav-logo fs-18 fw-medium ff-pop white text-decoration-none"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    onClick={faq2}
                    href="#Joinus"
                    className="nav-logo fs-18 fw-medium ff-pop white text-decoration-none"
                  >
                    Join us
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </nav>

        <div className="d-flex flex-grow-1 flex-column justify-content-center align-content-center">
          <div className="container ">
            <p className="fs-70 mw-500 fw-normal white ff-pop  mb-0 mt-100">
              Vitae nunc, <span className="fw-bold   ">blandit a odio</span>
            </p>
            <p className="fs-20 fw-500 pt-1 gray ff-pop lh-41 pb-5 mt-30 mb-0 mw-540 space-sm">
              Semper in egestas risus id tempus. Pellentesque dolor eros
              sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
              vestibulum dolor diam
            </p>
            <button className="fs-25 fw-medium btn-1 mb-4 mb-lg-0 mt-30">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nav;
