// **PUT GLOBAL VARIABLES HERE**

//let cookieStoreLocation = document.getElementById('cookie-store-locale');

//console.dir(cookieStoreLocation);

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

// **PUT HELPER FUNCTIONS & UTILITIES HERE**

// **PUT OBJECT LITERALS HERE**
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  hourlyCustomers: 0,
  hourlyCookiesSold: [],
  totalCookies: 0,
    // **random cookie generator**
  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min & max - got from MDN
  },
  getCustomers: function() {
    this.hourlyCustomers = this.generateRandomCustomers(this.minCust,this.maxCust);
  },
  
  //loop that goes through hours array and creates number of customers and multiplies cookies
  render: function (){
    for (let i = 0; i < hours.length; i++){
      let cookies = (this.avgCookieBought * this.getCustomers());
      console.log(cookies)
      
      this.totalCookies.toFixed(2) += cookies
      console.log (this.totalCookies)

      this.hourlyCookiesSold.push(cookies.toFixed(2))
    }
    console.log(this.hourlyCookiesSold)
  }
}
  

let tokyo = {
  name: 'Tokyo'
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
}

let dubai = {
  name: 'Dubai'
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
}

let paris = {
  name: 'Paris'
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
}

let lima = {
  name: 'Lima'
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
}

// **PUT EXECUTABLE CODE HERE**

console.log(seattle);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

