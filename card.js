// ローカルストレージから単語データを読み込む関数
function loadFlashcards() {
    const storedData = localStorage.getItem('flashcards');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

// ページ上の要素を取得
const cardFront = document.querySelector('.front');
const cardBack = document.querySelector('.back');
const prevButton = document.querySelector('.nav a:nth-child(1)');
const nextButton = document.querySelector('.nav a:nth-child(3)');

// 単語データと現在のカードのインデックス
const flashcards = loadFlashcards();
let currentIndex = 0;

// カードの内容を更新する関数
function updateCard() {
    if (flashcards.length === 0) {
        cardFront.textContent = '単語がありません';
        cardBack.textContent = '単語がありません';
        return;
    }

    const currentCard = flashcards[currentIndex];
    cardFront.textContent = `表：${currentCard.english}`;
    cardBack.textContent = `裏：${currentCard.japanese}`;
}

// 次のカードへ移動
function showNextCard() {
    currentIndex++;
    if (currentIndex >= flashcards.length) {
        currentIndex = 0; // 最後のカードなら最初に戻る
    }
    updateCard();
}

// 前のカードへ移動
function showPrevCard() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1; // 最初のカードなら最後に戻る
    }
    updateCard();
}

// イベントリスナーを設定
prevButton.addEventListener('click', (e) => {
    e.preventDefault();
    showPrevCard();
});

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    showNextCard();
});

// ページ読み込み時に最初のカードを表示
document.addEventListener('DOMContentLoaded', () => {
    updateCard();
});