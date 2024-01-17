import "../content/Content.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../upper/Upper.css"
import heartImage from "../images/Heart.png"

import flamingoUpper from "../images/flamingoUpper.png"
import arrowDown from "../images/arrowDown.png"
import menuImage from "../images/menu.webp"

import { useState } from "react";
import { useRef } from "react";

export const Upper = () => {

    const [activatedmenu, useactivatedmenu] = useState(false);

    const barRef = useRef();
    const shadowRef = useRef();

    const  activateMenu = () => {

      if (barRef.current){
        barRef.current.classList.replace("hide-bar", "side-bar");}
 
      if (shadowRef.current){
        shadowRef.current.classList.replace("hide-shadow", "shadow-div");}


      setTimeout(() => useactivatedmenu(!activatedmenu), 0);
      
      document.body.style.overflow = 'hidden';

    }

    

    const leaveBar = () => {

      if (barRef.current){
        barRef.current.classList.replace("side-bar", "hide-bar");}
 
      if (shadowRef.current){
        shadowRef.current.classList.replace("shadow-div", "hide-shadow");}

        document.body.style.overflow = 'auto';

      setTimeout(() => useactivatedmenu(!activatedmenu), 490);
    }

    return (
        <>

{activatedmenu && 
  <div className="d-flex">
    <div className="fixed bg-white side-bar bar pt-10 p-6" ref={barRef} style={{ height: "100%", left: "0", zIndex: "321", position: "absolute" }}>
      <h1 className="text-start p-5 pb-0"> Main Menu </h1>
      <div className="d-grid pt-4">
        <a className="text-start pt-3 pb-3 p-5 text-black"> App </a>
        <a className="text-start pt-3 pb-3 p-5 text-black"> Travel hack </a>
        <a className="text-start pt-3 pb-3 p-5 text-black"> Contact Us </a>
        <a className="text-start pt-3 pb-3 p-5 text-black"> Manage booking </a>

        <p className="text-start pt-3 pb-3 p-5 text-black"> English </p>
        <div className="d-flex justify-content-center">
        <button className="btn px-50 py-0 m-5 text-white costumButton " > Sign in </button>
        
        </div>
      </div>
    </div>
    <div className="position-fixed shadow-div shadow" onClick={leaveBar} ref={shadowRef} style={{ width: "100%", height: "100%", right: "0", backgroundColor: "rgba(0, 0, 0, 0.226)" }}></div>
  </div>
}


    <div className="justify-content-between main d-lg-flex d-none" style={{padding: "10px 3%", position: "absolute"}}>
       
            <div className="d-flex justify-content-start">

            <img className="logoImage m-4 mt-3" src={flamingoUpper}/>
            <a className="text-white m-4 mt-4 text-lg">App</a>
            <a className="text-white m-4 mt-4 text-lg">Travel hack</a>
            <a className="text-white m-4 mt-4 text-lg">Contact Us</a>
            <a className="text-white m-4 mt-4 text-lg">Manage booking</a>



           </div>

           <div className="d-flex justify-content-end " style={{marginTop: "30px", marginRight: "20px"}}>
            <img className="heartImage" src={heartImage}/>
            {/* line */}
            <div style={{ borderLeft: "1px solid white", height: "20px", margin: "0 10px" }}></div>
            <div className="d-flex">
                <p className="text-white">English</p>
                <img className="arrowImage mt-1" src={arrowDown} />
            </div>
            <button className="btn  px-50 py-0 -mt-12 text-white costumButton"> Sing in </button>

            
           </div>


        
   
    </div>

    <div  className="d-flex d-lg-none justify-content-between main" style={{padding: "10px 3%", position: "absolute"}}>
        <div ><img className="logoImage m-4 mt-3" src={flamingoUpper}/> </div>
        <div className="menu" onClick={activateMenu}><img className="w-70 mt-2" src={menuImage} /></div>

    </div>




    
    </>
    )
}