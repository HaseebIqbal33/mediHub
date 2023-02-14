import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../../pages/aboutUs";
import { AppoinmentBooking } from "../../pages/AppointmentBooking/AppoinmentBooking";
import { ContactUs } from "../../pages/contactUs";
import { DoctorList } from "../../pages/doctorList/DoctorList";
import { DoctorsNotesServices } from "../../pages/DoctorsNotesServices";
import Home from "../../pages/home";
import { LabTest } from "../../pages/labTest";
import { Prescription } from "../../pages/prescription";
import { WalkingClinic } from "../../pages/walkInClinic";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="doctorsdotesservices" element={<DoctorsNotesServices />} />
      <Route path="walkingclinic" element={<WalkingClinic />} />
      <Route path="prescription" element={<Prescription />} />
      <Route path="labtest" element={<LabTest />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="contactUs" element={<ContactUs />} />
      <Route path="doctorlist" element={<DoctorList />} />
      <Route path="appoinmentbooking" element={<AppoinmentBooking />} />
    </Routes>
  );
};

export default AppRoutes;
