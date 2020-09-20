'use strict'
{
  const siteSection = document.getElementById("siteSection");
  const sites =
  [
    {title: "色あてゲーム！ | もんどのプログラミング", img: "photo/site4.png", date: "20/09/20", detail: "６つのビー玉をもち、隠された４つのビー玉を当てる推理ゲームです。", tag: ["html", "css", "javascript"], url: "https://mondo-spdf.github.io/mondo/MyEatBiteGame"},
    {title: "東海オンエアクイズ！ | もんどのプログラミング", img: "photo/site1.png", date: "20/01/01", detail: "東海オンエアの動画の一部分の音だけを聞いて、それが一体なんの動画なのか、選択肢の中から当てるゲームです。", tag: ["html", "css", "javascript"], url: "https://mondo-spdf.github.io/mondo/MyTOKAIONAIR/"},
    {title: "オススメゲーム紹介 | もんどのプログラミング", img: "photo/site2.png", date: "20/01/01", detail: "友達に一緒にやるPCゲームを紹介するために作ったサイトです。背景に動画を使っているサイトを作りたくてチャレンジしました。",  tag: ["html", "css"], url: "https://mondo-spdf.github.io/mondo/MyIntroduceGame/"},
    {title: "PCセットアップ紹介 | もんどのプログラミング", img: "photo/site3.png", date: "20/01/01", detail: "友達にPCのセットアップのために作ったサイトです。クリックすると金額の合計が出る仕組みを作りました。",  tag: ["html", "css", "javascript"], url: "https://mondo-spdf.github.io/mondo/PCSetup/"},
  ];

  function SearchTag(site, tags) {
    for(let i = 0; i < site.tag.length; i++) {
      switch(site.tag[i]) {
        case "html":
        const html = document.createElement('p');
        html.classList.add('tag');
        html.classList.add('html');
        html.textContent = site.tag[i];
        tags.appendChild(html);
        break;
        
        case "css":
        const css = document.createElement('p');
        css.classList.add('tag');
        css.classList.add('css');
        css.textContent = site.tag[i];
        tags.appendChild(css);
        break;

        case "javascript":
        const javascript = document.createElement('p');
        javascript.classList.add('tag');
        javascript.classList.add('javascript');
        javascript.textContent = site.tag[i];
        tags.appendChild(javascript);
        break;

        case "ruby":
        const ruby = document.createElement('p');
        ruby.classList.add('tag');
        ruby.classList.add('ruby');
        ruby.textContent = site.tag[i];
        tags.appendChild(ruby);
        break;

        case "Node.js":
        const Node = document.createElement('p');
        Node.classList.add('tag');
        Node.classList.add('Node.js');
        Node.textContent = site.tag[i];
        tags.appendChild(Node);
        break;
      }
    }
  }

  function Setsites() {
    sites.forEach(site => {
      const siteContent = document.createElement('div');
      siteContent.classList.add('site');
      siteSection.appendChild(siteContent);
      const a = document.createElement('a');
//       a.target = "_blank";
      a.href = site.url;
      siteContent.appendChild(a);

      const img = document.createElement('img');
      img.src = site.img;
      a.appendChild(img);
      const title = document.createElement('h1');
      title.textContent = site.title;
      a.appendChild(title);
      const date = document.createElement('p');
      date.classList.add('date');
      date.textContent = `作成日：${site.date}`;
      a.appendChild(date);
      const detail = document.createElement('p');
      detail.classList.add('detail');
      detail.textContent = site.detail;
      a.appendChild(detail);

      const tags = document.createElement('div');
      tags.classList.add('tags');
      a.appendChild(tags);

      SearchTag(site, tags);
    });
    
  }


  Setsites();
}
