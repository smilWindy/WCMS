//定义工具栏
$(function(){
    $('#fileList').datagrid({
        toolbar:'#fileTool'
    });
});

/*定义搜索文件函数*/
$(function doSearch(value,name){
    $('#aDelFile').click(function(){
        var ids=[];
        var rows=$('#fileList').datagrid('getSelections');
        for (var i=0;i<rows.length;i++) {
            ids.push(rows[i].fName);
        }
        $.messager.confirm("操作提示","您确定要删除文件名为【"+ids.join('\t')+"】的文件吗？",function(data){
            if(data){}
            else{} 
        });
    });
});