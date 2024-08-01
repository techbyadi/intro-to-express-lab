// import modules
import express from 'express'
import { collectibles, shoes } from './data.js'


// Create Express app
const app = express()


// mount routes

//Ex1 Be Polite, Greet the User
app.get('/greetings/:user', function(req, res){
  res.send(`Hello there, ${req.params.user}`);
})

//Ex1 Be Polite, Greet the User: with query paramaters
/* app.get('/greetings/', function(req, res){
  res.send(`name: ${req.query.userName} , age : ${req.query.age} and city: ${req.query.city}`);
}) */



  //Ex2  Rolling the Dice

app.get('/roll/:number', function(req, res){
  let number = Number.parseInt(req.params.number);
  let response = Math.floor(Math.random() * number);
  res.send(isNaN(number) ? `You must specify a number`:  `${response}`);
})

  //Ex2  Rolling the Dice: with query parameter
/* app.get('/roll/', function(req, res){
  let number = Number.parseInt(req.query.number);
  let response = Math.floor(Math.random() * number);
  res.send(isNaN(number) ? `You must specify a number`:  `${response}`);
}) */

 //Ex3 I Want THAT One!

app.get('/collectibles/:index', function(req, res){
  let index = Number.parseInt(req.params.index);
  if(index < collectibles.length && index >= 0){
    res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`);
  } else{
    res.send(`This item is not yet in stock. Check back soon!`)
  }
})

//Ex4 Filter Shoes by Query Parameters

app.get('/shoes', function(req, res){

const minPrice = req.query['min-price']? req.query['min-price']:0;
const maxPrice = req.query['max-price']? req.query['max-price']: Infinity;
const type = req.query.type ? req.query.type: '';

let filteredShoes = shoes.filter((shoe)=>{
  return shoe.price >= minPrice && shoe.price <= maxPrice && shoe.type.includes(type)
})
  res.send(filteredShoes);
})  

  /* app.get('/shoes', function(req, res){

    let filteredShoes = shoes.filter((shoe)=>{
      if(shoe.price > req.query.minPrice){
        return shoe;
      }else if(shoe.price < req.query.maxPrice){
        return shoe;
      }else if(shoe.type === req.query.type){
        return shoe;
      } else{
        res.send(shoes);
      }
    })ß
    res.send(filteredShoes);
  
  }) */

// tell the app to listen on port 3000

app.listen(3000, function(){
  console.log('Listening on port 3000');
})