import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


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
                            <FontAwesomeIcon icon={faCircle} style={{ color: '#41E8B3' }} />
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
                        <p className="text-center"><b>Jika Daerah Non Endemis</b>, tanyakan riwayat bepergian ke daerah endemis
                        malaria dalam 2 minggu terakhir adn tentukan daerah endemis sesuai tempat yang dikunjungi</p>
                    </div>
                    <div className="row d-flex justify-content-around">
                        <Card style={outlineColor} className="text-center w-75" >
                            <CardBody>
                                <CardTitle className="h5"><b>Lihat! </b>Adanya tanda-tanda Campak saat ini</CardTitle>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div>
                                    <h6>Ruam kemerahan di kulit yang meyeluruh</h6>
                                    <FormGroup check className="d-inline pr-2">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Ya
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-inline">
                                        <Label cek>
                                            <Input type="radio" name="radio1" />{''}
                                            Tidak
                                        </Label>
                                    </FormGroup>
                                </div>
                                <hr
                                    style={{
                                        color: "#41E8B3",
                                        backgroundColor: "#41E8B3",
                                        height: 1
                                    }}
                                />
                                <div>
                                    <h6>Terdapat salah satu tanda berikut: batuk, pilek, mata merah</h6>
                                    <FormGroup check className="d-inline pr-2">
                                        <Label cek>
                                            <Input type="radio" name="radio2" />{''}
                                            Ya
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="d-inline">
                                        <Label cek>
                                            <Input type="radio" name="radio2" />{''}
                                            Tidak
                                        </Label>
                                    </FormGroup>
                                </div>

                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                    <Link to="Demam3"><Button color="danger">Sebelumnya</Button></Link>
                    <Link to="Demam5"><Button color="success">Selanjutnya</Button></Link>
                </div>
            </div>
        </Form>
    )
}
export default Demam;