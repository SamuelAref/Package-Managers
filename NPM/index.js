const _ = require('lodash');



const numbers = [22,23,45,65,125,45621,1];

_.each(numbers, function(number, i){

    console.log(number);

})