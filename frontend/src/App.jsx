// import Account from "./components/Account";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import TourList from "./features/TourList";
import Tour from "./features/Tour";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import Account from "./components/Account";
import { UserProvider } from "./context/UserContext";
import ErrorPage from "./components/ErrorPage";
import MyTours from "./features/MyTours";
import Signup from "./components/Signup";

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Navigate to="/tours" replace />} />
                <Route path="tours" element={<TourList />} />
                <Route path="tours/:tourId" element={<Tour />} />
                <Route path="booking" element={<MyTours />} />
                <Route path="users/signup" element={<Signup />} />
                <Route path="users/login" element={<Login />} />
                <Route path="users/logout" element={<Login />} />
                <Route path="me" element={<Account />} />
                <Route
                  path="*"
                  element={<ErrorPage message="There is no page on this URL" />}
                />
              </Route>
            </Routes>

            <Toaster />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
