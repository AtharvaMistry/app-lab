import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import myOkay from './images/checked.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';




function Header() {
  return (
    <>
    {/* <div className="container-fluid">
      <Navbar bg="white">
        <Navbar.Brand className='font-weight: 900 text-dark'>
          AppLab
        </Navbar.Brand>

        <Nav className="text-sucess">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">KeyFeatures</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>

        {/* <Button className='rounded-lg'>Try for Free</Button> */}

      {/* </Navbar>
      </div> */} 

      <div className="container-fluid ">
        <div className="row ">
        
          <Navbar bg="light" expand="lg" className='ps-4'>
  <Navbar.Brand href="#">AppLab</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">Features</Nav.Link>
      <Nav.Link href="#">Pricing</Nav.Link>
      <Nav.Link href="#">Testimon</Nav.Link>
      <input type="checkbox" checked data-toggle="toggle" data-onstyle="primary"></input>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      

        </div>


      </div>

      

      {/* part 2------------------------------------- */}
      {/* <div className="container-fluid">


        <div className="d-flex justify-content-between align-content-center">

          <div className="d-flex flex-column mt-5">
            <div className="d-flex justify-content-start align-content-center  rounded">
              <img src={myOkay} alt="okay" className='mt-1' style={{ width: '14px', height: '14px' }} />
              <p className='text-danger font-weight-bold'>#1 Editos Choice App of 2023</p>
            </div>
            <h1>Best App for your<br />
              modern lifestyle</h1>
            <p>Increase productivity with a simple to-do app. app for<br />
              managing your personal budgets.</p>
            <div className='d-flex justify-content-start align-content-center'>
              <Button variant="primary" className='mr-20'>Try for Free</Button>
              <a href="/" className='text-decoration-none mt-2 ms-3'>Watch demo video</a>
            </div>
          </div>
          <div className="myMobile-img">
            <img src='/imges/Screenshot 2023-05-02 150214.png' className='img-fluid shadow' alt="mobile" style={{ width: '200px' }} />
          </div>
        </div>
      </div> */}

      <div className="container-fluid mb-5">
        <div className="row ps-3">
          <div className="col-lg-6 col-md-6 mt-5 bestappText">
            <p className='bg-light rounded'><img src={myOkay} alt="okay" className='' style={{ width: '14px', height: '14px' }} /> &nbsp;&nbsp; #1 Editos Choice App of 2023</p>
            <h1>Best App for your<br />
              modern lifestyle</h1>
              <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">jaimeen</button>
            <p>Increase productivity with a simple to-do app. app for<br />
              managing your personal budgets.</p>
            <div className="row d-flex">
              <div className="mb-2">
                <button className='btn btn-primary'>Try for Free</button>
              </div>
              <div className="">
                <a href="/" className='text-decoration-none'>Watch demo video</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 text-center bestappPhoto ">
            <img src='/imges/Screenshot 2023-05-02 150214.png' className='img-fluid shadow mt-3' alt="mobile" style={{ width: '200px' }} />

          </div>
        </div>
      </div>



















      {/* part 3 -------------------------------*/}
      {/* <div className='container-fluid mt-5'>
    <p className='d- text-center   flex-column justify-content-center align-content-center'>trusted by companies like</p>
    <div className="d-flex justify-content-between">
        <img src={company1} className='img-fluid' alt="company1" style={{width:'80px'}}/>
        <img src={company2} alt="company2" style={{width:'80px'}}/>
        <img src={company3} alt="company3" style={{width:'80px'}}/>
        <img src={company4} alt="company4" style={{width:'80px'}}/>
        <img src={company5} alt="company5" style={{width:'80px'}}/>
        
    </div>
 </div> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className='text-center'> trusted by companies like</p>
          </div>
        </div>
        <div className="row text-center companyIcon">
        
            <img className='img-fluid  iconHD1' src="./imges/amazon-pay.png" style={{width:'60px'}}/>
          

          
            <img className='img-fluid iconHD2' src="./imges/apple (1).png" alt="" style={{width:'60px'}} />
          

          
            <img className='img-fluid iconHD3' src="./imges/facebook.png" alt="" style={{width:'60px'}} />
        

          
            <img className='img-fluid iconHD4' src="./imges/samsung.png" alt="" style={{width:'60px'}} />
        

          
            <img className='img-fluid iconHD5' src="./imges/microsoft.png" alt="" style={{width:'60px'}} />
      
        </div>
      </div>
    </>
  );
}

export default Header;
