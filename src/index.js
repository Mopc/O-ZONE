'use strict';
//Чекбокс

function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach((elem, i) => {
        elem.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}

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


// корзина

function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');

    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        // modalCart.style.cssText = 'display: flex; font-size: 30px'
    });

    closeBtn.addEventListener('click', () => {
        modalCart.style.display = 'none';
        modalCart.style.display = '';
    });
}

// End корзина


//Работа с корзиной

function addCart() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });

        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');

        countGoods.textContent = cardsCart.length;

        let sum = 0;
        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
            console.log('sum: ', sum);
        });
        cardTotal.textContent = sum;

        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}

//End Работа с корзиной


//фильтр акции

function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBrn = document.querySelector('.search-btn');

//фильтр по акции

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked) {
                if (!card.querySelector('.card-sale')) {
                    // card.parentNode.style.display = 'none';
                    card.parentNode.remove();
                }
            } else {
                // card.parentNode.style.display = '';
                    document.querySelector('.goods').appendChild(card.parentNode);

            }
        });
    });

//фильтр по цене

    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

function filterPrice() {
    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price'),
            price = parseFloat(cardPrice.textContent);
        
            if((min.value && price < min.value) || (max.value && price > max.value)) {
                card.parentNode.remove();
            }else {
                document.querySelector('.goods').appendChild(card.parentNode);
            }
    });
}

//поиск

    searchBrn.addEventListener('click', () => {
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            }else {
                card.parentNode.style.display = '';
            }
        });
    });

}

//End фильтр акции
toggleCheckbox();
toggleCart();
addCart();
actionPage();