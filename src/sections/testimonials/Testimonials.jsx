import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import {Pagination} from 'swiper/modules';
import testimonials from './data'
import Testimonial from "./Testimonial";
import './testimonials.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const Testimonials = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="testimonials"  data-aos="fade-in">
      <p>
        Coming Soon
      </p>
      <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          601: {slidesPerView: 2},
          1025: {slidesPerView: 2}
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          testimonials.map(testimonial => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </header>
  )
}

export default Testimonials