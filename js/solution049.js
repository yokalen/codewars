//params
//a list of numbers in an array
//return
//the average of the numbers
//examples
//[1,3,5,7] => 4
//[1] => 1

const findAverage = nums => nums.reduce((acc, c) => acc + c, 0) / nums.length;
