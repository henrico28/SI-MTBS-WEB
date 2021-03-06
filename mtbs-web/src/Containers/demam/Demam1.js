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
  InputGroup,
  InputGroupText,
  InputGroupAddon,
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
import axios from "axios";

// Actions
import {
  KlasifikasiDemamChange,
  AnsDemamChange,
  AnsGiziChange,
} from "../../Actions";

import Classifier from "../../Classifier/Classifier";

var outlineColor = {
  borderColor: "#46d0fe",
};

let bgColor = {
  backgroundColor: "#46d0fe",
  color: "white",
};

const Demam = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const ansDemam = useSelector((state) => state.ansDemam);
  let [demam_berapaLama, set_demam_berapaLama] = useState(
    ansDemam.demam_berapaLama
  );
  let [demam_isDemamSetiapHari, set_demam_isDemamSetiapHari] = useState(
    ansDemam.demam_isDemamSetiapHari
  );
  let [demam_pernahMalaria, set_demam_pernahMalaria] = useState(
    ansDemam.demam_pernahMalaria
  );

  const flag = useSelector((state) => state.flag);
  const ansTBU = useSelector((state) => state.ansTBU);
  const ansBatuk = useSelector((state) => state.ansBatuk);
  const ansDiare = useSelector((state) => state.ansDiare);
  const ansTelinga = useSelector((state) => state.ansTelinga);
  const ansGizi = useSelector((state) => state.ansGizi);
  const ansAnemia = useSelector((state) => state.ansGizi);
  const ansHIV = useSelector((state) => state.ansHIV);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`http://localhost:8000/Demam`, {
      ansDemam: ansDemam,
    });
    dispatch(
      KlasifikasiDemamChange("DEMAM_KLASIFIKASI", res.data.hasilKlasifikasi)
    );
    dispatch(
      KlasifikasiDemamChange("DEMAM_STATUS", res.data.statusKlasifikasi)
    );
    if (
      res.data.statusKlasifikasi === "danger" ||
      res.data.statusKlasifikasi === "warning"
    ) {
      ansGizi.gizi_demam = true;
      dispatch(AnsGiziChange("GIZI_DEMAM", true));
    } else {
      ansGizi.gizi_demam = false;
      dispatch(AnsGiziChange("GIZI_DEMAM", false));
    }
    Classifier(
      "demam",
      dispatch,
      flag,
      ansTBU,
      ansBatuk,
      ansDiare,
      ansDemam,
      ansTelinga,
      ansGizi,
      ansAnemia,
      ansHIV
    );
    history.push("Demam2");
  };

  const handleAnswer1 = (event) => {
    let tmp = Number(event.target.value);
    set_demam_berapaLama(tmp);
    dispatch(AnsDemamChange("BERAPA_LAMA_DEMAM", tmp));
  };

  const handleAnswer2 = (event) => {
    if (event.target.value === "1") {
      set_demam_isDemamSetiapHari(true);
      dispatch(AnsDemamChange("DEMAM_SETIAP_HARI", true));
    } else {
      set_demam_isDemamSetiapHari(false);
      dispatch(AnsDemamChange("DEMAM_SETIAP_HARI", false));
    }
  };

  const handleAnswer3 = (event) => {
    if (event.target.value === "1") {
      set_demam_pernahMalaria(true);
      dispatch(AnsDemamChange("MALARIA", true));
    } else {
      set_demam_pernahMalaria(false);
      dispatch(AnsDemamChange("MALARIA", false));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="w-100">
        <div className="col-12">
          <div className="d-flex justify-content-center mt-3">
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
            <h3 className="text-center font-weight-bold">Demam</h3>
            <hr
              style={{
                color: "#46d0fe",
                backgroundColor: "#46d0fe",
                height: 5,
              }}
            />
          </div>
          <div style={{ minHeight: "475px" }}>
            <Row className="justify-content-around">
              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Sudah berapa lama?
                  </CardTitle>
                  <div className="w-100 d-flex justify-content-center">
                    <InputGroup className="w-25">
                      <Input
                        type="number"
                        min="0"
                        value={demam_berapaLama}
                        onChange={handleAnswer1}
                        required
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText style={bgColor}>Hari</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </CardBody>

                <CardBody hidden={demam_berapaLama <= 7}>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Jika lebih dari 7 hari, apakah demam
                    terjadi setiap hari?
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio1"
                            value={1}
                            onChange={handleAnswer2}
                            checked={demam_isDemamSetiapHari === true}
                            disabled={demam_berapaLama <= 7}
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
                            onChange={handleAnswer2}
                            checked={demam_isDemamSetiapHari === false}
                            disabled={demam_berapaLama <= 7}
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

              <Card style={outlineColor} className="text-center w-75 mt-3">
                <CardBody>
                  <CardTitle className="h5">
                    <b>Tanyakan! </b>Apakah pernah sakit malaria atau minum obat
                    malaria?
                  </CardTitle>
                  <Row className="limitCol ">
                    <Col sm="3"></Col>
                    <Col sm="3">
                      <FormGroup className="d-inline pr-2">
                        <Label className="rdoBtn">
                          Ya
                          <Input
                            type="radio"
                            name="radio2"
                            value={1}
                            onChange={handleAnswer3}
                            checked={demam_pernahMalaria === true}
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
                            name="radio2"
                            value={2}
                            onChange={handleAnswer3}
                            checked={demam_pernahMalaria === false}
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
            <Link to="DemamDaerah" style={{ textDecoration: "none" }}>
              <Button style={{ backgroundColor: "#fe8d3b", border: "0" }} block>
                <FontAwesomeIcon icon={faChevronLeft} /> Sebelumnya
              </Button>
            </Link>
          </Col>
          <Col sm="4">
            <Button
              type="submit"
              style={{ backgroundColor: "#46d0fe", border: "0" }}
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
export default Demam;
