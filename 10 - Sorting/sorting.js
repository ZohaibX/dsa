const spanish = ['réservé' , 'é' ]
spanish.sort(); // [ 'réservé', 'é' ]
spanish.sort((a,b) => a.localeCompare(b)) /// [ 'é', 'réservé' ]


const basket = [2,3,65,8,3,43]  
basket.sort() // [ 2, 3, 3, 43, 65, 8 ]
basket.sort((a,b) => a-b) /// [ 2, 3, 3, 8, 43, 65 ]


/// SPLICE
const array = [1,2,4,5];
array.splice(2,0,3) // [ 1, 2, 3, 4, 5 ]

// at index 2, remove 0 item, place 3