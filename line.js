const clientId = "2004742178"; // LINE Developers で取得
const redirectUri = encodeURIComponent("https://keioga.github.io/reserve-app/callback.html");
const state = "abc123"; // ランダム文字列
const nonce = "xyz789"; // 同上

const loginUrl = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=profile%20openid&nonce=${nonce}`;

// ボタンにURLをセット
document.getElementById("line-login").href = loginUrl;