var text = document.getElementById('text');
var num = 0;

function post(){
    comment = text.value;
    if(num == 0 && comment != ''){
        document.getElementById('topic').innerHTML = comment;
        document.getElementById('text').value = '';
        num++;
    }
    else if(num == 1 && comment != ''){
        document.getElementById('comment1').innerHTML = comment;
        document.getElementById('text').value = '';
        num++;

    }
    else if(num == 2 && comment != ''){
        document.getElementById('comment2').innerHTML = comment;
        document.getElementById('text').value = '';
        num++;
    }
    else{
        alert("ERROR");
    }
}

function clearFunction(){
    document.getElementById('topic').innerHTML = '';
    document.getElementById('comment1').innerHTML = '';
    document.getElementById('comment2').innerHTML = '';
    document.getElementById('text').value = '';
    num = 0;
    // console.log(num);
}

