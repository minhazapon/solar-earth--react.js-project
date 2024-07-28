import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { fireContext } from "./firebase/AuthContext";



const PrivateRoute = ({children}) => {
    
    const {user} = useContext(fireContext)


    if(user){
      
        return children

    }


    return <Navigate to="/in" ></Navigate>
};

export default PrivateRoute;