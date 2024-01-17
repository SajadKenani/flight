import "../content/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import perfectSky from "../images/perfectSky.png"

import airplaneLogo from "../images/airplaneLogo.png"
import hotelLogo from "../images/hotelLogo.png"
import rentalCarLogo from "../images/rentalCarLogo.png"
import airlineLogo from "../images/airlineLogo.png"
import sightseeingLogo from "../images/sightseeingLogo.png"

import searchIcon from "../images/searchIcon.png"

import selectedVisa from "../images/selectedVisa.png"

import rightArrow from "../images/Icon.png"

import turkeyImage from "../images/turkeyImage.png"

import turkeyFlag from "../images/turkeyFlag.png"

import blueBackground from "../images/Rectangle 174.png"
import achievementLogo from "../images/image 316.png"

import occeanImage from "../images/occean.png"

import companyImage from "../images/image 392.png"

import arrow from "../images/arrow.png"

import leftImage from "../images/leftImage.png"
import middleImage from "../images/middleImage.png"
import rightImage from "../images/rightImage.png"

import backgroundSky from "../images/backgroundSky.png"

import arrowDownWhite from "../images/arrowDown.png"
import arrowDownBlack from "../images/arrowDownBlack.png" 

import testimonialImage from "../images/testimonialImage.png"

import profilePicture from "../images/profilePicture.png"

import star from "../images/star.png"

import image from "../images/image.png"

import hotelImage from "../images/hotelImage.png"

import { useState } from "react";

export const Content = () => {
  const [activatedetails, setActivatedetails] = useState([false, true, true, true, true]);

  const handleDetailsToggle = (num) => {
    const updatedActivatedetails = [...activatedetails];
    updatedActivatedetails[num] = !updatedActivatedetails[num];
    setActivatedetails(updatedActivatedetails);

    const myDiv = document.getElementById(`myDiv${num}`);
    const myArrow = document.getElementById(`arrowDiv${num}`);
    const myImage = document.getElementById(`image${num}`);
    const myPara = document.getElementById(`para${num}`);

    if (myDiv && myArrow && myImage && myPara) {
      if (!updatedActivatedetails[num]) {
        myDiv.classList.replace("frequentQuestionSquare-div", "frequentQuestionSquare-selectedDiv");
        myArrow.classList.replace("arrowCircle-div", "arrowCircle-selectedDiv");
        myPara.classList.remove("d-none");
        myImage.src = arrowDownWhite;
      } else {
        myDiv.classList.replace("frequentQuestionSquare-selectedDiv", "frequentQuestionSquare-div");
        myArrow.classList.replace("arrowCircle-selectedDiv", "arrowCircle-div");
        myPara.classList.add("d-none");
        myImage.src = arrowDownBlack;
      }
    }
  };


  
    return (
        <div className="imageContainer" style={{position: "relative"}}>
            <img className="myImage" src={perfectSky} />

            <div className="d-flex justify-content-center">
              <div style={{position: "absolute", marginTop: "-470px"}}>
              <h1 className="text-white display-2 weight-600"> Let’s find your dream distanation </h1>
              <p className="text-white p-2" style={{fontWeight: "500", fontSize: "25px"}}> Find awesome flights, hotels, packages and more </p>

             
              </div>
              <div className="container">
    
              <div className="mainDiv row">
                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1" style={{margin: "30px", marginTop: "35px", marginRight: "10px"}}>
                    <div className="miniSquare d-flex">
                        <img className="w-25 h-100 m-1" src={airplaneLogo}/>
                        <h4 style={{marginLeft: "5px", marginRight: "40px",  marginTop: "2px"}}>Flights</h4>
                    </div>

                </div>

                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1" style={{margin: "30px", marginTop: "35px", marginRight: "-20px"}}>
                    <div className="miniSelectedSquare d-flex">
                        <img className="w-50 h-75 m-1" src={selectedVisa}/>
                        <h4 className="text-white" style={{marginLeft: "5px", marginRight: "35px", marginTop: "2px", width: "50px"}}>Visa</h4>
                    </div>

                </div>

                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1" style={{margin: "30px", marginTop: "35px", marginRight: "5px"}}>
                    <div className="miniSquare d-flex">
                        <img className=" " style={{marginTop: "5px", marginLeft: "10px", width: "25px", height: "25px"}} src={hotelLogo}/>
                        <h4 style={{marginLeft: "5px", marginRight: "8px", marginTop: "2px"}}>Hotels</h4>
                    </div>

                </div>

                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1" style={{margin: "30px", marginTop: "35px", marginRight: "50px"}}>
                    <div className="miniSquare d-flex">
                        <img  style={{marginTop: "5px", marginLeft: "10px", width: "25px", height: "25px"}} src={rentalCarLogo}/>
                        <h4  style={{marginLeft: "5px", marginRight: "5px", width: "120px", marginTop: "2px"}}>Car rental</h4>
                    </div>

                </div>

                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1" style={{margin: "30px", marginTop: "35px", marginRight: "10px",}}>
                    <div className="miniSquare d-flex" >
                        <img style={{marginTop: "5px", marginLeft: "10px", marginRight: "5px", width: "25px", height: "25px"}} src={airlineLogo}/>
                        <h4 style={{marginLeft: "5px", marginRight: "8px", marginTop: "2px", width: "70px"}}>F & H</h4>
                    </div>

                </div>

                <div className="d-flex justify-content-start  col-6 col-sm-5 col-lg-2 col-xl-1"  style={{margin: "30px", marginTop: "35px", marginRight: "-10px"}}>
                    <div className="miniSquare d-flex" >
                        <img style={{marginTop: "3px", marginLeft: "10px", marginRight: "5px", width: "30px", height: "30px"}} src={sightseeingLogo}/>
                        <h4 style={{marginLeft: "5px", marginRight: "10px", marginTop: "2px", width: "100px"}}>Package</h4>
                    </div>

                </div>


              <div className="m-4 mt-0 row">

                <div className="blueSpace col-6 col-sm-5 col-lg-2 col-xl-1 m-2 ">
                    
                    <p style={{textAlign: "start", margin: "10px"}}> Select country </p>
                    <h4 style={{textAlign: "start", margin: "10px", marginTop: "-7px"}}> Istanbul , turkey </h4>
                    <p style={{textAlign: "start", margin: "10px", marginTop: "-3px"}}> Where am i going ? </p>
                </div>

                <div className="circle col-6 col-sm-5 col-lg-2 col-xl-1 "><img className="w-100" style={{marginTop: "15px"}} src={rightArrow} /></div>

                <div className="blueSpace col-6 col-sm-5 col-lg-2 col-xl-1 m-2 ">
                    
                    <p style={{textAlign: "start", margin: "10px"}}> nationality </p>
                    <h4 style={{textAlign: "start", margin: "10px", marginTop: "-7px"}}> Baghdad, iraq </h4>
                    <p style={{textAlign: "start", margin: "10px", marginTop: "-3px"}}> Where am i from ? </p>
                </div>

                <div className="blueSpace col-6 col-sm-5 col-lg-2 col-xl-1 m-2 d-flex justify-content-between" style={{width: "430px"}}>
                    <div>
                    <p style={{textAlign: "start", margin: "10px"}}> Entry </p>
                    <h4 style={{textAlign: "start", margin: "10px", marginTop: "-7px"}}> 23 / 5 / 2023 </h4>
                    <p style={{textAlign: "start", margin: "10px", marginTop: "-3px"}}> Friday </p>
                    </div>

                    <div>
                    <p style={{textAlign: "start", margin: "10px"}}> Exit </p>
                    <h4 style={{textAlign: "start", margin: "10px", marginTop: "-7px"}}> 23 / 5 / 2023 </h4>
                    <p style={{textAlign: "start", margin: "10px", marginTop: "-3px"}}> Friday </p>
                    </div>
                </div>

                <div className="blueSpace col-6 col-sm-5 col-lg-2 col-xl-1 m-2 " style={{width: "200px"}}>
                    <p style={{textAlign: "start", margin: "10px"}}> no. of travellers </p>
                    <h4 style={{textAlign: "start", margin: "10px", marginTop: "-7px"}}> 2 travellers </h4>
                    <p style={{textAlign: "start", margin: "10px", marginTop: "-3px"}}> Economy </p>
                </div>

              </div>

              <div className="row m-4 mt-2">
                <div className="col-6 col-sm-6 col-lg-2 col-xl-2 m-2 d-flex">

     
                <input style={{width: "40px", height: "20px", marginTop: "2px"}} type="checkbox" id="myCheckbox" name="myCheckbox" />
                <h5 > Free cancellation </h5>
                </div>
  

                <div className="col-6 col-sm-6 col-lg-1 col-xl-1 mt-0 mb-0 m-5" >
                <div className="searchBar d-flex justify-content-between" >
                    <h3 className="text-white" style={{marginLeft: "40px", marginTop: "5px"}}>Search</h3>
                    <div className="searchCircle"><img style={{width: "20px", marginTop: "15px"}} src={searchIcon}/></div>
                </div>
                </div>

        

              </div>
           
              </div>
              </div>



            </div>

            {/* Avaliable Countries Section */}
            <div className="countiresSection">
                <p style={{color: "#70D6FF", marginBottom: "5px"}}> Countries </p>
                <h2 style={{fontWeight: "700"}}> Available countries for Visa </h2>
 
                {/* line */}
                <div className="horizontalLineDiv"><div className="horizontalLine"></div></div>

                <div className="container">
                <div className="row d-flex justify-content-between" style={{width: "100%", margin: "5px"}}>

                    <div className="d-flex justify-content-center col-7 col-sm-6 col-lg-4 col-xl-1" >
                        <div className="cardContent">
                            <img style={{width: "240px"}} src={turkeyImage}/>
                            <div className="d-flex justify-content-center"><div className="myCircle"><img className="w-100" src={turkeyFlag} /></div></div>
                            <h5> Jordan - JO </h5>
                            <div className="d-flex justify-content-center"><div className="mySearchCircle"><img className="w-50 h-50 mt-2" src={searchIcon} /></div></div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center col-7 col-sm-6 col-lg-4 col-xl-1" >
                        <div className="cardContent">
                            <img style={{width: "240px"}} src={turkeyImage}/>
                            <div className="d-flex justify-content-center"><div className="myCircle"><img className="w-100" src={turkeyFlag} /></div></div>
                            <h5> Jordan - JO </h5>
                            <div className="d-flex justify-content-center"><div className="mySearchCircle"><img className="w-50 h-50 mt-2" src={searchIcon} /></div></div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center col-7 col-sm-6 col-lg-4 col-xl-1" >
                        <div className="cardContent">
                            <img style={{width: "240px"}} src={turkeyImage}/>
                            <div className="d-flex justify-content-center"><div className="myCircle"><img className="w-100" src={turkeyFlag} /></div></div>
                            <h5> Jordan - JO </h5>
                            <div className="d-flex justify-content-center"><div className="mySearchCircle"><img className="w-50 h-50 mt-2" src={searchIcon} /></div></div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center col-7 col-sm-6 col-lg-4 col-xl-1" >
                        <div className="cardContent">
                            <img style={{width: "240px"}} src={turkeyImage}/>
                            <div className="d-flex justify-content-center"><div className="myCircle"><img className="w-100" src={turkeyFlag} /></div></div>
                            <h5> Jordan - JO </h5>
                            <div className="d-flex justify-content-center"><div className="mySearchCircle"><img className="w-50 h-50 mt-2" src={searchIcon} /></div></div>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center col-7 col-sm-6 col-lg-4 col-xl-1" >
                        <div className="cardContent">
                            <img style={{width: "240px"}} src={turkeyImage}/>
                            <div className="d-flex justify-content-center"><div className="myCircle"><img className="w-100" src={turkeyFlag} /></div></div>
                            <h5> Jordan - JO </h5>
                            <div className="d-flex justify-content-center"><div className="mySearchCircle"><img className="w-50 h-50 mt-2" src={searchIcon} /></div></div>
                        </div>

                    </div>

                </div>
                </div>

            </div>

            <div className="d-flex justify-content-center "  style={{marginBottom: "200px"}}>
                <div className="searchBar d-flex justify-content-between" style={{width: "220px", marginLeft: "0"}}>
                    <h4 className="text-white" style={{marginLeft: "40px", marginTop: "8px"}}>View less</h4>
                    <div className="searchCircle"><img style={{width: "20px", marginTop: "15px"}} src={searchIcon}/></div>
                </div>
            </div>

        <div className="container">
        <div className="row d-flex justify-content-between p-5">

            <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
            <div className="d-flex justify-content-center">
                <div>
                <p style={{ fontSize: "20px", textAlign: "start" }}>Middle east countries</p>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                </div>
            </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            <div className="d-flex justify-content-center">
                <div>
                <p style={{ fontSize: "20px", textAlign: "start" }}>European countries</p>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                </div>
            </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
            <div className="d-flex justify-content-center">
                <div>
                <p style={{ fontSize: "20px", textAlign: "start" }}>Asian countries</p>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                <div className="divSection mt-4 d-flex">
                    <div className="d-flex justify-content-center">
                    <img className="h-75" style={{ marginTop: "6.5px", marginLeft: "20px", marginRight: "20px" }} src={turkeyFlag} alt="Turkey Flag" />
                    </div>
                    <h5 style={{ marginTop: "13px" }}>Argentina - AR</h5>
                </div>

                </div>
            </div>
            </div>

        </div>
        </div>


            <div className="container mt-5">
              <div className="row d-flex justify-content-between">
        
                <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4 boxSection">
                  <div>
                    <img className="w-25 mt-5" src={blueBackground} alt="Background" />
                  </div>
                  <div style={{ marginTop: '-70px' }}>
                    <img className="" style={{ width: '50px', height: '50px' }} src={achievementLogo} alt="Achievement Logo" />
                  </div>
                  <h4 className="mt-4">Lorem ipsum dolor sit</h4>
                  <p className="mt-2 p-2" style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem.</p>
                </div>
        
                <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4 boxSection">
                  <div>
                    <img className="w-25 mt-5" src={blueBackground} alt="Background" />
                  </div>
                  <div style={{ marginTop: '-70px' }}>
                    <img className="" style={{ width: '50px', height: '50px' }} src={achievementLogo} alt="Achievement Logo" />
                  </div>
                  <h4 className="mt-4">Lorem ipsum dolor sit</h4>
                  <p className="mt-2 p-2" style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem.</p>
                </div>
        
                <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4 boxSection">
                  <div>
                    <img className="w-25 mt-5" src={blueBackground} alt="Background" />
                  </div>
                  <div style={{ marginTop: '-70px' }}>
                    <img className="" style={{ width: '50px', height: '50px' }} src={achievementLogo} alt="Achievement Logo" />
                  </div>
                  <h4 className="mt-4">Lorem ipsum dolor sit</h4>
                  <p className="mt-2 p-2" style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem.</p>
                </div>
        
              </div>
            </div>
        
             <div className="container mt-5">
               <div className="row d-flex justify-content-between">
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
                   <div>
                     <h3 className="mt-4 text-center text-lg-start" >lorem ipsum dolor</h3>
                     <h3 className="text-center text-lg-start" style={{ marginTop: '0px' }}>sit lorem</h3>
                     <div className="d-flex d-lg-block justify-content-center"><div className="horizontalLine"></div></div>
                     <p className="text-center text-lg-start" style={{ color: 'gray', marginTop: '-50px' }}>lorem ipsum dolor sit amet, consectu elit.</p>
                   </div>
                 </div>
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
                   <img src={occeanImage} alt="Ocean" className="w-100" />
                 </div>
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
                   <img src={occeanImage} alt="Ocean" className="w-100" />
                 </div>
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
                   <img src={occeanImage} alt="Ocean" className="w-100" />
                 </div>
               </div>
             </div>

            <div>
 
            <h2 style={{fontWeight: "700", marginTop: "50px"}}> Trusted by global brands </h2>
 
            {/* line */}
            <div className="horizontalLineDiv"><div className="horizontalLine" style={{width: "370px"}}></div></div>
            </div>

       
            <div className="container mt-5">
            <div className="row justify-content-between">
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
              <div className="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-1 mb-4">
                <img src={companyImage} alt="Company Logo" className="w-100" />
              </div>
            </div>
          </div>

          <section className="d-lg-flex justify-content-between m-5">
            <div className="mt-2" style={{marginLeft: "40px", marginBottom: "50px"}}>
              <p style={{color: "#70D6FF", textAlign: "start", marginBottom: "5px"}}> Tips </p>
              <h3 className="" style={{marginBottom: "-10px"}}> How it works ? </h3>

               {/* line */}
               <div className="horizontalLineDiv"><div className="horizontalLine" style={{width: "100%", height: "1px"}}></div></div>
            </div>

            <div className="squareDiv row">

            <div className="  col-6 col-sm-3 col-lg-3 col-xl-3" style={{margin: "30px", marginTop: "23px", marginRight: '50px'}}>
                    <div className="miniSelectedSquare d-flex" style={{width: "250px", backgroundColor: "#70D6FF", borderColor: "#70D6FF"}}>
                       
                        <p className="text-white" style={{marginLeft: "20px", marginRight: "5px", marginTop: "2px", fontSize: "20px", fontWeight: "400"}}> Electronic visa ( e-visa) </p>
                    </div>

            </div>

            <div className=" col-6 col-sm-3 col-lg-3 col-xl-3" style={{margin: "30px", marginTop: "23px", marginRight: "0px"}}>
                <div className="miniSquare d-flex" style={{width: "200px"}}>
                    <p style={{marginLeft: "20px", marginRight: "5px", marginTop: "2px", fontSize: "20px", fontWeight: "400"}}> Security approval </p>
                </div>

            </div>

            <div className="  col-6 col-sm-2 col-lg-2 col-xl-2" style={{margin: "30px", marginTop: "23px"}}>
                <div className="miniSquare d-flex">
                <p style={{marginLeft: "20px", marginRight: "20px", marginTop: "2px", fontSize: "20px", fontWeight: "400"}}> sticker </p>
                </div>

            </div>

            </div>
          </section>

          <section>

            <div className="d-flex justify-content-between " style={{marginLeft: "240px", marginRight: "240px"}}>
              <div className="arrowDiv"> <img style={{transform: "scaleX(-1)"}} src={arrow} className="w-75 mt-1" /> </div>
              
              <div className="arrowDiv"> <img src={arrow} className="w-75 mt-1" /> </div>

            </div>

            <div className="container mt-1 d-flex justify-content-center ">
               <div className="row d-flex justify-content-between">
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4">
                   <div className="secondaryDiv"> 
                   <div className="mt-2">
    
                    <h4 style={{marginBottom: "-30px", padding: "20px", paddingTop: "33px"}}> Receive document via email </h4>

                      {/* line */}
                      <div className="horizontalLineDiv"><div className="horizontalLine" style={{width: "150px", height: "1px", marginBottom: "60px"}}></div></div>
                      <img className="m-5" style={{width: "100px"}} src={leftImage} />
                      <p className="" style={{fontSize: "14px", paddingLeft: "36px", paddingRight: "36px", color: "gray", marginTop: "-20px"}}> Complete our easy online application and pay with credit card or Complete our easy online application and pay with credit card or PayPal PayPal </p>
                    </div>

                   </div>
                 </div>
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4">
                 <div className="primaryDiv">
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4">
                   <div className="secondaryDiv"> 
                   <div className="mt-2">
    
                    <h4 style={{marginBottom: "-30px", padding: "20px", paddingTop: "33px"}}> Fill out online application </h4>

                      {/* line */}
                      <div className="horizontalLineDiv"><div className="horizontalLine" style={{width: "150px", height: "1px", marginBottom: "60px"}}></div></div>
                      <img className="m-5" style={{width: "100px"}} src={middleImage} />
                      <p className="" style={{fontSize: "14px", paddingLeft: "36px", paddingRight: "36px", marginTop: "-20px"}}> Complete our easy online application and pay with credit card or Complete our easy online application and pay with credit card or PayPal PayPal </p>
                    </div>

                   </div>
                 </div>
         
                  

                  </div>
                 </div>
         
                 <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4">
                   <div className="secondaryDiv">
                   <div className="col-12 col-sm-6 col-lg-4 col-xl-4 mb-4">
                   <div className="secondaryDiv"> 
                   <div className="mt-2">
    
                    <h4 style={{marginBottom: "-30px", padding: "20px", paddingTop: "33px"}}> Enter destination </h4>

                      {/* line */}
                      <div className="horizontalLineDiv"><div className="horizontalLine" style={{width: "150px", height: "1px", marginBottom: "60px"}}></div></div>
                      <img className="m-5" style={{width: "100px"}} src={rightImage} />
                      <p className="" style={{fontSize: "14px", paddingLeft: "36px", paddingRight: "36px", color: "gray", marginTop: "-20px"}}> Complete our easy online application and pay with credit card or Complete our easy online application and pay with credit card or PayPal PayPal </p>
                    </div>

                   </div>
                 </div>
         
                    
                    </div>
                 </div>
               </div>
             </div>



          </section>

          <section className="mt-5" >
            <img style={{width: "100%", objectFit: "cover", height: "846px", position: "relative"}} src={backgroundSky} />
            <div style={{position: "absolute", marginTop: "-800px", width: "100%"}} className="text-white d-flex justify-content-center">

              <div>
                <h2 > frequently asked questions </h2> 
                <p style={{fontSize: "18px"}}> What our clients usually asked about our Visa applying </p>
               
                <div id="myDiv0" className="frequentQuestionSquare-selectedDiv d-flex justify-content-between mt-5">
                  <div>
                  <h4 className="text-black" style={{textAlign: "start", padding: "14px"}}> What type of travel visa does Flamingo offer? </h4>
                  <p id="para0" className="" style={{color: "gray", textAlign: "start", paddingLeft: "14px", paddingRight: "20px", marginTop: "-15px"}}> Among the travel visas Flamingo offers are custom tours, group tours, luxury travel, more. We work with you to create an itinerary that meets your specific requirements. </p>
                  </div>
                  

                  <div id="arrowDiv0" className="arrowCircle-selectedDiv" onClick={() => handleDetailsToggle(0)}>
                    <img id="image0" className="w-75"  src={arrowDownWhite}/>
                  </div>

                  
                </div>

                <div id="myDiv1" className="frequentQuestionSquare-div d-flex justify-content-between mt-4">
                  <div>
                  <h4 className="text-black" style={{textAlign: "start", padding: "14px"}}> What type of travel visa does Flamingo offer? </h4>
                  <p id="para1" className="d-none" style={{color: "gray", textAlign: "start", paddingLeft: "14px", paddingRight: "20px", marginTop: "-15px"}}> Among the travel visas Flamingo offers are custom tours, group tours, luxury travel, more. We work with you to create an itinerary that meets your specific requirements. </p>
                  </div>
                  

                  <div id="arrowDiv1" className="arrowCircle-div" onClick={() => handleDetailsToggle(1)}>
                    <img id="image1" className="w-75"  src={arrowDownBlack}/>
                  </div>

                  
                </div>

                <div id="myDiv2" className="frequentQuestionSquare-div d-flex justify-content-between mt-4">
                  <div>
                  <h4 className="text-black" style={{textAlign: "start", padding: "14px"}}> What type of travel visa does Flamingo offer? </h4>
                  <p id="para2" className="d-none" style={{color: "gray", textAlign: "start", paddingLeft: "14px", paddingRight: "20px", marginTop: "-15px"}}> Among the travel visas Flamingo offers are custom tours, group tours, luxury travel, more. We work with you to create an itinerary that meets your specific requirements. </p>
                  </div>
                  

                  <div id="arrowDiv2" className="arrowCircle-div" onClick={() => handleDetailsToggle(2)}>
                    <img id="image2" className="w-75"  src={arrowDownBlack}/>
                  </div>

                  
                </div>

                <div id="myDiv3" className="frequentQuestionSquare-div d-flex justify-content-between mt-4">
                  <div>
                  <h4 className="text-black" style={{textAlign: "start", padding: "14px"}}> What type of travel visa does Flamingo offer? </h4>
                  <p id="para3" className="d-none" style={{color: "gray", textAlign: "start", paddingLeft: "14px", paddingRight: "20px", marginTop: "-15px"}}> Among the travel visas Flamingo offers are custom tours, group tours, luxury travel, more. We work with you to create an itinerary that meets your specific requirements. </p>
                  </div>
                  

                  <div id="arrowDiv3" className="arrowCircle-div" onClick={() => handleDetailsToggle(3)}>
                    <img id="image3" className="w-75"  src={arrowDownBlack}/>
                  </div>

                  
                </div>

                <div id="myDiv4" className="frequentQuestionSquare-div d-flex justify-content-between mt-4" style={{zIndex: "32432", position: "absolute"}}>
                  <div>
                  <h4 className="text-black" style={{textAlign: "start", padding: "14px"}}> What type of travel visa does Flamingo offer? </h4>
                  <p id="para4" className="d-none" style={{color: "gray", textAlign: "start", paddingLeft: "14px", paddingRight: "20px", marginTop: "-15px"}}> Among the travel visas Flamingo offers are custom tours, group tours, luxury travel, more. We work with you to create an itinerary that meets your specific requirements. </p>
                  </div>
                  

                  <div id="arrowDiv4" className="arrowCircle-div" onClick={() => handleDetailsToggle(4)}>
                    <img id="image4" className="w-75"  src={arrowDownBlack}/>
                  </div>

                  
                </div>

                
              </div>

              
             
             

            </div>

            <div className="whiteDiv "></div>


          </section>


          <section className="container" style={{marginBottom: "100px"}}>
            <div className="row">

            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-2 rightSquare-div p-4" >
              <p> Our testimonials </p>
              <h3 style={{marginTop: "-10px"}}> What Our Customer Say Us </h3>

              <div className="d-flex justify-content-between mt-4 starsDiv" > 
                <p class> Most attractive packages </p>
                <div className="d-flex">
                  <img style={{width: "20px", height: "20px"}} src={star}/>
                  <img style={{width: "20px", height: "20px"}} src={star}/>
                  <img style={{width: "20px", height: "20px"}} src={star}/>
                  <img style={{width: "20px", height: "20px"}} src={star}/>


                </div>

              </div>

              <p className="myParagrapgh text-lg-start text-center" style={{ marginTop: "10px"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo. </p>
                
                <div>
                  <div className="d-flex justify-content-between">

                    <div>
                      

                      <div className="d-lg-flex p-4">
                        <div><img className="w-25" style={{marginRight: "-90px", marginTop: "20px"}} src={profilePicture}/></div>

                        <div>
                          <h3 className=" m-sm-3 text-center text-lg-start w-100"  style={{fontSize: "18px", marginTop: "10px", marginBottom: "3px"}}> jone smith </h3>
                          <p  className=" text-center text-lg-start w-75" style={{fontSize: "14px", marginTop: '-10px', marginLeft: '15px'}} > Businessman </p>

                        </div>
                      </div>
                    </div>

                    <div> <img className="w-25 m-3" src={image}/> </div>

                  </div>
                  <div className="d-flex justify-content-center" style={{marginTop: '-20px'}}>
                    <div className="whiteCircle"></div>
                    <div className="whiteCircle"></div>
                    <div className="whiteCircle" style={{backgroundColor: "#FFE699"}}></div>
                    <div className="whiteCircle"></div>

                  </div>

               
                </div>

              </div>

              <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-5" style={{zIndex: '342'}}>
                <img src={testimonialImage} className="testimonialImage" />
              </div>
 
              
            </div>
          </section>

          <section style={{backgroundColor: "#D6F3FF"}}>
            <div className="container" >
              <div className="row" >

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" style={{marginTop: "70px", marginBottom: "50px"}}>
            <div className="d-flex m-2 " >

              <img style={{width: "50px", height: "50px", marginTop: "3px", marginRight: "25px"}} src={hotelImage} />
              <div className="w-100">
              <h4 style={{textAlign: "start"}}> + 220 Hotels </h4>
              <p style={{textAlign: "start"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>



              
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" style={{marginTop: "70px", marginBottom: "50px"}}>
            <div className="d-flex m-2 ">

              <img style={{width: "50px", height: "50px", marginTop: "3px", marginRight: "25px"}} src={hotelImage} />
              <div className="w-100">
              <h4 style={{textAlign: "start"}}> + 220 Hotels </h4>
              <p style={{textAlign: "start"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>



              
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" style={{marginTop: "70px", marginBottom: "50px"}}>
            <div className="d-flex m-2 ">

              <img style={{width: "50px", height: "50px", marginTop: "3px", marginRight: "25px"}} src={hotelImage} />
              <div className="w-100">
              <h4 style={{textAlign: "start"}}> + 220 Hotels </h4>
              <p style={{textAlign: "start"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>



              
            </div>
          </div>
          </div>

          </div>
          </section>




        </div>
    )
}