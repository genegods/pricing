import React from "react";
import Pricing from "../priceFolder/Pricing";

const MainPage = () => {
  return (
    <React.Fragment>
      <main>
        <div className="md:w-10/12 md:mx-auto">
          <Pricing />
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
