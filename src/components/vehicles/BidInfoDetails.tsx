import timer from "../../assets/icons/timer.png";
import speedoMeter from "../../assets/icons/speedoMeter.png";
import comments from "../../assets/icons/comments.png";

type Props = {};

const BidInfoDetails = (props: Props) => {
  return (
    <div className='text-primary justify-between flex p-5 gap-8 rounded-xl bg-gradient-to-tl from-[#484848E5] via-[#48484800] to-primary-gradient-a from-10% via-40% to-80%'>
      <div className='flex items-center gap-3'>
        <img height='40px' width='40px' src={timer} alt='timer' />
        <span>Time Left</span>
        <span className='font-extrabold text-2xl'>2 Days</span>
      </div>
      <div className='flex items-center gap-2'>
        <img height='40px' width='40px' src={speedoMeter} alt='speedoMeter' />
        <span>Highest Bid</span>
        <span className='font-extrabold text-2xl'>5000$</span>
      </div>
      <div className='flex items-center gap-3'>
        <span>#Bids</span>
        <span className='font-extrabold text-2xl'>21</span>
      </div>
      <div className='flex items-center gap-3'>
        <img height='40px' width='40px' src={comments} alt='comments' />
        <span>Comments</span>
        <span className='font-extrabold text-2xl'>20</span>
      </div>
    </div>
  );
};

export default BidInfoDetails;
