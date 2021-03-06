/* Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
Task Overview:

You have to write a function that accepts three parameters:

    cap is the amount of people the bus can hold excluding the driver.
    on is the number of people on the bus excluding the driver.
    wait is the number of people waiting to get on to the bus excluding the driver.

If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
Usage Examples:

cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
 */

//P: num of passengers possible, num of passengers current, num of people waiting to get on the bus
//R: If there is enough space, return 0, if there isn't return the number of passengers that cannot fit
//E: 10, 5, 5 => 0
//   100, 60, 50 => 10
//   25, 13, 10 => 0
//   20, 17, 5 => 2
//P:
//calculate the space remaining (capacity - current passengers)
//if space remaining >= passengers waiting, return 0
//if space remaining < passengers waiting, return (passengers waiting - space remaining)

// function enough(cap, on, wait) {
//     let space = cap - on
//     if(space >= wait){
//         return 0;
//     }else if(space < wait){
//         return wait - space;
//     }
// }

//refactored code
const enough = (cap, on, wait) => cap - on >= wait ? 0 : wait - (cap - on);