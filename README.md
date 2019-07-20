# react-fs

Custom React Renderer inspired by [react-fs-renderer by Eric Vicenti](https://github.com/ericvicenti/react-fs-renderer/).

This is the companion repository for the talk [React: Beyond UI](https://slides.com/abinavseelan/react-custom-renderers#/) given at [ReactJS Bangalore #47](https://www.meetup.com/ReactJS-Bangalore/events/261134398/).


## Getting Started

1. Clone the repository
2. Install all the packages using `npm install`.
3. Run `npm start` to start the express server.

## Demo

Using Postman (or an an equivalent REST API testing application), make a POST request to `localhost:1337/:type/:name` where

`:type`: Either `react` or `basic`
`:name`: Any non-spaced text

This will run through the custom `render()` method in `src/FS.js` and produce the relevant project structure for the given `:type`.

If you want to play around and make your own folder structures for other `:type`, add your JSX to `index.jsx`. :smile: