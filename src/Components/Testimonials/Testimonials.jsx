import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const testimonials = [
  {
    name: 'Aman Verma',
    position: 'CEO, CloudX',
    message: 'This email service has completely transformed the way we operate. Highly reliable and super fast!',
  },
  {
    name: 'Sneha Patel',
    position: 'CTO, WebHive',
    message: 'Affordable, fast, and great support! We switched last year and haven’t looked back.',
  },
  {
    name: 'Rakesh Kumar',
    position: 'Founder, GoSecure',
    message: 'I love the simplicity and performance. The best cloud email platform in India!',
  },
  {
    name: 'Aman Verma',
    position: 'CEO, CloudX',
    message: 'This email service has completely transformed the way we operate. Highly reliable and super fast!',
  },
  {
    name: 'Sneha Patel',
    position: 'CTO, WebHive',
    message: 'Affordable, fast, and great support! We switched last year and haven’t looked back.',
  },
  {
    name: 'Rakesh Kumar',
    position: 'Founder, GoSecure',
    message: 'I love the simplicity and performance. The best cloud email platform in India!',
  },
];

const Testimonials = () => {
  const items = testimonials.map((testimonial, index) => (
    <div
      key={index}
      className="mt-2 shadow-[0_0_2px_1px_rgba(0,0,255,0.4)] hover:shadow-[0_0_5px_2px_rgba(0,0,255,0.4)] rounded-xl p-6 max-w-sm mx-4 flex flex-col items-center text-center space-y-4 mb-8 bg-[#c5dfc8]"
    >
      <img
        src='https://www.tizzycloud.com/landing-page/images/testimonial/avatar-user.png'
        alt={testimonial.name}
        className="w-20 h-20 object-cover rounded-full shadow-md"
      />
      <h3 className="text-lg font-bold text-gray-800">{testimonial.name}</h3>
      <p className="text-sm text-gray-800 font-medium">{testimonial.position}</p>
      <p className="text-sm text-gray-600 italic">“{testimonial.message}”</p>
    </div>
  ));

  return (
    <div className="py-5 w-full">

      <h2 className="text-3xl font-bold text-center mb-6 text-gray-950 mx-5">Some Awesome Words by Our Customers.</h2>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableDotsControls={true}
        disableButtonsControls={true}
        responsive={{
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        }}
      />
    </div>
  );
};

export default Testimonials;
