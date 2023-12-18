$(window).on('load',function(){
    $("#loading").delay(100).fadeOut('slow');
});

const question = [
    ["次のうち、2022年4月10日の佐々木郎希が完全試合を達成した試合において、千葉ロッテマリーンズのスターティングメンバーとして出場した選手は誰でしょう？", "井上晴哉", "佐藤都志也", "山口航輝", 2],
    ["次の国際武道大のOBのうち、卒業後日立製作所を経ずにNPBのチームに入団した選手は誰でしょう？", "比嘉幹貴", "鈴木康平（K-鈴木）", "西野真弘", 3],
    ["次のうち、2023年シーズンに記録した安打数が100本ちょうどだった選手は誰でしょう？", "安田尚憲", "源田壮亮", "野村佑希", 3],
    ["次のうち、現行のドラフト制以降早稲田大学出身の選手を1位指名したことのないチームはどこでしょう？", "埼玉西武ライオンズ", "読売ジャイアンツ", "北海道日本ハムファイターズ", 2],
    ["次の横浜ベイスターズ（現横浜DeNAベイスターズ）のOBのうち、登録名が本名ではなかった選手は誰でしょう？", "松井飛雄馬", "石井琢朗", "山本武白志", 2],
    ["次のうち、プロ初本塁打が5年目以降だった選手は誰でしょう？", "松本剛", "伏見寅威", "石井一成", 1],
    ["次のうち、現役選手に存在しない苗字はどれでしょう？", "安藤", "久保", "赤星", 1],
    ["次のうち、プロ野球選手を輩出したことのない大学はどこでしょう？", "久留米大学", "金沢大学", "青森大学", 2],
    ["次のうち、大学の卒業論文のテーマが「フランスで野球を流行させるには」だった選手は誰でしょう？", "大山悠輔", "近本光司", "中野拓夢", 2],
    ["次の糸井嘉男のエピソードのうち、間違っているのはどれでしょう？", "ホームランを打った直後の雄叫びが大きすぎて酸欠になり交代した", "今年の目標を聞かれ、「外国人になる」と答えた", "ドラフト指名後の会食の感想を聞かれ、「ハンバーグ！」と答えた", 3],
];

let countDownTimer = 30; //制限時間
let successFlag = false; //最後まで解答したか
let successCount = 0; //正答数
let questionCount = 0 //問題数

// 最初は問題を解くボタンだけ表示
document.getElementById("ansArea").style.display = "none";

const countTimer = () => {
    if (successFlag == false) {
        document.getElementById("countDown").innerHTML = `残り${countDownTimer}秒です`;
        if (!countDownTimer == 0) {
            setTimeout(() => {
                countDownTimer = countDownTimer - 1;
                countTimer();
            }, 1000);
        } else {
            setTimeout(() => {
                alert("時間切れ");
                // カウントをリセットする
                countDownTimer = 30;
                questionCount = 0;
                successCount = 0;
    
                // 問題を非表示にし、ボタンを表示する
                document.getElementById("ansStartButton").style.display = "block";
                document.getElementById("ansArea").style.display = "none";
                // ボタンの表示を変える
                document.getElementById("Startbutton").innerHTML = "もう一度挑戦する";
            })
        }
    
    }
}

const viewQuestion = () => {
    // 問題文表示
    document.getElementById("question").innerHTML = question[questionCount][0];
    // 選択肢表示
    document.getElementById("ansButton1").innerHTML = question[questionCount][1];
    document.getElementById("ansButton2").innerHTML = question[questionCount][2];
    document.getElementById("ansButton3").innerHTML = question[questionCount][3];
}

const ansButton = (e) => {
    if (e == question[questionCount][4]) {
        alert("正解");
        successCount = successCount + 1;
        //successCount++;
    } else {
        alert("不正解");
    }
    // 問題数のカウントを増やす
    questionCount = questionCount + 1;
    //questionCount++;
    countDownTimer = 30;

    if (questionCount == question.length) {
        document.getElementById("answer").style.display = "block";
        document.getElementById("answer").innerHTML = `${successCount}問正解です`;
        document.getElementById("ansStartButton").style.display = "block";
        document.getElementById("ansArea").style.display = "none";
        document.getElementById("Startbutton").innerHTML = "もう一度挑戦する";
        document.getElementById("countDown").style.display = "none";
        successFlag = true;
        countDownTimer = 30;
        questionCount = 0;
        successCount = 0;
    } else {
        viewQuestion();
    }
}

const ansStart = () => {
    // 問題を解くボタンを消す
    successFlag = false;
    document.getElementById("ansStartButton").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("answer").style.display = "none";
    // 問題文と選択肢を表示
    document.getElementById("ansArea").style.display = "inline-flex";
    document.getElementById("countDown").style.display = "block";
    countTimer();
    viewQuestion();
}
