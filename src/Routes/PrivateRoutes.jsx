import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { ready } from "localforage";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <span className="loading loading-spinner loading-lg mx-auto text-center"></span>

    if(user?.email) return children;
    return <Navigate to='/signin-signup'></Navigate>;
};

export default PrivateRoutes;