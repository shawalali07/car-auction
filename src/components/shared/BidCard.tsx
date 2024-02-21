import { Button } from "./Button";
import timer from "../../assets/icons/timer.png";
import bmw from "../../assets/icons/bmw.png";
import seat from "../../assets/icons/seat.png";
import sedan from "../../assets/icons/sedan.png";

type Props = {};

export const BidCard = (props: Props) => {
  return (
    <div className='border text-primary h-[400px] flex flex-col justify-between mt-[-20px]'>
      <div className='flex bg-white p-3 justify-between items-center gap-5'>
        <div className='flex gap-3 items-center'>
          <img height='40px' width='40px' src={timer} alt='timer' />
          <span className='font-extrabold text-2xl'>20:30</span>
        </div>
        <div className='flex gap-3 items-center'>
          <span>Current Bid</span>
          <span className='font-extrabold text-2xl'>5000$</span>
        </div>
      </div>
      <div className='p-5 flex flex-col gap-8 max-w-[400px]'>
        <div className='flex flex-col gap-3'>
          <h1 className='text-white font-semibold'>Brand</h1>
          <div className='flex gap-3'>
            <img height='48px' width='48px' src={bmw} alt='sedan' />
            <p className='text-[#7F808E]'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              laudantium.
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h1 className='text-white'>Features</h1>
          <div className='flex gap-5'>
            <img height='22px' width='22px' src={sedan} alt='sedan' />
            <span className='text-[#7F808E]'>Sedan</span>
            <img height='22px' width='22px' src={seat} alt='sedan' />
            <span className='text-[#7F808E]'>Seats</span>
          </div>
        </div>
      </div>
      <Button className='m-5 p-3 text-2xl font-semibold rounded-lg'>
        Bid Now
      </Button>
    </div>
  );
};
