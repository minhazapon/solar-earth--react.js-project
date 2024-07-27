import { useEffect } from "react";
import { useState } from "react";
import SolarDetails from "./SolarDetails";




const Solar = () => {


     const [ solar, setSolar ] = useState([])   


     useEffect( () => {

       fetch('solar.json')
       .then(res => res.json())
       .then(data =>setSolar(data))

     } , [])





    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 ">

            <div>

            
            <div>
                <p className=" text-6xl font-serif text-center text-cyan-400">Solar system</p>
                <hr className=" mt-10"></hr>
            </div>

            
            <div className=" flex justify-center mt-10 bg-slate-100 p-10 ">
                <div className=" grid  md:grid-cols-3 gap-5 ">

                 {   
                    solar.map( solar => <SolarDetails solar={solar} ></SolarDetails> )
                 }


                </div>
            </div>









            </div>
            
        </div>
    );
};

export default Solar;