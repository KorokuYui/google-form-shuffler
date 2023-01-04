Script for Google Forms that randomly replaces the order of questions and choices to eliminate bias in evaluation experiments, etc.

一対比較などの評価実験時のバイアスを無くすために、均等目盛（SCALE）の質問をランダムに入れ替えるGoogleフォーム用スクリプト。  
フォーム内設定の「質問の順番をシャッフルする」だと、イマイチうまく機能しない部分を手動で設定できるようになります。  

# 仕様
- 事前に選択肢を入れ替えたアイテム（質問）を2パターンを作成しておく
<img src="https://user-images.githubusercontent.com/82018274/210537432-4fe6ae39-4e2d-4de9-af4d-e31d92884c1e.png" width="200px">

- 重複するアイテムのうち一方を非表示セクションに隠すことで、回答者からは片方のアイテムのみが見える状態になります
- 回答者ごとに、「質問順」と「選択肢」をランダムに入れ替えて表示し、順序バイアスを防ぎます

# テンプレートの使い方
1. Google form でセクションとアイテムを以下のように作成

```
・ 事前アンケート
    ・名前、年齢、性別など
・ 表示セクション
    ・質問1-A
    ・質問1-B（ex:1-Aの左右を入れ替えたもの）
    ・質問2-A
    ・質問2-B
    ・ ...
・ 非表示セクション（このセクションには何も入れない）
・ 事後アンケート
    ・意見、感想など
```

2. [form_shuffler_ss_template](https://docs.google.com/spreadsheets/d/19pneBd4V2cqGcVKPDRbEKeBrHw1AqKCBnSpquv6llUU/edit?usp=sharing)から「ファイル->コピーを作成」で自身のドライブ内にスプレッドシートをコピー。

3. questionシートに質問表を作成。

4. Google form「回答->スプレッドシートの作成（緑のマーク）->既存のスプレッドシートを選択」から自身のドライブ内にコピーしたスプレッドシートを選択  
<img src="https://user-images.githubusercontent.com/82018274/210553049-2b2b9a80-8d5a-4258-8b3c-3044f2866961.png" width="400px">  

5. Google form 編集画面右上から「スクリプトエディタ」を起動  
<img src="https://user-images.githubusercontent.com/82018274/210539964-c8b7d362-e313-4d72-b4ad-0a8297338ec8.png" width="200px">  

6. プロジェクト内に`.gs`ファイルをすべて追加。スプレッドシートとフォームのidを書き換えておく（ex:`https://docs.google.com/forms/d/XXXXXXXXXXXXXXXXXXXXXXXX/edit`）
7. `createForm.gs`の`CreateForm`を一度実行してスプレッドシートへのIDの記入と質問順の初期化
8. 「トリガー」から新規トリガーを以下に設定して追加
```
実行する関数　　　　　　「main」
実行するデプロイを選択　「Head」
イベントのソースを選択　「フォームから」
イベントの種類を選択　　「フォーム送信時」
```

以降、回答者が回答を送信する度にスプレッドシートへの記入とフォームの入れ替えが行われます。回答結果はフォームとスプレッドシートの両方から確認できます。
