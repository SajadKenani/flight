import blueFlamingo from "../images/blueFlamingo.png"
import "../footer/Footer.css"

import linkedin from "../images/linkedIn.png"
import Instagram from "../images/Instagram.png"
import twitter from "../images/Twitter.png"
import Facebook from "../images/Facebook.png"



export const Footer = () => {
    return (
        <>
        <div className="container" style={{marginTop: "120px"}}>
            <div className="row">

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="d-flex justify-content-start" style={{marginBottom: "20px"}}> <img className="w-50" src={blueFlamingo} /></div> 
                    <p style={{textAlign: "start"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing  </p>

                    <div className="d-flex">
                        <div className="verticalLine"></div>
                        <div>
                            <p style={{textAlign: "start"}}> Follow Us </p>
                            <div className="d-flex"> 
                                <img style={{width: "25px", marginRight: "20px"}} src={linkedin} />
                                <img style={{width: "25px", marginRight: "20px"}} src={Instagram} />
                                <img style={{width: "25px", marginRight: "20px"}} src={twitter} />
                                <img style={{width: "25px", marginRight: "20px"}} src={Facebook} />
                            </div>
                        </div>

                    </div>

                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                    <h4 style={{textAlign: "start", fontWeight: "700"}}> Quick Links </h4>

                    <div className="horizontalLine" style={{width: "130px", marginBottom: "10px"}}></div>

                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Flight booking </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Hotels </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Flight & Hotel </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Car rental </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Package </h6>

                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                    <h4 style={{textAlign: "start", fontWeight: "700"}}> Learn more </h4>

                    <div className="horizontalLine" style={{width: "130px", marginBottom: "10px"}}></div>

                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> About Flamingo </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Travel Hack </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Support </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Our team </h6>

                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                    <h4 style={{textAlign: "start", fontWeight: "700"}}> Policies </h4>

                    <div className="horizontalLine" style={{width: "90px", marginBottom: "10px"}}></div>

                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Privacy & Policy </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Flight terms & conditions </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> Hotel terms & conditions </h6>
                    <h6 style={{textAlign: "start", marginBottom: "12px"}}> visa terms & conditions </h6>

                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">

                <h4 style={{textAlign: "start", fontWeight: "700"}}> Official info </h4>

                <div className="horizontalLine" style={{width: "135px", marginBottom: "10px"}}></div>

                <div className="d-flex">
                    <div className="verticalLine" style={{height: '56px'}}></div>
                    <div>
                        <p style={{textAlign: "start"}}> Call Us </p>
                        <h4 style={{textAlign: "start", color: "#70D6FF", marginTop: "-10px"}}> +964 675 557 7865 </h4>
                        
                    </div>

                </div>

                <div className="d-flex mt-2">
                    <div className="verticalLine" style={{height: '59px'}}></div>
                    <div>
                        <p style={{textAlign: "start"}}> Email us </p>
                        <h4 style={{textAlign: "start", color: "#70D6FF", marginTop: "-10px"}}> Flamingo@gmail.com </h4>
                        
                    </div>

                </div>

                <div className="d-flex mt-2">
                <div className="verticalLine" style={{height: '59px'}}></div>
                    <div>
                        <p style={{textAlign: "start"}}> Location </p>
                        <h4 style={{textAlign: "start", color: "#70D6FF", marginTop: "-10px"}}> /Ziyouna,+Baghdad/ @33.3248776 ,44.4339464,14z </h4>
                        
                    </div>

                </div>

                </div>

            </div>

        </div>
        <div className="horizontalLine" style={{width: "100%", marginBottom: "10px", marginTop: "100px", backgroundColor: "rgba(0, 0, 0, 0.388)"}}></div>
        <div className="d-flex justify-content-center">
       
        <h5 className="mb-3" style={{color: "#70D6FF", marginTop: "7px"}}> Copyright </h5> <h5 className="m-2 mb-3">  © 2022 All Rights Reserved </h5>
        </div>

        </>
    )
}