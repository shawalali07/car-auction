import { Outlet } from "react-router-dom";
import { Footer, Header } from ".";

// interface LayoutProps {}

export const Layout: React.FC = () => {
  return (
    <div className='flex flex-col justify-start min-h-[100svh] w-[100svw] bg-[#14191C]'>
      <Header />
      <div className='flex-grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
