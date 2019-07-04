var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var towns = request.response;
    showTowns(towns);
  }
function showTowns(jsonObj) {
    var towns = jsonObj['towns'];
    /*for(var i = 0; i < towns.length; i++) {*/
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var image = document.createElement('img');
      image.src = "images/fishHavenTown.jpg";
      /*var myList = document.createElement('ul');*/
      myH2.textContent = towns[1].name;
      myPara1.textContent = 'Motto: ' + towns[1].motto; 
      myPara2.textContent = 'Year Founded: ' + towns[1].yearFounded;
      myPara3.textContent = 'Current Population: ' + towns[1].currentPopulation;
      myPara4.textContent = 'Annual Rain Fall: ' + towns[1].averageRainfall;

      /*var superPowers = towns[i].powers;
      for(var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }*/
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(image);
      /*myArticle.appendChild(myList);*/
      section.appendChild(myArticle);

      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var image = document.createElement('img');
      image.src = "images/prestonTown.jpg";
      /*var myList = document.createElement('ul');*/
      myH2.textContent = towns[4].name;
      myPara1.textContent = 'Motto: ' + towns[4].motto;
      myPara2.textContent = 'Year Founded: ' + towns[4].yearFounded;
      myPara3.textContent = 'Current Population: ' + towns[4].currentPopulation;
      myPara4.textContent = 'Annual Rain Fall: ' + towns[4].averageRainfall;
      /*var superPowers = towns[i].powers;
      for(var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }*/
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(image);
      /*myArticle.appendChild(myList);*/
      section.appendChild(myArticle);

      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myPara4 = document.createElement('p');
      var image = document.createElement('img');
      image.src = "images/sodaSpringsTown.jpg";
      /*var myList = document.createElement('ul');*/
      myH2.textContent = towns[5].name;
      myPara1.textContent = 'Motto: ' + towns[5].motto;
      myPara2.textContent = 'Year Founded: ' + towns[5].yearFounded;
      myPara3.textContent = 'Current Population: ' + towns[5].currentPopulation;
      myPara4.textContent = 'Annual Rain Fall: ' + towns[5].averageRainfall;
      /*var superPowers = towns[i].powers;
      for(var j = 0; j < superPowers.length; j++) {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }*/
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(image);
      /*myArticle.appendChild(myList);*/
      section.appendChild(myArticle);
    }