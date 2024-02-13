import React from "react";
import Image from "next/image";

const glimpse_data = [
    {
        id: 1,
        alt: "Technology and Science",
        src: "/images/1.jpg",
        heading: "Technology and Science"

    },
    {
        id: 2,
        alt: "Crimes and Laws",
        src: "/images/2.jpg",
        heading: "Crimes and Laws"

    },
    {
        id: 3,
        alt: "Hospital and Facilities",
        src: "/images/3.jpg",
        heading: "Hospital and Facilities"

    },
]



const Glimpse = () => {
    return (
            <section className="md:w-full ">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10">
                        Glimpse of Viksit Bharat
                    </h2>

                    <div className="md:w-full flex flex-row overflow-scroll text-blue font-medium">
                        
                        {glimpse_data.map((glimpse) => (
                            <div key={glimpse.id} className="lg:w-2/3 md:w-4/5  bg-white mx-6 my-4 shadow-lg rounded-xl shadow-white-100">
                            <Image
                                src={glimpse.src}
                                alt={glimpse.alt}
                                width={200}
                                height={200}
                            />
                            <h1 className="text-2xl font-bold text-center">{glimpse.heading}</h1>
                        </div>
                        ))
}
                        
        </div>
        </div>
        </section>  
    );
};

export default Glimpse;
