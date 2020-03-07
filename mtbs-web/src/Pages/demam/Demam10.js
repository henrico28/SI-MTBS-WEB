import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


var outlineColor = {
    borderColor: '#41E8B3'
}

const Demam = (props) => {
    return (
        <Form>
            <div className="w-100">
                <div className="col-12">
                    <div className="d-flex justify-content-center mt-3">
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} className="text-muted" />
                        </div>
                        <div className="p-2">
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                        <p className="text-center"><b>Jika demam 2 hari sampai dengan 7 hari, tanya dan periksa</b></p>
                    </div>
                    <div style={{minHeight: "500px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5">Jika petekie sedikit DAN tidak ada tanda lain dari DBD, lakukan uji torniket, jika mungkin</CardTitle>
                                    <hr
                                        style={{
                                            color: "#41E8B3",
                                            backgroundColor: "#41E8B3",
                                            height: 1
                                        }}
                                    />
                                    <h5>Hasil Uji Torniket</h5>
                                    <FormGroup check className="d-inline pr-2">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Positif
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-inline">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Negatif
                                        </Label>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                            <Card style={outlineColor} className="text-center w-75 mt-3" >
                                <CardBody>
                                    <CardTitle className="h5">Jika, petekie sedikit TANPA tanda lain dari DBD DAN uji torniket tidak dapat
                                    dilakukan, klasifikasikan sebagai DBD</CardTitle>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-3">
                    <Col sm="4">
                        <Link to="Demam9" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Link to="Telinga1" style={{textDecoration: "none"}}><Button color="success" block >Pemeriksaan Telinga <FontAwesomeIcon icon={faChevronRight}/></Button></Link>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default Demam;