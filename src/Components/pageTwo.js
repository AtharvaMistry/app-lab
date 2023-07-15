
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ptPhoto from './images/Screenshot 2023-05-02 165810.png';
import myPerformance from './images/Screenshot 2023-05-02 172026.png';
import myPrototyping from './images/Screenshot 2023-05-02 172042.png';
import myVector from './images/Screenshot 2023-05-02 172100.png';
import myReward from './images/Screenshot 2023-05-02 175520.png';
import myNetwork from './images/Screenshot 2023-05-02 175510.png';
import myAutomatic from './images/Screenshot 2023-05-02 175501.png';
import myDesign from './images/Screenshot 2023-05-02 181210.png';
import myApp from './images/Screenshot 2023-05-03 101959.png';
import myTime from './images/Screenshot 2023-05-03 102008.png';
import myStorage from './images/Screenshot 2023-05-03 102021.png';
import myCustom from './images/Screenshot 2023-05-03 102030.png';
import myPlanning from './images/Screenshot 2023-05-03 102037.png';
import mySupport from './images/Screenshot 2023-05-03 102044.png';
import myFeature from './images/Screenshot 2023-05-03 110244.png';
import myReview from './images/Screenshot 2023-05-03 115956.png';
import myCeo from './images/Screenshot 2023-05-03 120802.png';
import myDownload from './images/Screenshot 2023-05-03 123941.png';
import myGoogle from './images/Screenshot 2023-05-03 124000.png';
import myApple from './images/Screenshot 2023-05-03 124008.png';
import { useState } from 'react';

const question = [
    {
        id: 1,
        title: 'How to contact with riders emergency?',
        disc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
        id: 2,
        title: 'App installation failed, how to update system information?',
        disc: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
    },
    {
        id: 3,
        title: 'Website reponse taking time, how to improve?',
        disc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    },
    {
        id: 4,
        title: 'How to contact with riders emergency?',
        disc: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
    }

]



function PageTwo() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    // const [isOpen , setIsOpen] = useState(false);
    const [master, setMaster] = useState('99');


    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };

    // const toggleContent = () => {
    //     setIsOpen(!isOpen);
    //   }



    return (
        <>
            {/* 
        {data?.map((res, index) => {
            return (
                <>
                <p>{res.title}</p>
                <p>{number == res.id ?:""  }</p>
                <div onClick={setNumber(res.id)}>

                </div>
                </>
            )
        })} */}

                {/* -------------Awesome app-------------- */}
                

            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {/* <div className="col-xs-6">
                         <img src={ptPhoto} alt="ptPhoto" className='img-fluid' style={{width:'400px'}}/>
                    </div> */}


                    <div className="col-xs-6 mt-4 text-center">
                        <h2>Awesome apps<br />features</h2>
                        <p>Increase productivity with a simple to-do app. app for<br />
                            managing your personal budgets.</p>
                            <div className="awesomePhoto">
                        <div className='text-center'>
                            <img src={myPerformance} alt="myPerformance" className='img-fluid ' style={{width:'60px'}} />
                            <div>
                                <h4>Fast Performance</h4>
                                <p>Get your blood tests delivered at<br />
                                    home collect a sample from the<br />
                                    news your blood tests.</p></div>
                        </div>
                        <div className='text-center'>
                            <img src={myPrototyping} alt="myPrototyping" className='img-fluid' style={{width:'60px'}}/>
                            <div>
                                <h4>Prototyping</h4>
                                <p>Get your blood tests delivered at<br />
                                    home collect a sample from the<br />
                                    news your blood tests.</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <img src={myVector} alt="myVector" className='img-fluid' style={{width:'60px'}}/>
                            <div>
                                <h4>Vector Editing</h4>
                                <p>Get your blood tests delivered at<br />

                                    home collect a sample from the<br />
                                    news your blood tests.</p>
                        </div>
                        </div>
                        </div>


                        
                    </div>
                </div>
            </div>
            {/* --------------- Jackpot---------------- */}

            <div className="container-fluid text-center mt-5 py-5">
                <div className="row">
                    <div className="col-md-6 border-end">
                        <h2>Jackpots that<br />
                            you may love this<br />
                            anytime & anywhere</h2>
                    </div>
                    <div className="col-md-6 mt-4">
                        <p>The rise of mobile devices transforms the way we<br />
                            consume information entirely and the world's most
                        </p>
                    </div>
                </div>
            </div>

            {/* ------------------------------network effect----------- */}

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={myNetwork} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4 className='text-primary'>Network Effect
                        </h4>
                        <p>Get your blood tests delivered at<br />
                            home collect a sample from the<br />
                            news your blood tests.
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <img src={myAutomatic} alt="myAutomatic" style={{ width: '50px' }} />
                        <h4 className='text-danger'>Automatic Payouts</h4>
                        <p>Get your blood tests delivered at<br />
                            home collect a sample from the<br />
                            news your blood tests.
                        </p>
                    </div>

                    <div className="col-md-4 text-center">
                        <img src={myReward} alt="myReward" style={{ width: '50px' }} />
                        <h4 className='text-success'>Bigger Rewards Method
                        </h4>
                        <p>Get your blood tests delivered at<br />
                            home collect a sample from the<br />

                            news your blood tests.
                        </p>
                    </div>
                </div>
            </div>

            {/* ------------desgin and build------------------------------ */}
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src={myDesign} alt="myDesign" />
                    </div>
                    <div className="col-md-6 text-center">
                        <h1 className='font-weight-bold mt-2 py-5'>Designed and built by
                            the latest code integration</h1>
                        <p>the rise of mobile device transformation we see<br />
                            consume information enterely and the world's most<br />
                            elevant channels such as facebook</p>
                        <button className='btn btn-primary '>Learn More</button>
                    </div>
                </div>
            </div>


            {/* ---------------why our app--------------------------- */}

            <div className="container-fluid">

                <div>
                    <h1 className='text-center mt-5'>Why you should choose<br />
                        our app</h1>
                    <p className='text-center'>The rise of mobile devices transforms the way <br />we consume information entirely
                        and the world's most elevant<br /> channels such as Facebook.
                    </p>
                </div>


                <div className="ourappText">
                    <div className="text-center">
                        <img src={myApp} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>App Development</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>

                    <div className="text-center">
                        <img src={myTime} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>Customization</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>

                    <div className=" text-center">
                        <img src={myStorage} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>10 Times Award</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>
                </div>

                <div className="ourappText">
                    <div className=" text-center">
                        <img src={myCustom} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>UX Planning</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>

                    <div className="text-center">
                        <img src={myPlanning} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>Cloud Storage</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>

                    <div className="text-center">
                        <img src={myPlanning} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                        <h4>Customer Support</h4>
                        <p>Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests.
                        </p>
                    </div>
                    </div>


            </div>

            {/* ------------------ultimate feature-------------------------- */}

            <div className="container-fluid mt-5 ">
                

                    <div className="col-xs-6 ">
                        <div className="row text-center">
                            <h1>Ultimate features<br />
                                that we built
                            </h1>
                            <p>The rise of mobile devices transforms the way we<br />
                                consume information entirely.
                            </p>
                        </div>

                        
                         <div className="ultimatePT1 me-2">
                            <div className="col-xs-6 text-center">
                                <img src={myApp} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                                <h4>App Development</h4>
                                <p>Get your blood tests delivered at
                                    home collect a sample from the
                                    news your blood tests.
                                </p>
                            </div>

                            <div className="col-xs-6 text-center me-2">
                                <img src={myTime} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                                <h4>Customization</h4>
                                <p>Get your blood tests delivered at
                                    home collect a sample from the
                                    news your blood tests.
                                </p>
                            </div>
                        

                        
                            <div className="col-xs-6 text-center me-2">
                                <img src={myStorage} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                                <h4>10 Times Award</h4>
                                <p>Get your blood tests delivered at
                                    home collect a sample from the
                                    news your blood tests.
                                </p>
                            </div>
                    

                            
                            <div className="col-xs-6 text-center me-2">
                                <img src={myCustom} className='img-fluid' alt="myNetwork" style={{ width: '50px' }} />
                                <h4>UX Planning</h4>
                                <p>Get your blood tests delivered at
                                    home collect a sample from the
                                    news your blood tests.
                                </p>
                            </div>
                        </div>
                
                             <div className='text-center'>
                            <button className='btn btn-primary  col-xs-1'>see all</button>
                            </div>
                        </div>

        

                      <div className="col-xs-6 text-center ultimatePhoto">
                        <img src={myFeature} className='img-fluid mt-5' alt="myNetwork"/>
                    </div>

            
            </div>

            {/* -------------------get awesome feature----------------------- */}

            <div className="container-fluid mt-5 mb-5 ">
                <div className="row text-center">
                    <h1>Get awesome features, without<br />
                        extra charges
                    </h1>
                </div>

                <div className="row text-center">
                    <p>The rise of mobile devices transforms the way we consume information entirely<br />
                        and the world's most elevant channels such as Facebook.
                    </p>
                </div>

                <div className="row d-flex justify-content-center align-content-center">
                    <div class="btn-group btn-group-fill" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onClick={() => { setMaster("99") }}>Monthly</button>
                        <button type="button" class="btn btn-primary" onClick={() => { setMaster("1000") }}>Yearly</button>
                    </div>

                </div>

                <div className="mt-5 text-center cardMain">
                    <div className="border-0 mb-4 ">
                        <div class="card border-0 shadow card1">
                            <div class="card-header">
                                <h1>$0</h1>
                                <h2>Business Class</h2>
                                <p>For xsall teams or office</p>
                            </div>
                            <div class="card-body">
                                <p>Drag & Drop Builder</p>
                                <p>1000's of Templates</p>
                                <p>Blog Support Tools</p>
                                <p>eCommerce Store</p>
                                <button className='btn btn-secondary'>start free trial</button>
                            </div>
                        </div>
                    </div>
                    <div className="border border-0">
                        <div class="card border-0 shadow card1">
                            <div class="card-header">
                                <h1>${master}</h1>
                                <h2>Pro master</h2>
                                <p>For Best opportunity</p>
                            </div>
                            <div class="card-body">
                                <p>Drag & Drop Builder</p>
                                <p>1000's of Templates</p>
                                <p>Blog Support Tools</p>
                                <p>eCommerce Store</p>
                                <button className='btn btn-primary'>subscribe now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------------  meet client satisfaction----------------------- */}

            <div className="container-fluid">
                <div className="row">

                    <div className="col-xs-6 text-center mb-4 ">
                        <img src={myReview} alt="review" className='img-fluid mt-5' style={{ width: '400px' }} />
                    </div>

                    <div className="col-xs-6 text-center">
                        <h1>Meet Client Satisfaction
                            by using product
                        </h1>
                        <p>The rise of mobile devices transforms the way we consume.<br />
                            elevant channels such as Facebook.
                        </p>
                        <h3>User friendly & Customizable</h3>
                        <p>Bring to the table win-win survival strategies to ensure proactive domi-<br />
                            nation. At the end of the day, going forward, a new normal that has<br />
                            evolved from generation X is on the runway heading towards a<br />
                            streamlined cloud solution. User generated content in real-time will<br />
                            have multiple touchpoints for offshoring.
                        </p>
                        {/* <div className='d-flex justify-content-start align-content-center'>
                            <img src={myCeo} alt="ceo" className='img-fluid d-flex' style={{width:'40px'}}/>
                            <h4 className='d-flex mr-3 text-center'>Zoltan Nemeth</h4>
                            <p className='text-center'>CEO of Pixler Lab</p>
                        </div> */}
                    </div>

                </div>
            </div>

            {/* ---------------frequently asked questions----------------------------- */}

            {/* <div className="container-fluid mt-5">
                <div className="row  ">
                    <h1 className='text-center'>Frequently asked questions</h1>
                    <p className='text-center'>The rise of mobile devices transforms the way we consume information entirely<br/>
                    and the world's most elevant channels such as Facebook.
                    </p>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-xs-8 bg-light">
                       <h2 onClick={toggleContent}>How to contact with riders emergency?</h2>
                    
                       <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p> 
                    </div>

                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-xs-8 bg-light mt-2 d-flex justify-content-between align-content-center ">
                        <h3 onClick={toggleContent}>App installation failed, how to update system information?</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
            
                    </div>

                </div>

                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-xs-8 bg-light mt-2 d-felx justify-content-between align-content-center">
                        <h3 onClick={toggleContent}>Website reponse taking time, how to improve?</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                </div>
 
                <div className="row d-flex justify-content-center align-content-center">
                    <div className="col-xs-8 bg-light mt-2  d-felx justify-content-between align-content-center">
                        <h3 onClick={toggleContent}>New update fixed all bug and issues</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                </div>

                <div className="row d-flex justify-content-center align-content-center mb-5">
                    <div className="col-xs-8 bg-light mt-2 d-felx justify-content-between align-content-center">
                        <h3 onClick={toggleContent}>How to contact with riders emergency?</h3>
                        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches<br/>
                        to corporate strategy foster collaborative thinking to further the overall value proposition. Organically<br/>
                        grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>
                    </div>
                </div>

                


                
                </div>
            </div> */}
            {question?.map((res) => {
                return (
                    <div className='d-flex mt-2 ps-4 bg-light'>
                        <div key={res.id} >
                            <h4 onClick={() => handleQuestionClick(res.id)}>
                                {res.title}
                            </h4>
                            {selectedQuestion === res.id && (
                                <p dangerouslySetInnerHTML={{ __html: res.disc }}></p>
                            )}
                        </div>
                    </div>
                )
            })}

            {/* ---------------- download our app--------------------- */}


            <div className="container-fluid mt-5 downloadPart">
    
                    <div>
                        <h1>Download our app now!</h1>
                        <p>the rise of mobile devices The rise of mobile<br/> devices transforms the way we consume information entirely<br />
                            and the world's most elevant channels such as Facebook.
                        </p>
                        <img src={myGoogle} alt="download" style={{ width: '100px' }} />
                    </div>

                    
                        <img className='img-fluid' src={myDownload} alt="download" style={{ width: '400px' }} />
                    
            </div>

            {/* ---------------------------------- */}

            <div className="container-fluid bg-light m-0">
                <h1 className='text-center'>AppLab</h1>
                <div className='d-flex justify-content-center align-content-center'>
                    <ul class="nav ">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">KeyFeature</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Testimal</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <p className='text-center text-muted'>Copyrights&#169; Jaimeen_makavana2023.All the rights are reserved.</p>
            </div>
        </>
    )
}
export default PageTwo;