import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>
                <SwiperSlide><img src={'../../docs/ProductList-Desktop.png'} width={400} height={300}/></SwiperSlide>


            </Swiper>
        </>
    );
}

export { Carousel }
