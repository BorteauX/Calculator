(function() {
    /*輸入數字呈現在結果欄及小結果欄上*/
    /*
    function key1(){
        document.getElementById('result').value += "1";
        document.getElementById('smallResult').value += "1";
    }
    function key2(){
        document.getElementById('result').value += "2";
        document.getElementById('smallResult').value += "2"
    }
    function key3(){
        document.getElementById('result').value += "3";
        document.getElementById('smallResult').value += "3"
    }
    function key4(){
        document.getElementById('result').value += "4";
        document.getElementById('smallResult').value += "4"
    }
    function key5(){
        document.getElementById('result').value += "5";
        document.getElementById('smallResult').value += "5"
    }
    function key6(){
        document.getElementById('result').value += "6";
        document.getElementById('smallResult').value += "6"
    }
    function key7(){
        document.getElementById('result').value += "7";
        document.getElementById('smallResult').value += "7"
    }
    function key8(){
        document.getElementById('result').value += "8";
        document.getElementById('smallResult').value += "8"
    }
    function key9(){
        document.getElementById('result').value += "9";
        document.getElementById('smallResult').value += "9"
    }
    function key0(){
        document.getElementById('result').value += "0";
        document.getElementById('smallResult').value += "0"
    }
    function keyInPoint(){
        document.getElementById('result').value += ".";
        document.getElementById('smallResult').value += "."
    }
    */


    var result = document.querySelector('#result');
    var smallResult = document.querySelector('#smallResult');
    var nowStatus = '';
    // 顯示用 value
    var displayValue = '';
    // 真實 value
    var trueValue = 0;
    // 最後的加減乘除狀態
    var finalStatus = '';

    $('.js-num-btn').on('click', function () {
        var num = $(this).data('num');

        smallResult.value += num;
        
        if (['+', '-', '*', '/'].indexOf(num) !== -1 ) {
            nowStatus = num;
            finalStatus = num;
            equal(num);
            displayValue = result.value;
            return;
        }

        // 如果有按過運算符號 再按數字清除顯示畫面
        if (nowStatus !== '') {
            result.value = ''; 
            nowStatus = '';
            displayValue = '';
        }

        result.value += num;
        displayValue += num;
        console.log(displayValue)
    });

    $('#equal').on('click', function() {
        smallResult.value = '';
        equal(finalStatus);
        console.log(nowStatus)
    });

    function equal(num) {
        switch(num) {
            case '+':
                trueValue = parseFloat(displayValue) + parseFloat(trueValue);
            break;

            case '-':
            break;

            case '*':
            break;

            case '/':
            break;
        }

        result.value = trueValue;

        console.log(`
            displayValue: ${displayValue}
            畫面顯示: ${result.value}
            true: ${trueValue}
        `);
    }


    /*判斷按下的按鈕的ID為何，按下時清空結果欄並儲存第一組數字*/
    function reply_click(clicked_id){
        return;
        if(clicked_id === "plus"){
             x = parseFloat(document.getElementById('result').value);
            document.getElementById('result').value = ""
            document.getElementById('smallResult').value = x + "+" ;
            op = 1;
        }else if(clicked_id === "minus"){
             x = parseFloat(document.getElementById('result').value);
            document.getElementById('result').value = ""
            document.getElementById('smallResult').value = x + "-" ;
            op = 2;
        }else if(clicked_id === "mult"){
             x = parseFloat(document.getElementById('result').value);
            document.getElementById('result').value = ""
            document.getElementById('smallResult').value = x + "*" ;
            op = 3;
        }else if(clicked_id === "divided"){
             x = parseFloat(document.getElementById('result').value);
            document.getElementById('result').value = ""
            document.getElementById('smallResult').value = x + "/" ;
            op = 4;
        }
    /*按下等於時，將第一組數字(x)與後來的第二組數字做運算*/
        if(clicked_id == "equal"){
            var ans = 0;

            switch(op){
                case 1:
                ans = x + parseFloat(document.getElementById('result').value); 
                break;

                case 2:
                ans = x - parseFloat(document.getElementById('result').value);
                break;

                case 3:
                ans = x * parseFloat(document.getElementById('result').value * 10)/10;
                break;

                case 4:
                ans = x / parseFloat(document.getElementById('result').value);
                break;

            }
                document.getElementById('result').value = ans;
        }
    }

    $('#js-ac').on('click', function() {
        result.value = '';
        smallResult.value = '';
    });


    /*清除紐*/
    function reset(){
        //document.getElementById('result').value = '';
        //document.getElementById('smallResult').value = '';
        result.value = '';
        smallResult.value = '';
    }
})();
