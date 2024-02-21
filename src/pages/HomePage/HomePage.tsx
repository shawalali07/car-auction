import homeBackground from "../../assets/background/home-background.png";
import appLogo from "../../assets/logo/app-logo.png";
import Card from "../../components/shared/Card";
import { HomeHeaders } from "./Components/HomeHeaders";
import { SaleOptions } from "./Components/SaleOptions";
import { headers } from "./Content";
import { useNavigate } from "react-router-dom";
import { browserRoutes } from "../../constants/browserRoutes";
import { useHomeCars } from "../../hooks/useCars";
import { ICars } from "../../models/iCars";
import { Loader } from "../../components/shared/Loader";
import { Ellispes } from "./Components/Ellispes";
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';

type SliceIndexType = {
  [key: number]: number;
};

export const HomePage = () => {
  const [selectedAuctionSaleEllipseIndex, setSelectedAuctionSaleEllipseIndex] =
    useState(0);
  const [
    selectedAuctionSaleEllipseOpacity,
    setSelectedAuctionSaleEllipseOpacity,
  ] = useState(1);
  const [selectedGeneralSaleEllipseIndex, setSelectedGeneralSaleEllipseIndex] =
    useState(0);
  const [
    selectedGeneralSaleEllipseOpacity,
    setSelectedGeneralSaleEllipseOpacity,
  ] = useState(1);
  const { cars: auctionCars, isLoading } = useHomeCars({
    car_type: 'auction',
    limit: 6,
  });
  const { cars: generalCars, isLoading: loading } = useHomeCars({
    car_type: 'general',
    limit: 6,
  });
  const navigate = useNavigate();

  const navigateToListing = (type: string) => {
    return navigate(`${browserRoutes.VEHICLE_LIST}?car_type=${type}`);
  };
  const isMobile = useMediaQuery({ query: `(max-width: 1280px)` });
  const displayRecords = isMobile ? 2 : 2;

  const mapCars = (
    cars: ICars[] | undefined,
    selectedEllipseIndex: number,
    cardOpacity: number,
  ) => {
    const sliceIndex: SliceIndexType = {
      0: 0,
      1: 2,
      2: 4,
    };
    return cars
      ?.slice(
        sliceIndex[selectedEllipseIndex],
        sliceIndex[selectedEllipseIndex] + 2,
      )
      ?.map((car: ICars, index: number) => (
        <div
          className="transition-opacity duration-500 ease-in-out"
          style={{
            opacity: cardOpacity,
          }}
        >
          {index < displayRecords && (
            <Card key={`listing-${car?.id}`} car={car} view="home" />
          )}
        </div>
      ));
  };

  if (isLoading || loading) return <Loader />;

  return (
    <>
      <div className="relative h-[100svh] w-[100svw] max-w-full flex flex-col overflow-x-hidden bg-gray-900">
        <img
          src={homeBackground}
          alt="app-bg"
          className="object-cover max-h-[850px]"
        />
        <div className="flex flex-row w-full justify-center z-[2] absolute mt-[1%]">
          <img className="w-[40%] max-w-[500px]" src={appLogo} alt="app-logo" />
        </div>

        <div className="relative py-6 px-4 bg-gradient-to-b from-[#040305] via-gray-900 to-gray-900 from-1%">
          <div className="absolute top-0 left-0 w-[100px] h-[100px] bg-white rounded-full filter blur-[150px]" />
          <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-white rounded-full filter blur-[150px]" />
          <div className="flex flex-row w-full justify-between gap-[5%]">
            <SaleOptions
              saleType="timed auction"
              buttonText="Lorem"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              onOptionClicked={() => navigateToListing('auction')}
            />
            <SaleOptions
              saleType="general sales"
              buttonText="Lorem"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              onOptionClicked={() => navigateToListing('general')}
              position="right"
            />
          </div>
          <HomeHeaders headers={headers} />
          <div className="my-8 bg-[#48484833] p-5 rounded-xl">
            <div className="grid xl:grid-cols-4 grid-cols-2 gap-3 transition delay-150">
              {mapCars(
                auctionCars?.results,
                selectedAuctionSaleEllipseIndex,
                selectedAuctionSaleEllipseOpacity,
              )}
              {mapCars(
                generalCars?.results,
                selectedGeneralSaleEllipseIndex,
                selectedGeneralSaleEllipseOpacity,
              )}
            </div>
            <div className="flex flex-row justify-around w-full mt-5 text-white">
              <Ellispes
                setCardOpacity={setSelectedAuctionSaleEllipseOpacity}
                selectedEllipse={selectedAuctionSaleEllipseIndex}
                setSelectedEllipse={setSelectedAuctionSaleEllipseIndex}
                type="timed auction"
              />
              <Ellispes
                setCardOpacity={setSelectedGeneralSaleEllipseOpacity}
                selectedEllipse={selectedGeneralSaleEllipseIndex}
                setSelectedEllipse={setSelectedGeneralSaleEllipseIndex}
                type="general sales"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-[100px] h-[100px] bg-white rounded-full filter blur-[100px]" />
        </div>
      </div>
    </>
  );
};
