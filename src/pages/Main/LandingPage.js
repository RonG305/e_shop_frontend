import React, { useEffect, useState } from "react";
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import TopRated from "../../components/TopRated/TopRated";
import Banner from "../../components/Banner/Banner";
import CorouselComponent from "../../components/Courousel/Courousel";
import OverTheCounter from "../../components/OTC/OverTheCounter";
import PersonalCare from "../../components/PersonalCare/PersonalCare";
import FirstAid from "../../components/FirstAid/FirstAid";
import BabyInfactCare from "../../components/BabyInfactCare/BabyInfantCare";
import MedicalProducts from "../../components/MedicalProducts/MedicalProducts";
import PainManagement from "../../components/PainManagement/PainManagement";
import DigestiveHealth from "../../components/DigestiveHealth/DigestiveHealth";
import DermatologicalProducts from "../../components/Dermatological/Dermatology";
import { API_BASE_URL } from "../../apiConfig";
import { useParams } from "react-router-dom";



const LandingPage = () => {

  


 

  return (
    <div>
      <CorouselComponent />
      <TopRated />
      <DermatologicalProducts />
      <OverTheCounter />
      <PersonalCare />
      <FirstAid />
      <Banner />
      <BabyInfactCare />
      <MedicalProducts />
      <PainManagement />
      <DigestiveHealth />
      
    </div>
  );
};

export default LandingPage;
