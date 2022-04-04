import React from "react";
import LandingHeader from "../../components/Landing/LandingHeader";
import LandingSearchInput from "../../components/Landing/LandingSearchInput";
import LandingSearchBtn from "../../components/Landing/LandingSearchBtn";

const LandingPage = () => {
  return (
    <div>
      <LandingHeader />
      <LandingSearchInput />
      <LandingSearchBtn />
    </div>
  );
};

export default LandingPage;
