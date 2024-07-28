


const Footer = () => {
    return (
        <div>
           

           <div className=" flex-col md:flex-row lg:flex-row bg-gradient-to-r from-teal-400 to-blue-500 p-10 flex justify-center items-center gap-20">



           <div>

             <p className=" text-white text-5xl">Get In Touch</p>
           
             <div className=" mt-5">
             <input placeholder="Enter Your Name" className=" mt-3 p-2 h-[50px] w-[500px]" type="text" />
             <br></br>
             <input placeholder="Enter Your Email" className=" mt-3 p-2 h-[50px] w-[500px]" type="text" />
             <br></br>
             <input placeholder="Enter Your Message" className=" mt-3 p-2 h-[100px] w-[500px]" type="text" />
             <br></br>
             <input className=" btn bg-white text-cyan-400 mt-3 p-2 h-[50px] w-[500px]" type="submit" value="Submit" />
             <br></br>
             </div>
           </div>


           <div>

           <div className="join join-vertical w-full">
           <div className="collapse collapse-arrow join-item border-base-300 border">
             <input type="radio" name="my-accordion-4" defaultChecked />
             <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
             <div className="collapse-content">
               <p>hello</p>
             </div>
           </div>
           <div className="collapse collapse-arrow join-item border-base-300 border">
             <input type="radio" name="my-accordion-4" />
             <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
             <div className="collapse-content">
               <p>hello</p>
             </div>
           </div>
           <div className="collapse collapse-arrow join-item border-base-300 border">
             <input type="radio" name="my-accordion-4" />
             <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
             <div className="collapse-content">
               <p>hello</p>
             </div>
           </div>
           </div>




           </div>















           </div>
          
            
        </div>
    );
};

export default Footer;