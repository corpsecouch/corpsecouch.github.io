# jasonbejot.com
This site is built using VitePress.

## Installation
To install dependencies run `npm install`.

## Development
Run `npm run dev` to run a local web server with hot updates. All source files are in `/src`.

## Building
There's little need to build manually. It's configured to build to the `.vitepress/dist` folder which github is set to ignore. The only real reason to build is to check that it will build once pushed to GitHub.

## Deployment
The site is served on Github Pages. It's configured to automatically build and deploy on every push to the 'main' branch.
