// ここからコードを書いてください

// タブのセットアップ関数
export function setupTabs() {
  // サイドバーの各メニュー項目のDOM取得
  const homeTab = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');

  // メインコンテンツ領域の各セクションのDOM取得
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  //converterSection.classList.add("hidden");
  //homeSection.classList.remove("hidden");

  // タブクリック時のイベントリスナーを設定
  homeTab.addEventListener("click", () => {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", () => {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}
