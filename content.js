

// 左側に画像を表示するコンテナを作成
const leftGraphContainer = document.createElement("div");
Object.assign(leftGraphContainer.style, {
  position: "fixed",
  top: "5%", // ページ上部から10%下げる
  left: "0", // 左端に固定
  width: "500px", // 横幅を設定
  height: "95%", // 高さを設定
  backgroundColor: "white", // 背景色を設定
  padding: "10px", // 内側の余白
  border: "1px solid #ccc", // 枠線を追加
  borderRadius: "5px", // 角を丸くする
  boxShadow: "2px 0px 6px rgba(0, 0, 0, 0.1)", // 右側に影を付ける
  zIndex: "1", // 他の要素より前面に表示
  overflow: "auto", // コンテナをスクロール可能にする
  resize: "horizontal", // 横方向にリサイズ可能にする
});
document.body.appendChild(leftGraphContainer);

const topRightContainer = document.createElement("div");
Object.assign(topRightContainer.style, {
  position: "fixed",
  top: "0", // ページ上部から10%下げる
  right: "0", // 左端に固定
  width: "100%", // 横幅を設定
  height: "5%", // 高さを設定
  border: "3px solid #ccc", // 枠線を追加
  borderRadius: "5px", // 角を丸くする
  zIndex: "10000", // 他の要素より前面に表示
  backgroundColor: "white", // 背景色を設定
  display: "flex", // フレックスボックスを使用
  alignItems: "center", // 垂直方向に中央揃え
  justifyContent: "center", // 水平方向に中央揃え
});
topRightContainer.innerText = "必ずVideoボタンを押した状態にしてください。また、検索欄には'World Schools'と入力してください。";
document.body.appendChild(topRightContainer);

// 画像を追加
const imageUrls = [
  "images/debate-graph-001.png",
  "images/debate-graph-002.png",
  "images/debate-graph-003.png",
  "images/debate-graph-001.png",
  "images/debate-graph-002.png",
  "images/debate-graph-003.png",
  "images/debate-graph-001.png",
  "images/debate-graph-002.png",
  "images/debate-graph-003.png",
];

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL(url); // https://~では使えないので注意
  console.log(img.src);
  img.style.display = "block"; // 縦に並べる
  img.style.width = "100%"; // コンテナ幅に合わせる
  img.style.marginBottom = "10px"; // 画像間のスペース
  img.style.border = "1px solid #ccc"; // 画像に枠線を追加
  img.style.borderRadius = "5px"; // 画像の角を丸くする
  leftGraphContainer.appendChild(img);
});