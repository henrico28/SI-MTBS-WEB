import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Actions
import {
  KlasifikasiTelingaChange,
  AnsTelingaChange,
  compStatusChange,
  FlagChange,
} from "../../Actions";

let outlineColor = {
  borderColor: "#46d0fe",
};

const TelingaYaTidak = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansTelinga = useSelector((state) => state.ansTelinga);
  let [telinga, setTelinga] = useState(ansTelinga.telinga);

  const handleTelinga = (event) => {
    if (event.target.value === "1") {
      setTelinga(true);
    } else {
      setTelinga(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (telinga === true) {
      if (ansTelinga.telinga === false) {
        dispatch(KlasifikasiTelingaChange("TELINGA_KLASIFIKASI", ""));
        dispatch(KlasifikasiTelingaChange("TELINGA_STATUS", null));
      }
      dispatch(FlagChange("FLAG_TELINGA", 1));
      dispatch(AnsTelingaChange("TELINGA", telinga));
      history.push("Telinga1");
    } else {
      dispatch(FlagChange("FLAG_TELINGA", 2));
      dispatch(AnsTelingaChange("RESET_TELINGA", true));
      dispatch(AnsTelingaChange("TELINGA", telinga));
      dispatch(KlasifikasiTelingaChange("TELINGA_KLASIFIKASI", ""));
      dispatch(KlasifikasiTelingaChange("TELINGA_STATUS", "info"));
      dispatch(compStatusChange("GIZI"));
      history.push("Gizi1");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="mt-2">
            <h3 className="text-center font-weight-bold">Telinga</h3>
            <hr
              style={{
                color: "#41E8B3",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "510px" }}>
            <Row className="justify-content-center">
              <Card style={outlineColor} className="text-center w-75">
                <CardBody className="d-flex justify-content-center flex-column">
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Apakah anak mempunyai masalah telinga?
                  </CardTitle>
                  <Row className="limitCol">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio1"
                            value={1}
                            onChange={handleTelinga}
                            checked={telinga === true}
                            required
                          />
                          <span
                            style={{ left: "20px" }}
                            className="checkmark"
                          ></span>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col sm="1"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline">
                        <Label className="rdoBtn">
                          Tidak
                          <Input
                            type="radio"
                            name="radio1"
                            value={2}
                            onChange={handleTelinga}
                            checked={telinga === false}
                          />
                          <span
                            style={{ left: "0px" }}
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
            <Link to="DemamYaTidak" style={{ textDecoration: "none" }}>
              <Button block style={{ backgroundColor: "#fe8d3b", border: "0" }}>
                <FontAwesomeIcon icon={faChevronLeft} /> Pemeriksaan Demam
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              type="submit"
              block
              style={{ backgroundColor: "#46d0fe ", border: "0" }}
            >
              Selanjutnya <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </Col>
        </Row>
      </div>
    </Form>
  );
};

export default TelingaYaTidak;
