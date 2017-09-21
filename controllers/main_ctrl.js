const user = require('../user.js');

const getName = (req, res, next) => {
  res.json({name: user.name })
}

const getLocation = (req, res, next) => {
  res.json({location: user.location})
}

const getOccupations = (req, res, next) => {
  if (req.query.order) {
    if (req.query.order === 'desc') {
      res.json({occupations:user.occupations.sort().reverse()})
    } else {
      res.json({occupations:user.occupations.sort()})
    }
  } else {
    res.json({occupations:user.occupations});
  }
}

const getLatestOccupation = (req, res, next) => {
	res.json({LatestOccupation: user.occupations.slice(-1).toString()});
};

const getHobbies = (req, res, next) => {
	res.json({Hobbies: user.hobbies});
};

const getHobbyType = (req, res, next) => {
	if(req.params.type) {
		res.json(user.hobbies.filter(hobby => hobby.type == req.params.type));
	} else {
		res.json(user.hobbies);
	}
};

const getFamily = (req, res, next) => {
	if(req.query.relation) {
		res.json(user.family.filter(member => member.relation == req.query.relation));
	} else {
		res.json({Family: user.family});
	}
};

const getFamilyByGender = (req, res, next) => {
	if(req.params.gender) {
		res.json(user.family.filter(member => member.gender == req.params.gender));
	} else {
		res.json(user.family);
	}
};

const getRestaurants = (req, res, next) => {
	if(req.query.rating) {
		res.json(user.restaurants.filter(restaurant => restaurant.rating >= req.query.rating));
	} else {
		res.json(user.restaurants);	
	}
};

const getRestaurantByName = (req, res, next) => {
	if(req.params.name) {
		res.json(user.restaurants.filter(restaurant => restaurant.name == req.params.name));
	} else {
		res.json(user.restaurants);
	}
};

const updateName = (req, res, next) => {
  if(req.params.id){
      res.json({name:user.name = req.params.id});
  }
}
const updateLocation = (req, res, next) => {
  if(req.params.id){
      res.json({location:user.location = req.params.id});
  }
}
const postHobbies = (req, res, next) => {
  user.hobbies.push(req.body);
  res.json({hobbies:user.hobbies});
}
const postOccupations = (req, res, next) => {
  user.occupations.push(req.params.id);
  res.json({occupations:user.occupations});
}
const postFamily = (req, res, next) => {
  user.family.push(req.body);
  res.json({family:user.family});
}
const postRestaurants = (req, res, next) => {
  user.restaurants.push(req.body);
  res.json({restaurants:user.restaurants});
}
    

module.exports = {

  getName,
  getLocation,
  getOccupations,
  getLatestOccupation,
  getHobbies,
  getHobbyType,
  getFamily,
  getFamilyByGender,
  getRestaurants,
  getRestaurantByName,
  updateName,
  updateLocation,
  postHobbies,
  postOccupations,
  postFamily,
  postRestaurants

}