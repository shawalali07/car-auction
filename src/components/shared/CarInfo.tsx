import carSeat from '../../assets/car/car-seat.png';
import carManual from '../../assets/car/car-manual.png';
import carAutomatic from '../../assets/car/car-automatic.png';
import { Button } from './Button';

interface ICarInfoProps {
  seats: number;
  transmissionType: 'automatic' | 'manual';
  description: string;
}

export const CarInfo: React.FC<ICarInfoProps> = ({
  seats,
  transmissionType,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2 mt-3 justify-between items-center">
      <div className="flex md:flex-row flex-col w-full justify-between gap-3">
        <ImageWithText image={carSeat} alt="car-seat" text={`${seats} Seats`} />
        <ImageWithText
          image={transmissionType === 'automatic' ? carAutomatic : carManual}
          alt="car-transmission"
          text={transmissionType === 'automatic' ? 'AutoDrive' : 'Manual Drive'}
        />
        <Button
          variant="default"
          className="rounded-full text-xs whitespace-nowrap py-1 md:px-2 px-1"
        >
          Lorem ipsum
        </Button>
      </div>
      <div className="flex flex-row w-full justify-between">
        <span className="text-white text-md">{description}</span>
      </div>
    </div>
  );
};

interface IImageWithTextProps {
  image: string;
  alt: string;
  text: string;
}

const ImageWithText: React.FC<IImageWithTextProps> = ({ image, alt, text }) => {
  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <img src={image} alt={alt} className="h-6 w-6" />
      <span className="text-white text-md whitespace-nowrap">{text}</span>
    </div>
  );
};
