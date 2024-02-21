export interface ICars {
  id: number;
  year: string;
  title: string;
  auction: { current_bid: string; end_time: string };
  images: [{ image: string }];
  end_time: string;
  current_bid: number;
  car_type: string;
  description: string;
  carPrice?: string;
}
