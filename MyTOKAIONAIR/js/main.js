'use strict';

{
  const question = document.getElementById('question');
  const audio = document.querySelector('audio');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const explain = document.getElementById('explain');
  const judgment = document.getElementById('judgment');
  const answer = document.getElementById('answer');
  const explanation = document.getElementById('explanation');
  const perfect = document.getElementById('perfect');
  const scoreLabel = document.querySelector('#result > p');


  const quizSet = shuffle //クイズ自体をシャッフルしたいときはon
  ([
    {a: 'sound/tokai1.m4a', c: ['【広辞苑】まるで人狼！高度な頭脳戦で仲間割れ勃発！！！', '【天然男】としみつ、この後なんて言うでしょう！！！', '【キモすぎ】第一回 自分のぬいぐるみ作り選手権！！！'], url: "https://youtu.be/bte0g6NX0MY", e: "有名な迷セリフですね。こういうみんなのテンションが変な回は結構好きです。てつやがコーヒーミルでいろんな食材を試す動画も虫さんがはっちゃけてて面白くてすき。"},
    {a: 'sound/tokai2.m4a', c: ['【中心はどこ？】本州最北端と最西端を同時に出発したらどこですれ違うの？', '愛知県の中だけで｢47都道府県のお土産｣揃うんじゃね？', '【脱六本木】｢◯本木｣っていう地名、全部コンプリートしたい！！'], url: "https://youtu.be/7-7nX1gqcec", e: "結構難易度の高い問題。「早い」、「２時間半で着く」、車の音で動画を絞っていけばなんとか選択肢からは選べることができると思います。この企画の結果、日本の中心は神奈川県の小田原市に決まりました。"},
    {a: 'sound/tokai3.m4a', c: ['【大塩まみれ】公園に死海を作ってみた・・・！！！！', '【夢】巨大風船で空を飛んでみたいんだ！！', '【落とすのは自分のiphone】手作りパラシュート選手権！'], url: "https://youtu.be/ERcR5QJwVdQ", e: "としみつが広辞苑をゆめまるの太ももの上に間違って置いているシーンが頭に浮かびますね。としみつエラーのある有名な作品です。どうやってあんだけの量の塩を処理したのか気になります。"},


    {a: 'sound/tokai4.m4a', c: ['【脱六本木】｢◯本木｣っていう地名、全部コンプリートしたい！！', '【検証】川で寝たらどこで起きるのか！後編', '岡崎って動物出まくるから実質ナイトサファリなんじゃね？'], url: "https://youtu.be/iABRvpxcmOQ", e: "電話ごしのしばゆー、「二本角」と喩えている当たり、わかりますよね？わざわざ宮崎県に行ったしばゆーさんですね。とっさにこのコメントが出るあたり、やっぱりしばゆーは面白いね。ちなみに、この動画でしばゆーさんは虫さんの電話番号を出しちゃうという戦犯をしました。"},
    {a: 'sound/tokai5.m4a', c: ['【史上最恐】｢なんでもあり｣のカードを使って罰ゲームを回避せよ！', '【うぬぼれ厳禁】自分の能力を見極めろ！自分理解王！', '【骨折経験あり】金をかければ高い場所からも安全に飛び降りれる！？'], url: "https://youtu.be/DHelYnbQ458", e: "ゆめまるがキレている、そして語尾にだってばよがついている、みんなの笑い声からこの動画が想像できるでしょう。しばゆーはやっぱり天才ですね。この動画の罰ゲームの結末は一番訳がわからなかったですね。デュエルディスクの排除感が凄かった。"},
    {a: 'sound/tokai6.m4a', c: ['【衝撃のオチをつけろ！】第一回！まさかの結果に！？選手権！！！！', '【文理対抗】食べるだけなんて甘え！制限時間内に｢作って食べる｣大食い対決！', '【面白】ストップモーション動画対決！！！【高品質】'], url: "https://youtu.be/TNrnohhUcY8", e: "「演出」という言葉からパチンコが連想され、しばゆーの爆笑オチが思い出されると思います。なんでこんなに面白いことが思いつくのか。彼の頭の中を一回見てみたいものですね。"},
    {a: 'sound/tokai7.m4a', c: ['【全3問】この世に実在する料理を見極めろ！！！', '【絶対可愛い】作り方知らない男達が想像で巨大マシュマロ作ってみた', '【第一回】なんの選手権やってるかわからない選手権！'], url: "https://youtu.be/B2EZyROtZ20", e: "イヤホンしていなかったらごめんと言いたいくらい。開き直ってるしばゆー＆キンタマということから、しばゆーがアボカドに鳥の卵黄をはめて作った料理のことだとわかると思います。でも本当はしばゆー料理うまいんですよね？"},
    {a: 'sound/tokai8.m4a', c: ['【半分飲み会】大人が全力でおねしょに挑戦します', 'ヤンキー達で面白え動画撮ってやったからよぉ！！夜露死苦ぅ！！！', '【告知あり】負けたら３時間瞑想！集中力王選手権！！！'], url: "https://youtu.be/L6IKq4xoWa0", e: "ポイントは微かに聞こえるりょうくんの「静かにして本当に」。この眠そうな声と酔っ払っている虫さんということからなんとか絞れると思います。正味虫さんが一番やばい人なのではと私は密かに思っています。加減がバグってるってイメージ。"},
    {a: 'sound/tokai9.m4a', c: ['【岡崎帰りたい】東京で野生動物を探してたら展開無さすぎてみんなキレた！', '【バカ昔】古すぎるやべえ温泉があるらしい！？', '誰でも魔球が投げれる！？罰ゲームを賭けたウィッフィルボール対決！！！'], url: "https://youtu.be/VbkHVKF6k40", e: "てつやとしばゆーのコンボ、そしててつやが何かハミハミしながら「芋虫」と言っていることからこの動画が思いつくのではないでしょうか。しばゆーの特徴的な編集と東京の動画という稀有な動画なので知っていてもおかしくないはず。"},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;

  //クイズをランダムにするアルゴリズム処理
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (arr.length));
    [arr[j], arr[i]] = [arr[i], arr[j]]
    }
    return arr;
  }

  function checkAnswer(li) {
    // if (isAnswered === true) {
    if (isAnswered) {
      return;
    }
      isAnswered =true;
      if(li.textContent === quizSet[currentNum].c[0]) {
        li.classList.add('correct');
        judgment.textContent = "正解です！";
        
        score++;
      } else {
        li.classList.add('wrong');
        judgment.textContent = "間違いです！";
      }
      answer.textContent = quizSet[currentNum].c[0];
      answer.href = quizSet[currentNum].url;
      explanation.textContent = quizSet[currentNum].e;
      
      explain.classList.remove('disabled');
      btn.classList.remove('disabled');
  }

  function setQuiz() {
    isAnswered = false;

    // question.textContent = quizSet[currentNum].q;
    question.textContent = `第${currentNum + 1}問！`;
    audio.src = quizSet[currentNum].a;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }

    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li)
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = ('Finish');
      btn.classList.add('finish');
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');
    explain.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      result.classList.remove('hidden');
      // console.log(`Score: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      if (score === quizSet.length) {
        perfect.textContent = "Perfect!!";
      } else {
        perfect.textContent = "";
      }
    } else {
      currentNum++;
      setQuiz();
    }
  })
}