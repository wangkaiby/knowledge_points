// var score_in_class = {
//     // text: '2',
//     type: 10
// }
var res = {}
var key = res.score_in_class ? 'score_in_class.type' : ''
console.log(key);


var array = [1, 2, 3]
var two = []
var key = array.every(item => 
    item <= 2
)
var key1 = array.some(item => 
    item <= 2
)
var key2 = array.find(item => 
    item <= 2
)
var key3 = array.filter(item => 
    item <= 2
)
var key4 = array.map(item => 
    item <= 2
)
var key5 = array.forEach(item => 
    item <= 2
)
var key6 = array.includes(1)
console.log(array, two, key6)