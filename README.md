[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)
[![Build Status](https://travis-ci.org/adewale2018/Politico.svg?branch=develop)](https://travis-ci.org/adewale2018/Politico)
[![Coverage Status](https://coveralls.io/repos/github/adewale2018/Politico/badge.svg?branch=develop)](https://coveralls.io/github/adewale2018/Politico?branch=develop)


# Politico
Politico is a simple app that enables citizens to give their mandate to politicians running for different government offices while building trust in the process through transparency.

A live demo of the app can be access on Heroku <b><a href="https://politico.herokuapp.com/">Politico</a></b>

# Feature
Politico allows users to do the following.
 - Register and log into their accounts.
 - Admin can view all the political parties
 - Admin can create political parties
 - Admin can edit political party
 - Admin can delete political party
 - Admin can create political offices
 - Admin can view all the political offices
 - Users can vote only one politician per political office
 - Users can see the result of the election
 - Users can see all politicians running for government office
 - Users can see the list of political offices and the candidate(s) he/she voted for
 - Registered users can reset their passwords

### Endpoints

| Endpoint                 | HTTP Method | Description                                |
| ------------------------ | ----------- | ------------------------------------------ |
| /api/v1/signup           | POST        | Returns payload a new user sign up         |
| /api/v1/parties          | GET         | Get all the parties                        |
| /api/v1/parties          | POST        | Create new party                           |
| /api/v1/parties/:id/name | PUT         | Update the name of a specific party        |
| /api/v1/parties/:id      | DELETE      | Delete a particular political party        |


# Folder Structure

 The `server` directory houses the back-end implementation in <a href="https://nodejs.org/">node.js</a>, <a href="https://expressjs.com/">express</a>

 The `UI` directory houses the front-end implementation in <a href="https://adewale2018.github.io/Politico/src/UI/">Github Page</a>


# Get Started
  Kindly follow the steps below to setup a local development environment.
  + ```Clone``` this repository from a terminal ```git clone  https://github.com/adewale2018/Politico```

  + ```cd``` into the project directory

  + install project dependencies ```npm install```

  + Create ```.env``` file and set up the variables in ```.env-sample```

   + and run ```npm run start:dev``` for development

   + Go to ```http://localhost:3000/```

## Test
 - This app uses Mocha, Chai-Http for `server test`
   - Run npm i mocha -g to install Mocha globally and npm i nyc -g to install nyc globally before running npm test to run `server` tests

+ ```git clone https://github.com/adewale2018/Politico```

+ run ```npm test``` for ```server test```


## Limitations
+ Users can not delete their account


## Author
+ [Shittu Saheed](https://github.com/adewale2018)

## FAQ
#### Is Politico a free app?
- Yes, it's free.

#### Is Politico an open source?
- Yes, It's an open source project, and we encourage anyone who wish to contribute to do so.

## Contribution
If you wish to contribute to this Open source project, kindly fork the respository and raise a Pull Request against ```develop branch```.
For every pull request raised, kindly adhere to this best practises <a href="https://github.com/airbnb/javascript">link</a> to conform with the standard to which this project codebase is written.

+ For more clarifications, do contant via this email ```shittusaheedadewale@gmail.com```.

 ## License
 
This software is licensed under the MIT License. See the <a href="https://github.com/Adewale2018/Politico/blob/develop/LICENCE">LICENSE</a> file in the top distribution directory for the full license text.