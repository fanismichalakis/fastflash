# FastFlash
This project was designed during Full-Stack development course. 

## Functionnalities
This application helps students learning different languages through flashcards. By clicking on the card, the traduction appears and by clicking again, the card is flipped and another card appears. When all cards have been flipped, the application offers the possibility to go through all the cards again, but this time the word and traduction have been switched. 

A new card can be added. 

The application only offers the possibility to learn english for now. 


## Tests

* Front - End tests: User stories with Selenium
  Functionnalities are tested with Selenium on Firefox and Chrome. 
* Back - End tests: Routes with Supertest 
  All routes are tested on the back end. 

## Built with 

* Vue 2.6.11 
* Node.js 14.0.0
* GraphQL 
* MongoDB


## Getting started 

### Prerequisites
 
You may install vue CLI and you'll need a version of Node. 

### Running the tests

* Front-end tests:

Dans un premier terminal : 
```
nodemon api/app 
```
Dans un second terminal: 
```
cd client
```
```
yarn serve
```
Dans un dernier terminal: 
```
yarn run init-db 
```

```
yarn run chrome-test 
```
ou 
```
yarn run firefox-test 
```

* Back-end tests: 
Dans un premier terminal: 
```
cd client
```
```
yarn serve
```
Dans un second terminal : 
```
yarn run init-db 
```
```
yarn run api-test 
```


## Author 
* **Adèle Bourgeix**
* **Fanis Michalakis**
* **Maxime Vivier**
