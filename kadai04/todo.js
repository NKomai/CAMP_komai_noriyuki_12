    //PHP-MySQLと組み合わせてDB化したかったのですが、Ajaxで出来るところまで調べてタイムアップでした
    //ラーニングシステムの中にAPI利用についての項目もあったため、おそらくそれを見れば出来るのではと考えています。

$(function(){

    //jQuery Tablesorterなるものを見つけたので導入しようとしたが上手くいかない
    $("#myTable").tablesorter({ sortList: [[0,0], [1,0]] });
    
    //最初に読み込んだ際にローカルストレージにデータが残っていれば
    //その分だけ事前にテーブル内にリストを作成
    for(id in localStorage){
        $(".list > table").append(localStorage.getItem(id));
    }

    //一度ToDoに登録したら入力フォームの中身を削除するための関数を設定
    var clear = function () {
        $(".form-box dl > dd").each(function() {
          $(this).find('input[name="todo"]').val('');
          $(this).find('input[name="limit"]').val(''); 
        });
      };

    var id = 0;

    //登録ボタンが押されたときの挙動
    //中身を変数で拾って、空ならアラートを出す
    $('#add').on('click',function(){
        var todo = $('input[name="todo"]').val();
        var limit = $('input[name="limit"]').val();

        if(todo == ""){
            alert("タスクは必ず入力してください");
        }else if(limit == ""){
            alert("期限は必ず設定してください");
    //中身がある場合は、テーブル内に新しいtrを挿入し、ローカルストレージにも追加（Keyはid）
    //このとき、保存するvalueの内容をHTMLタグにしたことで、最初の読み込み用命令を簡略化できるようにした
    //その後、関数clearを呼んでフォーム内を削除
        }else{
            id++;
    //ここからローカルストレージにデータを送る
    //IDの重複を避けるため、現在のIDをkeyにしてvalueを呼び出し、
    //nullにならない限りid++でid番号を足し続ける
            while(localStorage.getItem(id) != null){
                console.log(localStorage.getItem(id));
                id++;
            }
            var tabletext = '<tr class="line"><td class="th1">'+todo+'</td><td class="th2">'+limit+'</td><td class="th3"><button id="delete" name="minusdata" value="'+id+'">削除</button></td></tr>'
            $(".list > table").append(tabletext)
            console.log("入力欄クリア")
            localStorage.setItem(id,tabletext);
            clear();
        }

    });

    //削除ボタンが押されたときの挙動
    //後から追加した物に対してclickは働かないので、
    //元々存在しているlistクラスに対してonでbuttonを指定している
    //ローカルストレージからも削除（ボタンのvalueでid、すなわちkeyを引っ張ってくる）
    $('.list').on('click', 'button', function(){
        var delid = $(this).val();
        console.log(delid);
        $(this).closest("tr").remove();
        localStorage.removeItem(delid);
    });

    //オールクリアが押されたときの挙動
    //ローカルストレージを全削除してページをリロード
    $('#clearall').on('click', function(){
        $('.line').remove(); 
        localStorage.clear();
        location.reload();
    });

});
