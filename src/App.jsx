import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import MainAbout from './components/MainAbout';
import ContactUs from './components/ContactUs';
import BookAppointment from './components/BookAppointment';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsandConditions from './components/TermsandConditions';
import Navbar from './components/Navbar.jsx';
import MainTreatment from "./components/MainTreatment.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/treatment/:treatmentName" element={<MainTreatment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
