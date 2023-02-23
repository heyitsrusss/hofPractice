// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var results = [];
  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results.push(number);
    }
  });
  return results.length;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var userTweets = [];
  _.each(tweets, function(tweet, index, collection) {
    if (collection[index].user === user) {
      userTweets.push(collection[index]);
    }
  });
  return userTweets;
};

/*
 *
 *  _.filter
 *  _.filter = function(object, iterator, context)
 * iterator(value, index, list)
 *
 * if (iterator.call(context, value, index, list))
 *  note: context must return true?
 *
 * ƒ (obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function…
 *
 * return obj.filter(iterator, context);
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {

  return _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });


};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {

  return _.filter(fruits, function(input) {
    if (input[0] === letter) {
      return input;
    }
  });

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {

  return _.filter(desserts, function(current) {
    if (current.type === 'cookie') {
      return current;
    }
  });

};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {

  return _.filter(tweets, function(input) {
    if (input.user === user) {
      return input;
    }
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(input) {
    return input.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// if

var glutenFree = function (desserts) {



  return _.map(desserts, function(input) {

    var hasGluten = _.filter(input.ingredients, function(currentIngredient) {
      if (currentIngredient === 'gluten') {
        return true;
      }
    });

    if (input !== hasGluten) {
      input.glutenFree = true;
      return input;
    }
  });
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(currentObj) {
    return currentObj.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(currentId) {
    //console.log('currentId.price: ', typeof currentId.price);
    //var tempArray = currentId.price.split('$');
    //console.log(tempArray[1] * 100);
    //console.log(currentId.price.slice(1));
    var tempPrice = currentId.price.slice(1) * 100;

    tempPrice -= (coupon * 100);
    //console.log(tempPrice);
    currentId.salePrice = '$' + tempPrice / 100;
    //console.log(currentId);
    return currentId;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  return _.reduce(products, function(memo, currentID, collection) {
    //console.log(currentID.price.slice(1));
    var number = Number(currentID.price.slice(1));
    memo += number;
    return memo;
  }, 0);

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  //var memo = {};
  return _.reduce(desserts, function(memo, current, collection) {
    if (memo[current.type] === undefined) {
      memo[current.type] = 1;
    } else {
      memo[current.type] += 1;
    }
    return memo;
  }, {});

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

  return _.reduce(tweets, function(memo, currentValue, collection) {
    if (memo[currentValue.user] === undefined) {
      memo[currentValue.user] = 1;
    } else {
      memo[currentValue.user] += 1;
    }
    return memo;
  }, {});

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  return _.reduce(movies, function(memo, currentMovie, collection) {
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear <= 2000) {
      memo.push(currentMovie.title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(memo, currentMovie, collection) {
    if (currentMovie.runtime < timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};
