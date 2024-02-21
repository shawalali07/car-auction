import { Navigate } from "react-router-dom";
import { browserRoutes } from "../constants/browserRoutes";
import { useAppSelector } from "../hooks/useStore";

type ProtectedRoutesProps = {
  children: any;
  redirectLink?: string;
};

export const PrivateRoute = (props: ProtectedRoutesProps) => {
  const user = useAppSelector((state) => state?.auth);
  if (user?.token) return props.children;

  return <Navigate to={props?.redirectLink || browserRoutes.LOGIN} replace />;
};
