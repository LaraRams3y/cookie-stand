

//***NEW FUNCTION

// **GLOBAL VARIABLES HERE**
const allStoreDeetsArray = [];

//***GRAB THE WINDOW INTO THE DOM**
const ourStoresSection = document.getElementById('our-stores');
console.dir(ourStoresSection);

//**HELPER FUNCTIONS & UTILITIES HERE**
function renderAllStoreDeets(){
  for (let i = 0; i < allStoreDeetsArray.length; i++){
    allStoreDeetsArray[i].render();
  }
}

//***CONSTRUCTOR FUNCTIONS***
function StoreDeets(cityName, address, operatingHours, contact){
  this.cityName = cityName;
  this.address = address;
  this.operatingHours = operatingHours;
  this.contact = contact;
  allStoreDeetsArray.push(this);
}

//Prototypes & Methods
StoreDeets.prototype.render = function () {
  let articleEle = document.createElement('article');
  ourStoresSection.appendChild(articleEle);

  let storeName = document.createElement('h2');
  storeName.innerText = this.cityName;
  articleEle.appendChild(storeName);

  let storeInfoUL = document.createElement('ul');
  articleEle.appendChild(storeInfoUL);

  //for (let i = 0; i < allStoreDeetsArray.length; i++){
  let storeAddressLI = document.createElement('li');
  storeAddressLI.innerText = this.address;
  storeInfoUL.appendChild(storeAddressLI);
  //}
  let operatingHoursLI = document.createElement('li');
  operatingHoursLI.innerText = this.operatingHours;
  storeInfoUL.appendChild(operatingHoursLI);

  let storeContactLI = document.createElement('li');
  storeContactLI.innerText = this.contact;
  storeInfoUL.appendChild(storeContactLI);
};

new StoreDeets('Seattle', '600 Broadway', '6am to 7pm', 'Seattle@SalmonCookies.bake');
new StoreDeets('Tokyo', '3 Omotesando', '6am to 7pm', 'Tokyo@SalmonCookies.bake');
new StoreDeets('Dubai', '11 Al Faheidi Street', '6am to 7pm', 'Dubai@SalmonCookies.bake');
new StoreDeets('Paris', '20 Champs-Élysées', '6am to 7pm', 'Paris@SalmonCookies.bake');
new StoreDeets('Lima', 'Av. Garcilaso de la Vega 1337', '6am to 7pm', 'Lima@SalmonCookies.bake');

renderAllStoreDeets();


