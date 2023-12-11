import React from "react";

const Roadmap = () => {
  return (
    <div>
      <div id="Roadmap" className="bg-color position-relative mt_2">
        <div className="container ">
          <p className="fs-50 fw-semibold ff-pop white road text-center py-sm-5 py-3 mb-0">
            Roadmap
          </p>

          <div className="timeline">
            <div className="container1 right">
              <div className="content">
                <h2 className="fs-30 fw-semibold ff-pop white road-head mb-3 pb-1">
                  Q-4, 2021
                </h2>
                <p className="fs-16 fw-normal ff-pop gray lh-180 mw-380 mb-0">
                  Blandit sed penatibus elit tortor fermentum velit donec. Id
                  eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.
                </p>
              </div>
            </div>
            <div className="container-2 left">
              <div className="content">
                <h2 className="fs-30 fw-semibold ff-pop white text-end-1 road-head mb-3 pb-1">
                  Q-1, 2022
                </h2>
                <p className="fs-16 fw-normal ff-pop gray lh-180  text-end-1 mb-0">
                  Blandit sed penatibus elit tortor fermentum velit donec. Id
                  eleifend volutpat dolor netus auctor at. Volutpat sed auctor
                  non in commodo, felis viverra risus tristique.
                </p>
              </div>
            </div>
          </div>
          <div className="container1 right">
            <div className="content">
              <h2 className="fs-30 fw-semibold ff-pop white road-head mb-3 pb-1">
                Q-1, 2022
              </h2>
              <p className="fs-16 fw-normal ff-pop gray lh-180 mw-380 mb-0">
                Blandit sed penatibus elit tortor fermentum velit donec. Id
                eleifend volutpat dolor netus auctor at. Volutpat sed auctor non
                in commodo, felis viverra risus tristique.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-sm-5 pt-lg-5 pb-md-5">
            <p className="fs-30 fw-500 white ff-pop mw-800 lh-150 text-center mb-0 pt-4">
              And this just the begining , the team is working on more suprises
              for our community. Buddybullies stronger together !!
            </p>
          </div>
        </div>
        <span className="road-ep-1 position-absolute"></span>
      </div>
    </div>
  );
};

export default Roadmap;
