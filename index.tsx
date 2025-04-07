import React from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <header className="w-full py-4 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold flex items-center">
              <span className="text-[#4CAF50]">flex</span>
              <span className="text-[#333333]">.</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">About</a>
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">Services</a>
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">Pages</a>
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">Blog</a>
            <a href="#" className="text-gray-800 hover:text-[#00BCD4] font-medium">Contact</a>
          </nav>
          
          <Button className="hidden md:flex items-center bg-white text-black border border-gray-200 hover:bg-gray-100 rounded-full px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FF5722]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (555) 555-5555
          </Button>
          
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Experienced & <span className="text-[#00BCD4]">skilled roofing</span> services for your property
              </h1>
              <p className="text-gray-600">
                Many conditions of passersby of available, but the majority have suffered alteration.
              </p>
              <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3 rounded-full">
                Get Free Quote
              </Button>

              <div className="pt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">12,350</h3>
                  <p className="text-sm text-gray-500">Projects Done</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">15,200</h3>
                  <p className="text-sm text-gray-500">Satisfied Client</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-sm text-gray-500">Team Participants</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                  alt="Modern house with quality roofing" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md max-w-[200px]">
                  <div className="flex items-center mb-2">
                    <div className="flex-shrink-0 h-8 w-8 bg-[#00BCD4] rounded-full flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm font-semibold">Our Recent satisfied customers</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Preference partners visit our expo gallery it's a future where modern meets comfort.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 z-[-1] bg-[#E8F5E9] h-60 w-60 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952" 
                alt="Contractor working on blueprints" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -top-6 -left-6 bg-[#E0F7FA] h-20 w-20 rounded-full z-[-1]"></div>
              <div className="absolute -bottom-6 -right-6 bg-[#E0F7FA] h-20 w-20 rounded-full z-[-1]"></div>
              <div className="absolute top-40 -right-6 grid grid-cols-6 gap-1">
                {Array(36).fill(0).map((_, i) => (
                  <div key={i} className="h-1 w-1 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                About Company, <br />
                your satisfaction is our priority
              </h2>
              <p className="text-gray-600">
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
              </p>
              <p className="text-gray-600">
                Satisfaction is not just a goal but our commitment to delivering excellence. With attention to detail and skilled craftsmanship, we strive to exceed your expectations on every project.
              </p>
              <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3 rounded-full">
                Read More
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">Affordable roofing services</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              We are a professional contractor with 15+ years of experience providing reliability and exceptional workmanship for roofing solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#E0F7FA] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00BCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Roof Inspecting</h3>
                <p className="text-gray-600 mb-4">
                  Unbiased state of analysis for big defects or small leaks, we provide a comprehensive assessment and proactive solutions of the system.
                </p>
                <a href="#" className="text-[#00BCD4] flex items-center text-sm font-medium hover:underline">
                  View details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Service 2 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#EDE7F6] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#673AB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">New roofing types</h3>
                <p className="text-gray-600 mb-4">
                  Industry-size of engineering materials and solutions, we bring innovative and eco-friendly alternatives to traditional roofing choices.
                </p>
                <a href="#" className="text-[#673AB7] flex items-center text-sm font-medium hover:underline">
                  View details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Service 3 */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-[#E8F5E9] w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4CAF50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Damage roofing</h3>
                <p className="text-gray-600 mb-4">
                  Extensive array of fixing/repairing defects or roof damages, immediate response and time-efficient assessment or solutions.
                </p>
                <a href="#" className="text-[#4CAF50] flex items-center text-sm font-medium hover:underline">
                  View details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Projects */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Recently completed work</h2>
            <p className="text-gray-600 mb-12">
              View our latest projects and quality installations completed recently with professional and excellent service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1565533333907-e78398bcabd0" 
                  alt="Trusted Roofing Services" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Roofing for your Superior Roofing Services</h3>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1605739603350-bb3ba80333e2" 
                  alt="Maintenance Service" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance Service Needed Roofing Solutions</h3>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" 
                  alt="New Roofing Solutions" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">New System for Professional and Affordable Roofing</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">See what our users say</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Actual client final reviews that can be determined by the incredible support of a single good purpose.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Richard Chang" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Richard Chang</h4>
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Very excited about the good result and very much satisfied with what we found that it should could take care for work out with us. Your client-focused approach and skilled roofing services create trust."
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <img 
                      src="https://randomuser.me/api/portraits/men/76.jpg" 
                      alt="Paul Curtis" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Paul Curtis</h4>
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Have experienced the top-quality with what every option was just a better choice for their superior results for, reason for continuing with them, satisfied with their reliability, efficient solutions."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest update blog post</h2>
            <p className="text-gray-600 mb-12">
              Stay current with our latest news articles and insights into the roofing industry's best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Blog 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1632763247220-4678691c1e3d" 
                  alt="Roofing expert" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">March 15, 2025</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Quality Roofing Services with Professional Guidance Team</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    We are going to making progress and deliver service on time to avoid delays and provide perfect work quality throughout...
                  </p>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e" 
                  alt="Modern roofing" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">March 10, 2025</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Roof Repair, Replacement, and Maintenance</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore all the coverage strategies and tactics your roof needs to withstand the elements with style, quality and long-lasting...
                  </p>
                </div>
              </div>

              {/* Blog 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1636901942318-972eb231dfe2" 
                  alt="Solar panels" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">March 5, 2025</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">New Roofing for Professional and Affordable Roofing</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Path into a brighter, sustainable and smart new roof that will forever change the way you think about home protection...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-12 px-6 md:px-12 lg:px-20 mb-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="bg-[#673AB7] rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute -bottom-8 -left-8 bg-[#512DA8] opacity-30 h-24 w-24 rounded-full"></div>
              <div className="absolute -top-8 -right-8 bg-[#7E57C2] opacity-30 h-24 w-24 rounded-full"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Need emergency roofing services?</h2>
                  <p className="text-purple-100 max-w-xl">
                    Professional roofing solution with expertise convenience anytime, anywhere. Call today to protect your property with quality roofing.
                  </p>
                </div>
                <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-6 py-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (555) 555-5555
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-8 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <a href="/" className="text-2xl font-bold flex items-center mb-4">
                <span className="text-[#4CAF50]">flex</span>
                <span className="text-[#333333]">.</span>
              </a>
              <p className="text-gray-600 mb-4">
                Your roofing needs in one place! We make quality roofing solutions a reality.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">About company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Our Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Client Feedback</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Work Process</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Our Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Roofing support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Guide</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Water roofing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#00BCD4]">Flat shingle</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">We are at</h4>
              <p className="text-gray-600 mb-3">
                123 Roofing St., Peaksville, TX 75001, United States
              </p>
              <p className="text-gray-600 mb-3">
                info@flexroofing.com
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#3b5998]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1da1f2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e4405f]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              Copyright 2025 Flex. All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Terms of Use</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
