let icon = document.getElementById("icon");
let ul = document.getElementById("ul");
icon.onclick = function(){
    ul.style.display = 'block';
}
icon.ondblclick = function(){
    ul.style.display = 'none';
};

$(function(){
    let win = $(window).height(),
       header = $(`.header`).innerHeight();
       $(`.all-img`).height(win - header);
})

