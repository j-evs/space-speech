This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



## [Space speech](http://space-speech.herokuapp.com)
Listen to famous speeches of the past combined with nice ambient music.

### Implementation
The main idea was to build something similar like http://youarelistening.to but using static audio files instead of radio transmissions streams.
This project uses React/Redux libraries. 
Supported features:

1. Single radio-stream fetching from .pls file (current setting: http://soma.fm/space-station)
2. Implemented fake backend to imitate async data fetching (pictures, audio, etc.) from server


### Installation
Install it once locally:
```
npm install
```

#### Start local development server
```
npm start
```

#### Build
Builds the app for production to the build folder.
```
npm build
```

#### Deploy

Project deployed with [heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static)
```
npm run build
heroku static:deploy
```

