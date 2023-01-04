function OnSubmit(e, ss) {
  const sheetQ = ss.getSheetByName("question")
  const sheetA = ss.getSheetByName("answer")
  let lastRow = sheetA.getLastRow() + 1;
  let lastCol = sheetA.getLastColumn();
  let question = sheetQ.getLastRow() - 1;

  // タイムスタンプ
  var timeStamp  = Utilities.formatDate(e.response.getTimestamp(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm');
  sheetA.getRange(lastRow, 1).setValue(timeStamp)

  // スプレッドシートのIDを取得
  var itemIds = sheetA.getRange(2, 2, 1, lastCol-1).getValues()
  // getした情報のアイテムを質問順に取得
  let itemResponses = e.response.getItemResponses();

  let pageIndex = []
  let resultIndex = []

  // 回答を一通り記入
  for(var i=0;i<itemIds[0].length;i++){
    if (itemIds[0][i] == ""){ // id空白を無視
      continue;
    }    
    for(var k=0;k<itemResponses.length;k++){
      let itemResponse = itemResponses[k]
      if(itemResponse.getItem().getId() == itemIds[0][i]){
        // 回答を記入
        sheetA.getRange(lastRow, i+2).setValue(itemResponse.getResponse()) 
        if(itemResponse.getItem().getType() == 'SCALE'){
          pageIndex.push(itemResponse.getItem().getIndex())
        }
        break;
      }
    }
  }

  let index = [...Array(question)].map((_, i) => i + 2)
  var section_items = form.getItems(FormApp.ItemType.PAGE_BREAK);
  var pageNum = section_items[0].getId()

  // 質問順を保存
  for(var q of index){
    for(var j=0;j<question;j++){
      if(q+pageNum == pageIndex[j]){ // 最初の質問数+1 - 2(スプレッドのquestionの位置)
        resultIndex.push(index[j])
      }
    }
  }
  sheetA.getRange(lastRow, lastCol).setValue(resultIndex.join(""))
}
