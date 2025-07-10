if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

function addWord() {
  const eng = document.getElementById('english').value.trim();
  const jpn = document.getElementById('japanese').value.trim();
  if (eng === '' || jpn === '') return;

  const li = document.createElement('li');
  li.textContent = `${eng} → ${jpn}`;
  document.getElementById('wordList').appendChild(li);

  document.getElementById('english').value = '';
  document.getElementById('japanese').value = '';
}