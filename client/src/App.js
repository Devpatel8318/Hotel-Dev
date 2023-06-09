import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./Layout";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import SinglePlace from "./pages/SinglePlace";
import BookingsPage from "./pages/BookingsPage";
// import SingleBookingPage from "./pages/SingleBookingPage";

axios.defaults.baseURL = "https://hotel-dev-project.vercel.app/api";
function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage/>} />
          <Route path="/account/places/:id" element={<PlacesFormPage/>} />
          <Route path="/place/:id" element={<SinglePlace/>} />
          <Route path="/account/bookings" element={<BookingsPage/>} />
          {/* <Route path="/account/bookings/:id" element={<SingleBookingPage/>} /> */}
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
 
export default App;
