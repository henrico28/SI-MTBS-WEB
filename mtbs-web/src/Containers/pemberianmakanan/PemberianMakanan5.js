import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormGroup,Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { KlasifikasiPemberianMakananChange, AnsPemberianMakananChange, compStatusChange, FlagChange } from '../../Actions';


let outlineColor = {
    borderColor : '#46d0fe '
}

const PemberianMakanan5 = (props) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const ansPemberianMakanan = useSelector(state => state.ansPemberianMakanan);
    let[makanan_kurus_perubahanPemberian, set_makanan_kurus_perubahanPemberian] = useState(ansPemberianMakanan.makanan_kurus_perubahanPemberian);
    let[makanan_kurus_perubahanPemberian_keterangan, set_makanan_kurus_perubahanPemberian_keterangan] = useState(ansPemberianMakanan.makanan_kurus_perubahanPemberian_keterangan);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_KLASIFIKASI',""));
        dispatch(KlasifikasiPemberianMakananChange('PEMBERIANMAKANAN_STATUS',"info"));
        dispatch(FlagChange('FLAG_PEMBERIAN_MAKANAN', 2));
        dispatch(compStatusChange('TINDAKAN'));
        history.push("Klasifikasi");
    }

    const handleAnswer1 = event =>{
        if(event.target.value === "1"){
            set_makanan_kurus_perubahanPemberian(true);
            dispatch(AnsPemberianMakananChange('PERUBAHAN_PEMBERIAN', true));
        }else{
            set_makanan_kurus_perubahanPemberian(false);
            dispatch(AnsPemberianMakananChange('PERUBAHAN_PEMBERIAN', false));
        }
    }

    const handleAnswer2 = event => {
        set_makanan_kurus_perubahanPemberian_keterangan(event.target.value);
        dispatch(AnsPemberianMakananChange('PERUBAHAN_PEMBERIAN_KET', event.target.value));
    }

    return(
        <Form onSubmit={handleSubmit}> 
            <div className="w-100">
                <div className="col-12">
                <div className="d-flex justify-content-center mt-3">
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} className="text-muted"/>
                    </div> 
                    <div className="p-2">
                        <FontAwesomeIcon icon={faCircle} style={{color: '#46d0fe '}}/>
                    </div> 
                </div>
                <div className="mt-2">
                    <h3 className="text-center font-weight-bold">Pemberian Makanan</h3>  
                    <hr
                    style={{
                        color: "#75C9E6",
                        backgroundColor: "#46d0fe ",
                        height: 5
                    }}
                    />
                </div>
                <div style={{minHeight: "475px"}}>
                    <Row className="justify-content-center">
                        <Card style={outlineColor} className="text-center w-75 mt-3">
                            <CardBody>
                                <CardTitle className="h5"><b>Tanyakan! </b>Selama sakit ini, apakah ada perubahan pemberian makan?</CardTitle>
                                <Row className="limitCol">
                                    <Col sm="3">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline pr-2">  
                                            <Label className="rdoBtn">Ya
                                            <Input type="radio" name="radio1" value={1} onChange={handleAnswer1} checked={makanan_kurus_perubahanPemberian === true} required/>
                                            <span style={{left:"20px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="1">
                                    </Col>
                                    <Col sm="3">
                                        <FormGroup className="d-inline">
                                            <Label className="rdoBtn">Tidak
                                            <Input type="radio" name="radio1" value={2} onChange={handleAnswer1} checked={makanan_kurus_perubahanPemberian === false} /> 
                                            <span style={{left:"0px"}} className="checkmark"></span>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <FormGroup check className="d-inline pr-2" hidden={makanan_kurus_perubahanPemberian === null || makanan_kurus_perubahanPemberian !== true}>
                                    <hr
                                        style={{
                                            color: "#75C9E6",
                                            backgroundColor: "#75C9E6",
                                            height: 1
                                        }}
                                    />
                                    <h5>Jika Ya, bagaimana?</h5>
                                    <Input type="textarea" value={makanan_kurus_perubahanPemberian_keterangan} onChange={handleAnswer2} disabled={makanan_kurus_perubahanPemberian === null || makanan_kurus_perubahanPemberian !== true} required/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Row>
                </div>
            </div>
            <Row className="justify-content-between px-5 py-3">
                <Col sm="4">
                    <Link to="PemberianMakanan4" style={{textDecoration: "none"}}><Button style={{backgroundColor: '#fe8d3b', border: '0'}} block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                </Col>
                <Col sm="4">
                    <Button style={{backgroundColor: '#46d0fe ', border: '0'}} type="submit" block >Klasifikasi <FontAwesomeIcon icon={faChevronRight}/></Button>
                </Col>
            </Row>
        </div>
        </Form>
    );
}

export default PemberianMakanan5;