import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Car } from "../src/shared/interfaces/car.interface";
import { CarsCarousel } from "../src/components/CarsCarousel";
import { CarsFilterSelect } from "../src/components/CarsFilterBar";
import { carouselBreakPoints } from "../src/shared/interfaces/carsCarousel.interface";

const carsCarouselBreakPoints: carouselBreakPoints = {
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
}


const createCarTypesMap = (cars: Car[]): Record<string, number> => cars.reduce((acc: Record<string, number>, curr: Car) => {
  if (!acc[curr.bodyType]) {
    acc[curr.bodyType] = 0
  }
  acc[curr.bodyType] += 1
  return acc
}, {})

function CarsGallery() {
  const [cars, setCarsData] = useState<Car[]>([]);
  const [filteredCars, setFilterData] = useState<Car[]>([]);
  const [filterListData, setFilterListData] = useState<Record<string, number>>({});
  const [isCardsLoading, setCarsLoading] = useState<boolean>(false)
  const [IsError, setError] = useState<boolean>(false)


  useEffect(() => {
    setCarsLoading(true)

    fetch("./api/cars.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((cars) => {
        setFilterListData(createCarTypesMap(cars))
        setCarsData(cars);
        setFilterData(cars);
        setTimeout(() => {
          setCarsLoading(false)
        }, 2000)
      })
      .catch((e) => {
        console.error(e.message)
        setCarsLoading(true)
      });
  }, []);


  const carFilterHandler = (carType: string) => {
    setCarsLoading(true)

    const filteredCars: (Car | null)[] = cars.filter(({ bodyType }) => bodyType === carType)
    setFilterData(filteredCars.length ? filteredCars as Car[] : cars);

    setTimeout(() => {
      setCarsLoading(false)
    }, 1000)
  };

  return (
    <div>
      {
        IsError
          ? <div className="error-container"><Image src="/images/error_page.png" alt="error_page" width={800} height={500} /></div>
          : <div className="container">
            <CarsFilterSelect defaultValue="All" onSelectHandler={carFilterHandler} listData={filterListData} />
            <CarsCarousel defaultSpaceBetween={20} carsData={filteredCars} breakPoints={carsCarouselBreakPoints} isLoading={isCardsLoading} />
          </div>
      }
    </div>
  );
}


export default CarsGallery;
