/* eslint-disable no-empty */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

var yourmarks = 0;
var yname;
function yourName() {
  yname = prompt('whats your name ?');
  alert('Welcome to mustafa site ' + yname);
}
yourName();

function placeGuess() {
  var where = prompt('are you think iam from jordan ?');
  where = where.toLowerCase();
  if (where === 'yes' || where === 'y') {
    alert('thats correct iam from jordan');
    yourmarks = yourmarks + 1;
  }
  else if (where === 'no' || where === 'n') {
    alert('sorry wrong answer !');
  }
  else {
    alert('empty !');
  }
}
placeGuess();


function visitQuestion() {
  var visit = prompt('you think iam visit a petra ?');
  visit = visit.toLowerCase();
  if (visit === 'yes' || visit === 'y') {
    alert('yes its great place !!');
    yourmarks = yourmarks + 1;
  }
  else if (visit === 'no' || visit === 'n') {
    alert('no, i visit it,you should visit petra !');
  }
  else {
    alert('empty !');
  }
}
visitQuestion();


function transPortation() {
  var trans = prompt('you think i like transportation in jordan ?');
  trans = trans.toLowerCase();
  if (trans === 'yes' || trans === 'y') {
    alert('no, i dont like it');
  }
  else if (trans === 'no' || trans === 'n') {
    alert('yes, this a correct answer !');
    yourmarks = yourmarks + 1;
  }
  else {
    alert('empty !');
  }
}
transPortation();


function countryPeople() {
  var pep = prompt('you think i like jordanian pepole ?');
  pep = pep.toLowerCase();
  if (pep === 'yes' || pep === 'y') {
    alert('great answer and you are awesome !');
    yourmarks = yourmarks + 1;
  }
  else if (pep === 'no' || pep === 'n') {
    alert('no there are great pepole !');
  }
  else {
    alert('empty !');
  }
}
countryPeople();


function arabTraditions() {
  var trad = prompt('Do you think i like Arabs traditions? ?');
  trad = trad.toLowerCase();
  if (trad === 'yes' || trad === 'y') {
    alert('yes I love it !');
    yourmarks = yourmarks + 1;
  }
  else if (trad === 'no' || trad === 'n') {
    alert('Unfortunately, thats wrong answer !');
  }
  else {
    alert('empty !');
  }
}
arabTraditions();

alert('thank you for your time ' + yname);

function numberGuess(){
var yourguess = prompt(`Guess the last number from my phone number?,you have 4 attempts.`);
var i = 0;
var convertguess = parseInt(yourguess);
for (i = 0; i < 3; i++) {
  if (convertguess === 4) {
    alert(`its true answer !`);
    yourmarks = yourmarks + 1;
    break;
  }
  else if (convertguess <= 3) {
    alert(`its close answer`);
    convertguess = parseInt(prompt(`Guess the last number from my phone number ?`));
  } else if (convertguess <= 9 && convertguess >= 5) {
    alert(`its high answer`);
    convertguess = parseInt(prompt(`Guess the last number from my phone number ?`));
  }
}


if (i >= 3) {
  alert(`sorry!! my last number is 4`);
}
}
numberGuess();


function dishGuess(){
var mydishes = ['mansaf', 'flafel', 'shawerma'];
var d = 0;
var j = 0;
var n = false;
alert(`you can try guess my favourite dish from 3 in 6 attempts,ok ?`);
var guessdish = prompt(`lets try whats my favourite dishs?`);
console.log(guessdish);
for (j = 0; j < 5; j++) {
  for (d = 0; d < mydishes.length; d++) {
    if (guessdish === mydishes[d]) {
      alert(`ooh!! great job thats correct answer`);
      n = true;
      yourmarks = yourmarks + 1;
      break;
    }
  }
  if (n === true) {
    break;
  } else {
    guessdish = prompt(`lets try again?`);
  }
}
if (j >= 5) {
  alert(`my favourite dishes is mansaf,flafel,shawerma .thank you for your time.`);
}
alert(`your marks is = ` + yourmarks);
}
dishGuess();

//  // console.log('the name is = ' + yname);
//  // console.log('answer ' + trad);
//  // console.log('answer ' + pep);
//  // console.log('answer ' + trans);
//  // console.log('answer ' + visit);
//  // console.log('answer ' + where);