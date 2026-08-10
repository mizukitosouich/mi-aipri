document.addEventListener("DOMContentLoaded", function () {

    const characterList = document.querySelector(".character-list");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    const cards = document.querySelectorAll(".character-card");

    let currentIndex = 0;


    // 1枚分移動する距離
    function getScrollAmount() {

        const card = cards[0];

        if (!card) {
            return 0;
        }

        const cardStyle = window.getComputedStyle(card);

        const cardWidth = card.offsetWidth;

        // CSSの gap = 30px
        const gap = parseInt(
            window.getComputedStyle(characterList).gap
        ) || 30;

        return cardWidth + gap;
    }


    // 次へ
    nextButton.addEventListener("click", function () {

        currentIndex++;

        // 最後まで行ったら最初に戻る
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        characterList.scrollTo({
            left: currentIndex * getScrollAmount(),
            behavior: "smooth"
        });

    });


    // 前へ
    prevButton.addEventListener("click", function () {

        currentIndex--;

        // 最初より前に行ったら最後へ
        if (currentIndex < 0) {
            currentIndex = cards.length - 1;
        }

        characterList.scrollTo({
            left: currentIndex * getScrollAmount(),
            behavior: "smooth"
        });

    });

});