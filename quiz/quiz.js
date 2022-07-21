let qnum=0;
let p=0;
let result = ['正解!','不正解'];
let quiz_m = [0,'BUMP OF CHIKENの中である黒猫の一生を描いた曲は？','近年猛威を振るっているウイルスをカタカナ三文字で？','日本で初めて日本地図を完成させた偉人のフルネームを漢字で？','エアコンの正式名称は？','日本で一番小さな県は？','粒粒辛〇，四〇八〇，〇に共通する漢字は？','円周率などに用いられるπは何語？','動物の名称が2つ入っている都道府県は？','数学の積分に用いられるこの記号<∫>の名称は？','世界で最も面積の小さい国は？'];
let ans_m = [0,'K','コロナ','伊能忠敬','エアーコンディショナー','香川県','苦','ギリシア語','群馬県','インテグラル','バチカン市国'];
let text = document.getElementById('ansbox');
text.addEventListener('keypress',judge);
var defaultHTML;
function DefaultSave() 
{
    defaultHTML = document.body.innerHTML;
}
function HTMLRestore() 
{
    document.body.innerHTML = defaultHTML;
}
function kakusi()
{
    $('#ansbox').hide();
    $('#next').hide();
    $('#end').hide();
    $('#return').hide();

}
function quiz(num=1)
{
    $('#b').hide();
    qnum=num;
    $('#quiznum').text('第'+qnum+'問');
    $('#quiz').text(quiz_m[qnum]);
    $('#ansbox').show();

}
function judge(key)
{
    console.log(qnum);
    if(key.keyCode === 13)
    {
        if(text.value==ans_m[qnum])
        {
            $("#ans").text(result[0]);
            $('#ans').show();
            p+=1;
        }
        else
        {
            $("#ans").text(result[1]);
            $('#ans').show();
            $("#ans2").text("正解は<"+ans_m[qnum]+">でした！");
            $('#ans2').show();
        }
        if(qnum==10)
        {
            $('#end').show();
        }
        else
        {
            $('#next').show();
        }

    }
}
function next(num)
{
    num+=1;
    $("#next").hide();
    $("#ans").hide();
    $("#ans2").hide();
    quiz(num);
    
}
function end(point)
{
    $("#result").hide();
    $("#point").text("あなたのスコアは"+point+"/10です");
    if(point==10)
    {
        $("#10").text("全問正解です！");
    }
    else
    {
        $("#10").text("全問正解を目指そう！");
    }
    $("#return").show();
}
function Return()
{
    return;
}
