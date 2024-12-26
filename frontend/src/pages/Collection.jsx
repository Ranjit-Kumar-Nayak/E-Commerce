import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {assets} from '../assets/frontend_assets/assets.js'
import Title from "../components/Title.jsx";
import ProductItem from "../components/ProductItem.jsx";
const Collection = () => {
  const { products } = useContext(ShopContext);
  
  
  const [showFilter, setShowFilter] = useState(false);
  const [filterProdicts,setFilterProducts]=useState([])


  useEffect(()=>{
setFilterProducts(products);
  },[])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-green-700">
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter?'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Men'}/>
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Women'}/>
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Kids'}/>
              Kids
            </p>
          </div>
        </div>

        {/* Sub category filter */}
        <div
          className={`border border-gray-300 pl-5 my-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          }sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Topwear'}/>
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Bottomwear'}/>
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Winterwear'}/>
              Winterwear
            </p>
          </div>
        </div>
      </div>


            {/* Right side */}

            <div className="flex-1 ">
              <div className="flex justify-between text-base sm:text-2xl mb-4">
                <Title text1={'ALL'} text2={'COLLECTIONS'}/>
                {/* product sort */}
                <select className="border-2 border-gray-300 text-sm px-2">
                  <option value="relevant">Sort by : Relevant</option>
                  <option value="low to high">Sort By : Low to high</option>
                  <option value="high to low">Sort by : High to low</option>
                </select>
              </div>

              {/*  map the product */}

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {filterProdicts.map((item,index)=>(
                  
                  <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))}
              </div>

            </div>

    </div>
  );
};

export default Collection;
