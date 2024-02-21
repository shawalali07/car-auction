import moment from "moment";
import BidInfo from "./BidInfo";
import { Button } from "./Button";
import { CarInfo } from "./CarInfo";
import { useNavigate } from "react-router-dom";
import { browserRoutes } from "../../constants/browserRoutes";
import { useEffect, useLayoutEffect } from "react";
type Props = {
  car: {
    id: number;
    year: string;
    title: string;
    end_time: string;
    current_bid: number;
    images: image[];
    car_type: string;
    auction: { current_bid: string; end_time: string };
    description: string;
    price?: string;
  };
  view: "list" | "home";
};

type image = {
  image: string;
};

const Card: React.FC<Props> = ({ car, view }) => {
  const navigate = useNavigate();
  const { auction, year, car_type, images, description, price } = car;

  return (
    <div
      onClick={() => navigate(`${browserRoutes.VEHICLE_LIST}/${car?.id}`)}
      className='cursor-pointer border border-primary-gradient-a rounded-xl border-solid p-4 text-white min-w-[140px] md:min-w-[270px] md:max-w-[500] w-full bg-gradient-to-tl from-[#484848E5] via-[#48484800] to-primary-gradient-a from-10% via-40% to-80% hover:bg-[#484848] transition ease-in-out duration-300'
    >
      <div className='flex flex-col'>
        <span className='md:text-xl text-xs font-extrabold'>{year}</span>
        <span className='md:text-3xl text-sm uppercase font-black'>
          {car?.title}
        </span>
        <span className='md:text-lg text-xs text-primary uppercase font-extrabold pb-2'>
          {view === "list" && `$${price || "59,000"}`}
        </span>
      </div>
      <div className='relative'>
        <img
          loading='lazy'
          className='rounded-lg w-full max-h-[250px] h-[150px] sm:h-[250px]'
          src={images[0]?.image}
          alt='car'
        />
        {car_type == "auction" && view == "list" && (
          <div className='absolute bottom-3 left-2'>
            <BidInfo
              bidTime={moment(auction?.end_time).format("HH:mm")}
              bidPrice={auction?.current_bid}
              isMultiLine={true}
            />
          </div>
        )}
      </div>
      {view === "home" ? (
        <div className='flex sm:flex-row flex-col gap-2 justify-between items-center pt-3'>
          {car_type == "auction" ? (
            <BidInfo
              bidTime={moment(auction?.end_time).format("HH:mm")}
              bidPrice={auction?.current_bid}
            />
          ) : (
            <div className='flex flex-row gap-1 justify-between items-center text-primary'>
              <span>Price</span>
              <span className='md:text-xl text-lg font-extrabold'>
                {price}$
              </span>
            </div>
          )}
          <Button
            variant={car?.car_type == "auction" ? "light" : "secondary"}
            className='rounded-full w-full sm:w-auto text-xs whitespace-nowrap py-1 md:px-2 px-1'
          >
            Lorem Ipsum
          </Button>
        </div>
      ) : (
        <CarInfo
          seats={4}
          transmissionType='automatic'
          description={description}
        />
      )}
    </div>
  );
};

export default Card;
