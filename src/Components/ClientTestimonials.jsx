import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from '../assets/reviewsData.js';  
import Quote from '../assets/blockqoute.svg';
import SectionHeader from './SectionHeader.jsx';

const ClientTestimonials = () => {
  return (
    <section className="testimonial-container bg-gray-200 pt-10 pb-20 px-6">
     <SectionHeader title="Testimonials" description="What our Clients are saying"/>

      <div className="slider-container relative max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <blockquote className="absolute -top-6 left-4">
          <img className="top-quote quote w-20 opacity-30" src={Quote} alt="quote" />
        </blockquote>
        <blockquote className="absolute -bottom-6 right-4">
          <img className="bottom-quote quote w-20 opacity-30" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
            arrows: false,
            pagination: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <div className="flex flex-col items-center text-center">
                <img
                  className="review-img w-24 h-24 rounded-full shadow-lg mb-4"
                  src={review.image}
                  alt={review.name}
                />
                <p className="text-gray-700 text-lg italic mb-4">{`"${review.text}"`}</p>
                <div className="info">
                  <div className="rating flex justify-center mb-2 text-yellow-400 text-xl">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9734;</span>
                  </div>
                  <p className="user text-gray-800 font-semibold mb-10">{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default ClientTestimonials;
