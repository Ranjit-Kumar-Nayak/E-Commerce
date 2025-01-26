import React from 'react'

const OurPolicyProp = ({image,title,description}) => {
  return (
    <div>
        <img className='w-12 m-auto mb-5' src={image} alt={" this is not able to find"} />

        <div>
            <p className='font-semibold' >{title}</p>
            <p className='text-gray-400'>{description}</p>
        </div>
    </div>
  )
}

export default OurPolicyProp