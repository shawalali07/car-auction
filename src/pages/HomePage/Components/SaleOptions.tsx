import { Button } from '../../../components/shared/Button';
import clsx from 'clsx';

interface SaleOptionsProps {
  saleType: 'timed auction' | 'general sales';
  buttonText: string;
  onOptionClicked: () => void;
  description: string;
  position?: 'left' | 'right';
}

export const SaleOptions: React.FC<SaleOptionsProps> = ({
  saleType,
  buttonText,
  onOptionClicked,
  description,
  position = 'left',
}) => (
  <div className="flex flex-col items-center justify-center">
    <div
      className={clsx(
        'flex md:flex-row flex-col w-full justify-between px-2 items-center',
        position === 'right' && 'md:flex-row-reverse',
      )}
    >
      <Button
        onClick={onOptionClicked}
        className="px-10 py-2 rounded-xl z-[2]"
        variant={position === 'left' ? 'light' : 'secondary'}
      >
        {buttonText}
      </Button>
      <span className="uppercase text-white font-black md:text-3xl text-lg md:mt-0 mt-3">
        {saleType}
      </span>
    </div>
    <span className="text-white px-2 mt-2 md:text-lg text-sm">
      {description}
    </span>
  </div>
);
