var str=url.searchParams.get("decode").trim()
var newstr=""
var charm=0
var charp=0
for (let i = 0; i < str.length; i++) {
    if(i%2==0){
        charm=parseInt(str.charAt(i).charCodeAt(0))
    }
    else{
        charp=parseInt(str.charAt(i).charCodeAt(0))
    }
    if (charm+1==charp-1){
        newstr+=String.fromCharCode((charm+1))
    }
}
console.log(newstr)
document.write(newstr)

