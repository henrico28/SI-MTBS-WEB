import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, InputGroup, InputGroupText, InputGroupAddon} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


let outlineColor = {
    borderColor : '#41E8B3'
}

let bgColor ={
    backgroundColor : '#41E8B3',
    color: 'white'
}

const Batuk = (props) => {
    return(
        <Form>
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#41E8B3'}}/>
                    </div>
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Batuk / Sukar Bernafas</h3>
                    <hr
                    style={{
                        color: "#41E8B3",
                        backgroundColor: "#41E8B3",
                        height: 5
                    }}
                    />
                </div>
                <div className="row d-flex justify-content-center">
                    <Card style={outlineColor} className="text-center w-75" >
                        <CardBody className="d-flex justify-content-center flex-column">
                            <CardTitle className="h5"><b>Tanyakan! </b>Sudah berapa lama?</CardTitle>
                                <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-25">
                                        <Input type="number" min="0"/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>Hari</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                                </div>                 
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Hitung nafas dalam 1 menit !</CardTitle>
                            <div className="w-100 d-flex justify-content-center">
                                    <InputGroup className="w-50">
                                        <Input type="number" min="0"/>
                                        <InputGroupAddon addonType="append" >
                                            <InputGroupText style={bgColor}>Kali/Menit</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>         
                            </div>     
                            {/* <h5>Nafas cepat?</h5>
                            <FormGroup check className="d-inline pr-2">
                                <Label>
                                    <Input type="radio" name="radio1"/>{''}
                                    Ya
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline">
                                <Label>
                                    <Input type="radio" name="radio1"/>{''}
                                    Tidak
                                </Label>
                            </FormGroup> */}
                        </CardBody>
                    </Card>
                    <Card style={outlineColor} className="text-center w-75 mt-3">
                        <CardBody>
                            <CardTitle className="h5"><b>Tanyakan! </b>Ada tarikan dinding dada dalam</CardTitle>
                            <FormGroup check className="d-inline pr-2">
                                <Label>
                                    <Input type="radio" name="radio2" style={{backgroundColor: "blue"}}/>{''}
                                    Ya
                                </Label>
                            </FormGroup>
                            <FormGroup check className="d-inline">
                                <Label>
                                    <Input type="radio" name="radio2"/>{''}
                                    Tidak
                                </Label>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
                <Link to="TandaBahayaUmum1"><Button color="danger">Pemeriksaan Tanda Bahaya Umum</Button></Link>
                <Link to="Batuk2"><Button color="success">Berikutnya</Button></Link>
            </div>
        </div>
        </Form>
    );
}

export default Batuk