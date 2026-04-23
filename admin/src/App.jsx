import { useContext } from "react";
import AdminLogin from "./pages/AdminLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";
import ChangePassword from "./pages/Admin/ChangePassword";

const AppLayout = ({ children }) => (
  <div className=" bg-[#f8f9fd]">
    <Navbar />
    <div className="flex items-start">
      <Sidebar />
      <div>{children}</div>
    </div>
  </div>
);

const App = () => {
  const { cookie } = useContext(AdminContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

        {cookie ? (
          <>
            <Route
              path="/admin-dashboard"
              element={
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              }
            />
            <Route
              path="/all-appointment"
              element={
                <AppLayout>
                  <AllAppointment />
                </AppLayout>
              }
            />
            <Route
              path="/add-doctor"
              element={
                <AppLayout>
                  <AddDoctor />
                </AppLayout>
              }
            />
            <Route
              path="/doctor-list"
              element={
                <AppLayout>
                  <DoctorList />
                </AppLayout>
              }
            />
            <Route
              path="/change-password"
              element={
                <AppLayout>
                  <ChangePassword />
                </AppLayout>
              }
            />
            <Route
              path="*"
              element={
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              }
            />
          </>
        ) : (
          <Route path="*" element={<AdminLogin />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
