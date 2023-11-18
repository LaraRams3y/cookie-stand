// **PUT GLOBAL VARIABLES HERE**
let salmonCookieSection = document.getElementById("salmon-stuff");
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
  getTotal: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomers);
      let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
      console.log(cookies);
      this.totalCookies += cookies;
      console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    console.log(this.hourlyCookiesSold);
  },
  render: function(){
    this.getTotal();
    let articleEle = document.createElement('p');
    console.log(articleEle);
    //parent.appendChild()
    salmonCookieSection.appendChild(articleEle);

    let seattleHeading = document.createElement('h2');
    seattleHeading.innerText = this.name;
    articleEle.appendChild(seattleHeading);

    let seattleUL = document.createElement('ul');
    articleEle.appendChild(seattleUL);

    for(let i = 0; i < hours.length; i++){
      let seattleSalesList = document.createElement('li');
      seattleSalesList.innerText = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      seattleUL.appendChild(seattleSalesList);
    }

    let seattleTotal = document.createElement('li');
    seattleTotal.innerText = `Total Sales: ${this.totalCookies}`;
    seattleUL.appendChild(seattleTotal);
  }
};
  

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  hourlyCustomers: [],
  hourlyCookiesSold: [],
  totalCookies: 0,
  // **random cookie generator**
  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCustomers: function(){
    for (let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
      console.log(this.hourlyCustomers);
    }
  },
  //loop that goes through hours array and creates number of customers and multiplies cookies
  getTotal: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      //console.log(this.hourlyCustomers);
      let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
      //console.log(cookies);
      //this.totalCookies = this.totalCookies + cookies
      this.totalCookies += cookies; //adding cookiesBought to the total with every iteration
      //console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    //console.log(this.hourlyCookiesSold);
  },
  render: function(){
    this.getTotal();
    let articleEle = document.createElement('p');
    console.log(articleEle);
    //parent.appendChild()
    salmonCookieSection.appendChild(articleEle);

    let tokyoHeading = document.createElement('h2');
    tokyoHeading.innerText = this.name;
    articleEle.appendChild(tokyoHeading);

    let tokyoUL = document.createElement('ul');
    articleEle.appendChild(tokyoUL);

    for(let i = 0; i < hours.length; i++){
      let tokyoSalesList = document.createElement('li');
      tokyoSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      tokyoUL.appendChild(tokyoSalesList);
    }

    let tokyoTotal = document.createElement('li');
    tokyoTotal.innerText = `Total Sales: ${this.totalCookies}`;
    tokyoUL.appendChild(tokyoTotal);
  }
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  hourlyCustomers: [],
  hourlyCookiesSold: [],
  totalCookies: 0,

  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCustomers: function(){
    for (let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
      console.log(this.hourlyCustomers);
    }
  },

  getTotal: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomers);
      let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
      console.log(cookies);
      this.totalCookies += cookies;
      console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    console.log(this.hourlyCookiesSold);
  },
  render: function(){
    this.getTotal();
    let articleEle = document.createElement('p');
    console.log(articleEle);
    salmonCookieSection.appendChild(articleEle);

    let dubaiHeading = document.createElement('h2');
    dubaiHeading.innerText = this.name;
    articleEle.appendChild(dubaiHeading);

    let dubaiUL = document.createElement('ul');
    articleEle.appendChild(dubaiUL);

    for(let i = 0; i < hours.length; i++){
      let dubaiSalesList = document.createElement('li');
      dubaiSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      dubaiUL.appendChild(dubaiSalesList);
    }

    let dubaiTotal = document.createElement('li');
    dubaiTotal.innerText = `Total Sales: ${this.totalCookies}`;
    dubaiUL.appendChild(dubaiTotal);
  }
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  hourlyCustomers: [],
  hourlyCookiesSold: [],
  totalCookies: 0,
  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCustomers: function(){
    for (let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
      console.log(this.hourlyCustomers);
    }
  },
  getTotal: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomers);
      let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
      console.log(cookies);
      this.totalCookies += cookies;
      console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    console.log(this.hourlyCookiesSold);
  },
  render: function(){
    this.getTotal();
    let articleEle = document.createElement('p');
    console.log(articleEle);
    salmonCookieSection.appendChild(articleEle);
    let parisHeading = document.createElement('h2');
    parisHeading.innerText = this.name;
    articleEle.appendChild(parisHeading);

    let parisUL = document.createElement('ul');
    articleEle.appendChild(parisUL);

    for(let i = 0; i < hours.length; i++){
      let parisSalesList = document.createElement('li');
      parisSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      parisUL.appendChild(parisSalesList);
    }

    let parisTotal = document.createElement('li');
    parisTotal.innerText = `Total Sales: ${this.totalCookies}`;
    parisUL.appendChild(parisTotal);
  }
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  hourlyCustomers: [],
  hourlyCookiesSold: [],
  totalCookies: 0,
  generateRandomCustomers: function(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getCustomers: function(){
    for (let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(this.generateRandomCustomers(this.minCust,this.maxCust));
      console.log(this.hourlyCustomers);
    }
  },
  getTotal: function (){
    this.getCustomers();
    for (let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomers);
      let cookies = Math.ceil(this.avgCookieBought * this.hourlyCustomers[i]);
      console.log(cookies);
      this.totalCookies += cookies;
      console.log (this.totalCookies);
      this.hourlyCookiesSold.push(cookies.toFixed(2));
    }
    console.log(this.hourlyCookiesSold);
  },
  render: function(){
    this.getTotal();
    let articleEle = document.createElement('p');
    console.log(articleEle);
    salmonCookieSection.appendChild(articleEle);
    let limaHeading = document.createElement('h2');
    limaHeading.innerText = this.name;
    articleEle.appendChild(limaHeading);

    let limaUL = document.createElement('ul');
    articleEle.appendChild(limaUL);

    for(let i = 0; i < hours.length; i++){
      let limaSalesList = document.createElement('li');
      limaSalesList.textContent = `${hours[i]}: ${this.hourlyCookiesSold[i]} cookies`;
      limaUL.appendChild(limaSalesList);
    }

    let limaTotal = document.createElement('li');
    limaTotal.innerText = `Total Sales: ${this.totalCookies}`;
    limaUL.appendChild(limaTotal);
  }
};

// // **PUT EXECUTABLE CODE HERE**

// console.log(seattle);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

