import React from 'react'
import { useSelector } from "react-redux";
import Image from 'next/image';
import { Row, Col, Spacer, Block, Text, Grid } from 'vcc-ui';

import { selectCarsState } from "../../../store/carsSlice";


function Shop() {
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
                                    <Image src="/images/out-of-stock.jpeg" width={500} height={500} alt="out-of-stock" />
                                </Col>
                            </Row>
                            <Spacer size={5} />
                            <Row>
                                <Col>
                                    <Block extend={{ textAlign: 'center' }}>
                                        <Text>Sorry, Too late.</Text>
                                        <Text variant="bates">More information on our website :)</Text>
                                    </Block>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
            }
        </>
    );
}

export default Shop;