import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FormGroup,
  Label,
  Input,
  Form,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Actions
import { KlasifikasiImunisasiChange, AnsImunisasiChange } from "../../Actions";

var outlineColor = {
  borderColor: "#46d0fe",
};

const Imunisasi2 = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansImunisasi = useSelector((state) => state.ansImunisasi);
  let [imun_polio1, set_imun_polio1] = useState(ansImunisasi.imun_polio1);
  let [imun_polio2, set_imun_polio2] = useState(ansImunisasi.imun_polio2);
  let [imun_polio3, set_imun_polio3] = useState(ansImunisasi.imun_polio3);
  let [imun_polio4, set_imun_polio4] = useState(ansImunisasi.imun_polio4);

  const handleAnswerPolio1 = (event) => {
    let tmp = event.target.value;
    set_imun_polio1(tmp);
    dispatch(AnsImunisasiChange("POLIO1", tmp));
  };

  const handleAnswerPolio2 = (event) => {
    let tmp = event.target.value;
    set_imun_polio2(tmp);
    dispatch(AnsImunisasiChange("POLIO2", tmp));
  };

  const handleAnswerPolio3 = (event) => {
    let tmp = event.target.value;
    set_imun_polio3(tmp);
    dispatch(AnsImunisasiChange("POLIO3", tmp));
  };

  const handleAnswerPolio4 = (event) => {
    let tmp = event.target.value;
    set_imun_polio4(tmp);
    dispatch(AnsImunisasiChange("POLIO4", tmp));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(KlasifikasiImunisasiChange("IMUNISASI_KLASIFIKASI", ""));
    dispatch(KlasifikasiImunisasiChange("IMUNISASI_STATUS", "info"));
    history.push("Imunisasi3");
  };

  return (
    <Form onSubmit={handleSubmit}>
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
            <div className="p-2">
              <FontAwesomeIcon icon={faCircle} className="text-muted" />
            </div>
          </div>
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Imunisasi</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "520px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah diberi Polio 1
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_polio1"
                            value={"Belum"}
                            onChange={handleAnswerPolio1}
                            checked={imun_polio1 === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_polio1"
                            value={"Akan"}
                            onChange={handleAnswerPolio1}
                            checked={imun_polio1 === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_polio1"
                            value={"Sudah"}
                            onChange={handleAnswerPolio1}
                            checked={imun_polio1 === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah diberi Polio 2
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_polio2"
                            value={"Belum"}
                            onChange={handleAnswerPolio2}
                            checked={imun_polio2 === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_polio2"
                            value={"Akan"}
                            onChange={handleAnswerPolio2}
                            checked={imun_polio2 === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_polio2"
                            value={"Sudah"}
                            onChange={handleAnswerPolio2}
                            checked={imun_polio2 === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah diberi Polio 3
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_polio3"
                            value={"Belum"}
                            onChange={handleAnswerPolio3}
                            checked={imun_polio3 === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_polio3"
                            value={"Akan"}
                            onChange={handleAnswerPolio3}
                            checked={imun_polio3 === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_polio3"
                            value={"Sudah"}
                            onChange={handleAnswerPolio3}
                            checked={imun_polio3 === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah diberi Polio 4
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Belum
                          <Input
                            type="radio"
                            name="imun_polio4"
                            value={"Belum"}
                            onChange={handleAnswerPolio4}
                            checked={imun_polio4 === "Belum"}
                            required
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Akan
                          <Input
                            type="radio"
                            name="imun_polio4"
                            value={"Akan"}
                            onChange={handleAnswerPolio4}
                            checked={imun_polio4 === "Akan"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>

                    <Col sm="4">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Sudah
                          <Input
                            type="radio"
                            name="imun_polio4"
                            value={"Sudah"}
                            onChange={handleAnswerPolio4}
                            checked={imun_polio4 === "Sudah"}
                          />
                          <span
                            style={{ left: "30px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Row>
          </div>
        </div>

        <Row className="justify-content-between px-5 py-0">
          <Col sm="4">
            <Link to="Imunisasi1" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
                <FontAwesomeIcon icon={faChevronLeft} />
                Sebelumnya
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              style={{ backgroundColor: "#46d0fe", border: "0" }}
              type="submit"
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

export default Imunisasi2;
