var menu=document.getElementById("menu");
menu.style.maxHeight="0px";

function menutoggle(){
    if(menu.style.maxHeight=="0px")
    {

        menu.style.maxHeight="60%";
    
    }

    else{
        menu.style.maxHeight="0px";
    }
    
}