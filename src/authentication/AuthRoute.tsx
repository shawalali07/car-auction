import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";

type AuthRoutesProps = {
  children: any;
  redirectLink: string;
};

const AuthRoutes = (props: AuthRoutesProps) => {
  const user = useAppSelector((state: any) => state?.auth);
  if (!user?.token) {
    return <Navigate to={props.redirectLink} replace />;
  }
  return props.children;
};

export default AuthRoutes;
