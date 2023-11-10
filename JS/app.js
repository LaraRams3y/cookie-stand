// put Global Variable here

let cookieStoreLocation = document.getElementById('cookie-store-locale');

console.dir(cookieStoreLocation);

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

// put Helper Functions and Utilities here

// put Object Literals here
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  randoCookie: 0,
  randomCookieSalesGenerator: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min & max - got from MDN
  },
  getRandoCookie: function(){
    this.randocookie = this.randomCookieSalesGenerator(23,65);
  },
  render: function(){
    this.getRandoCookie();
  }
};

let tokyo = {
  name: 'Tokyo'
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  randoCookie: 0,
  randomCookieSalesGenerator: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRandoCookie: function(){
    this.randocookie = this.randomCookieSalesGenerator(3,24);
  },
  render: function(){
    this.getRandoCookie();
  }
};

let dubai = {
  name: 'Dubai'
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
};

let paris = {
  name: 'Paris'
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
};

let lima = {
  name: 'Lima'
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
};

// put Executable Code here

seattle.render();
console.log(seattle);
tokyo.render();
dubai.render();
paris.render();
lima.render();

