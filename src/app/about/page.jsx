import Image from 'next/image';
import React from 'react';

const Aboutpage = () => {
    return (
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center py-10">

  {/* Owner 1 */}
  <div className="text-center space-y-3">
    <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
     <Image
      src="/Tanvir.jpg"
      alt="Mehraj Uddin Tanvir"
      width={600}
      height={800}
      className="rounded-xl shadow-lg object-cover h-80 w-full"
    />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
   

    <h3 className="text-xl font-bold">Mehraj Uddin Tanvir</h3>
    <p className="text-gray-600">Owner &Interior Design Specialist</p>

    <div className="text-sm text-gray-500 space-y-1">
      <p>Email: owner1@gmail.com</p>
      <p>Phone: +880 18XXXXXXXX</p>
    </div>
  </div>

  {/* Owner 2 */}
  <div className="text-center space-y-3">
    <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <Image
      src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80"
      alt="Owner 2"
      width={600}
      height={800}
      className="rounded-xl shadow-lg object-cover h-80 w-full"
    />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    

    <h3 className="text-xl font-bold">Owner 2</h3>
    <p className="text-gray-600">Architect & Designer</p>

    <div className="text-sm text-gray-500 space-y-1">
      <p>Email: owner2@gmail.com</p>
      <p>Phone: +880 18XXXXXXXX</p>
    </div>
  </div>

</div>
    );
};

export default Aboutpage;