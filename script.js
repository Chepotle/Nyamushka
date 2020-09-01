let packs = document.querySelectorAll('.item_img');
let def = document.querySelectorAll('.section .default');


for (i = 0; i < packs.length; i++) {
    let pack = packs[i];
    pack.addEventListener('click', function () {
        if (pack.classList.contains('default') || pack.classList.contains('default_hover')) {
            pack.classList.remove('on');


        }
    });
}