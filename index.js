const express=require('express');
const bodyParser=require('body-parser');
const cors = require("cors");


const app=express();

app.use(bodyParser.json());
app.use(cors());


const main_ctrl = require('./controllers/main_ctrl.js');

app.get('/api/name',main_ctrl.getName);
app.get('/api/location',main_ctrl.getLocation)
app.get('/api/occupations',main_ctrl.getOccupations);
app.get("/api/latestOccupation", main_ctrl.getLatestOccupation);
app.get("/api/hobbies", main_ctrl.getHobbies);
app.get("/api/hobbies/:type", main_ctrl.getHobbyType);
app.get("/api/family", main_ctrl.getFamily);
app.get("/api/family/:gender", main_ctrl.getFamilyByGender);
app.get("/api/restaurants", main_ctrl.getRestaurants);
app.get("/api/restaurants/:name", main_ctrl.getRestaurantByName);

app.put('/api/name/:id', main_ctrl.updateName)
app.put('/api/location/:id', main_ctrl.updateLocation)

app.post('/api/hobbies', main_ctrl.postHobbies)
app.post('/api/occupations/:id', main_ctrl.postOccupations)
app.post('/api/family', main_ctrl.postFamily)
app.post('/api/restaurants', main_ctrl.postRestaurants)





app.listen(3000,function(){
  console.log("At port 3000");
})