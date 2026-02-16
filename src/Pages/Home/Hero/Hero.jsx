import React from 'react';
import Container from '../../../Layouts/Container';

const Hero = () => {
    return (
        <section className="py-12 md:py-20 lg:py-28 bg-white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Content: Text & CTA */}
                    <div className="space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                            Build Your Future with <span className="text-blue-600">Modern Solutions</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
                            Create stunning websites and applications with ease. Focus on your business while we handle the complex technicalities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                                Get Started
                            </button>
                            <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Content: Image Placeholder */}
                    <div className="relative">
                        {/* Blue background placeholder div */}
                        <div className="w-full h-[300px] md:h-[450px] bg-blue-100 rounded-2xl shadow-inner flex items-center justify-center border-2 border-dashed border-blue-300">
                            <p className="text-blue-400 font-medium">Image Placeholder (Replace later)</p>
                        </div>
                        
                        {/* Ekta chotto decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;