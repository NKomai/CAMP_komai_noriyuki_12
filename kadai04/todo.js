$(function(){

    //PHP-MySQLと組み合わせてDB化したかったのですが、Ajaxで出来るところまで調べてタイムアップでした
    //ラーニングシステムの中にAPI利用についての項目もあったため、おそらくそれを見れば出来るのではと考えています。


    //一度ToDoに登録したら入力フォームの中身を削除するための関数を設定
    var clear = function () {
        $(".form-box dl > dd").each(function() {
          $(this).find('input[name="todo"]').val('');
          $(this).find('input[name="limit"]').val(''); 
        });
      };

    //登録ボタンが押されたときの挙動
    //中身を変数で拾って、空ならアラートを出す
    //中身がある場合は、テーブル内に新しいtrを挿入し、関数clearを呼んでフォーム内を削除
    $('#add').on('click',function(){
        var todo = $('input[name="todo"]').val();
        var limit = $('input[name="limit"]').val();

        if(todo == ""){
            alert("タスクは必ず入力してください");
            return false;
        }else if(limit == ""){
            alert("期限は必ず設定してください");
            return false;
        }else{
            $(".list > table").append('<tr><td class="th1">'+todo+'</td><td class="th2">'+limit+'</td><td class="th3"><button id="delete" name="minusdata">削除</button></td></tr>')
            console.log("追加");
            clear();
            return true;
        }
    });

    //削除ボタンが押されたときの挙動
    //後から追加した物に対してclickは働かないので、
    //元々存在しているlistクラスに対してonでbuttonを指定している
    $('.list').on('click', 'button', function(){
        console.log("on");
        $(this).closest("tr").remove();
    });

});
