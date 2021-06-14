const modalLinks = document.querySelectorAll(".button-modal");

for(let index = 0; index < modalLinks.length;index++){
    const modalLink = modalLinks[index];
    modalLink.addEventListener("click", function (e) {
        const modalName = modalLink.getAttribute('href').replace('#','');
        const currentModal = document.getElementById(modalName);
        modalOpen(currentModal);
        e.preventDefault();
    });
}

const modalExit = document.querySelectorAll(".close-btn");

for(let index = 0; index < modalExit.length;index++){
    const close = modalExit[index];
    close.addEventListener("click", function (e) {
        modalClose(close.closest('.modal-window'));
        e.preventDefault();
    });
}

function modalOpen(currentModal){
    const modalActive = document.querySelector(".modal-window.open");
    if(modalActive) {
        modalClose(modalActive);
    }
    currentModal.classList.add('open');
}
function modalClose(modalActive){
    modalActive.classList.remove('open');
}

