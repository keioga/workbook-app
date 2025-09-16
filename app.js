if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}


// アプリケーションの状態を保持する配列
let flashcards = [];

// HTML要素を取得
const englishInput = document.getElementById('english');
const japaneseInput = document.getElementById('japanese');
const wordList = document.getElementById('wordList');

// ページ読み込み時にローカルストレージからデータを読み込む
window.onload = function() {
  const storedFlashcards = localStorage.getItem('flashcards');
  if (storedFlashcards) {
    flashcards = JSON.parse(storedFlashcards);
    // renderWords();
  }
};

// 単語をローカルストレージに保存する
function saveWords() {
  localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

// 単語を画面に表示する
function renderWords() {
  wordList.innerHTML = '';
  flashcards.forEach(card => {
    const li = document.createElement('li');
    li.textContent = `${card.english}: ${card.japanese}`;
    wordList.appendChild(li);
  });
}



function addWord() {
  const eng = document.getElementById('english').value.trim();
  const jpn = document.getElementById('japanese').value.trim();
  if (eng === '' || jpn === '') {
    alert('英単語と日本語訳を入力してください。');
    return;
  }

  // 新しい単語オブジェクトを作成
  const newCard = {
    english: eng,
    japanese: jpn
  };

  // 配列とローカルストレージに単語を追加・保存
  flashcards.push(newCard);
  saveWords();
  
  // 画面を更新
  // renderWords();

  // 入力フィールドをクリア
  englishInput.value = '';
  japaneseInput.value = '';

  const li = document.createElement('li');
  li.textContent = `単語が追加できました！　：　${eng} → ${jpn}`;
  document.getElementById('wordList').appendChild(li);

  document.getElementById('english').value = '';
  document.getElementById('japanese').value = '';
}


