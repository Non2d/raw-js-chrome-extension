// 左側に画像を表示するコンテナを作成
const container = document.createElement("div");
container.style.position = "fixed";
container.style.top = "10%"; // ページ上部から10%下げる
container.style.left = "0"; // 左端に固定
container.style.width = "500px"; // 横幅を設定
container.style.height = "80%"; // 高さを設定
container.style.backgroundColor = "white"; // 背景色を設定
container.style.padding = "10px"; // 内側の余白
container.style.border = "1px solid #ccc"; // 枠線を追加
container.style.borderRadius = "5px"; // 角を丸くする
container.style.boxShadow = "2px 0px 6px rgba(0, 0, 0, 0.1)"; // 右側に影を付ける
container.style.zIndex = "1"; // 他の要素より前面に表示
container.style.overflow = "auto"; // コンテナをスクロール可能にする
container.style.resize = "horizontal"; // 横方向にリサイズ可能にする
container.style.overflow = "auto"; // コンテナをスクロール可能にする

// 画像を追加
const imageUrls = [
  "http://img.youtube.com/vi/wFFF1_Pv3HQ/default.jpg",
  "http://img.youtube.com/vi/wFFF1_Pv3HQ/default.jpg",
  "http://img.youtube.com/vi/wFFF1_Pv3HQ/default.jpg",
];

imageUrls.forEach((url) => {
  const img = document.createElement("img");
  img.src = url;
  img.style.display = "block"; // 縦に並べる
  img.style.width = "100%"; // コンテナ幅に合わせる
  img.style.marginBottom = "10px"; // 画像間のスペース
  img.style.border = "1px solid #ccc"; // 画像に枠線を追加
  img.style.borderRadius = "5px"; // 画像の角を丸くする
  container.appendChild(img);
});

// コンテナをドキュメントに追加
document.body.appendChild(container);