import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='py-10'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold mb-5'>Contact Me</h1>
            <br />
            <div className='lg:flex  justify-center items-center'>
                <form className='space-y-2 text-center'>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                        <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                    </label>
                    <p className="validator-hint">

                    </p>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        <input type="email" placeholder="Your Email" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>
                    <fieldset className="">
                        <input type="text" className="input" placeholder="Your Message" />
                    </fieldset>
                    <button className="btn btn-primary w-[320px] font-bold text-lg">Send</button>
                </form>
                <div className='space-y-2 mt-5 ml-[50px] text-gray-400'>
                    <div className='flex'>
                        <IoIosMail className='text-4xl' />
                        <h1 className='text-2xl ml-2'>raihanalamr08@gmail.com</h1>
                    </div>
                    <div className='flex'>
                        <FaMobileAlt className='text-4xl' />
                        <h1 className='text-2xl ml-2'>+880 18664-60113</h1>
                    </div>
                    <div className='flex'>
                        <IoShareSocialOutline className='text-4xl' />
                        <h1 className='text-2xl ml-2'>Social:</h1>
                        <a href=""><FaFacebook className='text-3xl ml-2' /></a>
                        <a href=""><FaGithub className='text-3xl ml-2' /></a>
                    </div>
                    <div className='flex'>
                        <FaMapLocationDot className='text-3xl' />
                        <h1 className='text-lg ml-2'>Borobazar,Cox's Bazar,Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;