import React from "react";
import avatar01 from "../assets/about-01.jpg";
import avatar02 from "../assets/about-02.jpg";
import avatar03 from "../assets/about-03.jpg";
import avatar04 from "../assets/about-04.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      text: "The service was excellent. Car wash is the next killer app. I can't say enough about car wash. The very best. I have gotten at least 50 times the value from car wash.",
      name: "Betty Hensley",
      role: "Technician",
      image: avatar01,
    },
    {
      text: "Thanks guys, keep up the good work! I use car wash often. Without car wash, we would have gone bankrupt by now. I don't know what else to say.",
      name: "Brenda Roberts",
      role: "Mechanic",
      image: avatar03,
    },
    {
      text: "I was amazed at the quality of car wash. Car wash has really helped our business. I like car wash more and more each day because it makes my life a lot easier.",
      name: "Crystal Lew",
      role: "Instructor",
      image: avatar04,
    },
    {
      text: "Great job, I will definitely be ordering again! If you aren't sure, always go for car wash. I use car wash often. Car wash is worth much more than I paid. You guys rock!",
      name: "Robin Jamar",
      role: "Station Agent",
      image: avatar02,
    },
    {
     text: "I’m always happy with my service. Paul does a great job at keeping me updated on what is needed on my vehicle. He is very knowledgeable and easy to work with. It’s nice to have the peace of mind, knowing everything is done correctly.",
     name: "Elaine Roder",
     role: "Instructor",
     image: avatar04,
   },
   {
     text: "Recently took my vehicle there for the first time for a water pump replacement. They were very friendly, did a great job, didn't charge me any extra fees above their quote, and got it done on time. Very happy with the experience.",
     name: "Mary Degen",
     role: "Station Agent",
     image: avatar01,
   },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-lg uppercase text-red-600 font-semibold">Testimonial</span>
          <h2 className="text-3xl font-bold text-gray-800">Our Customer Reviews</h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-quote-right"></i>
              </div>
              <p className="mb-4 text-gray-600 border-b pb-4">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h6 className="text-lg font-bold text-gray-800">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                  <div className="flex text-yellow-500 mt-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
