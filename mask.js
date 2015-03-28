/**
 * Created by dell on 2014/12/10.
 */
function getId(id){
    return typeof (id)=="string"?document.querySelector(id):document.getElementById(id);
}
function mask(id,txt){
    typeof txt=="string"?(getId("#"+id).innerHTML=(txt)  ):(getId(id).innerHTML=txt);
    return setTimeout(function(){
        getId("#mask").style.display="none";
    },2000)
}
mask("mask","ssd");