import { useInfiniteQuery, useQuery } from "react-query";
import { api } from "../axios/interceptor";
import { serverRoutes } from "../constants/serverRoutes";

const cars = (
  pageParam: number,
  queryParams: any = {
    carsType: "",
    year: "",
    transmission: "",
    bodyStyle: "",
  },
  search: string,
) => {
  return api.get(
    `${serverRoutes.CARS}?car_type=${queryParams?.car_type || ""}&year=${
      queryParams?.year || ""
    }&transmission=${queryParams?.transmission || ""}&bodyStyle=${
      queryParams?.bodyStyle || ""
    }&limit=${queryParams?.limit || 8}&page=${pageParam}&search=${
      search || ""
    }`,
  );
};

export const useCars = (queryParams?: any, search?: any) => {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["cars", { search, ...queryParams }],
    ({ pageParam = 1 }) => cars(pageParam, queryParams, search),
    {
      getNextPageParam: (_lastPage, pages) => {
        const totalCount = pages[0]?.data?.total;
        const totalPages = Math.ceil(totalCount / queryParams?.limit);
        if (pages?.length < totalPages) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
    },
  );

  return {
    cars: data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

const homeCars = (
  queryParams: any = {
    carsType: "",
    year: "",
    transmission: "",
    bodyStyle: "",
  },
) => {
  return api.get(
    `${serverRoutes.CARS}?car_type=${queryParams?.car_type}&year=${
      queryParams?.year || ""
    }&transmission=${queryParams?.transmission || ""}&bodyStyle=${
      queryParams?.bodyStyle || ""
    }&limit=${queryParams?.limit || ""}`,
  );
};

export const useHomeCars = (queryParams?: any) => {
  const { data, isLoading } = useQuery(["homeCars", queryParams], () =>
    homeCars(queryParams),
  );
  return { cars: data?.data, isLoading };
};

const carInfo = (carId: string) => {
  return api.get(`${serverRoutes.CARS}/${carId}`);
};

export const useCarInfo = (carId: any) => {
  const { data, isLoading } = useQuery("carInfo", () => carInfo(carId));
  return { carInfo: data?.data, isLoading };
};
