import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.userState.user);

    useEffect(() => {
      if (!user) {
        navigate("/", { replace: true });
        return;
      }
    }, [navigate, user]);
    return children;
}
export default RequireAuth;
