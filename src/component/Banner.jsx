import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-gray-900 mt-12">
            <div className="hero-content flex-col lg:flex-row mt-6">
                <img
                    src="raihan.jpg"
                    className="max-w-sm rounded-3xl shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold text-gray-200">Hello!</h1>
                    <p className="py-6 text-gray-400">
                    I'm R A Raihan.I'm building a career in Web Development and CST (Computer Science and Technology). I am skilled in React, Tailwind CSS, and HTML, and passionate about creating advanced web applications with modern technologies. In the future, my goal is to become a successful software engineer and contribute to the tech industry. 
                    </p>
                    <button className="btn bg-gray-600 text-lg font-bold rounded-2xl">About</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;