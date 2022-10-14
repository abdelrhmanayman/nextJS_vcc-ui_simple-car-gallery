import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, } from "swiper";
import { Link, LoadingBar, Text } from 'vcc-ui'
import Image from 'next/image'

import { CarouselNavigationButtons } from "./CarouselNavigationButtons";
import { carsCarouselProps } from "../shared/interfaces/carsCarousel.interface";


const CarsCarousel = ({ carsData, defaultSpaceBetween = 20, breakPoints, isLoading = false }: carsCarouselProps) => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={defaultSpaceBetween}
            pagination={{
                dynamicBullets: false,
                clickable: true,
            }}
            breakpoints={breakPoints}
        >
            {
                isLoading
                    ? <SwiperSlide className="loading-bar"><LoadingBar isLoading={isLoading} /></SwiperSlide>
                    :
                    carsData.map((car, index) => (
                        <SwiperSlide key={car.id}>
                            <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
                                {car.bodyType.toUpperCase()}
                            </Text>
                            <Text subStyle="emphasis" className="car-details" extend={{ marginRight: '5px' }}>
                                {car.modelName}
                            </Text>
                            <Text subStyle="emphasis" className="car-details" extend={{ color: "#808c98" }}>
                                {car.modelType}
                            </Text>
                            <Image src={car.imageUrl} alt="car display" width={800} height={600} className="car-img" />
                            <ul className="car-links">
                                <li>
                                    <Link id={`${index}-learn`} href="/learn" arrow="right">
                                        LEARN
                                    </Link>
                                </li>
                                <li>
                                    <Link id={`${index}-shop`} href="/shop" arrow="right">
                                        SHOP
                                    </Link>
                                </li>
                            </ul>
                        </SwiperSlide>
                    ))
            }
            <CarouselNavigationButtons />
        </Swiper>
    );
}

export { CarsCarousel }
