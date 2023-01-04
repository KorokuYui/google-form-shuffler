Script for Google Forms that randomly replaces the order of questions and choices to eliminate bias in evaluation experiments, etc.

一対比較などの評価実験時のバイアスを無くすために、均等目盛（SCALE）の質問をランダムに入れ替えるGoogleフォーム用スクリプト。  
フォーム内設定の「質問の順番をシャッフルする」だと、イマイチうまく機能しない部分を設定できるようになります。  

# 仕様
- 事前に選択肢を入れ替えたアイテム（質問）を2パターンずつ作成しておく
<img src="https://user-images.githubusercontent.com/82018274/210537432-4fe6ae39-4e2d-4de9-af4d-e31d92884c1e.png" width="100px">

- 重複するアイテムのうち一方を非表示セクションに隠すことで、回答者からは片方のアイテムのみが見える状態になります
- 回答者ごとに、「質問順」と「選択肢」をランダムに入れ替えて表示することで、順序バイアスを防ぎます

# テンプレートの使い方
1. Google form でセクションとアイテムを以下のように作成
```
・ 事前アンケート
    ・名前、年齢、性別などシャッフルしたくない項目
・ 表示セクション
    ・質問1-A
    ・質問1-B（ex:1-Aの左右を入れ替えたもの）
    ・質問2-A
    ・質問2-B
    ・ ...
・ 非表示セクション
・ 事後アンケート
    ・意見、感想などシャッフルしたくない項目
```
**「表示セクション」の末にある「セクション2以降」を「セクション4に移動」に設定**  
これにより、非表示セクションを非表示にできます  
<img src="https://user-images.githubusercontent.com/82018274/210597040-6ad165f2-4752-4dcf-8ab2-fc70322dccdb.png" width="500px">


2. [form_shuffler_ss_template](https://docs.google.com/spreadsheets/d/19pneBd4V2cqGcVKPDRbEKeBrHw1AqKCBnSpquv6llUU/edit?usp=sharing)から「ファイル->コピーを作成」で自身のドライブ内にスプレッドシートをコピー
<img src="https://user-images.githubusercontent.com/82018274/210585545-e8508680-c42b-4c67-9640-663e469dc206.png" width="200px">

3. コピーしたスプレッドシート`question`に質問表を作成（画像は質問が2つの場合）
<img src="https://user-images.githubusercontent.com/82018274/210586021-e56cde39-000f-4313-9d2a-22fc5854ea1a.png" width="200px">

4. Google form 編集画面右上から「スクリプトエディタ」を起動  
<img src="https://user-images.githubusercontent.com/82018274/210539964-c8b7d362-e313-4d72-b4ad-0a8297338ec8.png" width="150px">  

5. プロジェクト内に`.gs`ファイルをすべて追加。`main.gs`と`createForm.gs`のidを書き換えておく（ex:`https://docs.google.com/forms/d/XXXXXXXXXXXXXXXXXXXXXXXX/edit`）
<img src="https://user-images.githubusercontent.com/82018274/210594967-a4282d5b-3016-4cd0-b51f-994ce89af94f.png" width="600px">


6. `createForm.gs`の`CreateForm`を一度実行してスプレッドシートへのIDの記入と質問順を初期化
7. 「トリガー」から新規トリガーを以下に設定して追加
```
実行する関数　　　　　　「main」
実行するデプロイを選択　「Head」
イベントのソースを選択　「フォームから」
イベントの種類を選択　　「フォーム送信時」
```

以降、回答者が回答を送信する度にスプレッドシートへの記入とフォームの入れ替えが行われます。  
回答結果はフォームとスプレッドシートの両方から確認できます。スプレッドシート`statistics`で回答を集約すると見やすくなります。  
スプレッドシート`answer`にidを追加したり、`SCALE`を書き換えることで、他の回答も取得できるようになります。
