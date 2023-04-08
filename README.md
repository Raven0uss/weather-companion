# Weather Companion

Weather companion is a small app with React, Typescript and RxJS allowing you to check the weather in all cities in the world.

## How to run it ?

After cloned this project, you want to install the dependencies :

```bash
npm install
```

or

```bash
yarn
```

After that you can just launch the project like that :

```bash
npm start
```

or

```bash
yarn start
```

### What about the vulnerabilities ?

The dependencies vulnerabilities alert is related to `react-scripts@^5.0.0` which allow to run the project for development purpose, so this is a falsy alert. You can learn about it here : https://github.com/facebook/create-react-app/issues/11174#issue-935928547.

To check the productions vulnerabilities please launch `npm audit --production` which omit the development dependencies.

## Test the project

To run the tests suit just launch :

```bash
npm run test
```

The configuration has been set to display the coverage of the code. It will also generate a complete report accessible with this command :

```bash
npm run test:report
```

It will launch with ``http-server`` node module, a server which allow to vizualise more informations on ``http://127.0.0.1:8080``.

## Build for production

To build the project to deploy it in production, launch this command :

```bash
npm run build
```

You will be able to deploy it or check the production with a static server thanks to modules like ``serve`` or ``http-server``.

#### Credit

This project has been coded by [Sofiane Belazouz](https://www.linkedin.com/in/sofiane-belazouz/) and use https://openweathermap.org for the API and https://github.com/erikflowers/weather-icons for the icons.
