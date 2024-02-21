import { BidCard } from "../../components/shared/BidCard";
import { Button } from "../../components/shared/Button";
import Card from "../../components/shared/Card";
import carImg from "../../assets/images/car.jpg";
import { CarInfo, MediaSection } from "../../components/vehicles";
import { BidComments } from "../../components/vehicles/BidComments";
import BidInfoDetails from "../../components/vehicles/BidInfoDetails";
import { CarDescription } from "../../components/vehicles/CarDescription";
import { useParams } from "react-router-dom";
import { useCarInfo } from "../../hooks/useCars";
import { Loader } from "../../components/shared/Loader";

type Props = {};

const car = {
  id: 999,
  year: "2024",
  title: "FZR 200",
  end_time: "20:00",
  current_bid: 4000,
  images: [{ image: carImg }],
  car_type: "general",
  description: "hey",
  auction: { current_bid: "4000", end_time: "20:40" },
};

const VehicleDetails = (props: Props) => {
  const { carId } = useParams();
  const { carInfo, isLoading } = useCarInfo(carId);
  if (isLoading) return <Loader />;

  return (
    <div className='text-white sm:mt-[200px] mt-[110px] mx-8'>
      <MediaSection title={carInfo?.title} images={carInfo?.images} />
      <div className='mt-[82px] flex justify-between'>
        <div className='flex-[2_2_0%]'>
          <BidInfoDetails />
          <CarInfo />
          <CarDescription />
          <BidComments />
        </div>
        <div className='flex-1 flex justify-end'>
          <div className='flex flex-col items-center'>
            <BidCard />
            <h1 className='text-3xl font-extrabold text-center mt-5'>
              More Cars
            </h1>
            <div className='max-w-[350px] p-5'>
              <Card car={car} view='list' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
