import { useContext } from "react";
import { fireContext } from "./AuthContext";




const SignUp = () => {

      const {createUser} = useContext(fireContext)  


      const handleUp = e =>{

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password) 

        createUser(email, password)
        .then( result =>{
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })



      }






    return (
        <div className=" ml-10 mt-10 mr-10 mb-10 flex justify-center" >

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-gradient-to-r from-teal-400 to-blue-500 text-gray-100">

            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
       
           
            <form   onSubmit={handleUp}    className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-white">email</label>
                    <input className="w-full border-[1px] border-white px-4 py-3 rounded-md  bg-gray-900 text-gray-100 focus:border-violet-400" type="email" name="email" id="" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full border-[1px] border-white px-4 py-3 rounded-md  bg-gray-900 text-gray-100 focus:border-violet-400" />
                    <div className="flex justify-end text-xs text-white">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <input className="block w-full btn p-3 text-center rounded-sm text-gray-900 bg-white" type="submit" value="SignUp" />
            
            </form>
        
            
            
        </div>
                    
                </div>
    );
};

export default SignUp;