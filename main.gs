function main(e) {
  const ss = SpreadsheetApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); // スプレッドシートURLのidを入力
  const form = FormApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); // フォームURLのidを入力

  // 提出された回答の処理
  OnSubmit(e, ss)
  // 次の質問の処理
  ShuffleForm(ss, form)
}   
