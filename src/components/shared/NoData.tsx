type Props = {
  msg: string;
};

const NoData: React.FC<Props> = ({ msg }) => {
  return (
    <div className='text-2xl font-extrabold p-3 rounded-xl text-white bg-gradient-to-tl from-[#484848E5] via-[#48484800] to-primary-gradient-a from-10% via-40% to-80%'>
      {msg}
    </div>
  );
};

export default NoData;
