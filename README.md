# jasonbejot.com
This site is built on Vue.js.

## Installation
To install the dependencies run `npm install`.

## Building
The site is built using webpack. Simply run `npm run build`. The entire site is built to `/dist`.

## Development
Webpack is set up to serve the site from `/dist` during development. Simply run `npm run serve`. The webpack server is also configured for hot updates, it will build and serve any changes in `/src`.

## Deployment
The site is using Github Pages configured to serve from the gh-pages branch. To deploy just the `/dist` folder to gh-pages, simply run `npm run deploy`.
