let cards = document.querySelectorAll('.item');


for (i = 0; i < cards.length; i++) {
    let card = cards[i];


    card.addEventListener('click', function (e) {
        if (e.target.classList.contains('item_footer')) {
            return true
        }


        if (!card.classList.contains('once_selected')) {
            card.classList.add('once_selected');
            card.addEventListener('mouseleave', function (e) {
                card.querySelector('.item_card').classList.add('hover_active');
            });
        }


        let cardClass = card.querySelector('.item_card').classList;
        let weightClass = card.querySelector('.weight').classList;
        let itemFooter = card.querySelector('.item_footer');


        if (cardClass.contains('def_img') || cardClass.contains('def_hov_img')) {
            cardClass.remove('def_img');
            cardClass.remove('def_hov_img');
            cardClass.add('sel_img');
            weightClass.remove('def_back');
            weightClass.add('sel_back');
            itemFooter.innerHTML = itemFooter.getAttribute('data-sel');


        } else if (cardClass.contains('sel_img')) {
            cardClass.remove('sel_img');
            cardClass.remove('sel_hov_img');
            cardClass.add('def_img');
            weightClass.remove('sel_back');
            weightClass.add('def_back');
            itemFooter.innerHTML = itemFooter.getAttribute('data-def');
        }



    });
}