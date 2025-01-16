import React from 'react';
import Image from 'next/image';

// images
//import wallpaper1 from './assests/beach view 02.jpg';
import wallpaper2 from './assests/beach view 04.jpg';
import golf from './assests/golf.jpg';
import club from './assests/clubs.jpg';
import spa from './assests/spa.jpg';
import gym from './assests/gym.jpg';
import food from './assests/food.jpg';
import cover1 from './assests/cover01.jpg';


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
  return (
    <div className="relative flex-col bg-primary w-full h-auto">
 
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

          <div className="relative flex flex-col bg-goldd w-full lg:h-[20vh] items-center justify-center overflow-hidden">
                    <Image src={cover1} alt="Beach View" layout="fill" objectFit="cover" priority />
                    <div className='absolute inset-0 bg-gradient-to-t from-secondary to-transparent bg-opacity-50'/>

          </div>
          
          
          <div className="flex flex-col bg-primary w-full h-auto items-center justify-center">

                      <div className='flex flex-col bg-transparent w-full lg:h-[20vh] items-center justify-center'>
                             <h2 className='flex flex-col font-bubblerOne text-xl text-goldd font-thin' style={{ fontWeight: '400' }}>
                               A World of Timeless Elegance{''}
                               <div className='bg-goldd h-[0.03rem] w-full'/>
                            </h2>
                            <h2 className='font-kanit text-6xl text-goldd' style={{ fontWeight: '100' }}>
                                Welcome to Anavara Resort
                            </h2>
                      </div>
                      <div className='flex bg-transparent w-full lg:h-[30vh] items-center justify-center'>
                          <p className='font-bubblerOne text-lg lg:w-[60vw] lg:h-auto text-center text-navy' style={{
                            fontWeight:'200'
                          }}>
                              Anavara Resort invites you to experience an unparalleled journey of luxury, sophistication, and natural beauty. With three iconic destinations in Sri Lanka, Italy, and Spain, each property offers a unique blend of cultural charm and modern refinement.

                              In the heart of Sri Lanka, immerse yourself in tropical paradise surrounded by lush greenery and serene beaches. In Italy, indulge in the romance of historic landscapes, where timeless architecture meets exquisite hospitality. In Spain, savor the vibrant allure of Mediterranean splendor paired with unparalleled relaxation.

                              At Anavara, every detail is crafted to perfection, from world-class accommodations and culinary delights to rejuvenating spas and exceptional experiences. Discover a sanctuary where elegance and adventure intertwine, creating memories that last a lifetime.
                          </p>
                      </div>
                      <div className='flex bg-transparent w-full lg:h-[80vh] items-center justify-center'>
                         <div className='relative flex bg-transparent lg:h-[75vh] lg:w-[90vw] border-2 items-center justify-center'>
                                <div className=''>

                                </div>
                          </div>
                          
                      </div>
          </div>
    </div>
  );
};

export default Page;
