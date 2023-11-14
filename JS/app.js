// **PUT GLOBAL VARIABLES HERE**
let salmonCookieSection = document.getElementById ('salmon-stuff');
console.dir(salmonCookieSection);

let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

// **PUT HELPER FUNCTIONS & UTILITIES HERE**

// **PUT OBJECT LITERALS HERE**
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  hourlyCustomers: [],
  hourlyCookiesSold: [],
  totalCookies: 0,
    // **random cookie generator**
  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min & max - got from MDN
  },
  getCustomers: function() {
    for (let i = 0; i < hours.length; i++){
    this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
    console.log(this.hourlyCustomers);
    }
  },
  
  //loop that goes through hours array and creates number of customers and multiplies cookies
  render: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomers);
      let cookies = (this.avgCookieBought * this.hourlyCustomers[i]);
      console.log(cookies);
      this.totalCookies += cookies;
      console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    console.log(this.hourlyCookiesSold);

    let articleEle = document.createElement('article');
    //parent.appendChild()
    salmonCookieSection.appendChild(articleEle);

    let seattleHeading = document.createElement('h2');
    kittenHeading.innerText = this.name;
    articleEle.appendChild(seattleHeading);

    let seattleUL = document.createElement('ul');
    articleEle.appendChild(seattleUL);

    for(let i = 0; i < hours.length; i++){
      let seattleSalesList = document.createElement('li');
      seattleSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      seattleUL.appendChild(seattleSalesList);
    }

    let seattleTotal = document.createElement('li');
    seattleTotal.textContent = this.totalCookies;
  }
};
  

//let tokyo = {
//  name: 'Tokyo'
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
// }

// let dubai = {
//   name: 'Dubai'
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
// }

// let paris = {
//   name: 'Paris'
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
// }

// let lima = {
//   name: 'Lima'
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
// }

// // **PUT EXECUTABLE CODE HERE**

// console.log(seattle);

seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

