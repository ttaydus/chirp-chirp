var sample_text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

var counter = {
  "a" : 0,  "b" : 0,  "c" : 0,  "d" : 0,
  "e" : 0,  "f" : 0,  "g" : 0,  "h" : 0,
  "i" : 0,  "j" : 0,  "k" : 0,  "l" : 0,
  "m" : 0,  "n" : 0,  "o" : 0,  "p" : 0,
  "q" : 0,  "r" : 0,  "s" : 0,  "t" : 0,
  "u" : 0,  "v" : 0,  "w" : 0,  "x" : 0,
  "y" : 0,  "z" : 0
}

var counterArr = Object.entries(counter);


var str = sample_text;

function countLetters(counter, str){

  if(str.length === 0){
    console.log('base case reached')
    return;
  }

  
  str = str.slice(0,(str.length-1));
  //console.log('before:', str.length)
  countLetters(counter, str);
  //console.log('after;',str);
  //console.log(str.slice(-1))
  
  str = str.toLowerCase();

  if(counterArr[0][0] === str.slice(-1)){
    counterArr[0][1]++;
  }
  if(counterArr[1][0] === str.slice(-1)){
    counterArr[1][1]++;
  }
  if(counterArr[2][0] === str.slice(-1)){
    counterArr[2][1]++;
  }
  if(counterArr[3][0] === str.slice(-1)){
    counterArr[3][1]++;
  }
  if(counterArr[4][0] === str.slice(-1)){
    counterArr[4][1]++;
  }
  if(counterArr[5][0] === str.slice(-1)){
    counterArr[5][1]++;
  }
  if(counterArr[6][0] === str.slice(-1)){
    counterArr[6][1]++;
  }
  if(counterArr[7][0] === str.slice(-1)){
    counterArr[7][1]++;
  }
  if(counterArr[8][0] === str.slice(-1)){
    counterArr[8][1]++;
  }
  if(counterArr[9][0] === str.slice(-1)){
    counterArr[9][1]++;
  }
  if(counterArr[10][0] === str.slice(-1)){
    counterArr[10][1]++;
  }
  if(counterArr[11][0] === str.slice(-1)){
    counterArr[11][1]++;
  }
  if(counterArr[12][0] === str.slice(-1)){
    counterArr[12][1]++;
  }
  if(counterArr[13][0] === str.slice(-1)){
    counterArr[13][1]++;
  }
  if(counterArr[14][0] === str.slice(-1)){
    counterArr[14][1]++;
  }
  if(counterArr[15][0] === str.slice(-1)){
    counterArr[15][1]++;
  }
  if(counterArr[16][0] === str.slice(-1)){
    counterArr[16][1]++;
  }
  if(counterArr[17][0] === str.slice(-1)){
    counterArr[17][1]++;
  }
  if(counterArr[18][0] === str.slice(-1)){
    counterArr[18][1]++;
  }
  if(counterArr[19][0] === str.slice(-1)){
    counterArr[19][1]++;
  }
  if(counterArr[20][0] === str.slice(-1)){
    counterArr[20][1]++;
  }
  if(counterArr[21][0] === str.slice(-1)){
    counterArr[21][1]++;
  }
  if(counterArr[22][0] === str.slice(-1)){
    counterArr[22][1]++;
  }
  if(counterArr[23][0] === str.slice(-1)){
    counterArr[23][1]++;
  }
  if(counterArr[24][0] === str.slice(-1)){
    counterArr[24][1]++;
  }
  if(counterArr[25][0] === str.slice(-1)){
    counterArr[25][1]++;
  }

  counter['a'] = counterArr[0][1];
  counter['b'] = counterArr[1][1];
  counter['c'] = counterArr[2][1];
  counter['d'] = counterArr[3][1];
  counter['e'] = counterArr[4][1];
  counter['f'] = counterArr[5][1];
  counter['g'] = counterArr[6][1];
  counter['h'] = counterArr[7][1];
  counter['i'] = counterArr[8][1];
  counter['j'] = counterArr[9][1];
  counter['k'] = counterArr[10][1];
  counter['l'] = counterArr[11][1];
  counter['m'] = counterArr[12][1];
  counter['n'] = counterArr[13][1];
  counter['o'] = counterArr[14][1];
  counter['p'] = counterArr[15][1];
  counter['q'] = counterArr[16][1];
  counter['r'] = counterArr[17][1];
  counter['s'] = counterArr[18][1];
  counter['t'] = counterArr[19][1];
  counter['u'] = counterArr[20][1];
  counter['v'] = counterArr[21][1];
  counter['w'] = counterArr[22][1];
  counter['x'] = counterArr[23][1];
  counter['y'] = counterArr[24][1];
  counter['z'] = counterArr[25][1];

}

//console.log(counter);
//console.log(counterArr);




$(document).ready(function(){
  countLetters(counter, sample_text);
  $("#result").html(JSON.stringify(counter));
});
