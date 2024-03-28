'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.onclick = function() {
  const userName = userNameInput.value;
  if (userName.length === 0){
    return;
  }
  const 
}

const answers =[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
'###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
'###userName###のいいところは優しさです。###userName###の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];

let sum0fCharCode = 0;
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string} userName ユーザの名前
 * @return{string} 診断結果
 */
function assessment(userName){
  //全文字のコード番号を取得してそれを足し合わせる
  for (let i = 0; i < userName.length; i++){
    sum0fCharCode = sum0fCharCode + userName.charCodeAt(i);
  }

  //文字のコード番号の合計を回答の数で割って添え字の数値を求める
  const index = sum0fCharCode % answers.length;
  let result = answers[index];

  // //TODO 診断結果を実装する
  // return '';
  //TODO ###userName###　をユーザの名前に置き換える
  result = result.replaceALL('###userName###', userName);
  return result;
}

// //テストを行う関数
// function test (){
//   console.log('診断結果の文章のテスト');

// //太郎
// console.log('太郎')
// console.assert(
//   assessment('太郎') ===
//   '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
//   '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );

// //次郎
// console.log('次郎');
// console.assert(
//   assessment('次郎') ===
//   '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
//   '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );

// //花子
// console.log('花子');
// console.assert(
//   assessment('花子') ===
//   '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
//     '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );

// console.log('診断結果の文章のテスト終了');
// }
// console.log('同じ名前なら、同じ結果を出力することのテスト');
// // ここにテストを追加
// console.log('同じ名前なら、同じ結果を出力することのテスト終了')

// test();
