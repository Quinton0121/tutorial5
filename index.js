var bgColor = document.getElementById("bgcolor"),
    display = document.getElementById('display'),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,    
    textInput = document.getElementById("textSticker"),
    stickers = document.getElementById("stickers"),
    sheight = document.getElementById("stickerHeight"),
    cursor = document.getElementById("cursor"),
    stickermanHeight = 100;

function changeCursor(sticker){
    cursor.src=sticker.src;
    
}


    
bgColor.addEventListener("change",function(){
    display.style.backgroundColor = this.value;
});



st1.addEventListener("click",function(){
    changeSrc(st1);
    changeCursor(st1);
});



st2.addEventListener("click",function(){
    changeSrc(st2);
    changeCursor(st2);
});

function changeSrc(sticker){
    imgSrc=sticker.src;
}

display.addEventListener("mousemove",function(ev){
    cursor.style.left = (ev.pageX - 50) + "px";
    cursor.style.top = (ev.pageY - 50) + "px";
});


display.addEventListener("click",function(ev){
    var newSticker = document.createElement("img");
    newSticker.src = imgSrc;
    newSticker.className = "stickerman"
    display.appendChild(newSticker);
    console.log(ev.pageX,ev.pageY);
    newSticker.style.left= (ev.pageX - 50) + "px";
    newSticker.style.top = (ev.pageY - 50) + "px";
    newSticker.style.height = stickermanHeight + "px";
    
    
});

sheight.addEventListener("keyup",function(ev){
        if(ev.keyCode==13){
           stickermanHeight = sheight.value;
        }
    });


textInput.addEventListener("keyup",function(ev){
    console.log(ev);
    if (ev.keyCode == 13){
        var newSticker = document.createElement("img");
        newSticker.src = textInput.value;
        newSticker.className = "onlineSticker";
        stickers.appendChild(newSticker);
        textInput.value='';
        newSticker.addEventListener("click",function(){
            imgSrc = this.src;
            cursor.src= this.src;
            display.style.cursor = 'none';
        });
        changeSrc(newSticker);
        

    }
});



