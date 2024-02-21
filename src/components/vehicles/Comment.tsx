type Props = {};

export const Comment = (props: Props) => {
  return (
    <div className='flex mt-[50px] gap-3'>
      <div className='h-[52px] w-[52px] rounded-full bg-slate-200'></div>
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-8 items-center'>
            <span className='text-xl font-extrabold'>Scruffs</span>
            <span className='text-[10px] text-[#A2A4AB]'>16 hr Ago</span>
          </div>
          <span className='text-[10px] text-[#A2A4AB]'>Reply</span>
        </div>
        <p className='text-xs'>
          All you need is the Tomica to go with it!! Looks great, GLWTA!
        </p>
      </div>
    </div>
  );
};
