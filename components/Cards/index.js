// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const myCards = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response);
        const cardArray = response.data.articles;

        const one = cardArray.javascript;
        const two = cardArray.bootstrap;
        const three = cardArray.jquery;
        const four = cardArray.node;
        const five = cardArray.technology;

        const allCards = one.concat(two, three, four, five);
        console.log(allCards);

        allCards.forEach(authorCard => {
            const newCard = newArticles(authorCard);
            myCards.appendChild(newCard);
        })

    })
    .catch(error => {
        console.log('Response is not recieved', error);
    })

function newArticles(obj) {
    // creating elements
    const cards = document.createElement('div');
    const cardsHeadline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('spane');

    // adding classes
    cards.classList.add('card');
    cardsHeadline.classList.add('headlin');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // appending to the 
    cards.appendChild(cardsHeadline);
    cards.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(img);
    author.appendChild(authorsName);

    // adding contents to the elements we created
    cardsHeadline.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorsName.textContent = `By: ${obj.authorName}`;

    return cards;
}