import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, } from "swiper";
import { LoadingBar, Text } from 'vcc-ui';
import { useDispatch } from "react-redux";
import Image from 'next/image';
import Link from "next/link";


import { CarouselNavigationButtons } from "./CarouselNavigationButtons";
import { carsCarouselProps } from "../shared/interfaces/carsCarousel.interface";
import { setSelectedCar } from "../../store/carsSlice";
import ChevronSmall from '../../public/icons/chevron-small.svg';


const CarsCarousel = ({ carsData, defaultSpaceBetween = 20, breakPoints, isLoading = false }: carsCarouselProps) => {
    const dispatch = useDispatch();

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
                                <li id={`${index}-learn`} className="learn-link" onClick={() => {
                                    dispatch((setSelectedCar as any)(car))
                                }}>
                                    <Link href={`/learn/${car.id}`}>
                                        <Text subStyle="emphasis" extend={{ color: "#337ac0" }}>
                                            LEARN <Image src={ChevronSmall} className="chevron-small" alt="right-arrow" />
                                        </Text>
                                    </Link>
                                </li>
                                <li id={`${index}-shop`} className="shop-link" onClick={() => {
                                    dispatch((setSelectedCar as any)(car))
                                }}>
                                    <Link href={`/shop/${car.id}`}>
                                        <Text subStyle="emphasis" extend={{ color: "#337ac0" }}>
                                            SHOP <Image src={ChevronSmall} className="chevron-small" alt="right-arrow" />
                                        </Text>
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
