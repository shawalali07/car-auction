import clsx from 'clsx';
import timer from '../../assets/icons/timer.svg';

type Props = {
  bidTime: string;
  bidPrice: string;
  isMultiLine?: boolean;
};

const BidInfo: React.FC<Props> = ({ bidTime, bidPrice, isMultiLine }) => {
  return (
    <div
      className={clsx(
        'bg-primary justify-between gap-1 rounded-lg flex items-center  py-1 md:px-2 px-1',
        isMultiLine && 'md:flex-row flex-col !items-start',
      )}
    >
      <div className="flex gap-1 md:text-sm text-xs flex-row items-center">
        <img src={timer} alt="timer" />
        <span className="font-extrabold">{bidTime}</span>
      </div>
      <div className="flex gap-1 md:text-sm text-xs">
        <span>Bid</span>
        <span className="font-extrabold">{bidPrice}$</span>
      </div>
    </div>
  );
};

export default BidInfo;
