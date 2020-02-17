/* eslint-disable indent */
/* eslint-disable eol-last */
'use strict';

var name = prompt('whats your name ?');
alert('Welcome to mustafa site ' + name);
console.log('the name is = ' + name);

var food = prompt('you like jordanian dishes ?');
food = food.toLowerCase();
    if (food === 'yes' || food === 'y') {
  alert('Iam so happy to enjoing jordanian dishes');
}
else if (food === 'no' || food === 'n') {
  alert('you should try eat again !');
}
else {
  alert('empty !');
}
console.log('answer ' + food);
var visit = prompt('you have visit petra ?');
visit = visit.toLowerCase()
if (visit === 'yes' || visit === 'y') {
  alert('yes its great place !!');
}
else if (visit === 'no' || visit === 'n') {
  alert('you should visit it !');
}
else {
  alert('empty !');
}
console.log('answer ' + visit);
var trans = prompt('you like transportation in jordan ?');
trans = trans.toLowerCase()
if (trans === 'yes' || trans === 'y') {
  alert('great to hear that !!');
}
else if (trans === 'no' || trans === 'n') {
  alert('you should try the fast bus !');
}
else {
  alert('empty !');
}
console.log('answer ' + trans);
var pep = prompt('you like jordanian pepole ?');
pep = pep.toLowerCase()
if (pep === 'yes' || pep === 'y') {
  alert('great and you are awesome !');
}
else if (pep === 'no' || pep === 'n') {
  alert('no there are great pepole !');
}
else {
  alert('empty !');
}
console.log('answer ' + trans);
var trad = prompt('Do you like Arabs traditions? ?');
trad = trad.toLowerCase()
if (trad === 'yes' || trad === 'y') {
  alert('thats amazing !');
}
else if (trad === 'no' || trad === 'n') {
  alert('Unfortunately, with the days you will love it !');
}
else {
  alert('empty !');
}
console.log('answer ' + trad);

var thank = alert('thank you for your time ' + name);