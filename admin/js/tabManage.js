
/**function myLoadFilter(data,parentId){
    function setData(data){
        var todo = [];
        for(var i=0; i<data.length; i++){
            todo.push(data[i]);
        }
        while(todo.length){
            var node = todo.shift();
            if (node.children && node.children.length){
                node.state = 'closed';
                node.children1 = node.children;
                node.children = undefined;
                todo = todo.concat(node.children1);
            }
        }
    }
    
    setData(data);
    var tg = $(this);
    var opts = tg.treegrid('options');
    opts.onBeforeExpand = function(row){
        if (row.children1){
            tg.treegrid('append',{
                parent: row[opts.idField],
                data: row.children1
            });
            row.children1 = undefined;
            tg.treegrid('expand', row[opts.idField]);
        }
        return row.children1 == undefined;
    };
    return data;
}**/

/*$('#tt').tree({
    url: 'data/tree6_data.json',
    loadFilter: function(rows){
        return convert(rows);
    }
});*/

/****
function convert(rows){
    function exists(rows, parentId){
        for(var i=0; i<rows.length; i++){
            if (rows[i].id == parentId) return true;
        }
        return false;
    }
    
    var nodes = [];
    // get the top level nodes
    for(var i=0; i<rows.length; i++){
        var row = rows[i];
        if (!exists(rows, row.parentId)){
            nodes.push({
                id:row.id,
                text:row.name
            });
        }
    }
    
    var toDo = [];
    for(var i=0; i<nodes.length; i++){
        toDo.push(nodes[i]);
    }
    while(toDo.length){
        var node = toDo.shift();    // the parent node
        // get the children nodes
        for(var i=0; i<rows.length; i++){
            var row = rows[i];
            if (row.parentId == node.id){
                var child = {id:row.id,text:row.name};
                if (node.children){
                    node.children.push(child);
                } else {
                    node.children = [child];
                }
                toDo.push(child);
            }
        }
    }
    return nodes;
}**********************************/

//右键触发快捷菜单
$(function(){
    $(document).bind('contextmenu',function(e){
        e.preventDefault();
        $('#rMenu').menu('show',{
            left:e.pageX,
            top:e.pageY
        });
    });
});


//编辑、取消、保存功能实现
var editingId;
function edit(){
    if (editingId!=undefined) {
        $('#tabTreegrid').treegrid('select',editingId);
        return;
    }
    var row=$('#tabTreegrid').treegrid('getSelected');
    if (row) {
        editingId=row.id;
        $('#tabTreegrid').treegrid('beginEdit',editingId);
    }
}
function save(){
    if (editingId!=undefined){
        var t=$('#tabTreegrid');
        t.treegrid('endEdit',editingId);
        editingId=undefined;
        var persons=0;
        var rows=t.treegrid('getChildren');
        for(var i=0;i<rows.length;i++){
            var p=parseInt(rows[i].persons);
            if(!isNaN(p)){
                persons+=p;
            }
        }
        var frow=t.treegrid('getFooterRows')[0];
        frow.persons=persons;
        t.treegrid('reloadFooter');
    }
}

function cancel(){
    if (editingId!=undefined) {
        $('#tabTreegrid').treegrid('cancelEdit',editingId);
        editingId=undefined;
    }
}


//the function of delete
$(document).ready(function(){
    $('#aDel').click(function(){
        $.messager.confirm("operation tip","Do you wanna execution?",function(data){
           if (data) {
              alert('successful');
           }
            else{
               return 0;
            }
        });
    });
})

//show a tip on the down-left of the window
$(document).ready(function(){
    var option={
        title:"message tip",
        msg:"<a href='javascript:void'>short message</a><br><a href='javascript:void'>short mesaage 2</a>",
        showType:'slide',
        timeout:'5000'
    };
    $.messager.show(option);
});