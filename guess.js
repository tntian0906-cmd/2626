// 獲取 HTML 元素
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");
const guesses = document.querySelector(".guesses");
const restartBtn = document.querySelector(".restartBtn");

// 1. 定義全域變數
let countNum = 0; 
let answer = Math.floor(Math.random() * 100) + 1;
console.log("正確答案是：", answer);

// 2. 檢查猜測的主邏輯
function checkGuess() {
    const userGuess = Number(guessField.value);

    // 防錯處理：如果沒輸入數字就不執行
    if (guessField.value === "") return;

    countNum++;
    count.textContent = "猜測次數：" + countNum;
    guesses.textContent += userGuess + " "; 

    if (userGuess === answer) {
        result.textContent = "猜測結果：Congratulations! 答對了！";
        result.style.color = "green";
        result.style.backgroundColor = "transparent"; // 重設背景色
        setGameOver(); // 呼叫遊戲結束
    } 
    else {
        result.style.color = "red";
        if (userGuess < answer) {
            result.textContent = "猜測結果：數字太小!";
        } else if (userGuess > answer) {
            result.textContent = "猜測結果：數字太大!";
        }
        
        // 如果想設定猜 10 次就結束，可以在這加判斷
        if (countNum >= 10) {
            result.textContent = "遊戲結束，次數用完了！";
            setGameOver();
        }
    }

    guessField.value = "";
    guessField.focus();
}

// 3. 遊戲結束的行為
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    alert("遊戲結束！");
    // 遊戲結束時才顯示「重新開始」按鈕（視需求）
    restartBtn.style.display = "block";
}

// 4. 重新開始遊戲（初始化）
function initGame() {
    countNum = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    console.log("新答案：", answer);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    
    result.textContent = "";
    count.textContent = "";
    guesses.textContent = "";
    result.style.backgroundColor = "transparent";
    
    guessField.focus();
}

// 事件監聽
guessSubmit.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", initGame);