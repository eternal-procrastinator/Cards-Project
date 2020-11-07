// --- Polyfill for IE from The Vanilla JS Toolkit ---
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


// --- Burger ---
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

menuIconWrapper.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

// --- Show more Cards ---
const buttonShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card__link--hidden');

// buttonMoreCards.addEventListener('click', function () {
//     const newCard = document.createElement('a');
//     newCard.classList.add('card__link');
//     cardsHolder.appendChild(newCard);
// });

buttonShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card__link--hidden');
    })
});

// --- Hide Widgets ---
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if(e.target.classList.contains('widget__title')){
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    })
})

// --- Location checkboxes ---
const checkboxAny = document.querySelector('.checkbox-any');
const checkboxesSimple = document.querySelectorAll('.checkbox-simple');

checkboxAny.addEventListener('change', function () {
    if(checkboxAny.checked){
        checkboxesSimple.forEach(function (item) {
            item.addEventListener('change', function () {
                checkboxAny.checked = false;
            });
            item.checked = false;
        })
    } else {
        checkboxesSimple.forEach(function (item) {
            item.removeEventListener('change', function () {
                checkboxAny.checked = false;
            });
        })
    }

})

// --- Show more options ---
const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(e){
    e.preventDefault();

    if(showMoreOptions.dataset.options === "hidden"){
        hiddenCheckboxes.forEach(function (item) {
            item.classList.remove('checkbox--hidden');
        });
        showMoreOptions.innerText = "Скрыть доп. опции";
        showMoreOptions.dataset.options = "visible";
    } else if(showMoreOptions.dataset.options === "visible"){
        hiddenCheckboxes.forEach(function (item) {
            item.classList.add('checkbox--hidden');
        });
        showMoreOptions.innerText = "Показать ещё";
        showMoreOptions.dataset.options = "hidden";
    }
}