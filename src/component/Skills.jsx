import React from 'react';

const Skills = () => {
    return (
        <div className='py-12 text-center'>
                <h1 className='text-2xl lg:text-4xl font-bold text-gray-200'>Skills</h1>
                <h1 className='text-2xl lg:text-3xl font-bold text-gray-400 mx-4 my-6'>Discover the proficiencies that allow me to create and innovate</h1>
                <div className='lg:flex justify-around '>
                    <div className='py-4 mx-4'>
                        <h4 className='text-lg lg:text-2xl font-bold text-gray-400 text-start'>Frontend</h4>
                        <p className='w-[350px] text-gray-400 text-start'>
                            Proficient in TypeScript, JavaScript, and utilizing frameworks like ReactJS and NextJS. Well-versed in modern CSS frameworks including Tailwind CSS, SCSS, CSS, and HTML5.
                        </p>
                    </div>
                    <div className='py-4 mx-4'>
                        <h4 className='text-lg lg:text-2xl font-bold text-gray-400 text-start'>Backend</h4>
                        <p className='w-[350px] text-gray-400 text-start'>
                            Proficient in TypeScript and JavaScript for server-side development. Experienced in building server applications with NodeJS and the Spring Framework.
                        </p>
                    </div>
                    <div className='py-4 mx-4'>
                        <h4 className='text-lg lg:text-2xl font-bold text-gray-400 text-start'>Database</h4>
                        <p className='w-[350px] text-gray-400 text-start'>
                            Skilled in working with relational databases like PostgreSQL and MySQL. Proficient in NoSQL databases like MongoDB and Redis for seamless data storage.
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default Skills;