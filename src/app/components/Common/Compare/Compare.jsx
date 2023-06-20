import Image from "next/image";
import { Button, Form } from "react-bootstrap";

export default function ComparisonsSlider() {
  return (
    <>
      <div className="compare-section">
        <Form.Control type="text" placeholder="1st product..." />
        <Image src="/images/vs.svg" width={118} height={40} alt="" />
        <Form.Control type="text" placeholder="2nd product..." />
        <Image src="/images/vs.svg" width={118} height={40} alt="" />
        <Form.Control type="text" placeholder="3rd product... (optional)" />
      </div>
      <div className="text-center">
        <Button className="site_main_btn">Compare</Button>
      </div>
    </>
  );
}
