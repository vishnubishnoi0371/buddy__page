import Accordion from "react-bootstrap/Accordion";

function BasicExample() {
  return (
    <div id="Faq" className="bg-color mt_2 position-relative">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="pt-3">
          <Accordion.Header>
            What’s the blockchain the buddybullies call home ?
          </Accordion.Header>
          <Accordion.Body>
            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis
            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in
            accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
            vitae non, integer. Non.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="pt-3">
          <Accordion.Header>
            What’s the blockchain the buddybullies call home ?
          </Accordion.Header>
          <Accordion.Body>
            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis
            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in
            accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
            vitae non, integer. Non.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="pt-3">
          <Accordion.Header>
            What’s the blockchain the buddybullies call home ?
          </Accordion.Header>
          <Accordion.Body>
            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis
            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in
            accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
            vitae non, integer. Non.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="pt-3">
          <Accordion.Header>
            What’s the blockchain the buddybullies call home ?
          </Accordion.Header>
          <Accordion.Body>
            Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis
            adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in
            accumsan, feugiat neque turpis. Fringilla dui donec nullam faucibus
            vitae non, integer. Non.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <span className="acc-ep-1 position-absolute "></span>
    </div>
  );
}

export default BasicExample;
