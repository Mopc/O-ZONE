'use strict';
//Чекбокс

const checkbox = document.querySelectorAll('.filter-check_checkbox');

checkbox.forEach((elem, i) => {
    elem.addEventListener('change', function() {
        if(this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
});

// for(let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener('change', function() {
//     if(this.checked) {
//         this.nextElementSibling.classList.add('checked');
//     } else {
//         this.nextElementSibling.classList.remove('checked');
//     }
// });
// }

// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         this.nextElementSibling.classList.add('checked');
//     } else {
//         this.nextElementSibling.classList.remove('checked');
//     }
// });

// checkbox.addEventListener('change', () => {
//     console.log('галочка');
// }); стрелочная функция. У нее нет своего контекста вызова для this

//End чекбокс
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close')


// корзина
btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // modalCart.style.cssText = 'display: flex; font-size: 30px'
});

closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    modalCart.style.display = '';
});


// End корзина

//Работа с корзиной

const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter'),
    countInCart = document.querySelector('.cart-total span');
    console.log(countInCart);
cards.forEach((card) => {
    const btn = card.querySelector('button');
    
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
    countInCart.textContent = cardsCart.length;
}

//End Работа с корзиной