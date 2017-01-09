"use strict";

// задача 1

var arr = [2, 5, 8, 4, 1, 12];


arr.sort(function (a,b){return a>b;});
console.log(arr);
// задача 2

var text = "The quick brown fox jumps over the lazy dog";

var list=text.split(" ");
var filteredWords=list.filter(function (items){
    return items.length>=4;

});
console.log(filteredWords);

// задача 3


var newText=document.getElementsByTagName('p')[0];
var makeNewText=setInterval(function () {
    newText.innerHTML += ('<p>repetition is fun</p>');
},1000);


// задача 4



// задача 5

