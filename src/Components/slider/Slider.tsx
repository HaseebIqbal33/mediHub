import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img from "../../assets/svgs/Rectangle1.svg";
import img2 from "../../assets/svgs/Rectangle 2.svg";
import img3 from "../../assets/svgs/Rectangle 3.svg";
import img4 from "../../assets/svgs/Rectangle 4.svg";

import { SliderImag } from "./SliderImag";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1800 },
    items: 4,
    slidesToSlide: 4,
  },
  largDesktop: {
    breakpoint: { max: 1800, min: 1500 },
    items: 4,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const Slider = () => {
  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style "
      // itemClass="carousel-item-padding-40-px"
      // itemClass="p-8"
      className="h-full   ml-10 w-full mb-12"
      arrows={false}
    >
      <SliderImag img={img} service="Consultancy" />
      <SliderImag img={img2} service="Ophthalmologist" />
      <SliderImag img={img3} service="Vaccination" />
      <SliderImag img={img4} service="Physical" />
      <SliderImag img={img} service="Consultancy" />
    </Carousel>
  );
};
