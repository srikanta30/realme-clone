/**
 * @function Slider
 */
 import React, { useContext } from "react";
 import "../Styles/slider.modules.css";
 import { DisplayAuth } from "../Contexts/SliderDisplay";
 function Slider() {
   let { display } = useContext(DisplayAuth);
 
   return (
     <>
       <div style={{ width: "100%", height: "75vh" }}>
         <div style={{ display: display }}>
           <div
             id="carouselExampleIndicators"
             class="carousel slide"
             data-bs-ride="carousel"
           >
             <div class="carousel-indicators">
               <button
                 type="button"
                 data-bs-target="#carouselExampleIndicators"
                 data-bs-slide-to="0"
                 class="active"
                 aria-current="true"
                 aria-label="Slide 1"
               ></button>
               <button
                 type="button"
                 data-bs-target="#carouselExampleIndicators"
                 data-bs-slide-to="1"
                 aria-label="Slide 2"
               ></button>
               <button
                 type="button"
                 data-bs-target="#carouselExampleIndicators"
                 data-bs-slide-to="2"
                 aria-label="Slide 3"
               ></button>
             </div>
             <div class="carousel-inner">
               <div class="carousel-item active">
                 <img src="./Hero image.png" class="d-block w-100" alt="..." />
               </div>
               <div class="carousel-item">
                 <img
                   src="https://image01.realme.net/general/20211130/1638287838106.jpg"
                   class="d-block w-100"
                   alt="..."
                 />
               </div>
               <div class="carousel-item">
                 <img
                   src="https://image01.realme.net/general/20211201/1638342916610.jpg"
                   class="d-block w-100"
                   alt="..."
                 />
               </div>
             </div>
             <button
               class="carousel-control-prev"
               type="button"
               data-bs-target="#carouselExampleIndicators"
               data-bs-slide="prev"
             >
               <span
                 class="carousel-control-prev-icon"
                 aria-hidden="true"
               ></span>
               <span class="visually-hidden">Previous</span>
             </button>
             <button
               class="carousel-control-next"
               type="button"
               data-bs-target="#carouselExampleIndicators"
               data-bs-slide="next"
             >
               <span
                 class="carousel-control-next-icon"
                 aria-hidden="true"
               ></span>
               <span class="visually-hidden">Next</span>
             </button>
           </div>
         </div>
       </div>
     </>
   );
 }
 export default Slider;