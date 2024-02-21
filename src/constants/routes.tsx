import { NotFoundPage } from "../components/shared/NotFoundPage";
import { Layout } from "../layout";
import { AboutUsPage, ContactUsPage, HomePage, VehiclePage } from "../pages";
import VehicleDetails from "../pages/VehiclePage/VehicleDetails";
import { browserRoutes } from "./browserRoutes";
export const routes = [
  {
    path: browserRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: browserRoutes.VEHICLE_LIST,
    element: <Layout />,
    children: [
      {
        path: "",
        element: <VehiclePage />,
      },
      {
        path: `${browserRoutes.VEHICLE_LIST}/:carId`,
        element: <VehicleDetails />,
      },
    ],
  },
  {
    path: browserRoutes.CONTACT_US,
    element: <ContactUsPage />,
  },
  {
    path: browserRoutes.ABOUT_US,
    element: <AboutUsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
