# Volvo Cars (Global Online Digital)

This project bootstrapped with [`NextJS`](https://nextjs.org).

## Application is deployed and published using Netfliy.
**You can check the application through this [link](https://chic-froyo-2d73fe.netlify.app/)**

## Getting Started

First, run the custom development server:




```bash
npm i
&&
npm start
```

**Testing**: 

Unit testing: 
```bash
npm run test
```

E2E testing: 
```bash
npm run cypress
```
**Note:** Please build and run project before 
running the command

**Note:** Custom server is created to ease the monitoring of code change during developement, rather than build and run every time. No additional server functioanlity is added, but the future scope is there to use this custom server as per requirement.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features:

1. Initial landing page displays carousel of cars which is created using [Swiperjs]
2. After the initial launch, user is able to filter the results (based on `bodyType`) with help of provided filters.
3. Clcking on Learn/Shop will redirect you to the respective dynamic page. URL will be changed according to the car id.
4. A mobile-first design approach is implemented using modular css where,
   - device < 600px will render 1 and the fraction of second card in the view area. (Mobile View)
   - 601px < device < 768px will render 1 and the fraction of second card in the view area. (Tab View)
   - devices > 768px will render 4 cards in the view area. (Laptop/Desktop View)

## Asumptions:

1. Each button click will trigger an api call along with the query stirng to get the filtered results. The page will be client side rendered.
2. The state has been persisted. State was handled locally using Redux(thunk).
3. CSS Media query and [VCC-UI](https://vcc-ui.netlify.app) component library have been used for this responsive design.
4. Error handling is implemented in all pages in case of data missing.
5. E2e testing using Cypress
6. Unit testing using Jest
7. Build analyzing used with @next/bundle-analyzer

## Project Structure:

1. `index.tsx` is the staring file in this repository. 
2. `_app.tsx` is used for router setup and layout.
3. All the screens/pages are under `pages` folder. 3 components are added under the `view` folder.
   - `carsGallery.tsx` for car display carousel and filter.
   - `Learn.tsx` for learn about the car page.
   - `Shop.tsx` for shop the car page

## Screenshots

![VolvoCars](/public/screenshots/desktop.png?raw=true "Desktop View")

![VolvoCars](/public/screenshots/tablet.png?raw=true "Tab View")

![VolvoCars](/public/screenshots/mobile.png?raw=true "Mobile View")
