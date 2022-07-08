import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/AuthProvider';
import useFirebase from './hooks/UseFirebase';
import Addservice from './Pages/AddServise/Addservice';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import ManagedServices from './Pages/Home/Services/ManagedServices/ManagedServices';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login/Login';
import PrivetRoute from './Pages/Login/PrivetRoute/privetRout';
import Notfound from './Pages/NotFound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  const allContexts = useFirebase();
  return (
    <div className="App">
      <AuthContext.Provider value={allContexts}>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="home" element={<Home></Home>} />
          <Route path="/login" element = {<Login></Login>} />
          <Route path="/managedservice" element={<ManagedServices></ManagedServices>}></Route>
          <Route element={<PrivetRoute />}>
          <Route path="/booking/:serviceId" element={<Booking></Booking>}></Route>
          </Route>
          <Route path='/addservice' element={<Addservice></Addservice>}></Route>
          <Route path="*" element = {<Notfound></Notfound>} />
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
