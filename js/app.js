/* eslint-disable no-empty */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

var yourmarks = 0;

var yname = prompt('whats your name ?');
alert('Welcome to mustafa site ' + yname);
// console.log('the name is = ' + yname);

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
// console.log('answer ' + where);
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
// console.log('answer ' + visit);
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
// console.log('answer ' + trans);
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
// console.log('answer ' + pep);
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
console.log('answer ' + trad);

alert('thank you for your time ' + yname);


var yourguess = prompt(`Guess the last number from my phone number?,you have 4 attempts.`);
var i = 0;
var convertguess = parseInt(yourguess);
for(i =0;i < 3;i++){
  if ( convertguess === 4){
    alert(`its true answer !`);
    yourmarks = yourmarks + 1;
    break;
  }
  else if (convertguess <=3 ){
    alert(`its close answer`);
    convertguess = prompt(`Guess the last number from my phone number ?`);
  }else if (convertguess <=9 && convertguess>=5){
    alert(`its high answer`);
   convertguess = prompt(`Guess the last number from my phone number ?`);
  }
 }
if (i>=3){
  alert(`sorry!! my last number is 4`);
 }

var mydishes = [`mansaf`,`pasta`,`flafel`,`shawerma`,`maqloba`,`steak`,`hotdog`];
alert(`guess whats my favourite dish from these menu in 6 attempts,ok? `);
var guessdish = prompt(`mansaf,pasta,flafel,shawerma,maqloba,steak,hotdog`);
guessdish = guessdish.toLowerCase();
var j = 0;
while (j< 5){
  if (guessdish === mydishes[0]){
    alert(`ooh!! great job thats correct answer`);
    yourmarks = yourmarks + 1;
    break;
  }else{
    j = j + 1;
    guessdish = prompt(`sorry,try again: mansaf,pasta,flafel,shawerma,maqloba,steak,hotdog`);
  }
  }
if (j>=5){
  alert(`my favourite dish is mansaf ,thank you for your time.`);
}
alert(`your marks is = ` + yourmarks);
