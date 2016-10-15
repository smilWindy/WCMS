//west可折叠的代码
/*$(document).ready(function(){
    $('#divLayout').layout('collapse','west');
});*/


//添加功能的鼠标点击事件

function addTab(title,url){
    if($('#main').tabs('exists',title)){
        $('#main').tabs('select',title);
    }

    else{
        var content='<iframe src="'+url+'" frameborder="0" style="width:100%;height:500px;"></iframe>';
        $('#main').tabs('add',{
          title:title,
          content:content,
          closable:true,
          iconCLs:"icon-page_white_text"
        });      
    }
}

function adaptiveHeight(obj){
    var mainheight=$(obj).contents().find('body').height()+200;
    $(obj).height(mainheight);
}