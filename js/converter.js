// ここからコードを書いてください
export function setupConverter() {
  // DOM要素の取得
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  // 単位の選択肢を追加
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  // lengthUnitをループ処理しながら各単位を追加
  for (const unit of lengthUnit) {
    const optionFrom = document.createElement("option");
    optionFrom.value = unit.base;
    optionFrom.textContent = unit.name;
    converterFrom.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = unit.base;
    optionTo.textContent = unit.name;
    converterTo.appendChild(optionTo);
  }

  // 初期選択値を設定
  converterFrom.selectedIndex = 0; // meter
  converterTo.selectedIndex = 1; // kilometer

  // 変換処理を行う関数
  function convert() {
    // 入力欄の値を取得し、parseFloatで数値に変換
    const inputValue = parseFloat(converterInput.value);

    // 値が数値かを確認
    if (isNaN(inputValue)) {
      converterResult.textContent = "Please enter a valid number";
      return;
    }

    // 変換元の単位（base）を取得
    const fromBase = parseFloat(converterFrom.value);
    // 変換先の単位（base）を取得
    const toBase = parseFloat(converterTo.value);

    // 変換後の値を計算
    const result = (inputValue * fromBase) / toBase;

    // 変換元の単位名を取得
    const fromUnit = converterFrom.options[converterFrom.selectedIndex].text;
    // 変換先の単位名を取得
    const toUnit = converterTo.options[converterTo.selectedIndex].text;

    // 結果を表示（小数点3桁）
    converterResult.textContent = `${inputValue} ${fromUnit} = ${result.toFixed(3)} ${toUnit}`;
  }

  // フォームの送信イベントリスナーを設定
  converterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    convert();
  });

  // 入力値や変換元/先の単位が変更された時に変換処理を行う
  converterForm.addEventListener("input", () => {
    convert();
  });

  // Web アプリケーションの起動時に変換処理を行う
  convert();
}
