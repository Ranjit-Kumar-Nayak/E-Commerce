

import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque nostrum! Ab laboriosam debitis alias provident sequi explicabo, ipsa facilis enim praesentium! Eaque similique maiores ad debitis, error perferendis animi!</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Delivery</p>
                    <p>Privacy Policy</p>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get In Touch </p>
                <ul className='flex flex-col gap-1 text-gray-600a'>
                    <li>+1-212-456-7890</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>CopyRight 2024@ forever.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer