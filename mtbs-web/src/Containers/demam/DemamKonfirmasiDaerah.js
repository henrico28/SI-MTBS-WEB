import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormGroup, Label, Input, Form, Card, CardBody, CardTitle, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

import '../../Assets/style/style.css';

// Actions
import { AnsDemamChange } from '../../Actions';

var outlineColor = {
    borderColor: '#41E8B3'
}

const DemamKonfirmasiDaerah = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const ansDemam = useSelector(state => state.ansDemam);
    let [demam_isBerkunjungDaerahEndemis, set_demam_isBerkunjungDaerahEndemis] = useState(ansDemam.demam_isBerkunjungDaerahEndemis);

    const handleDaerahEndemis = event =>{
       set_demam_isBerkunjungDaerahEndemis(event.target.value);
    }

    const handleSubmit = event =>{
        if(demam_isBerkunjungDaerahEndemis === 'Tinggi'){
            dispatch(AnsDemamChange('BERKUNJUNG_DAERAH_ENDEMIS', demam_isBerkunjungDaerahEndemis));
            history.push("DemamPerhatian");
        }
        else if(demam_isBerkunjungDaerahEndemis === 'Rendah'){
            dispatch(AnsDemamChange('BERKUNJUNG_DAERAH_ENDEMIS', demam_isBerkunjungDaerahEndemis));
            history.push("Demam1");
        }
        else{
            dispatch(AnsDemamChange('BERKUNJUNG_DAERAH_ENDEMIS', demam_isBerkunjungDaerahEndemis));
            history.push("Demam1");
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="w-100">
                <div className="col-12">
                    <div className="mt-2">
                        <h3 className="text-center font-weight-bold">Demam</h3>
                        <hr
                            style={{
                                color: "#41E8B3",
                                backgroundColor: "#41E8B3",
                                height: 5
                            }}
                        />
                    </div>
                    <div style={{minHeight: "510px"}}>
                        <Row className="justify-content-around">
                            <Card style={outlineColor} className="text-center w-75" >
                                <CardBody>
                                    <CardTitle className="h5"><span className="font-weight-bold">Tanyakan! </span>Apakah anak pernah berpergian ke daerah endemis dalam 2 minggu terakhir ini? 
                                    Jika "Ya", tentukan jenis tipe endemis dari daerah tersebut</CardTitle>
                                    <Row className="limitCol "> 
                                        <Col sm="1">
                                            
                                        </Col>
                                        <Col sm="3">
                                            <FormGroup className="d-inline pr-2">  
                                                <Label className="rdoBtn" style={{left:"10px"}}>Tinggi
                                                <Input type="radio" name="radio2" value={'Tinggi'} onChange={handleDaerahEndemis} checked={demam_isBerkunjungDaerahEndemis === 'Tinggi'} required/>
                                                <span style={{left:"6px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="3">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn" style={{left:"10px"}}>Rendah
                                                <Input type="radio" name="radio2" value={'Rendah'} onChange={handleDaerahEndemis} checked={demam_isBerkunjungDaerahEndemis === 'Rendah'} /> 
                                                <span style={{left:"-1px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>

                                        <Col sm="4">
                                            <FormGroup className="d-inline">
                                                <Label className="rdoBtn" style={{left:"10px"}}>Non Endemis 
                                                <Input type="radio" name="radio2" value={'Non Endemis'} onChange={handleDaerahEndemis} checked={demam_isBerkunjungDaerahEndemis === 'Non Endemis'} /> 
                                                <span style={{left:"-1px"}} className="checkmark"></span>
                                                </Label>
                                            </FormGroup>
                                        </Col>
                                        <Col sm="1">
                                            
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Row>
                    </div>
                </div>
                <Row className="justify-content-between px-5 py-0">
                    <Col sm="4">
                        <Link to="DemamDaerah" style={{textDecoration: "none"}}><Button color="danger" block><FontAwesomeIcon icon={faChevronLeft}/> Sebelumnya</Button></Link>
                    </Col>
                    <Col sm="4">
                        <Button type="submit" color="success" block >Selanjutnya <FontAwesomeIcon icon={faChevronRight}/></Button>
                    </Col>
                </Row>
            </div>
        </Form>
    )
}
export default DemamKonfirmasiDaerah;