var input = 5
/*

123   0
456    1
789    2
*/
var counter = input * input
for(var i = 0; i < input; i++) {
    var row = ""
    for(var j = 0; j < input; j++) {
        row += `${counter} `
        counter--
    }
    console.log(row);
}