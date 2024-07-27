


const SolarDetails = ({solar}) => {

    const {image, name, details} = solar



    return (
        <div>

             <div className="card card-compact bg-base-100 w-96 shadow-xl">
               <figure>
                 <img className=" h-[300px] w-[400px]"
                   src={image}
                   alt="Shoes" />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">Name: {name} </h2>
                 <p> {details} </p>
               </div>
             </div>
            
        </div>
    );
};

export default SolarDetails;