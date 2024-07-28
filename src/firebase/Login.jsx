import { useContext } from "react";
import { Link } from "react-router-dom";
import { fireContext } from "./AuthContext";





const Login = () => {
    

    const {signIn, sGoogle} = useContext(fireContext)
  

    const handleLog = e =>{
      
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        
        signIn(email, password)
        .then( result =>{
            console.log(result.user)
        } )
        .catch( error =>{
            console.error(error)
        } )



    }


    const handleG = e =>{

       e.preventDefault()
       sGoogle()
       .then( result => {
		console.log(result.user)
	  })
	//   .catch( error => {
	// 	console.error(error)
	//   })




    }
    




    return (
        <div className=" ml-10 mt-10 mr-10 mb-10 flex justify-center">

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl   bg-gradient-to-r from-teal-400 to-blue-500 text-gray-100">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form   onSubmit={handleLog}  className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-white">Email</label>
        
                    <input className="w-full border-[1px] border-white px-4 py-3 rounded-md  bg-gray-900 text-gray-100 focus:border-violet-400" type="email" name="email" id="" />
                    
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className=" border-[1px] border-white w-full px-4 py-3 rounded-md  bg-gray-900 text-gray-100 focus:border-violet-400" />
                    <div className="flex justify-end text-xs text-white ">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
        
                <input className="block btn w-full p-3 text-center rounded-sm text-gray-900 bg-white" type="submit" value="Sign In" />
                
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                <p className="px-3 text-sm text-white">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
                <button  onClick={handleG}  aria-label="Log in with Google" className="p-3 rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5  h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                </button>
                
            </div>
            <p className="text-xs text-center sm:px-6 text-white">Don't have an account?
               
                 <Link to="/up" >
                 <a rel="noopener noreferrer" href="#" className="underline text-white">Sign up</a>
                 </Link>
                
               
            </p>
        </div>
                    
                </div>
    );
};

export default Login;