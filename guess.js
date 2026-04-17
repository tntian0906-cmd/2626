const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

// 1. 在函式外面定義「答案」與「次數」，這樣數值才會累加/固定
let countNum = 0; 
let answer = Math.floor(Math.random() * 100) + 1; // 產生 1~100 的隨機整數
console.log("正確答案是：", answer); // 除錯用

function checkGuess() {
    countNum++;
    count.textContent = "猜測次數：" + countNum;

    const userGuess = Number(guessField.value); // 取得玩家輸入的值

    // 2. 補完條件判斷
    if (userGuess === answer) {
        result.textContent = "猜測結果：Congratulations! 答對了！";
        result.style.color = "green";
    } 
    else if (userGuess < answer) {
        result.textContent = "猜測結果：數字太小!";
        result.style.color = "red";
    } 
    else if (userGuess > answer) {
        result.textContent = "猜測結果：數字太大!";
        result.style.color = "red";
    }

    // 3. 讓輸入框自動清空並聚焦，方便下次輸入
    guessField.value = "";
    guessField.focus();
}


result.textContent += "遊戲結束";
result.style.backgroundColor="red";
alert("遊戲結束");
setGameOver(); //放到猜對===的

function setGameOver() {
        guessField.disabled = true; //停止輸入功能
        guessSubmit.disabled = true;    //停止按鈕功能
}

guessSubmit.addEventListener("click", checkGuess);