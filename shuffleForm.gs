function ShuffleForm(ss, form){ // フォームを並べ替える
  // スプレッドシート
  const sheet = ss.getSheetByName("question")

  // セクションインデックスの取得
  var section_items = form.getItems(FormApp.ItemType.PAGE_BREAK);
  var first_idx = section_items[0].getIndex()

  // 一覧のindexを乱数で生成
  var array = [...Array(sheet.getLastRow()-1)].map((_, i) => i + 2) // 2始まり
  index = shuffle(array);

  var pairs = []
  for(var i=0;i<index.length;i++){
    pairs.push(Math.floor(Math.random() * 2))
  }
  
  for(var i=0;i<index.length;i++){
    // スプレッドシートからIDを取得
    var id = sheet.getRange(index[i], pairs[i]+2).getValue()
    // 上から順番に設置
    form.moveItem(form.getItemById(id), first_idx+i+1)
  }

  // 非表示セクションで隠す
  form.moveItem(form.getItemById(section_items[1].getId()), index.length+first_idx+1)
  // スプレッドシートに表示順を残す
  
  sheet.getRange(2, 5).setValue(index.join(''));
}

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
