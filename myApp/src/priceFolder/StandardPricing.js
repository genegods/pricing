import React,{useState} from "react";
import { PricingData } from "../data/PricingData";
import ChoosePricePlan from "./ChoosePricePlan";

const StandardPricing = () => {
  const [showPlan, setShowPlan] = useState(false)

  const handleShowPlan = () => {
    setShowPlan(true)
  }
  return (
    <React.Fragment>
      <main>
        <div className="shadow-lg rounded-lg mx-10 px-5 py-8 space-y-5 bg-purple-500 text-white md:py-14">
          <div>
            <p className="text-4xl font-bold">Standard</p>
            <div className="flex items-end space-x-1 mt-5">
              <p className="text-3xl font-bold">$10</p>
              <p className="capitalize">/month</p>
            </div>
            <p className="pt-5">
              For most business that want to optimize their web queries
            </p>
          </div>

          <div className="space-y-5">
            {PricingData.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 bg-white">
                        {item.iconCheckedFree}
                      </span>
                      <p>{item.queryFree}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-green-500 bg-white">
                        {item.iconCheckedStandard}
                      </span>
                      <p>{item.queryStandard}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-red-500 bg-white">
                        {item.iconUnCheckedPremium}
                      </span>
                      <p>{item.queryPremium}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* button */}
          <div className="centered">
            <button onClick={handleShowPlan} className="py-2 px-5 bg-white text-purple-900 rounded font-bold">
              Choose a Plan
            </button>
          </div>
        </div>

        
        {/* show plan */}
        <div>
          {
            showPlan &&
            <ChoosePricePlan showPlan={() =>setShowPlan(false)}/>
          }
      
        </div>
      </main>
    </React.Fragment>
  );
};

export default StandardPricing;
