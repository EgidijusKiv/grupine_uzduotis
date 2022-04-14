const API_URL = "http://ec2-18-184-55-200.eu-central-1.compute.amazonaws.com";
const token = "Bearer 85|OTjpejYD1KjIHZFcWyjfv5iibtOXXK8WcdKjJvi0";
const buttonAll = document.getElementById('All');
const buttonPOST = document.getElementById('POST');


async function allAdvertisments () {
const getAll = await fetch(API_URL + "/api/products", {
    method: "GET",
    headers: {
        Authorization: token,
    }
  });
  //console.log(getAll);
 const getAllData = await getAll.json();
 console.log(getAllData);
 getAllData.forEach(createProductElement)

};


 function createProductElement (produktas) {
  const article = document.createElement('article');
  const divContainer = document.createElement('div');
  const divCard = document.createElement('div');
  const title = document.createElement('h2');
  const image = document.createElement('img');
  const cardBody = document.createElement('div');
  const price = document.createElement('p');

  title.innerHTML = produktas.name;
  price.innerHTML = produktas.price + ' EUR';
  article.appendChild(divContainer);
  divContainer.appendChild(divCard);
  divCard.appendChild(image);
  divContainer.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(price);

  //article.appendChild(title);
  //article.appendChild(image);
  document.body.appendChild(article);

  
  divContainer.setAttribute('class', 'container');
  divCard.setAttribute('class', 'card');
  divCard.setAttribute('style', 'width: 18rem');
  image.setAttribute('class', 'card-img-top');
  image.setAttribute('src', produktas.thumbnail);
  cardBody.setAttribute('class', 'card-body');
  price.setAttribute('class', 'card-text');

 }


buttonAll.addEventListener('click', allAdvertisments);

const skelbimas ={
  name: 'Dvaro grietine',
  price: '2,20',
  thumbnail: 'https://www.eurohorecana.lt/image/cache/data/pieno-produktai/grietine/grietine-naturali-30proc-dvaro-500g-400x400.jpg'
}

async function postAdvertisment (param) {
  const getAll = await fetch(API_URL + "/api/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
        Authorization: token
    },
    body: param
  });
  console.log(getAll);
};
const skelbimasString = JSON.stringify(skelbimas);
buttonPOST.addEventListener('click', () => {
  postAdvertisment(skelbimasString);
})


