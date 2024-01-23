import { Prop } from "@/common/model/types";

const ProtectedRoute = ({children} : Prop) => {
    return ( <>
        {children}
    </> );
}
 
export default ProtectedRoute;