import { NavLink } from "react-router-dom";
import miniAppLogo from "../assets/logo/mini-app-logo.png";
import { browserRoutes } from "../constants/browserRoutes";
// interface HeaderProps {}

const navLinks = [
  { id: 1, name: "Home", path: browserRoutes.HOME },
  { id: 2, name: "About Us", path: browserRoutes.ABOUT_US },
  { id: 3, name: "Vehicles", path: browserRoutes.VEHICLE_LIST },
  { id: 4, name: "Contact Us", path: browserRoutes.CONTACT_US },
];

export const Header: React.FC = () => {
  return (
    <div className='bg-[#14191C] flex items-center flex-col w-full fixed top-0 z-50 sm:h-[150px] '>
      <img src={miniAppLogo} alt='logo' />
      <div className='flex gap-8'>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            className={({ isActive }) =>
              isActive
                ? "text-slate-500 hidden md:block"
                : "text-white hidden md:block"
            }
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
