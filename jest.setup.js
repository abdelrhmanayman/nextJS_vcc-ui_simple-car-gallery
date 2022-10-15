import '@testing-library/jest-dom/extend-expect';


global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(require('./public/api/cars.json'))
}));

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useDispatch: jest.fn().mockImplementation(() => {
            return {};
        }),
    };
});

jest.mock("swiper/css", jest.fn());
jest.mock('Swiper', () => class Mocked { });
