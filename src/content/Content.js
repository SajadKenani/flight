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

export const Content = () => {

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
  

                <div className="col-6 col-sm-6 col-lg-1 col-xl-1 " style={{marginLeft: "252px"}}>
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

            <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
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
                     <h3 className="mt-4" style={{ textAlign: 'start' }}>lorem ipsum dolor</h3>
                     <h3 className="" style={{ marginTop: '0px', textAlign: 'start' }}>sit lorem</h3>
                     <div><div className="horizontalLine"></div></div>
                     <p style={{ color: 'gray', textAlign: 'start', marginTop: '-50px' }}>lorem ipsum dolor sit amet, consectu elit.</p>
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

        </div>
    )
}