# google-form-shuffler
評価実験などのバイアスを無くすために、質問順や選択肢をランダムに入れ替えるGoogleフォーム用スクリプト。  
Script for Google Forms that randomly replaces the order of questions and choices to eliminate bias in evaluation experiments, etc.

# 仕様
- 事前に選択肢を入れ替えたアイテム（質問）を2パターンを作成しておく
<img src="https://user-images.githubusercontent.com/82018274/210537432-4fe6ae39-4e2d-4de9-af4d-e31d92884c1e.png" width="200px">

- 重複するアイテムのうち一方を非表示セクションに格納
- 回答者ごとに、「質問順」と「選択肢」をランダムに入れ替えて表示
- 回答結果をスプレッドシート上で集約して表示

# テンプレートの使い方
Google form でセクションとアイテムを以下のように作成
```
1. 事前アンケート
    ・名前、年齢、性別など
2. 表示セクション
    ・質問1-A
    ・質問1-B（ex:1-Aの左右を入れ替えたもの）
    ・質問2-A
    ・質問2-B
    ・ ...
3. 非表示セクション
4. 事後アンケート
    ・意見、感想など
```

[form_shuffler_ss_template](https://docs.google.com/spreadsheets/d/19pneBd4V2cqGcVKPDRbEKeBrHw1AqKCBnSpquv6llUU/edit?usp=sharing)から「ファイル->コピーを作成」で自身のドライブ内にスプレッドシートをコピー

Google form「回答->スプレッドシートの作成（緑のマーク）->既存のスプレッドシートを選択」から自身のドライブ内にコピーしたスプレッドシートを選択

Google form 編集画面右上から「スクリプトエディタ」を起動  
<img src="https://user-images.githubusercontent.com/82018274/210539964-c8b7d362-e313-4d72-b4ad-0a8297338ec8.png" width="200px">

プロジェクト内に.gsファイルをすべて追加
