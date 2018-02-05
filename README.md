# hotels
[![Build Status](https://travis-ci.org/abugnais/hotels.svg?branch=master)](https://travis-ci.org/abugnais/hotels)
[![Deployment Status](https://heroku-badge.herokuapp.com/?app=guarded-temple-66581)](https://guarded-temple-66581.herokuapp.com)

## Built with
* nodejs@8.9.4
* npm@5.6.0

### To run the app locally
```bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.bashrc 
nvm install 8.9.4
nvm install-latest-npm
git clone https://github.com/abugnais/hotels.git
cd hotels
npm install
npm start
```
### To run the tests
```bash
npm install --dev
npm test
```

You can access the app by browsing [http://localhost:3000](http://localhost:3000)

Access the app on [heroku](https://guarded-temple-66581.herokuapp.com)

