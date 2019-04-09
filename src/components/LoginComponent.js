import React from "react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col
} from "reactstrap";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

<<<<<<< HEAD
    render(){
        return(
            <div className="row row-content">
            <div className="col-6 offset-3">
               <h3>Create your account</h3>
            </div>
             <div className="col-12 col-md-8 offset-md-3">
                 <Form onSubmit={this.handleSubmit}>
                     <FormGroup row>
                         <Label htmlFor="email" md={2}>Email</Label>
                         <Col md={7}>
                             <Input type="email" id="email" name="email"
                                 placeholder="Email"
                                 value={this.state.email}
                                 onChange={this.handleInputChange} />
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                         <Label htmlFor="password" md={2}>Last Name</Label>
                         <Col md={7}>
                             <Input type="password" id="passwoed" name="passwoed"
                                 placeholder="Password"
                                 value={this.state.passwoed}
                                 onChange={this.handleInputChange} />
                         </Col>                        
                     </FormGroup>
                     
                     
                     <FormGroup row>
                         <Col md={{size: 7, offset: 2}}>
                             <Button className="col-md-12" type="submit" color="primary">
                                 Submit
                             </Button>
                         </Col>
                     </FormGroup>
                     <FormGroup row>
                     <Col className="mt-2" md={{size: 3, offset: 3}}>
                        <h6>If you haven't an account</h6>
                     </Col>
                         <Col md={{size: 2, offset: 0}}>
                         
                             <Link to='/signup'> <Button className="col-md-12"  color="primary">
                                 Sign Up
                             </Button>
                             </Link>
                         </Col>
                     </FormGroup>
                 </Form>
             </div>
=======
  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="row row-content">
        <div className="col-6 offset-3">
          <h3>Create your account</h3>
>>>>>>> d1094ad5c4c9687ace014e24e9891eacf5a25377
        </div>
        <div className="col-12 col-md-8 offset-3">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={7}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="password" md={2}>
                Password
              </Label>
              <Col md={7}>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 7, offset: 2 }}>
                <Button className="col-md-12" type="submit" color="success">
                  Submit
                </Button>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="mt-2" md={{ size: 3, offset: 3 }}>
                <h6>If you haven't an account</h6>
              </Col>
              <Col md={{ size: 2, offset: 0 }}>
                <Link to="/signup">
                  {" "}
                  <Button color="warning" className="col-md-12">
                    Sign Up
                  </Button>
                </Link>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
export default Login;
