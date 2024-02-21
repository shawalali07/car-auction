type Props = {
  title: string;
  images: any;
};

export const MediaSection: React.FC<Props> = ({ title, images }) => {
  return (
    <div>
      <p className='text-3xl font-extrabold mb-5'>{title}</p>
      <div className='flex justify-between gap-2 md:gap-5'>
        <div className='flex-1'>
          <img
            src={images[0]?.image}
            className='w-full h-[212px] gap-2 md:gap-5 md:h-[496px] bg-[#2A317F]'
            alt='mainImage'
          />
        </div>
        <div className='flex-1 flex-col gap-2 md:gap-5 flex'>
          <div className='flex gap-2 md:gap-5 relative'>
            <img
              src={images[0]?.image}
              className='w-full h-[102px] md:h-[238px] bg-[#2A317F]'
              alt='galleryImage'
            />
            <img
              src={images[0]?.image}
              className='w-full h-[102px] md:h-[238px] bg-[#2A317F]'
              alt='allVideos'
            />
          </div>
          <div className='flex gap-2 md:gap-5'>
            <img
              src={images[0]?.image}
              className='w-full h-[102px] md:h-[238px] bg-[#2A317F]'
              alt='galleryVideos'
            />
            <img
              src={images[0]?.image}
              className='w-full h-[102px] md:h-[238px] bg-[#2A317F]'
              alt='allPictures'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
