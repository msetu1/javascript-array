// file name 
function isJavaScriptFile(filename) {
    if(typeof filename!=='string'){
return "please provide a file name (string)"
    }
    else{
        if(filename.toLocaleLowerCase().endsWith(".js")||filename.toLocaleLowerCase().endsWith(".html")){
            return true;
        }
        else{
            return false;
        }
    }

}
console.log(isJavaScriptFile("index.html"))