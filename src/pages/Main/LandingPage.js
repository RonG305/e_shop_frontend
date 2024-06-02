import React  from "react";


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
import RecentProducts from "../../components/RecentProducts/RecentProduct";




const LandingPage = () => {

  


 

  return (
    <div>
      <CorouselComponent />
      <RecentProducts />
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
