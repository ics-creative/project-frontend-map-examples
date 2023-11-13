// HTMLタグのid属性を指定して要素を取得
const loginButton = document.querySelector("#loginButton");
const closeButton = document.querySelector("#closeButton");
const loginDialog = document.querySelector("#loginDialog");

// ログインボタンを押したら
loginButton.addEventListener("click", () => {
  // ダイアログを開く
  loginDialog.showModal();
});
// とじるボタンを押したら
closeButton.addEventListener("click", () => {
  // ダイアログをとじる
  loginDialog.close();
});
