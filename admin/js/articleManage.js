//自定义分页组件
/***************
$(function(){
    $('#articleList').datagrid({
        pagination:true
    });
    var pager=$('#articleList').datagrid('getPager');
    pager.pagination({
        showPageList:false,
        showRefresh:false,
        displayMsg:''
    });
});
***********************/


//实现文章管理工具栏
$(function(){
    $('#articleList').datagrid({
        /*toolbar:[
          {
            text:"新增文章",
            iconCLs:"icon-add",
            handler:function(){
                alert('add');
            }
          },
          {
            text:"删除文章",
            iconCLs:"icon-cancel",
            handler:function(){
                alert('cut');
            }
          },'-',
          {
            text:"推荐文章",
            iconCLs:"icon-ok",
            handler:function(){
                alert('save');
            }
          }
        ]*/
        toolbar:"#articleTool"
    });
});

//实现新增文章链接功能
function addArticle(title,url){
    var jq=top.jQuery;
    if(jq('#main').tabs('exists',title)){
        jq('#main').tabs('select',title);
    }
    else{
        var content='<iframe src="'+url+'" frameborder="0" style="width:100%;height:500px;"></iframe>';
        jq('#main').tabs('add',{
            title:title,
            content:content,
            closable:true,
            iconCls:"icon-page_white_text"
        });
    }
}


//删除文章消息提示框
$(function(){
    $("#aDelArticle").click(function(){
        var ids=[];
        var rows=$('#articleList').datagrid('getSelections');
        for(var i=0;i<rows.length;i++){
            ids.push(rows[i].aId);
        }
        $.messager.confirm("提示操作","您确认要删除ID为【"+ids.join('\t')+"】的文章吗？",function(data){
            if(data){}
            else{}
        });
    });
});