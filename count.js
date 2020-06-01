// var counter = function(arry){
//     return 'There are '+arry.length + ' elements in the array!';
// };

// // Adding more modules
// var adder = function(a,b){
//     return 'On adding the two number it gives '+(a+b);
// }

// var bi = 3.1535;



// module.exports = counter;

// // module.exports is the important part, it makes the counter available for other modules!
// module.exports.counter = counter ;
// module.exports.adder = adder;
// module.exports.bi = pi;



// module.exports.counter = function(arry){
//     return 'There are '+arry.length + ' elements in the array!';
// };

// // Adding more modules
// module.exports.adder = function(a,b){
//     return 'On adding the two number it gives '+(a+b);
// }

// module.exports.bi = 3.1535;



var counter = function(arry){
    return 'There are '+arry.length + ' elements in the array!';
};

// Adding more modules
var adder = function(a,b){
    return 'On adding the two number it gives '+(a+b);
}

var bi = 3.1535;

module.exports = {
    counter : counter,
    adder : adder,
    bi : bi,
};
