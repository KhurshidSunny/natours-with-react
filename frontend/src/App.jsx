// import Account from "./components/Account";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import TourList from "./features/TourList";
import Tour from "./features/Tour";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import Login from "./components/Login";
import Account from "./components/Account";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Navigate to="/tours" replace />} />
              <Route path="/tours" element={<TourList />} />
              <Route path="tours/:tourId" element={<Tour />} />
              <Route path="login" element={<Login />} />
              <Route path="account" element={<Account />} />
            </Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
