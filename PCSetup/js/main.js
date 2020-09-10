'use strict'

{
  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  let a3 = document.getElementById('a3');
  let a4 = document.getElementById('a4');
  let a5 = document.getElementById('a5');
  let a6 = document.getElementById('a6');
  let a7 = document.getElementById('a7');
  let a8 = document.getElementById('a8');
  let a9 = document.getElementById('a9');
  let a10 = document.getElementById('a10');
  let a11 = document.getElementById('a11');
  let a12 = document.getElementById('a12');
  let a13 = document.getElementById('a13');
  let a14 = document.getElementById('a14');
  const finish = document.getElementById('total');

  let total = 0;


  a1.addEventListener('click', () => {
    if (a1.classList.contains('click')) {
      a1.classList.remove('click');
      total -= 207970;
    } else {
      a1.classList.add('click');
      total += 207970;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a2.addEventListener('click', () => {
    if (a2.classList.contains('click')) {
      a2.classList.remove('click');
      total -= 25980;
    } else {
      a2.classList.add('click');
      total += 25980;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a3.addEventListener('click', () => {
    if (a3.classList.contains('click')) {
      a3.classList.remove('click');
      total -= 27313;
    } else {
      a3.classList.add('click');
      total += 27313;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a4.addEventListener('click', () => {
    if (a4.classList.contains('click')) {
      a4.classList.remove('click');
      total -= 9800;
    } else {
      a4.classList.add('click');
      total += 9800;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a5.addEventListener('click', () => {
    if (a5.classList.contains('click')) {
      a5.classList.remove('click');
      total -= 4900;
    } else {
      a5.classList.add('click');
      total += 4900;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a6.addEventListener('click', () => {
    if (a6.classList.contains('click')) {
      a6.classList.remove('click');
      total -= 6309;
    } else {
      a6.classList.add('click');
      total += 6309;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a7.addEventListener('click', () => {
    if (a7.classList.contains('click')) {
      a7.classList.remove('click');
      total -= 7095;
    } else {
      a7.classList.add('click');
      total += 7095;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a8.addEventListener('click', () => {
    if (a8.classList.contains('click')) {
      a8.classList.remove('click');
      total -= 4255;
    } else {
      a8.classList.add('click');
      total += 4255;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a9.addEventListener('click', () => {
    if (a9.classList.contains('click')) {
      a9.classList.remove('click');
      total -= 1525;
    } else {
      a9.classList.add('click');
      total += 1525;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a10.addEventListener('click', () => {
    if (a10.classList.contains('click')) {
      a10.classList.remove('click');
      total -= 10355;
    } else {
      a10.classList.add('click');
      total += 10355;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a11.addEventListener('click', () => {
    if (a11.classList.contains('click')) {
      a11.classList.remove('click');
      total -= 7980;
    } else {
      a11.classList.add('click');
      total += 7980;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a12.addEventListener('click', () => {
    if (a12.classList.contains('click')) {
      a12.classList.remove('click');
      total -= 3555;
    } else {
      a12.classList.add('click');
      total += 3555;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a13.addEventListener('click', () => {
    if (a13.classList.contains('click')) {
      a13.classList.remove('click');
      total -= 2036;
    } else {
      a13.classList.add('click');
      total += 2036;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });

  a14.addEventListener('click', () => {
    if (a14.classList.contains('click')) {
      a14.classList.remove('click');
      total -= 8138;
    } else {
      a14.classList.add('click');
      total += 8138;
    }
    finish.textContent = `パソコン環境の合計: ¥${total}`;
  });
}
