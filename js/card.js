//card js

function loadCard() {
  fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    .then((res) => res.json())
    .then((data) => displayCard(data));
}

function displayCard(cards) {
  const cardList = document.getElementById("card-item");
  for (const card of cards) {
    //console.log(card)
    const divCard = document.createElement("div");
    divCard.classList = `card bg-base-100 shadow-xl m-2 p-4`;
    divCard.innerHTML = `
        <img class="rounded-lg" src=${card.cover_image} alt="Shoes" />
          <div class="mt-4">
            <p><i class="fa-solid fa-calendar mr-4"></i>${
              card.author.posted_date ? card.author.posted_date : "Unknown"
            }</p>
            <h2 class="card-title font-bold">${card.title}</h2>
            <p>${card.description}</p>
          </div>
          <div class="flex mt-4">
            <img class="h-[40px] w-[40px] rounded-full" src=${
              card.profile_image
            }/>
            <div class="ml-4 h-[40px]">
              <p>${card.author.name}</p>
              <p>${
                card.author.designation ? card.author.designation : "Unknown"
              }</p>
            </div>
          </div>
        `;
    cardList.appendChild(divCard);
  }
}

loadCard();
