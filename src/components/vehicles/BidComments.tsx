import { useState } from "react";
import sendIcon from "../../assets/icons/sendIcon.png";
import { Button } from "../shared/Button";
import { Comment } from ".";

type Props = {};

const filters = ["Newest", "Most Upvoted", "Seller Comments", "Bids History"];

export const BidComments = (props: Props) => {
  const [activeFilter, setActiveFilter] = useState("Newest");
  return (
    <div className='flex flex-col mt-[50px]'>
      <div className='flex justify-between w-2/3 items-center'>
        <h1 className='text-3xl font-extrabold'>Comment & Bids</h1>
        <div className='flex gap-5'>
          {filters.map((filter) => (
            <Button
              onClick={() => setActiveFilter(filter)}
              key={filter}
              variant='ghost'
              className={`text-sm ${activeFilter == filter && "underline"}`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
      <div className='w-2/3 mt-5'>
        <div className='relative'>
          <input
            className='rounded-xl w-full p-4 px-5 text-black text-xs outline-none'
            id='search'
            placeholder='Type Here'
          />
          <Button className='p-2 px-3 rounded-xl absolute top-2 right-2'>
            <img height='16' width='19' src={sendIcon} alt='search' />
          </Button>
        </div>
      </div>
      <Comment />
    </div>
  );
};
