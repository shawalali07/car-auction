import { toast } from "react-hot-toast";

export const errorResponse = (errorData: any) => {
  if (typeof errorData?.response?.data === "object") {
    toast.error(
      errorData?.response?.data?.message ||
        errorData?.response?.data?.error?.message[0],
    );
  } else {
    toast.error("Something went wrong!");
  }
};

export const successResponse = (msg: string) => {
  toast.success(msg);
};
