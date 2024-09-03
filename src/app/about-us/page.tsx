import React from 'react';

const products = [
    {
        id: 1,
        title: "Pure Honey",
        description: "Experience the taste of nature with our 100% pure honey, harvested from our own hives with care and precision.",
        image: "/purehoney.png",
        bgColor: "bg-yellow-600",
        buttonColor: "bg-white text-yellow-600 hover:bg-yellow-500",
    },
    {
        id: 2,
        title: "Beehives",
        description: "Our beehives are crafted from the finest wood, designed to offer your bees a safe and productive home.",
        image: "/beehives.jpeg",
        bgColor: "bg-orange-500",
        buttonColor: "bg-white text-orange-500 hover:bg-orange-400",
    },
    {
        id: 3,
        title: "Beekeeping Tools",
        description: "Top-quality tools to ensure that your beekeeping experience is both safe and successful.",
        image: "/beekeepingtools.jpg",
        bgColor: "bg-yellow-600",
        buttonColor: "bg-white text-yellow-600 hover:bg-yellow-500",
    },
];

function AboutPage() {
    return (
        <div className="px-10 md:px-20 lg:px-64 py-20">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-black">About Our Honey Farm</h1>
                <p className="text-lg mt-4 text-gray-700">
                    Welcome to our Honey Farm! We specialize in producing high-quality honey and beekeeping products.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {products.map((product) => (
                    <div key={product.id} className={`rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 ${product.bgColor}`}>
                        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-white">{product.title}</h2>
                            <p className="text-white mt-4">{product.description}</p>
                            <button className={`mt-6 px-4 py-2 rounded-full ${product.buttonColor}`}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutPage;
