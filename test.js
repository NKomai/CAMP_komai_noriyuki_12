


/*-------------------------------------------------------------------------------- */
$(document).ready(function(){
    $("#ex").fadeIn("3000");



$("#ex2").on('click',function(){
    $("#ex").append('<p>かきくけこ</p>');
    $("#ex").css('background',"#000");
    $("#ex").css('color',"#fff");    
    $("#ex").prepend('<p>あいうえお</p>');
    $("#ex").append('<p>さしすせそ</p>');
    $("#ex > p:even").css('background','#fff');
    $("#ex > p:even").css('color','#000');
    $("#ex > p:odd").css('background','#000');
    $("#ex > p:odd").css('color','#fff');
});

});



/*
var push = 0;


$("#hide").on('click', function(){
    $("#hide").fadeOut("2000");//消す
    $("#show").fadeIn("2000");//出す
});


$("#show").on('click', function(){
//    $("#show").fadeOut("2000");//消す
//    $("#hide").fadeIn("2000");//出す

    //カウンターに＋1
    push++; 

    //文字列と変数をつなげて "border"に"push"に入ってる数字のpx数を入れる
    if(push%3 == 0){
        $("#ex").css('border',push + "px solid #f00");
    }else if(push%5 == 0){
        $("#ex").css('border',push + "px solid #0f0");
    }else{
        $("#ex").css('border',push + "px solid #000");
    }

    //div>h1>spanで、divの孫要素内のhtmlを"push"で書き換える
    $("div > h1 > span").html(push); 
});
/*-------------------------------------------------------------------------------- */
/*
$(document).mouseover(function(){
    $('#test').html('あああああ');
    $('#test').css('color','#f00');
});

$(document).mouseout(function(){
    $('#test').html('いいいいい');
    $('#test').css('color','#00f');
});

var a = 0;

$("#email").on('click', function(){
    $("h2").html("ほげげげげ");

    setInterval(function(){
        a += 1
        $("h2").fadeOut("500")
        $("h2").fadeIn("500")
    }, 1000)

    $("h3").fadeIn("slow");
});
*/



/*
alert(11111);
console.log('初めてのJavaScript');
console.log('3+5');
console.log(3+5);
console.log(23+5);
console.log(2000-1800);
console.log("18+5");


let namae="駒井紀之";
console.log(namae);
    {
    let namae="自分の名前";
    console.log(namae);
    }
console.log(namae);
console.log('name');

console.log("===============");

var name="駒井紀之";
console.log(name);
{
    let name="自分の名前";
    console.log(name);
    }
console.log(name);
console.log("name");

console.log("===============");

var point = 90;
if(point >= 80){
    console.log("素晴らしい！　おめでとう！");
}else{
    console.log("もっと頑張りましょう");
}

var point2 = 60;
if(point2 >= 80){
    console.log("素晴らしい！　おめでとう！");
}else{
    console.log("もっと頑張りましょう");
}
console.log("===============");


var mtr = Math.random()*5; //Math.randomは与えられた数値【未満】の範囲でランダムを返す
var mtr2 = Math.floor(mtr);

console.log(mtr + "\n ／与えられた数字");
console.log(mtr2 + "\n floorで変換された数字")

if(mtr2 == 1){
    console.log("元の数字は1以上2未満です");
}else if(mtr2 == 2){
    console.log("元の数字は2以上3未満です");
}else if(mtr2 == 3){
    console.log("元の数字は3以上4未満です");
}else if(mtr2 == 4){
    console.log("元の数字は4以上5未満です");
}else{
    console.log("元の数字は0以上1未満です");
}

console.log("===============");
console.log(mtr);
console.log(Math.floor(mtr) + "／切り捨て"); //「床」なので切り捨て
console.log(Math.ceil(mtr) + "／切り上げ"); //「天井」なので切り上げ
console.log(Math.round(mtr) + "／四捨五入"); //「丸める」なので四捨五入
console.log("===============");
*/