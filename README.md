# My Movie List
## About

My Movie List is an application that allows users to search for movies and add them to a Watched list or a Plan to watch list.

![My Movie List](/readmeImg/MyMovieList.gif?raw=true 'My Movie List')

## Get started

#### Installation

```sh
$ git clone https://github.com/vanessamfc/MyMovieList.git
$ cd MyMovieList
```

### Connecting to the server

the application will try to connect to the server hosted in this [link](https://mmlapi.vanessamfc.site/).

however, if you wish to run the server on your own machine here is the [API](https://github.com/vanessamfc/mmlBack) with the installation instructions.

After following the server instalations steps, add the envroiment variable `REACT_APP_API_URL` in your `.env`.

Example:

```sh
REACT_APP_API_URL=http://localhost:3333/
```

#### Running the application

To run this project execute these comands

```sh
$ yarn
$ yarn start
```

or

```sh
$ npm install
$ npm start
```
