import React from 'react'
import { useSelector } from "react-redux";
import { Car } from '@/shared/interfaces/car.interface';
import { Block, Col, Grid, Row, Spacer, Text } from 'vcc-ui';
import Image from 'next/image'

import { selectCarsState } from "../../../store/carsSlice";


function Learn() {
    const selectedCar = useSelector(selectCarsState);

    return (
        <>
            {
                !selectedCar
                    ? <div className="error-container"><Image src="/images/error_page.png" alt="error_page" width={800} height={500} /></div>
                    :
                    <div className='car-learn'>
                        <Grid>
                            <Row>
                                <Col>
                                    <Image src={(selectedCar as unknown as Car).imageUrl} width={500} height={500} alt="car_image" />
                                </Col>
                            </Row>
                            <Spacer size={5} />
                            <Row>
                                <Col>
                                    <Block extend={{ textAlign: 'center' }}>
                                        <Text>Hello Customer, Great choice. This is our best car ever.</Text>
                                        <Text variant="bates">Pay us money and take it :)</Text>
                                    </Block>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
            }
        </>
    );
}

export default Learn;