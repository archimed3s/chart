# Hawaiian Pig Visualization Assignment

**Objective:** Using [React](https://reactjs.org/), create an animated bar chart
that shows the data over time.

This file contains imaginary data about wild pig populations on the various Hawaiian islands recorded over
several years. Your task is to take this data and use React to create an
animated bar chart. The chart should show pig population across islands, with
each separate year of data being shown as a separate frame of the animation.

The chart should have these features:

* [ ] Animation that steps through the data, displaying each year for 2 seconds
      before proceeding to the next year.

* [ ] A progress bar that shows the currently displayed year's relationship to
      the other years in the dataset.

* [ ] A play/pause button which enables and disables the animation, pausing on
      whichever year is currently being shown

* [ ] Year and play/paused state are persisted as query parameters in the URL.
      For example, `http://localhost:3000/?paused=true&year=2002` should load
      the page with the animation already paused and the year set to 2002

I assume that you're already using [Node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/)

## Usage

### Install and build prod

Install dependencies and create production build, mostly for CI:
```bash
npm start
```

### Build prod files

Building production files:
```bash
npm run build
```

### Prod server

Running production server:
```bash
npm run prod
```

### Dev

Starting development:
```bash
npm run serve
```