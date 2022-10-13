import { useSwiper } from "swiper/react";
import { Flex, Click } from "vcc-ui";
import Image from 'next/image'

import ChevronCircle from "../../public/icons/chevron-circled.svg";

const CarouselNavigationButtons = () => {
    const swiper = useSwiper();
    return <Flex className="button-nav">
        <Click
            aria-label="previous"
            onClick={() => swiper?.slidePrev()}
        >
            <Image className="button-prev" src={ChevronCircle} alt="prev" />
        </Click>
        <Click
            aria-label="next"
            onClick={() => swiper?.slideNext()}
        >
            <Image className="button-next" src={ChevronCircle} alt="next" />
        </Click>
    </Flex>;
};

export { CarouselNavigationButtons }