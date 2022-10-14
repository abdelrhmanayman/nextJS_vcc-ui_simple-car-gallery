// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom/extend-expect';
import { defaultFallbackInView } from 'react-intersection-observer'

global.IntersectionObserver = jest.fn()
defaultFallbackInView(false)

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(require('./public/api/cars.json'))
}));
jest.mock("swiper/css", jest.fn());
jest.mock('Swiper', () => class Mocked { });
