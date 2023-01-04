const ss = SpreadsheetApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); // スプレッドシートURLのidを入力
const form = FormApp.openById("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); // フォームURLのidを入力

function CreateForm() { 
  // フォームおよびスプレッドシートの初期化
  SetId()
  SetSpreadsheet()
  ShuffleForm(ss, form)
}

function SetId() { // スプレッドシートにフォームのIDを入れる
  // スプレッドシート
  const sheet = ss.getSheetByName("question")

  // SCALE属性のitemのidを取得
  var scale_items = form.getItems(FormApp.ItemType.SCALE);
  var last_row = sheet.getLastRow() // 質問数をスプレッドシートから自動で取得

  if(scale_items.length < (last_row-1)*2){
    for(var i=0;i<(rast_row-1)*2-scale_items.length;i++){
      form.addScaleItem()
          .setBounds(0, 10);
    }
  }

  for(var i=0;i<last_row-1;i++){
    sheet.getRange(i+2, 2).setValue(scale_items[i*2].asScaleItem().getId())
    sheet.getRange(i+2, 3).setValue(scale_items[i*2+1].asScaleItem().getId())
  } 
}

function SetSpreadsheet(){ //　スプレッドシートのanswerにIDを入れる
  // スプレッドシート
  const sheetQ = ss.getSheetByName("question")
  const sheetA = ss.getSheetByName("answer")
  let question = sheetQ.getLastRow() - 1;

  var pageNum = 2 // スプレッドシートの列を指定（タイムスタンプの次）

  // スプレッドシート側が順番になっている前提で入れる
  for(var i=0;i<question;i++){
    sheetA.getRange(1, i*2+pageNum).setValue(sheetQ.getRange(i+2, 1).getValue() + "_" + sheetQ.getRange(1, 2).getValue())
    sheetA.getRange(1, i*2+pageNum+1).setValue(sheetQ.getRange(i+2, 1).getValue() + "_" + sheetQ.getRange(1, 3).getValue())
    sheetA.getRange(2, i*2+pageNum).setValue(sheetQ.getRange(i+2, 2).getValue())
    sheetA.getRange(2, i*2+pageNum+1).setValue(sheetQ.getRange(i+2, 3).getValue())
  }
}
