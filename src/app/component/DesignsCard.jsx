import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DesignsCard = ({item}) => {
    return (
        <div>
             <div key={item.id} className="card bg-base-100 shadow-md hover:scale-[1.02] transition duration-300 ">
          <figure className="h-64 overflow-hidden">
            <Image
              src={item.image}
              width={600}
              height={400}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.desc}</p>

            <div className="card-actions justify-end">
              <Link href={`/allDesign/${item.id}`}>
  <button className="btn btn-outline">View Details</button>
</Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default DesignsCard;