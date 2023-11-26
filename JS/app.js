'use strict';

// **PUT GLOBAL VARIABLES HERE**
const salmonCookieTable = document.getElementById("salmon-stuff");
console.dir(salmonCookieTable);

const hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
let allStores = [];

function tableHeader (){
  let tableHeaderElem = document.createElement('tr');
  salmonCookieTable.appendChild(tableHeaderElem);

  let locationHeaderElem = document.createElement('th');
  locationHeaderElem.innerText = 'locations';
  tableHeaderElem.appendChild(locationHeaderElem);

  for(let i = 0; i < hours.length; i++){
    let hoursHeaderElem = document.createElement('th');
    hoursHeaderElem.innerText = `${hours[i]}`;
    tableHeaderElem.appendChild(hoursHeaderElem);
  }

  let dailyTotalElem = document.createElement('th');
  dailyTotalElem.innerText = 'Daily Total';
  tableHeaderElem.appendChild(dailyTotalElem);
}

function tableFooter (){
  let tableFooterElem = document.createElement('tr');
  salmonCookieTable.appendChild(tableFooterElem);

  let grandTotalsElem = document.createElement('th');
  grandTotalsElem.innerText = 'Grand Totals';
  tableFooterElem.appendChild(grandTotalsElem);

  for(let i = 0; i < hours.length; i++){//slow loop
    let total = 0;
    for(let j = 0; j < allStores.length; j++){//fast loop
      console.log(allStores);
      total += allStores[j].hourlyCookiesSold[i];
      console.log(total);
    }

    let grandHoursElem = document.createElement('th');
    grandHoursElem.innerText = total;
    tableFooterElem.appendChild(grandHoursElem);
  }
}

// **PUT HELPER FUNCTIONS & UTILITIES HERE**
// ***CONSTRUCTOR FUNCTIONS***

function Store(cityName, minCust, maxCust, avgCookiesBought){
  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesBought = avgCookiesBought;
  this.hourlyCust = [];
  this.hourlyCookiesSold = [];
  this.totalCookies = 0;
  allStores.push(this);
}

// ***PROTOTYPE METHODS***
// **random customers per hour generator**
Store.prototype.generateRandomCustomers = function(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min & max from MDN
};
Store.prototype.getCustomers = function() {
  for (let i = 0; i < hours.length; i++){
    this.hourlyCust.push(this.generateRandomCustomers(this.minCust,this.maxCust));
  }
};
Store.prototype.getTotal = function (){
  this.getCustomers();//loop through hours array to get number of customers and multiply cookies
  for (let i = 0; i < hours.length; i++){
    let cookies = Math.ceil(this.avgCookiesBought * this.hourlyCust[i]);
    console.log(cookies);
    this.totalCookies += cookies;
    this.hourlyCookiesSold.push(cookies);
  }
};

Store.prototype.render = function () {
  this.getTotal();
  console.log(this.hourlyCookiesSold);
  let storeRow = document.createElement('tr');
  salmonCookieTable.appendChild(storeRow);

  let storeName = document.createElement('td');
  storeName.innerText = this.cityName;
  storeRow.appendChild(storeName);

  for(let i = 0; i < hours.length; i++){ // create a for loop to loop over the this.hourlyCookiesSold
    let cookiesSold = document.createElement('td'); //create a 'td' for each hour inside of the loop
    cookiesSold.innerText = this.hourlyCookiesSold[i]; // give each 'td' some text. the text will be this.hourlyCookiesSold[i]
    storeRow.appendChild(cookiesSold); // append the 'td' to the correct row: storeRow

  }
  let storeTotalElem = document.createElement('td');
  storeTotalElem.innerText = this.totalCookies;
  storeRow.appendChild(storeTotalElem);
};

// let articleEle = document.createElement('p');
// //     console.log(articleEle);
// //     //parent.appendChild()
// salmonCookieTable.appendChild(articleEle);

// let table = document.createElement('table');
// articleEle.appendChild(table);

// let rowHeading = document.createElement('tr');
// table.appendChild(rowHeading);

// let rowCell = document.createElement('td');
// rowCell.innerText = `${this.getTotal}`;
// rowHeading.appendChild(rowCell);


//     for(let i = 0; i < hours.length; i++){
//       let seattleSalesList = document.createElement('li');
//       seattleSalesList.innerText = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       seattleUL.appendChild(seattleSalesList);




//     let seattleHeading = document.createElement('h2');
//     seattleHeading.innerText = this.name;
//     articleEle.appendChild(seattleHeading);

//     let seattleUL = document.createElement('ul');
//     articleEle.appendChild(seattleUL);

//     for(let i = 0; i < hours.length; i++){
//       let seattleSalesList = document.createElement('li');
//       seattleSalesList.innerText = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       seattleUL.appendChild(seattleSalesList);
//     }

//     let seattleTotal = document.createElement('li');
//     seattleTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     seattleUL.appendChild(seattleTotal);
//   }
// };

// **PUT OBJECT LITERALS HERE**

// // **PUT EXECUTABLE CODE HERE**
new Store('seattle', 23, 65, 6.3);
new Store('tokyo', 3, 24, 1.2);
new Store('dubai', 11, 38, 3.7);
new Store('paris', 20, 38, 2.3);
new Store('lima',2, 16, 4.6);
console.log(allStores);
tableHeader();

for (let i = 0; i < allStores.length; i++){
  allStores[i].render();
}

tableFooter();
//make a for-loop to iterate over allStores and render each store

//seattle.render();
//tokyo.render();
//dubai.render();
//paris.render();
//lima.render();


// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   hourlyCustomers: [],
//   hourlyCookiesSold: [],
//   totalCookies: 0,
//   // **random cookie generator**
//   generateRandomCustomers: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min); // inclusive min & max - got from MDN
//   },
//   getCustomers: function() {
//     for (let i = 0; i < hours.length; i++){
//       this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
//       console.log(this.hourlyCustomers);
//     }
//   },

//   //loop that goes through hours array and creates number of customers and multiplies cookies
//   getTotal: function (){
//     this.getCustomers();
//     for (let i = 0; i < hours.length; i++){
//       console.log(this.hourlyCustomers);
//       let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
//       console.log(cookies);
//       this.totalCookies += cookies;
//       console.log (this.totalCookies);
//       this.hourlyCookiesSold.push(cookies.toFixed(2));
//     }
//     console.log(this.hourlyCookiesSold);
//   },
//   render: function(){
//     this.getTotal();
//     let articleEle = document.createElement('p');
//     console.log(articleEle);
//     //parent.appendChild()
//     salmonCookieTable.appendChild(articleEle);

//     let seattleHeading = document.createElement('h2');
//     seattleHeading.innerText = this.name;
//     articleEle.appendChild(seattleHeading);

//     let seattleUL = document.createElement('ul');
//     articleEle.appendChild(seattleUL);

//     for(let i = 0; i < hours.length; i++){
//       let seattleSalesList = document.createElement('li');
//       seattleSalesList.innerText = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       seattleUL.appendChild(seattleSalesList);
//     }

//     let seattleTotal = document.createElement('li');
//     seattleTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     seattleUL.appendChild(seattleTotal);
//   }
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   hourlyCustomers: [],
//   hourlyCookiesSold: [],
//   totalCookies: 0,
//   // **random cookie generator**
//   generateRandomCustomers: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getCustomers: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
//       console.log(this.hourlyCustomers);
//     }
//   },
//   //loop that goes through hours array and creates number of customers and multiplies cookies
//   getTotal: function (){
//     this.getCustomers();
//     for (let i = 0; i < hours.length; i++){
//       //console.log(this.hourlyCustomers);
//       let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
//       //console.log(cookies);
//       //this.totalCookies = this.totalCookies + cookies
//       this.totalCookies += cookies; //adding cookiesBought to the total with every iteration
//       //console.log (this.totalCookies);
//       this.hourlyCookiesSold.push(cookies.toFixed(2));
//     }
//     //console.log(this.hourlyCookiesSold);
//   },
//   render: function(){
//     this.getTotal();
//     let articleEle = document.createElement('p');
//     console.log(articleEle);
//     //parent.appendChild()
//     salmonCookieTable.appendChild(articleEle);

//     let tokyoHeading = document.createElement('h2');
//     tokyoHeading.innerText = this.name;
//     articleEle.appendChild(tokyoHeading);

//     let tokyoUL = document.createElement('ul');
//     articleEle.appendChild(tokyoUL);

//     for(let i = 0; i < hours.length; i++){
//       let tokyoSalesList = document.createElement('li');
//       tokyoSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       tokyoUL.appendChild(tokyoSalesList);
//     }

//     let tokyoTotal = document.createElement('li');
//     tokyoTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     tokyoUL.appendChild(tokyoTotal);
//   }
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   hourlyCustomers: [],
//   hourlyCookiesSold: [],
//   totalCookies: 0,

//   generateRandomCustomers: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getCustomers: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
//       console.log(this.hourlyCustomers);
//     }
//   },

//   getTotal: function (){
//     this.getCustomers();
//     for (let i = 0; i < hours.length; i++){
//       console.log(this.hourlyCustomers);
//       let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
//       console.log(cookies);
//       this.totalCookies += cookies;
//       console.log (this.totalCookies);
//       this.hourlyCookiesSold.push(cookies.toFixed(2));
//     }
//     console.log(this.hourlyCookiesSold);
//   },
//   render: function(){
//     this.getTotal();
//     let articleEle = document.createElement('p');
//     console.log(articleEle);
//     salmonCookieTable.appendChild(articleEle);

//     let dubaiHeading = document.createElement('h2');
//     dubaiHeading.innerText = this.name;
//     articleEle.appendChild(dubaiHeading);

//     let dubaiUL = document.createElement('ul');
//     articleEle.appendChild(dubaiUL);

//     for(let i = 0; i < hours.length; i++){
//       let dubaiSalesList = document.createElement('li');
//       dubaiSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       dubaiUL.appendChild(dubaiSalesList);
//     }

//     let dubaiTotal = document.createElement('li');
//     dubaiTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     dubaiUL.appendChild(dubaiTotal);
//   }
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   hourlyCustomers: [],
//   hourlyCookiesSold: [],
//   totalCookies: 0,
//   generateRandomCustomers: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getCustomers: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
//       console.log(this.hourlyCustomers);
//     }
//   },
//   getTotal: function (){
//     this.getCustomers();
//     for (let i = 0; i < hours.length; i++){
//       console.log(this.hourlyCustomers);
//       let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
//       console.log(cookies);
//       this.totalCookies += cookies;
//       console.log (this.totalCookies);
//       this.hourlyCookiesSold.push(cookies.toFixed(2));
//     }
//     console.log(this.hourlyCookiesSold);
//   },
//   render: function(){
//     this.getTotal();
//     let articleEle = document.createElement('p');
//     console.log(articleEle);
//     salmonCookieTable.appendChild(articleEle);
//     let parisHeading = document.createElement('h2');
//     parisHeading.innerText = this.name;
//     articleEle.appendChild(parisHeading);

//     let parisUL = document.createElement('ul');
//     articleEle.appendChild(parisUL);

//     for(let i = 0; i < hours.length; i++){
//       let parisSalesList = document.createElement('li');
//       parisSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       parisUL.appendChild(parisSalesList);
//     }

//     let parisTotal = document.createElement('li');
//     parisTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     parisUL.appendChild(parisTotal);
//   }
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   hourlyCustomers: [],
//   hourlyCookiesSold: [],
//   totalCookies: 0,
//   generateRandomCustomers: function(min,max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   },
//   getCustomers: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
//       console.log(this.hourlyCustomers);
//     }
//   },
//   getTotal: function (){
//     this.getCustomers();
//     for (let i = 0; i < hours.length; i++){
//       console.log(this.hourlyCustomers);
//       let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
//       console.log(cookies);
//       this.totalCookies += cookies;
//       console.log (this.totalCookies);
//       this.hourlyCookiesSold.push(cookies.toFixed(2));
//     }
//     console.log(this.hourlyCookiesSold);
//   },
//   render: function(){
//     this.getTotal();
//     let articleEle = document.createElement('p');
//     console.log(articleEle);
//     salmonCookieTable.appendChild(articleEle);
//     let limaHeading = document.createElement('h2');
//     limaHeading.innerText = this.name;
//     articleEle.appendChild(limaHeading);

//     let limaUL = document.createElement('ul');
//     articleEle.appendChild(limaUL);

//     for(let i = 0; i < hours.length; i++){
//       let limaSalesList = document.createElement('li');
//       limaSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
//       limaUL.appendChild(limaSalesList);
//     }

//     let limaTotal = document.createElement('li');
//     limaTotal.innerText = `Total Sales: ${this.totalCookies}`;
//     limaUL.appendChild(limaTotal);
//   }
// };
//NEW FUNCTION

// **PUT HELPER FUNCTIONS & UTILITIES HERE**
// ***CONSTRUCTOR FUNCTIONS***

function StoreDeets(cityName, address, operatingHours, contact){
  this.cityName = cityName;
  this.address = address;
  this.operatingHours = operatingHours;
  this.contact = contact;
  allStoreDeets.push(this);
}
new StoreDeets('Seattle', '600 Broadway', '6am to 7pm', 'Seattle@SalmonCookies.bake');
new StoreDeets('Tokyo', '3 Omotesando', '6am to 7pm', 'Tokyo@SalmonCookies.bake');
new StoreDeets('Dubai', '11 Al Faheidi Street', '6am to 7pm', 'Dubai@SalmonCookies.bake');
new StoreDeets('Paris', '20 Champs-Élysées', '6am to 7pm', 'Paris@SalmonCookies.bake');
new StoreDeets('Lima', 'Av. Garcilaso de la Vega 1337', '6am to 7pm', 'Lima@SalmonCookies.bake');
console.log(allStoreDeets);
