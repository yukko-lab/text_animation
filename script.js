// フェード
const fade = document.querySelector('.fade');


const fadeKeyframes = {
  opacity: [0, 1],
}
//キー（プロパティ）はCSSと同じ形で記載します。例えば、opacity: [0, 1], は、不透明度を0から1にする、ということを表しています。



const fadeOptions = {
  duration: 5000,
  easing: 'ease',
  fill: 'forwards',
}

fade.animate(fadeKeyframes, fadeOptions);

//duraion：アニメーションの再生時間。ミリ秒で書きます。3000なら3秒です。
//easing：アニメーションが変化する速度やタイミング。easeは、開始と終了は穏やかに変化します。
//fill：アニメーション再生前後の状態。forwardsは、最後の状態を維持します。
//delay：アニメーションの開始を遅らせる時間。
//direction：アニメーションの実行方向。normal（通常）、alternate（交互）、reverse（逆方向）、alternate-reverse（alternateの逆方向）
//easing：linear（一定速度。初期値）、ease-in（ゆっくり〜速く）、ease-out（速い〜だんだんゆっくり）、ease-in-out（開始と終了は穏やか）
//fill：none（なし。初期値）、backwords（最初のキーフレームを適用）、both（forwardsとbackwardsの両方）
//iterations：繰り返し回数。初期値は１。ループはInfinity　※大文字の「I」大文字注意！！！


// 回転
const spin = document.querySelector('.spin');

const spinKeyframes = {
  rotate: ['x 360deg','x 0deg'],
  opacity: [0, 1],
}

const spinOptions = {
  duration: 2000,
  easing: 'ease',
}

spin.animate(spinKeyframes, spinOptions);



// 色の変更
const color = document.querySelector('.color');

const colorKeyframes = {
  backgroundColor: ['orange ','gold','deepskyblue','blue'],
}

const colorOptions = {
  duration: 3000,
  direction: 'alternate',
  iterations: Infinity,
}

color.animate(colorKeyframes,colorOptions);




// 延びる背景
const line = document.querySelector('.line');

const lineKeyframes = {
  width: ['0','100%'],
  color: ['transparent','#FFF'],
}

const lineOptions = {
  duration: 1000,
  fill: 'forwards',
}

line.animate(lineKeyframes,lineOptions);





// スライドイン
const slide = document.querySelector('.slide-in');

const slideKeyframes = {
  opacity: [0, 1],
  translate: ['0 50px', 0],
};

const slideOptions = {
  duration: 1000,
  fill: 'forwards',
};

slide.animate(slideKeyframes,slideOptions);