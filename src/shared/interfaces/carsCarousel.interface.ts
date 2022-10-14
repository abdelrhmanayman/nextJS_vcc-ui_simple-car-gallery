import { SwiperOptions } from "swiper";
import { Car } from "./car.interface";

export interface carsCarouselProps {
    carsData: Car[],
    defaultSpaceBetween?: number,
    breakPoints?: carouselBreakPoints,
    isLoading?: boolean
}

export interface carouselBreakPoints {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
}