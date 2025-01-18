"use client";


import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

// images
//import wallpaper1 from './assests/beach view 02.jpg';
import wallpaper2 from './assests/beach view 04.jpg';
import golf from './assests/golf.jpg';
import club from './assests/clubs.jpg';
import spa from './assests/spa.jpg';
import gym from './assests/gym.jpg';
import food from './assests/food.jpg';
//import cover1 from './assests/cover01.jpg';
import cover2 from './assests/cover02.jpg';
import dropdown from './assests/dropdown.png';
import spain from './assests/Spain.jpg';
import srilanka from './assests/Srilanka.jpg';
import italy from './assests/italy.jpg';
import helicopter from './assests/helicopter.jpg';
import pillow from './assests/Pillow.jpg';

const roomDescriptions = [
  {
    id: 1,
    name: "Mediterranean Elegance Deluxe Room",
    description: "A stylish retreat with contemporary design, plush bedding, a sleek workspace, and a private balcony overlooking Spain’s vibrant landscapes.",
    priceUSD: "200 USD",
    priceLKR: "72,000 LKR", // Added LKR price
    details: "This room is ideal for travelers seeking a balance of comfort and sophistication. Enjoy complimentary Wi-Fi, a minibar stocked with premium beverages, and an en-suite bathroom with luxurious toiletries.",
    image: srilanka,
    locations: ["Sri Lanka", "Spain", "Italy"]
  },
  {
    id: 2,
    name: "Horizon View Junior Suite",
    description: "Enjoy panoramic views from floor-to-ceiling windows, a spacious lounge, and refined décor that captures the essence of Spanish elegance.",
    priceUSD: "300 USD",
    priceLKR: "108,000 LKR", // Added LKR price
    details: "Perfect for those who love to wake up to stunning views, this suite also includes a king-size bed, a Nespresso coffee machine, and a dedicated workspace.",
    image: srilanka,
    locations: ["Italy", "Spain"]
  },
  {
    id: 3,
    name: "Catalonian Prestige Executive Suite",
    description: "Blending sophistication with functionality, this suite offers a spacious living area, private dining, and artwork inspired by Catalonia’s heritage.",
    priceUSD: "400 USD",
    priceLKR: "144,000 LKR", // Added LKR price
    details: "This suite is tailored for business travelers and art enthusiasts, featuring a private dining area, high-speed internet, and curated artwork showcasing Catalonia’s culture.",
    image: srilanka,
    locations: ["Italy", "Spain", "Sri Lanka"]
  },
  {
    id: 4,
    name: "Sierra Serenity Family Suite",
    description: "Ideal for families, this suite features interconnected rooms, a cozy lounge, and stunning views of the Sierra Nevada.",
    priceUSD: "350 USD",
    priceLKR: "126,000 LKR", // Added LKR price
    details: "Families will enjoy the spacious layout, including interconnected rooms for privacy, a kid-friendly entertainment system, and a fully equipped kitchenette.",
    image: srilanka,
    locations: ["Spain", "Sri Lanka"]
  },
  {
    id: 5,
    name: "Royal Alhambra Presidential Suite",
    description: "Luxurious living with expansive areas, a private terrace, and butler service, all with panoramic city views.",
    priceUSD: "600 USD",
    priceLKR: "216,000 LKR", // Added LKR price
    details: "Experience the height of luxury with exclusive butler service, a private dining room, and a terrace that offers unrivaled views of the city skyline.",
    image: srilanka,
    locations: ["Sri Lanka", "Italy", "Spain"]
  },
  {
    id: 6,
    name: "Celestial Skyline Penthouse Suite",
    description: "A luxurious retreat with a rooftop terrace, outdoor Jacuzzi, and breathtaking views of Spain’s cities or countryside.",
    priceUSD: "800 USD",
    priceLKR: "288,000 LKR", // Added LKR price
    details: "This penthouse suite features a private rooftop terrace, an outdoor Jacuzzi, and personalized concierge service, making it the ultimate escape for elite travelers.",
    image: srilanka,
    locations: ["Spain", "Italy"]
  }
];



const details = [
  {
    id: 1,
    title: 'Eagle Nest Golf Club',
    description: 'Enjoy the beautiful view of the ocean while playing golf on our golf course',
    image: golf,
  },
  {
    id: 2,
    title: 'The Elite Room Club',
    description: 'Relax and unwind at our exclusive club with premium amenities',
    image: club,
  },
  {
    id: 3,
    title: 'Serenity Haven Spa',
    description: 'Rejuvenate your senses with our luxurious spa treatments',
    image: spa,
  },
  {
    id: 4,
    title: 'Vital Core Fitness',
    description: 'Stay fit and healthy with our state-of-the-art gym facilities',
    image: gym,
  },
  {
    id: 5,
    title: 'Gourmet Haven Dining',
    description: 'Indulge in gourmet cuisine prepared by our top chefs',
    image: food,
  },
];

const Page: React.FC = () => {

  const [expanded, setExpanded] = useState(false);
  const [currency , setCurrency] = useState('USD');
  const [roomExpanded, setRoomExpanded] = useState(false);
  const [sriexpanded, srisetExpanded] = useState(false);
  const [italexpanded, italsetExpanded] = useState(false);
  const [spainexpanded, spainsetExpanded] = useState(false);

  const handleDropdownClick = () => {
    setExpanded(!expanded);
  };
  const handleSriDropdownClick = () => {
    srisetExpanded(!sriexpanded);
  };

  const handleItalDropdownClick = () => {
    italsetExpanded(!italexpanded);
  };

  const handleSpainDropdownClick = () => { 
    spainsetExpanded(!spainexpanded);
  };

  const handleRoomDropdownClick = () => {
    setRoomExpanded(!roomExpanded);
   };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="relative flex-col bg-primary w-full h-auto overflow-hidden">
 
         <div className='absolute flex-col lg:w-full lg:h-[100vh] z-30'>

          <div className="relative w-full h-[75vh] overflow-hidden">
              <Image
                src={wallpaper2}
                alt="Beach View"
                layout="fill"
                objectFit="cover"
                priority // Ensures this image loads quickly
              />
            </div>
            <div className='flex bg-transparent lg:w-[100vw] lg:h-[25vh]'/>


         </div>

         <div className='absolute flex-col bg-transparent lg:w-[100vh] lg:h-auto z-40'>

              <div className='flex bg-transparent lg:w-[100vw] lg:h-[60vh]'/>
              <div className='flex bg-transparent items-center justify-center lg:w-[100vw] lg:h-[40vh] space-x-6'>
                
                    {details.map((tool) => (
                      <div key={tool.id} className='group relative flex flex-col h-auto w-auto cursor-pointer items-center justify-center space-y-5 group'>
                        <div className='flex relative w-[16rem] h-[16rem] bg-primary rounded-2xl overflow-hidden'
                          style={{ boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)' }}>
                          <Image src={tool.image} alt={tool.title} className='object-cover w-full h-full group-hover:scale-150 transform-all duration-700 ease-in-out' />
                          <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-t from-secondary to-transparent bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000'>
                            <p className='text-white font-kanit text-center px-4'
                            style={{
                              fontWeight:'200'
                            }}>{tool.description}</p>
                          </div>
                        </div>
                        <h2 className='flex flex-col font-kanit text-xl text-gray-600' style={{ fontWeight: '200' }}>
                          {tool.title}{''}<div className='bg-navy h-[0.05rem] w-1/4 group-hover:w-full transform-all duration-500 ease-in-out'/>
                        </h2>
                      </div>
                    ))}

 
              </div>
         </div>  

         <div className='flex bg-transparent lg:w-[100vw] lg:h-[10vh]'/>

          
          <div className="flex bg-primary w-full h-screen"/>

          
          <div className={`relative flex flex-col bg-goldd w-full ${expanded ? 'lg:h-[80vh]' : 'lg:h-[20vh]'} items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out`}>
            <Image src={cover2} alt="Beach View" layout="fill" objectFit="cover" priority />
            <div className={`absolute inset-0 bg-gradient-to-t from-secondary to-transparent ${expanded ? 'bg-gradient-to-t from-secondary to-transparent' : 'bg-gradient-to-t from-secondary to-transparent'} bg-opacity-50`} />

            <div className={`absolute flex flex-col items-center  ${expanded ? 'justify-start' : 'justify-center'} inset-0 bg-gradient-to-b from-gray-500 via-transparent to-transparent lg:space-y-2 bg-opacity-50`}>
              <div className='flex flex-col items-center justify-center lg:space-y-2 lg:mt-12'>
                <div className='font-bubblerOne text-2xl text-goldd'>
                  Where Every Stay Tells a Story
                </div>
                <div className={`flex items-center justify-center mt-0 ${expanded ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleDropdownClick}>
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={30}
                    height={150}
                    className='hover:mt-4 transform-all duration-300 ease-in-out'
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              <div className={` items-center justify-center w-auto h-auto transition-all duration-500 ease-in-out ${expanded ? 'flex flex-col' : 'hidden' }`}>
              <div className='flex flex-col bg-transparent w-full lg:h-[10vh] items-center justify-center'>
 

                      </div>
                      <div className='flex flex-col bg-transparent w-full lg:h-auto items-center justify-center'>
                          <p className='font-bubblerOne text-lg lg:w-[60vw] lg:h-auto text-center text-primary' style={{
                            fontWeight:'200'
                          }}>
                              Anavara Resort invites you to experience an unparalleled journey of luxury, sophistication, and natural beauty. With three iconic destinations in Sri Lanka, Italy, and Spain, each property offers a unique blend of cultural charm and modern refinement.
                              In the heart of Sri Lanka, immerse yourself in tropical paradise surrounded by lush greenery and serene beaches. In Italy, indulge in the romance of historic landscapes, where timeless architecture meets exquisite hospitality. In Spain, savor the vibrant allure of Mediterranean splendor paired with unparalleled relaxation.
                              At Anavara, every detail is crafted to perfection, from world-class accommodations and culinary delights to rejuvenating spas and exceptional experiences. Discover a sanctuary where elegance and adventure intertwine, creating memories that last a lifetime.
                          </p>
                          <h2 className='font-bubblerOne text-8xl text-goldd lg:mt-5' style={{ fontWeight: '100' }}>
                                ANAVARA HEAVAN
                            </h2>
                            <h2 className='flex flex-col font-bubblerOne text-xl text-goldd font-thin' style={{ fontWeight: '300' }}>
                               A World of Timeless Elegance{''}
                               <div className='bg-goldd h-[0.03rem] w-full'/>
                            </h2>
                      </div>

              </div>
            </div>
          </div>
          
          <div className="flex flex-col bg-primary w-full h-auto items-center justify-center">
                    <div className='flex flex-col items-center justify-center lg:space-y-2 lg:mt-12'>
                        <div className='font-kanit text-5xl text-goldd' style={{
                          fontWeight:'100'
                        }}>Serene stays
                          {' '}<span className='font-bubblerOne'> Luxury locations</span>
                        </div>
                      </div>
                      <div className='flex bg-transparent w-full lg:h-[100vh] items-center justify-center lg:mt-12'>

                                 <div className='flex flex-col bg-transparent lg:h-auto lg-auto items-start justify-center'>
                                   <div className='flex lg:w-[80vw] lg:h-[50vh]  bg-transparent items-center justify-between overflow-hidden rounded-3xl'>
                                        <div className={`group relative flex lg:h-[50vh] ${spainexpanded ? 'lg:w-[20vw] ' : 'lg:w-[0vw] '}  lg:mt-2 bg-transparent overflow-hidden rounded-3xl items-center justify-center transition-all duration-1000 ease-in-out`}>
                                          <Image
                                              src={helicopter}
                                              alt="Beach View"
                                              layout="fill"
                                              objectFit="cover"
                                              priority
                                            />
                                            <div className='absolute flex lg:w-[100vw] lg:h-[50vh] bg-gradient-to-t from-secondary to-transparent items-end justify-center overflow-hidden rounded-xl'/>
                                                  <div className={`flex flex-col lg:w-[100vw] lg:h-auto justify-center items-center  ${spainexpanded ? 'mb-52' : 'mb-0'} transition-all duration-1000 ease-in-out z-40`}>                                                  
                                                    <div className={`flex items-center justify-center mt-0  cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleSpainDropdownClick}>
                                                        <h2 className={`font-bubblerOne  text-goldd  ${spainexpanded ? 'text-6xl' : 'text-8xl'} transition-all duration-1000 ease-in-out`}
                                                        style={{
                                                          fontWeight:'100'
                                                        }}>
                                                           RIDES
                                                        </h2>
                                                    </div>
                                                    </div>
                                                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-secondary to-transparent bg-opacity-50 transform ${spainexpanded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>
                                                      <p className='text-white font-kanit text-center px-4 lg:w-[20vw] lg:mt-5'
                                                      style={{
                                                        fontWeight:'100'
                                                      }}>Elevate your stay at Anavara Hotels in Spain with breathtaking helicopter rides. Soar above iconic landscapes, from vibrant cities to serene coastlines, and experience Spain like never before.</p>
                                                     
                                                     <div className='flex bg-goldd w-[10vw] h-[2rem] mt-5 items-center justify-center cursor-pointer'>
                                                          <h2 className='font-bubblerOne text-white text-center'>
                                                            Check Availability
                                                          </h2>
                                                     </div>
                                                     
                                                     </div>
                                                     
                                        </div>
                                        
                                        <div className={`group relative flex lg:h-[50vh] ${spainexpanded ? 'lg:w-[59vw] ' : 'lg:w-[80vw] '}  lg:mt-2 bg-transparent overflow-hidden rounded-3xl items-center justify-center transition-all duration-1000 ease-in-out`}>
                                          <Image
                                              src={spain}
                                              alt="Beach View"
                                              layout="fill"
                                              objectFit="cover"
                                              priority
                                            />
                                            <div className='absolute flex lg:w-[100vw] lg:h-[50vh] bg-gradient-to-t from-secondary to-transparent items-end justify-center overflow-hidden rounded-xl'/>
                                                  <div className={`flex flex-col lg:w-[100vw] lg:h-auto justify-center items-center  ${spainexpanded ? 'mb-52' : 'mb-0'} transition-all duration-1000 ease-in-out z-40`}>                                                  
                                                    <div className={`flex items-center justify-center mt-0  cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleSpainDropdownClick}>
                                                        <h2 className={`font-bubblerOne  text-goldd  ${spainexpanded ? 'text-6xl' : 'text-8xl'} transition-all duration-1000 ease-in-out`}
                                                        style={{
                                                          fontWeight:'100'
                                                        }}>
                                                           SPAIN
                                                        </h2>
                                                    </div>
                                                    </div>
                                                    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-secondary to-transparent bg-opacity-50 transform ${spainexpanded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>
                                                      <p className='text-white font-kanit text-center px-4 lg:w-[40vw] lg:mt-5'
                                                      style={{
                                                        fontWeight:'100'
                                                      }}>Welcome to Anavara Heavan in Spain, where tradition meets sophistication. Located in Spain's most iconic destinations, our flagship hotel blends modern luxury with the vibrant spirit of Spanish culture. Indulge in exceptional hospitality, breathtaking architecture, and authentic culinary delights for an unforgettable Spanish experience.</p>
                                                     </div>
                                        </div>


                                    </div>
                                        <div className='flex lg:w-[80vw] lg:h-[50vh] lg:mt-2 bg-transparent items-center justify-between overflow-hidden rounded-3xl'>
                                            
                                              <div className={`group relative flex lg:h-[50vh]  ${sriexpanded ? 'lg:w-[20vw] ' : 'lg:w-[55vw]'}  sfdf lg:mt-2 bg-transparent overflow-hidden rounded-3xl items-center justify-center transition-all duration-1000 ease-in-out`}>
                                                  <Image
                                                      src={italy}
                                                      alt="Beach View"
                                                      layout="fill"
                                                      objectFit="cover"
                                                      priority
                                                    />
                                                    <div className='absolute flex lg:w-[100vw] lg:h-[50vh] bg-gradient-to-t from-secondary to-transparent items-end justify-center overflow-hidden rounded-xl'/>
                                                          <div className={`flex flex-col lg:w-[100vw] lg:h-auto justify-center items-center  ${italexpanded ? 'mb-52' : 'mb-0'} transition-all duration-1000 ease-in-out z-40`}>                                                  
                                                            <div className={`flex items-center justify-center mt-0  cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleItalDropdownClick}>
                                                                <h2 className={`font-bubblerOne  text-goldd  ${italexpanded ? 'text-6xl' : 'text-8xl'} transition-all duration-1000 ease-in-out`}
                                                                style={{
                                                                  fontWeight:'100'
                                                                }}>
                                                                  ITALY
                                                                </h2>
                                                            </div>
                                                            </div>
                                                            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-secondary to-transparent bg-opacity-50 transform ${italexpanded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>
                                                              <p className='text-white font-kanit text-center px-4 lg:w-[40vw] lg:mt-5'
                                                              style={{
                                                                fontWeight:'100'
                                                              }}>Discover the heart of Italy with Anavara Heaven. From the romance of Venice to the charm of Tuscany and the history of Rome, our hotels blend modern luxury with authentic Italian charm. Indulge in world-class amenities, breathtaking views, and exceptional cuisine for an unforgettable Italian escape.</p>
                                                            </div>
                                                </div>

                                                <div className={`group relative flex lg:h-[50vh] ${sriexpanded ? 'lg:w-[59vw] ' : 'lg:w-[24vw] '}  lg:mt-2 bg-transparent overflow-hidden rounded-3xl items-center justify-center transition-all duration-1000 ease-in-out`}>
                                                  <Image
                                                      src={srilanka}
                                                      alt="Beach View"
                                                      layout="fill"
                                                      objectFit="cover"
                                                      priority
                                                    />
                                                    <div className='absolute flex lg:w-[100vw] lg:h-[50vh] bg-gradient-to-t from-secondary to-transparent items-end justify-center overflow-hidden rounded-xl'/>
                                                          <div className={`flex flex-col lg:w-[100vw] lg:h-auto justify-center items-center  ${sriexpanded ? 'mb-52' : 'mb-0'} transition-all duration-1000 ease-in-out z-40`}>                                                  
                                                            <div className={`flex items-center justify-center mt-0  cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleSriDropdownClick}>
                                                                <h2 className={`font-bubblerOne  text-goldd  ${sriexpanded ? 'text-6xl' : 'text-8xl'} transition-all duration-1000 ease-in-out`}
                                                                style={{
                                                                  fontWeight:'100'
                                                                }}>
                                                                  SRILANKA
                                                                </h2>
                                                            </div>
                                                            </div>
                                                            <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-t from-secondary to-transparent bg-opacity-50 transform ${sriexpanded ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000`}>
                                                              <p className='text-white font-kanit text-center px-4 lg:w-[40vw] lg:mt-5'
                                                              style={{
                                                                fontWeight:'100'
                                                              }}>Experience the beauty of Sri Lanka with Anavara Heavan. From golden beaches to lush hill country and vibrant cities, our hotels offer modern comfort infused with local charm. Enjoy warm hospitality, breathtaking views, and authentic Sri Lankan cuisine for a truly unforgettable stay.</p>
                                                            </div>
                                                </div>


                                        </div>

                                
                          </div>
                          
                      </div>
                      <div className='flex bg-transparent w-full lg:h-[5vh]'/>
          </div>


          {/*section*/}

          <div className={`relative flex flex-col bg-goldd w-full ${roomExpanded ? 'lg:h-[50vh]' : 'lg:h-[20vh]'} lg:mt- items-center justify-center overflow-hidden transition-all duration-1000 ease-in-out`}>
            <Image src={pillow} alt="Beach View" layout="fill" objectFit="cover" priority />
            <div className={`absolute inset-0 bg-gradient-to-t from-secondary to-transparent ${roomExpanded ? 'bg-gradient-to-t from-secondary to-transparent' : 'bg-gradient-to-t from-secondary to-transparent'} bg-opacity-50`} />

            <div className={`absolute flex flex-col items-center  ${roomExpanded ? 'justify-start' : 'justify-center'} inset-0 bg-gradient-to-b from-gray-500 via-transparent to-transparent lg:space-y-2 bg-opacity-50`}>
              <div className='flex flex-col items-center justify-center lg:space-y-2 lg:mt-12'>
                <div className='font-bubblerOne text-2xl text-goldd'>
                Make Your Room Uniquely Yours
                </div>
                <div className={`flex items-center justify-center mt-0 ${roomExpanded ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-500 ease-in-out`} onClick={handleRoomDropdownClick}>
                  <Image
                    src={dropdown}
                    alt="Dropdown Icon"
                    width={30}
                    height={150}
                    className='hover:mt-4 transform-all duration-300 ease-in-out'
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              <div className={` items-center justify-center w-auto h-auto transition-all duration-500 ease-in-out ${roomExpanded ? 'flex flex-col' : 'hidden' }`}>

                      <div className='flex flex-col bg-transparent w-full lg:h-auto items-center justify-center'>
                          <p className='font-bubblerOne text-lg lg:w-[50vw] lg:h-auto text-center text-primary' style={{
                            fontWeight:'200'
                          }}>
                             At Anavara Heavean, we make every stay uniquely yours. Personalize your room and amenities to suit your needs, ensuring a seamless and unforgettable experience.
                          </p>
                          <h2 className='font-bubblerOne text-8xl text-goldd lg:mt-5' style={{ fontWeight: '100' }}>
                                TAILORED COMFORT
                            </h2>
                            <div className='flex flex-col lg:w-[20rem] lg:h-[3rem] lg:mt-2 bg-goldd items-center justify-center cursor-pointer'>
                              <h2 className='font-bubblerOne text-xl text-primary font-thin' style={{ fontWeight: '300' }}>
                              Personalized Your Space{''}
                              </h2>
                              <div className='bg-goldd h-[0.03rem] w-full'/>
                            </div>
                      </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col bg-primary w-full h-auto items-center justify-center">
                  <div className='flex flex-col items-center justify-center lg:mt-12'>
                      <h2 className='font-kanit text-5xl text-goldd' style={{
                        fontWeight:'100'
                      }}>Rooms & Suites |
                        {' '}<span className='font-bubblerOne'>
                        Luxurious Room Escapes</span></h2>
                  </div>
                  <div className="grid grid-cols-2 gap-8 lg:w-[80vw] lg:h-auto items-center justify-center lg:mt-12 text-center mx-auto lg:p-12">
                      {roomDescriptions.map((room) => (
                        <div
                          key={room.id}
                          className="flex flex-col bg-primary lg:w-[30rem] lg:h-[35rem] items-center justify-center text-center mx-auto"
                          style={{
                            boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.2)",
                          }}>
                         <div className='relative w-[30rem] h-[15rem] bg-primary  overflow-hidden'>
                              <Image src={room.image} alt="Beach View" layout="fill" objectFit="cover" priority />

                         </div> 
                         <div className='flex flex-col lg:w-[30rem] lg:h-[15rem] items-start lg:space-y-2 justify-center lg:p-4'>
                            <h2 className="font-bubblerOne text-2xl text-goldd"
                                style={{
                                  fontWeight: "500",
                                }}
                              >
                                {room.name}
                              </h2>
                              <p className="font-kanit text-start text-md lg:w-[25rem] text-secondary"
                                style={{
                                  fontWeight: "200",
                                }}
                              >
                                {room.description}
                              </p>
                              <div className='flex h-auto w-auto lg:space-x-4'>
                              {room.locations.map((location ,index)=>(
                                <div key={index} className='flex items-center border-2 cursor-pointer justify-center lg:p-2'>
                                  <h2 className='font-kanit text-md text-secondary'
                                  style={{
                                    fontWeight: "200",
                                  }}>
                                    {location}
                                  </h2>
                                </div>
                              ))}

                              </div>  

                         </div>
                         <div className='flex lg:w-[30rem] lg:h-[5rem] items-center justify-center'>
                              <div className='flex lg:w-[15rem] lg:h-[5rem] items-center justify-evenly lg:space-x-4'>
                                <select className='flex font-bubblerOne text-2xl border-2 lg:p-1' value={currency} onChange={handleCurrencyChange}>
                                    <option value="USD">USD</option>
                                    <option value="LKR">LKR</option>
                                </select>
                                <h2 className='font-kanit text-md text-goldd'>
                                  {currency === 'USD' ? room.priceUSD : room.priceLKR}
                                </h2>
                              </div>
                              <div className='flex lg:w-[15rem] lg:h-[5rem] items-center justify-center'>
                              <div className='flex bg-goldd lg:w-[12rem] lg:h-[3rem]  items-center justify-center cursor-pointer'>
                                        <h2 className='font-bubblerOne text-white text-center'>
                                            Check Out
                                         </h2>
                              </div>
                              </div>
                         </div>

                        </div>
                      ))}
                    </div>

          </div>
    </div>
  );
};

export default Page;
