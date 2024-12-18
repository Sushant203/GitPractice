import { useState } from "react"
import React from 'react'

function BookNow() {
  return (
   <>
   <div className='max-w-sm mt-10 p-6 mx-auto bg-white shadow-2xl rounded-lg text-left'>
    <h2 className='text-3xl font-bold pb-4 text-left'>For Booking Process</h2>
    <p className='text-gray-700 text-left mb-6'>To book a room,hotel and to order food, please contact us via email or phone. Our team will assist you with the booking process.</p>
    <div className='mb-6'>
       <h3 className='font-semibold mb-2'>Contact Information</h3>
       <p>
        Email:{" "}
        <a href="mailto:mail.hotelbabari@gmail.com" className='text-blue-600 hover:underline'> mail.hotelbabari@gmail.com</a>
       </p>

       <p>
       Phone:{" "}
        <a href="tel:071422080" className='text-blue-400 hover:underline'>071422080</a>
        ,{" "}
        <a href="tel:9857024734" className='text-blue-400 hover:underline'>9857024734</a>
       </p>
       
    </div>
    <div className='flex justify-left space-x-4 mb-6 '>
        <a href="mailto:mail.hotelbabari@gmail.com" className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Mail Now</a>

        <a href="tel:071422080" className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600'>Contact Us</a>
    </div>

<div>
    <h3 className='font-semibold mb-2'>Address:</h3>
    <p className='mb-2'>Sainamaina-02, sorauli</p>
    <p className='mb-2'>Rupandehi, Lumbini Province</p>
    <p className='mb-2'>Nepal</p>
</div>

   </div>
   </>
  )
}

export default BookNow
