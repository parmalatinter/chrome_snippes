(function() {

    NAME = 'xxxxxx'
    KEYWORD_1 = '開始'
    KEYWORD_2 = '終了'

    clear();
    [].forEach.call(document.querySelectorAll(".ui-chat__messageheader"), function(c) {
    text = c.innerText;
    timestamp = c.querySelector('.ui-chat__message__timestamp').innerText
    
    if(text.includes(NAME)){
        content = c.nextElementSibling.innerText;
        if(content.includes(KEYWORD_1)){
            console.log(KEYWORD_1, timestamp)
        }
        if(content.includes(KEYWORD_2)){
            console.log(KEYWORD_2,timestamp)
        }
    }
    
    });


})();
