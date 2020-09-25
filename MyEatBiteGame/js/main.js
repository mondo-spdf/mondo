'use strict'

{
  const table = document.getElementById("table");
  const section = document.getElementById("section");
  const container = document.getElementsByClassName("container");
  const answerBox = document.getElementById("answerBox");

  const btn = document.getElementById("btn");
  const colors = ["red", "blue", "green", "yellow", "pink", "gray"];
  const answerMarbles = [];
  const dropboxes = ["dropbox1", "dropbox2", "dropbox3", "dropbox4", "dropbox5", "dropbox6", "fruits"];
  let ids = [];

  function SetDropBox() {
    let num = 0;
    
    dropboxes.forEach(dropbox => {
      const box = document.createElement("div");
      box.classList.add("dropbox");
      box.id = dropbox;

    	// ------------------------------------------------------------
    	// リッスンを開始する
    	// ------------------------------------------------------------
      // イベントリスナーに対応している
      
      if(box.addEventListener){

        box.addEventListener("dragenter" , DragEnterFunc);
        box.addEventListener("dragleave" , DragLeaveFunc);
        box.addEventListener("dragover" , DragOverFunc);
        box.addEventListener("drop" , DropFunc);
    
      // アタッチイベントに対応している
      }else if(box.attachEvent){
    
        box.attachEvent("ondragenter" , DragEnterFunc);
        box.attachEvent("ondragleave" , DragLeaveFunc);
        box.attachEvent("ondragover" , DragOverFunc);
        box.attachEvent("ondrop" , DropFunc);
      }
      if(num < 6) {
        container[0].insertBefore(box, table);
        num++;
      } else {
        section.appendChild(box);
      }
    });
  }

  function SetMarbles() {
    colors.forEach(color => {
      const marble = document.createElement("div");
      marble.classList.add("marble");
      marble.id = color;
      marble.classList.add(`${color}`);
      marble.draggable = true;

      if(marble.addEventListener){
        marble.addEventListener("dragstart" , DragStartFunc);
        marble.addEventListener("drag" , DragFunc);
        marble.addEventListener("dragend" , DragEndFunc);
    
      // アタッチイベントに対応している
      }else if(marble.attachEvent){
        marble.attachEvent("ondragstart" , DragStartFunc);
        marble.attachEvent("ondrag" , DragFunc);
        marble.attachEvent("ondragend" , DragEndFunc);
      }
      document.getElementById("fruits").appendChild(marble);
    });
  }

  function SetAnswer() {
    let copyColors = ["red", "blue", "green", "yellow", "pink", "gray"];
    for(let i = 0; i < 4; i ++) {
      const num = Math.floor(Math.random() * copyColors.length);
      answerMarbles.push(copyColors[num]);
      copyColors.splice(num, 1);
    }
    console.log(answerMarbles);
  }

  let selectBoxNum = 0;

  let eat = 0;
  let bite = 0;

  function CheckAnswer() {
    const selectors = document.getElementById(dropboxes[selectBoxNum]).childNodes;
    ids = [];
    selectors.forEach(selector => {
      ids.push(selector.id);
      selector.draggable = false;
    });

    eat = 0;
    bite = 0;

    const results = [
      {eat: "eat1", bite: "bite1"}, 
      {eat: "eat2", bite: "bite2"}, 
      {eat: "eat3", bite: "bite3"}, 
      {eat: "eat4", bite: "bite4"}, 
      {eat: "eat5", bite: "bite5"}, 
      {eat: "eat6", bite: "bite6"}, 
    ]

    for(let i = 0; i < answerMarbles.length; i++) {
      if(answerMarbles[i] === ids[i]) {
        eat++;

      } else if(answerMarbles[i] === ids[0] || answerMarbles[i] === ids[1] || answerMarbles[i] === ids[2] || answerMarbles[i] === ids[3]) { 
        bite++;

      }
    }
    document.getElementById(results[selectBoxNum].eat).textContent = eat;
    document.getElementById(results[selectBoxNum].bite).textContent = bite;

    selectBoxNum++;

    if (selectBoxNum === 6 || eat === 4) {
      btn.textContent = "again?";
      answerMarbles.forEach(ansmble => {
        const answermarble = document.createElement("div");
        answermarble.classList.add("marble");
        answermarble.id = ansmble;
        answermarble.classList.add(`${ansmble}`);
        answerBox.appendChild(answermarble);
        btn.addEventListener('click', () => {
          btn.href = "";
        });
        
      });
    }
  }

  function ClearMarble() {
    const blue = document.getElementById("blue");
    const yellow = document.getElementById("yellow");
    const red = document.getElementById("red");
    const green = document.getElementById("green");
    const pink = document.getElementById("pink");
    const gray = document.getElementById("gray");

    const clrs = [blue, yellow, red, green, pink, gray];
    clrs.forEach(clr => {
      clr.id = "undefined";
    });

    const fruits = document.getElementById("fruits");
    while(fruits.firstChild){
      fruits.removeChild(fruits.firstChild);
    }

  }


// 問題をセットする部分---------------

  SetDropBox();
  SetMarbles();
  SetAnswer();

  // ボタンを押した時に起きる部分------------

  btn.addEventListener('click', () => {
    CheckAnswer();
    ClearMarble();
    SetMarbles();
  });

  // function ResetGame() {
  //   for(let i = 0; i < 4; i++) {
  //     container[0].removeChild(container[0].firstChild);
  //   }
  // }





	function DragStartFunc(e){
    e.dataTransfer.setData("text", e.target.id);
  }
  
  function DraggedStartFunc(e) {
    return;
  }

	// ------------------------------------------------------------
	// ドラッグ操作中に実行される関数
	// ------------------------------------------------------------
	function DragFunc(e){
	}

	// ------------------------------------------------------------
	// ドラッグ終了時に実行される関数
	// ------------------------------------------------------------
	function DragEndFunc(e){

		// DataTransfer オブジェクトを取得
		let data_transfer = e.dataTransfer;

		// ドラッグに成功したか
		let result = (data_transfer.dropEffect != "none");

	}

  function DragEnterFunc(e){
	}

	// ------------------------------------------------------------
	// ドラッグ操作中に実行される関数（マウスカーソルが要素外に撤退した時）
	// ------------------------------------------------------------
	function DragLeaveFunc(e){
	}

	// ------------------------------------------------------------
	// ドラッグ操作中に実行される関数（マウスカーソルが要素内に滞在中）
	// ------------------------------------------------------------
	function DragOverFunc(e){

		// ------------------------------------------------------------
		// ドロップを許可し受け入れを表明
		// ------------------------------------------------------------
		if(e.preventDefault){
			e.preventDefault();
		}else{
			return false;
		}
	}

	// ------------------------------------------------------------
	// ドロップ時に実行される関数（データを受け取る直前）
	// ------------------------------------------------------------
	function DropFunc(e){

        /***** ドロップ時の処理 *****/

          //ドラッグされたデータのid名をDataTransferオブジェクトから取得
            let id_name = e.dataTransfer.getData("text");
          //id名からドラッグされた要素を取得
            let drag_elm = document.getElementById(id_name);
          //ドロップ先にドラッグされた要素を追加
            e.currentTarget.appendChild(drag_elm);
          //エラー回避のため、ドロップ処理の最後にdropイベントをキャンセルしておく
            e.preventDefault();

		// ------------------------------------------------------------
		// デフォルトのドロップ機能を無効化
		// ------------------------------------------------------------
		if(e.preventDefault){
			e.preventDefault();
		}else{
			return false;
		}
  }  
}