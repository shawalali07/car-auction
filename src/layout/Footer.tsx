import { Link } from "react-router-dom";
import appFooterLogo from "../assets/logo/app-footer-logo.png";
import { browserRoutes } from "../constants/browserRoutes";
// interface FooterProps {}

const footerLinks = [
  { id: 1, name: 'Home', path: browserRoutes.HOME },
  { id: 2, name: 'About Us', path: browserRoutes.ABOUT_US },
  { id: 3, name: 'Vehicles', path: browserRoutes.DASHBOARD },
];

export const Footer: React.FC = () => {

  return (
    <div className="hidden md:flex justify-between mx-[80px]">
      <div className="w-1/2">
        <img src={appFooterLogo} alt="logo" />
      </div>
      <div className="flex gap-[80px] w-1/3 items-center justi-between">
        <div className="flex flex-col gap-3">
          {footerLinks.map((link) => (
            <Link key={link.id} className="text-white text-1xl" to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className="uppercase text-2xl text-white flex flex-col gap-2 font-extrabold">
          <span>facebook</span>
          <span>instagram</span>
          <span>twitter</span>
        </div>
      </div>
    </div>
  );
};
