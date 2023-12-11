import React from "react";

function AllCollapseExample() {
  return (
    <div id="Faq" className="bg-color mt_2">
      <div className="container position-relative ">
        <div className="row align-items-center justify-content-center pb-5 ">
          <div className="col-12">
            <p className="fs-50 fw-semibold ff-pop white flip-1 text-center py-5">
              FAQs
            </p>
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button d-flex align-items-center"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <span className="fs-20 fw-medium ff-pop white flip-para-1">
                      What’s the blockchain the buddybullies call home ?
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body fs-16 fw-medium ff-pop white flip-para-2">
                    Hac varius turpis sit pulvinar lorem magna velit sit.
                    Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                    turpis enim egestas sed in accumsan, feugiat neque turpis.
                    Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-3  ">
                <h2 className="accordion-header ">
                  <button
                    className="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsetwo"
                    aria-expanded="false"
                    aria-controls="flush-collapsetwo"
                  >
                    <span className="fs-20 fw-medium ff-pop white flip-para-1">
                      What’s the blockchain the buddybullies call home ?
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapsetwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body fs-16 fw-medium ff-pop white flip-para-2">
                    Hac varius turpis sit pulvinar lorem magna velit sit.
                    Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                    turpis enim egestas sed in accumsan, feugiat neque turpis.
                    Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsethree"
                    aria-expanded="false"
                    aria-controls="flush-collapsethree"
                  >
                    <span className="fs-20 fw-medium ff-pop white flip-para-1">
                      What’s the blockchain the buddybullies call home ?
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapsethree"
                  className="accordion-collapse collapse bg-color"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body fs-16 fw-medium ff-pop white flip-para-2 bg-color">
                    Hac varius turpis sit pulvinar lorem magna velit sit.
                    Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                    turpis enim egestas sed in accumsan, feugiat neque turpis.
                    Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    <span className="fs-20 fw-medium ff-pop white flip-para-1">
                      What’s the blockchain the buddybullies call home ?
                    </span>
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse bg-color"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body fs-16 fw-medium ff-pop white flip-para-2 bg-color">
                    Hac varius turpis sit pulvinar lorem magna velit sit.
                    Dapibus mattis adipiscing ornare arcu vitae enim. Proin
                    turpis enim egestas sed in accumsan, feugiat neque turpis.
                    Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="acc-ep-1 position-absolute "></span>
      </div>
    </div>
  );
}

export default AllCollapseExample;
