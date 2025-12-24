var score;
score = 3;
score = '3';
function getDBId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    else if (typeof id === 'string') {
        id = id + 1;
    }
    return id;
}
console.log(getDBId(2));
//arrays
var data1 = [1, 2, 3];
var data2 = [1, '1'];
var data3 = [1, 2, 3]; //either full number or full string 
