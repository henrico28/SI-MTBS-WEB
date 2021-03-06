import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
  Label,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

var outlineColor = {
  borderColor: "#46d0fe",
};

const Gizi2 = (props) => {
  const ansGizi = useSelector((state) => state.ansGizi);
  const dataAnak = useSelector((state) => state.dataAnak);
  let [gizi_BBmenurutPBAtauTB] = useState(ansGizi.gizi_BBmenurutPBAtauTB);
  let [gizi_nilaiSD] = useState(ansGizi.gizi_nilaiSD);
  let [beratAnak] = useState(dataAnak.beratAnak);
  let [tinggiAnak] = useState(dataAnak.tinggiAnak);

  return (
    <Form>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} style={{ color: "#46d0fe" }} />
            </div>
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Status Gizi</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "440px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle>
                    <b>Hasil Perhitungan Berat Badan</b> menurut Panjang Badan
                    atau Tinggi Badan sesuai umur dan jenis kelamin adalah
                    sebagai berikut:
                  </CardTitle>
                  <Row className="justify-content-center">
                    <Label>{gizi_BBmenurutPBAtauTB}</Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>{gizi_nilaiSD}</Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>Berat Badan Anak : {beratAnak}kg</Label>
                  </Row>
                  <Row className="justify-content-center">
                    <Label>Tinggi Badan Anak : {tinggiAnak}cm</Label>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
        </div>
        <Row className="justify-content-between px-5 py-3">
          <Col sm="4">
            <Link to="Gizi1" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
                <FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              type="submit"
              className="button-pepper-mint"
              tag={Link}
              to={"Gizi3"}
              block
            >
              Selanjutnya <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default Gizi2;
