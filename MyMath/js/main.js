'use strict'

{
  const numFact = document.getElementById('numberFactrial');
  const numSum = document.getElementById('numberSum');
  const factrial = document.getElementById('factrial');
  const equalFact = document.getElementById('equalFactrial');
  const equalSum = document.getElementById('equalSum');
  const sum = document.getElementById('sum');

  function Sum(x) {
    let y = 0;
    y = Number(x);
    return x;
  }

  function Factrial(x) {
    let y = 1;
    for(let i = 1; i <= x; i++) {
      y *= i;
    }
    return y;
  }
  equalFact.addEventListener('click', () => {
    // console.log(Factrial(Number(num.value))); debug
    factrial.textContent = Factrial(numFact.value);
  });
  equalSum.addEventListener('click', () => {
    sum.textContent = eval(numSum.value); // eval関数 入力された式を計算してくれる
  });
}