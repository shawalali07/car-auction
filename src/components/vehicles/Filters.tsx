import { Button } from "../shared/Button";
import searchIcon from "../../assets/icons/search.svg";
import { DropdownArrow } from "../icons/Icons";
import { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

type Props = {
  setSearchParams: (params: any) => void;
};

type Filter = {
  id: number;
  label: string;
  name: string;
  values?: string[];
  isSingle?: boolean;
};

const filters: Filter[] = [
  {
    id: 1,
    label: "Body Style",
    name: "bodyStyle",
    values: ["Sedan", "SUV", "Truck", "Hatchback"],
  },
  {
    id: 2,
    label: "Year",
    name: "year",
    values: ["2024", "2023", "2022", "2021"],
  },
  {
    id: 3,
    label: "Transmission",
    name: "transmission",
    values: ["Automatic", "Manual", "Hybrid"],
  },
  {
    id: 4,
    label: "Newly Listed",
    name: "newlyListed",
    isSingle: true,
  },
  {
    id: 5,
    label: "Lowest Milage",
    name: "lowestMilage",
    isSingle: true,
  },
];

export const Filters: React.FC<Props> = ({ setSearchParams }) => {
  const [openFilter, setOpenFilter] = useState<number | null>(null);

  const handleFilterClick = (name: string, value: string) => {
    setSearchParams((prev: any) => {
      prev.set(name, value);
      return prev;
    });
    setOpenFilter(null);
  };

  const urlParams = new URLSearchParams(window.location.search);

  return (
    <div className='px-[50px] flex gap-5 justify-between items-center flex flex-row w-full justify-between gap-[5%]'>
      <div className='relative sm:w-[600px]'>
        <input
          value={urlParams.get("search") as string}
          onChange={(e) => {
            handleFilterClick("search", e.target.value);
          }}
          className='bg-[#484848] rounded-full sm:w-full p-3 text-white text-[8px] sm:text-xs outline-none w-[90px]'
          id='search'
          placeholder='Type Here The Car Name You Are Looking For'
        />
        <Button className='flex items-center sm:gap-2 rounded-full absolute top-1 right-1 text-[8px] sm:text-xs'>
          <img src={searchIcon} alt='search' />
          Search
        </Button>
      </div>
      {filters.map((filter) => (
        <div key={filter.id} tabIndex={0} className='relative'>
          <Button
            onClick={() => {
              setOpenFilter(openFilter === filter.id ? null : filter.id);
              filter.isSingle && handleFilterClick(filter.name, "true");
            }}
            variant='ghost'
            className='flex items-center gap-1.5 text-1xl whitespace-nowrap'
          >
            {filter.label}
            {!filter?.isSingle ? <DropdownArrow /> : <></>}
          </Button>
          {openFilter === filter.id && filter?.values?.length && (
            <div className='bg-[#484848] flex flex-col absolute top-8 p-1.5 rounded'>
              {!filter?.isSingle
                ? filter.values.map((value) => (
                    <span
                      onClick={() => handleFilterClick(filter.name, value)}
                      className='cursor-pointer'
                      key={value}
                    >
                      {value}
                    </span>
                  ))
                : null}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
