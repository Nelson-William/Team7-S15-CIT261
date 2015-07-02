var CRASHAPP = CRASHAPP || {};

CRASHAPP = {
    MODEL: {
        
    }
};



function open_url(loc, file, el){
    var xhr;
    var url = loc + "//" + file;
    var elem = document.getElementById(el);
    if (url !== ""){
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        }
        xhr.onreadystatechange= function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    elem.innerHTML = xhr.responseText;
                } else {
                    elem.innerHTML='<h1><span class="text-danger">Error '+ xhr.status+'</span></h1>';
                }
            }
        };
        xhr.open("GET",url,true);
        xhr.send();
    } else {
        elem.innerHTML='<span class="text-danger">Error: No page was specified.</span>';
    }
}

