import React, { useEffect, useState } from "react";
import { Text } from "vcc-ui";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { Car } from "../src/shared/interfaces/car.interface";
import { CarouselNavigationButtons } from "../src/components/CarouselNavigationButtons";
import ChevronSmall from "../public/icons/chevron-small.svg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function CarsGallery() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("./api/cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data);
      })
      .catch((e) => console.log("Error:", e));
  }, []);


  const carSelected = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const cars = [...data];
    const filteredCars: any = cars
      .map((car: Car) => (e.target.value === car.bodyType ? car : null))
      .filter(Boolean);

    if (filteredCars.length) {
      setFilterData(filteredCars);
    } else {
      setFilterData(cars);
    }
  };

  return (
    <div className="container">
      <select
        className="car-filter"
        onChange={carSelected}
        aria-label="car filter"
      >
        <option value="All Cars">All Types</option>
        {[...new Set(data.map((car: Car) => car.bodyType))].map((item: string) => {
          return (
            <option value={item} key={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>
      <Swiper
        id={'always-be-swipin'}
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          }
        }}
      >
        {filterData.map((i: Car) => (
          <SwiperSlide key={i.id}>
            <Text subStyle="emphasis" extend={{ color: "#808c98" }}>
              {i.bodyType.toUpperCase()}
            </Text>
            <Text subStyle="emphasis" className="car-details" extend={{ marginRight: '5px' }}>
              {i.modelName}
            </Text>
            <Text subStyle="emphasis" className="car-details" extend={{ color: "#808c98" }}>
              {i.modelType}
            </Text>
            <Image src={i.imageUrl} alt="car display" width={800} height={600} className="car-img" />
            <ul className="car-links">
              <li>
                <a href={`/learn:${i.id}`}>
                  <Text subStyle="emphasis" extend={{ color: "#337ac0" }}>
                    LEARN <Image src={ChevronSmall} className="chevron-small" alt="learn" />
                  </Text>
                </a>
              </li>
              <li>
                <a href={`/shop:${i.id}`}>
                  <Text subStyle="emphasis" extend={{ color: "#337ac0" }}>
                    SHOP <Image src={ChevronSmall} className="chevron-small" alt="shop" />
                  </Text>
                </a>
              </li>
            </ul>
          </SwiperSlide>
        ))}
        <CarouselNavigationButtons />
      </Swiper>
    </div>
  );
}


export default CarsGallery;
