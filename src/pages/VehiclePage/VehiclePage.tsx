import { useSearchParams } from "react-router-dom";
import { Filters } from "../../components/vehicles";
import Card from "../../components/shared/Card";
import { useCars } from "../../hooks/useCars";
import { ICars } from "../../models/iCars";
import Skeleton from "../../components/shared/skeleton/Skeleton";
import { Button } from "../../components/shared/Button";
import NoData from "../../components/shared/NoData";
import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";

interface Props {}

export const VehiclePage: React.FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    bodyStyle: "",
    year: "",
    transmission: "",
    search: "",
    car_type: "auction",
    newlyListed: false.toString(),
    lowestMilage: false.toString(),
  });
  const queryParams = {
    bodyStyle: searchParams.get("bodyStyle"),
    year: searchParams.get("year"),
    transmission: searchParams.get("transmission"),
    newlyListed: searchParams.get("newlyListed"),
    lowestMilage: searchParams.get("lowestMilage"),
    car_type: searchParams.get("car_type"),
    limit: 8,
  };
  const search = searchParams.get("search");
  const debouncedSearch = useDebounce(search, 500);
  const { cars, isLoading, hasNextPage, fetchNextPage, isFetching } = useCars(
    queryParams,
    debouncedSearch,
  );

  if (isLoading)
    return (
      <div className='my-8 p-5 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2'>
        <Skeleton type='card' />
      </div>
    );

  return (
    <div className='text-white sm:mt-[200px] mt-[110px] mx-2'>
      <Filters setSearchParams={setSearchParams} />
      <div className='my-8 p-5 grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5'>
        {cars?.pages?.map((page: any) =>
          page?.data?.results?.length ? (
            page.data.results.map((car: ICars) => (
              <Card key={car.id} car={car} view='list' />
            ))
          ) : (
            <NoData key='noData' msg='No car available to display' />
          ),
        )}
      </div>
      <div className='flex justify-center'>
        {cars?.pages[0]?.data?.results?.length ? (
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetching}
            className='bg-transparent hover:bg-[#484848] text-2xl font-extrabold p-3 border-primary-gradient-a rounded-xl border-solid text-white bg-gradient-to-tl from-[#484848E5] via-[#48484800] to-primary-gradient-a from-10% via-40% to-80%'
          >
            Load More
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
