import React, {  } from 'react';
import { Container } from 'reactstrap';
import { Wrapper } from './Style';
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Col } from 'reactstrap';
import LogoKemenkes from '../../Assets/image/logo/kemenkes.png';
import LogoPuskemas from '../../Assets/image/logo/puskesmas.png';
import LogoUnpar from '../../Assets/image/logo/unpar.png';
import LogoInformatika from '../../Assets/image/logo/informatika.png';

const Login = () => {
    return (
        <Wrapper style={{width:'100%', height: '100%'}}>
            <Container className=" wrapper-login h-100 d-flex justify-content-center flex-column p-5" fluid>
                
                <Row className="mt-5">
                    <Col sm={12} className="text-center">
                        <img src={LogoKemenkes}  className = "logo-kemenkes"/>
                    </Col>
                </Row>

                <h1 className="text-primary text-center">SI MTBS</h1>       

                <Row>
                    {/* <Col sm={3}></Col> */}
                    <Col sm={12} className="justify-content-center d-flex flex-column">
                    {/* align-self-center */}
                        <div className="justify-content-center d-flex flex-row">
                            <Form className="justify-content-center d-flex flex-column w-25" >
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="username" placeholder="Enter Username" style={{borderColor : '#46d0fe',width:'100%'}} required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="password" placeholder="Enter Password" style={{borderColor : '#46d0fe'}}required/>
                                </FormGroup>

                                <Button color="primary">Login</Button>
                            </Form>
                        </div>
                    </Col>
                    {/* <Col sm={3}></Col>      */}
                </Row>
                      
                <Row className="justify-content-center mt-5">
                    <img src={LogoPuskemas}  className = "m-1 logo-puskesmas"/>
                    <img src={LogoUnpar}  className = "m-3 logo-unpar"/>
                    <img src={LogoInformatika}  className = "m-3 logo-informatika"/>
                </Row>

                <h5 className="text-muted text-center">Copyright © 2020 Tim Pengembangan SI-MTBS</h5>
            </Container>
        </Wrapper>
    );
}

export default Login;