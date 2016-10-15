// JavaScript Document

//生成验证码
function createCode(){
	var code="";
	var codeLength=5;
	var codeChars=new Array(0,1,2,3,4,5,6,7,8,9,'q','w','e','r','t','y','u','i','o','p',
	'a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T',
	'Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M');
	for(var i=0;i<codeLength;i++){
		var charNum=Math.floor(Math.random()*52);
		code+=codeChars[charNum];
		}
		return code;
	}

//将生成的验证码赋值给验证码标签
$(function(){
	$('#codeE').text(createCode);
	$('#aChangeCode').click(function(){
		$('#codeE').text(createCode);
		});
	});

/**************定义表单验证函数开始********************/
function checkNull(val,tip){
	var uName=$(val).val();
	if(uName.length==0){
		$(val).tooltip({title:tip,placement:'auto'});
		$(val).tooltip('show');
		return false;
		}else{
			$(val).tooltip({title:'',placement:'auto'});
			}
	}
//验证输入框的验证码是否与生成的验证呢码相符合
function matchCode(){
	var buildCode=$('#codeE').text();
	var inputCode=$('#txtCode').val();
	if(buildCode!=inputCode){
		$('#txtCode').tooltip({title:'验证码输入不正确',placement:'auto'});
		$('#txtCode').tooltip('show');
		return false;
		}else{
			$('#txtCode').tooltip({title:'',placement:'auto'});
			return true;
			}
	}
/**************定义表单验证函数结束********************/

/**************调用表单验证函数开始********************/
$(function(){
	$('#frmLogin').submit(function(){
		checkNull('#txtUser','用户名不能为空');
		checkNull('#txtPwd','密码不能为空');
		matchCode();
		});
	});

//焦点离开时显示提示信息	
$('#txtUser').blur(function(){
	checkNull('#txtUser','用户名不能为空!');
	});
	
$('#txtPwd').blur(function(){
	checkNull('#txtPwd','密码不能为空');
	});
$('#txtCode').blur(matchCode);
/**************调用表单验证函数结束********************/








