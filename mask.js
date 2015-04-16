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


function ifAgree(){
      var me = this;
      me.id = "#ifAgree";
      me.select = true;                           //开关控制
      me.selectClass = "ui-right-select";         //选中
      me.noneselectClass = "ui-right-noneselect"; //未选中
  }

  ifAgree.prototype.addselect = function(){
      var self = this;
      var selfSelect = $(self.id).addClass(self.selectClass).removeClass(self.noneselectClass);
      return selfSelect
  };

  ifAgree.prototype.removeselect = function(){
      var self = this;
      var selfUnselect = $(self.id).addClass(self.noneselectClass).removeClass(self.selectClass);
      return selfUnselect
  };

  
  var agree = new ifAgree();
  //添加点击事件
  $(agree.id).on("click",function(){ 
    console.log(agree)
      agree.select == true ? agree.select = false : agree.select = true;
      agree.select && agree.addselect() || agree.removeselect();
  });
