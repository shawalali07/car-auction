import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  const router = createBrowserRouter(routes);
  return (
    <div className='overflow-x-hidden'>
      <QueryClientProvider client={queryClient}>
        <Toaster position='bottom-center' />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
