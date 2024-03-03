function loadCard(){
    fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    .then(res => res.json())
    .then(data => displayCard(data))
}

function displayCard(cards){
    const cardList = document.getElementById('card-item');
    for(const card of cards){
        const divCard = document.createElement('div');
        divCard.classList = `card w-96 bg-base-100 shadow-xl m-2`;
        divCard.innerHTML =`
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        `;
    }
}

loadCard();