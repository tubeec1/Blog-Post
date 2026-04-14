import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className='py-10 px-6  bg-gray-50'>

      <div className=' grid grid-cols-2 gap-10 max-w-[1200px] mx-auto' >
         <div>
           <h2 className=' text-pink-300 text-3xl my-3 '>Get in Touch</h2>
            <h5 className='my-2 '>We’d love to hear from you!</h5>
            <p className='text-gray-400'>Whether you have a question, feedback, or need support, our team is here to help. Feel free to reach out to us anytime,</p>
            <div className=' flex gap-3 mt-10'>
              <MdEmail />
               <h6 >BlogPost@gmail.com</h6>
            </div>
           <div className='flex mt-10  ' >
          
               <FaFacebook className='text-pink-300'/>
             <FaLinkedinIn  className=' ml-2 text-pink-300'/>
             <FaInstagramSquare className=' ml-2 text-pink-300' />
             <FaYoutube className=' ml-2 text-pink-300' />
        
           </div>
         </div>
         <div className="w-full max-w-lg mx-auto">
  <form className="flex flex-col gap-4">

  
    <div className="flex gap-4">
      <div className="flex flex-col w-1/2">
        <label className="text-sm mb-1">First Name</label>
      
        <input
          type="text"
          className="border border-gray-400 p-2 outline-none"
        />
      </div>

      <div className="flex flex-col w-1/2">
        <label className="text-sm mb-1">Last Name</label>
        <input
          type="text"
          className="border border-gray-400 p-2 outline-none"
        />
      </div>
    </div>


    <div className="flex flex-col">
      <label className="text-sm mb-1">Email </label>
      <input
        type="email"
        className="border border-gray-400 p-2 outline-none"
      />
    </div>

  
    <div className="flex flex-col">
      <label className="text-sm mb-1">Message</label>
      <textarea
        rows="4"
        className="border border-gray-400 p-2 outline-none resize-none"
      ></textarea>
    </div>

  
    <button
      type="submit"
      className="bg-pink-500 text-white px-6 py-2 self-end hover:bg-pink-800"
    >
      Send
    </button>

  </form>
</div>
      </div>
    </div>
  )
}

export default ContactUs