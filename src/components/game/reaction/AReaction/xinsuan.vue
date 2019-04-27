<template>
<div>
    <mu-appbar style="width: 100%;" z-depth="0" color="#fafafa" text-color="rgba(0, 0, 0, .54)">
        <mu-button icon slot="left" to="/reaction">
            <mu-icon value="chevron_left" ></mu-icon>
        </mu-button>
        心算测试
    </mu-appbar>
    <div id="question">
        <p id="question-title">连续答对40题即挑战成功</p>
        <progress id="question-progress" value="100" max="100"></progress>
        <p id="question-count">第1题</p>
        <p id="question-text"></p>
    </div>
    <div id="answer">
        <div id="answer-right" class="answer-button">√</div>
        <div id="answer-error" class="answer-button">×</div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
//算数1、算数2，运算结果（该结果非正确结果，而是随机结果）
var g1, g2, g3;
//运算符，只有+和-
var op;
//计时器句柄
var gHandle = 0;
//答题计数
var gCount = 0;
//生成一个问题,并显示在#question-text
function CreateQuestion() {
    //生成一道算术题
    g1 = Math.ceil(Math.random() * 100) % 10;     //算数1
    g2 = Math.ceil(Math.random() * 100) % 10;     //算数2
    op = Math.ceil(Math.random() * 100) % 2;      //运算符
    switch (op) {
        case 0: //加法
            g3 = g1 + g2 + (Math.ceil(Math.random() * 100) % 3 - 1);
            $("#question-text").text(g1 + "+" + g2 + "=" + g3);
            break;
        case 1://减法
            g3 = g1 - g2 + (Math.ceil(Math.random() * 100) % 3 - 1);
            $("#question-text").text(g1 + "-" + g2 + "=" + g3);
            break;
        default:
    }
    gCount++;
    $("#question-count").text("第" + gCount + "题");
}

//返回CreateQuestion的正确答案
function GetAnswer() {
    switch (op) {
        case 0:
            return (g1 + g2 == g3);
        case 1:
            return (g1 - g2 == g3);
        default:
            return true;
    }
}

//重置计时，把计时条的数值设置为100，并启用每0.1秒的工作频率
function RestartTimeout() {
    clearInterval(gHandle);
    $("#question-progress").val(100);
    gHandle = setInterval(DealTimeout, 100);
}

//终止计时
function StopTimeout() {
    clearInterval(gHandle);
}

/*处理计时
    计时器，以每0.1秒运行一次的频率进行工作。
    它根据当前的题数，计算出答题时间。
    然后根据答题时间，计算出每0.1秒计时条要减少的数值（总值固定为100）
    最后刷新计时条。如果计时为0，则终止答题
*/

function DealTimeout() {
    //计算总秒数：1-10题 5秒，11-20题 4秒， 21-30题 3秒， 31-40 2秒
    var t = Math.floor((gCount - 1) / 10.0);
    var totalSeconds = 5 - t;
    var timeout = $("#question-progress").val();
    timeout -= (100 / (totalSeconds * 10));
    if (timeout == 0) {
        $("#question-progress").val(0);
        clearInterval(gHandle);
        alert("时间到!很遗憾，你只答对了" + (gCount - 1) + "道题");
        gCount = 0;
        $("#question-progress").val(100);
        CreateQuestion();
    }
    else {
        $("#question-progress").val(timeout);
    }
}

/*点击回答按钮，bret传入用户选择的值，true or false*/
function Answer(bRet) {
    if (bRet == GetAnswer()) {
        if (gCount == 40) {
            StopTimeout();
            $("#question-count").text("通关！！！");
            alert("太棒了，您成功答对40题！！截个图发给我吧");
        }
        else {
            CreateQuestion();
            RestartTimeout();
        }
    }
    else {
        StopTimeout();
        alert("很遗憾，您只答对了" + (gCount - 1) + "道题");
        gCount = 0;
        $("#question-progress").val(100);
        CreateQuestion();
    }
}
$(document).ready(function () {
    CreateQuestion();
    $("#answer-right").click(function () {
        Answer(true);
    });
    $("#answer-error").click(function () {
        Answer(false);
    });
});
export default {
    
}
</script>

<style scoped>
body {
    background-color: #3d4548;
    margin: 0;
}

/*问题区域*/
body {
    background-color: #3d4548;
    margin: 0;
}

/*问题区域*/
#question {
    font-size: 6em;
    text-align: center;
    background-color: #c5099f;
    /* padding: 15rem 0 0 0; */
    color: white;
    height: 36.5rem;
    /* border-radius: 0 0 1em 1em; */
    box-shadow: #3c3737 8px 10px 6px;
    margin: 0px;

}

/*问题区域-标题*/
#question #question-title {
    font-size: 2.5rem;
    color: yellow;
    margin-top: 0;
}

/*问题区域-题数*/
#question #question-count {
    font-size: 2.5rem;

}

/*问题区域-进度条*/
#question #question-progress {
    width: 90%;
    height: 1.5rem;
}

/*答题区域*/
#answer {
    color: white;
    position: fixed;
    bottom: 1.25px;
    width: 100%;
    display: flex;
}

#answer .answer-button {
    display: inline-block;
    width: 45%;
    font-size: 3.25rem;
    text-align: center;
    border-radius: 0.5rem;
    margin: auto;
}

#answer #answer-right {
    background-color: #5757e4;
}

#answer #answer-error {
    background-color: #f94b4b;
}
</style>
