import React from "react";
import { assets } from "../assets/frontend_assets/assets.js";
import OurPolicyProp from "./OurPolicyProp.jsx";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <OurPolicyProp
        image={assets.exchange_icon}
        title={"Easy Exchange Policy"}
        description={"We offer hassel free exchange policy.."}
      />
      <OurPolicyProp
        image={assets.quality_icon}
        title={"7 Days Return Policy"}
        description={"We offer 7 days free return policy"}
      />
      <OurPolicyProp
        image={assets.support_img}
        title={"Best Customer Support"}
        description={"We Provide 24/7 customer Support"}
      />

      {/* <div>
                <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Easy Exchange Policy</p>
                <p className='text-gray-400'>We offer hassel free exchange policy</p>
            </div> */}
      {/* <div>
                <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>7 Days Return Policy</p>
                <p className='text-gray-400'>We offer 7 days free return policy</p>
            </div>
            <div>
                <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>We Provide 24/7 customer Support</p>
            </div> */}
    </div>
  );
};

export default OurPolicy;
