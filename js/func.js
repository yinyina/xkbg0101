$(function(){
//总开始符号	


//----------------------------数据加载----------------------------
$(document).attr("title",CourseName);
$(".coursename").html(CourseName);
$(".stit").html(Stit);

var ul_box = $(".menu");
var arrddName ='';

$.each(arrMenuName,function(i){
	ul_box.append("<li><p>"+arrMenuName[i]+"</p><dl></dl></li>")
	arrddName = eval("arrddName"+(i+1))
	if(arrddName){
		$.each(arrddName,function(j){
				ul_box.children("li").eq(i).children("dl").append("<dd title='"+ arrddName[j] +"'>"+arrddName[j]+"</dd>")
		});
	}

});


//----------------------------初始化----------------------------

//控制第一个栏目小图标是否和其他一致，一致为true，不一致为false
var firstbg = false;
if(firstbg){
	
}else{
	p_first();
}

if(arrddName1){
	$(".menu dl:first").show();	
	$(".menu dd:first").addClass("dd_on");

	qdwz(1,arrMenuName[0],arrddName1[0])
	play(1,1,arrddName1[0])
}else{
	qdwz(1,arrMenuName[0],'')
	play(1,'','')
	p_v_bg_class_int();
	if(firstbg){
		$(".menu p:first").addClass("p_on");	
	}else{
		$(".menu p:first").addClass("p_v_on p_on");	
	}
	
}

//背景自适应高度
var bodyheight = window.innerHeight||(document.documentElement&&document.documentElement.clientHeight)||document.body.clientHeight
if(bodyheight>593){
	document.getElementsByTagName('body')[0].style.height = bodyheight+'px';
}


//----------------------------播放器及显示函数----------------------------

//文件路径判断
function SureFilename(li_num,dd_num){
	if(dd_num){
		filename = li_num.toString()+"_" + dd_num.toString();	
	}else{
		filename = li_num.toString();
	}
	return filename;
}

//视频播放
function playvideo(li_num,dd_num){
	jsqplay(true);
	var StrPath = location.href;
	var StrHttp = StrPath.indexOf("http");
	var mstr;

	//http路径
	var arrVid = eval("arrVid" + li_num);
	var myVid;
	if(dd_num){
		myVid = arrVid[dd_num-1];	
	}else{
		myVid = arrVid[0];	
	}
	
	//local路径
	var mp4path = "video/" + CourseCode + "sp" + SureFilename(li_num,dd_num);
	var imgpath = "images/beforevideo";
	
	if(StrHttp>=0){
		mstr='<script src="https://p.bokecc.com/player?vid='+myVid+'&siteid=039C1380CF417F50&autoStart=true&width=764&height=430&playerid=3E79747550AACD79&playertype=1" type="text/javascript"></script>'
			
	}else{
		mstr = "<table width='764' height='430' cellpadding='0' cellspacing='0' bgcolor='#ffffff'>";
		mstr = mstr + "<tr>";
		mstr = mstr + "<td bgcolor=#ffffff valign=top><EMBED width=764 height=430 id=objF type=application/x-shockwave-flash src=player.swf flashvars='file="+mp4path+".mp4&amp;image="+imgpath+".jpg&amp;repeat=list&amp;bufferlength=1&amp;volume=100&amp;autostart=0&amp;controlbar=bottom&amp;displayclick=play&amp;logo.position=top-left' allowfullscreen='true' allowscriptaccess='always' bgcolor='#000000' wmode='transparent'></EMBED></td>";
		mstr = mstr + "</tr>";
		mstr = mstr + "</table>";	
	}
	
	$(".coursenr").html(mstr);	
}

//swf显示
function playswf(li_num,dd_num){
	jsqplay(true);
	var swfpath = "swf/" + SureFilename(li_num,dd_num) + ".swf";
	var ptr = "<table width='764' height='430' cellpadding='0' cellspacing='0' bgcolor='#eceaea'>";
	ptr = ptr + "<tr>";
	ptr = ptr + "<td valign=top><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0' width='764' height='430' id='123'  align='middle'><param name='allowScriptAccess' value='always' /><param name='movie' value="+swfpath+"><param name='quality' value='high'><param name='wmode' value='transparent' /><param name='wmode' value='opaque'><embed src="+swfpath+" name='123' quality='high' allowScriptAccess='always'  swLiveConnect='true' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash'  width='764' height='430' wmode='transparent'></embed></object></td>";
	ptr = ptr + "</tr>";
	ptr = ptr + "</table>";
	$(".coursenr").html(ptr);
}

//html显示
function playhtml(li_num,dd_num){
	jsqplay(true);
	var htmlpath = "word/" + SureFilename(li_num,dd_num) + ".html";
	var htr = "<iframe name=myframe id=myframe width=764 height=430 frameborder=0 border=0 scrolling=auto src="+htmlpath+">"
	$(".coursenr").html(htr);
}

//down下载
function playdown(li_num,dd_num,ddnr){
	jsqplay(true);
	var downpath = 	"down/" + SureFilename(li_num,dd_num) + ".zip";	
	var dtr = "<table width='764' height='430' bgcolor='#ffffff'><tr><td valign='middle' align='center'><a href="+downpath+" target=_blank style='color:#000000; font-size:12px;'><img src=images/down.png width=180px height=180px border=0><br/>点击下载："+ddnr+"</a></td></tr></table>"	
	$(".coursenr").html(dtr);

}

//当前位置
function qdwz(li_num,linr,ddnr){
	$(".dqwz .span1").html(linr);

	if(ddnr){
		$(".dqwz .span2").html(" > "+ddnr);
	}else{
		$(".dqwz .span2").html(ddnr);
	}
}



//----------------------------效果实现----------------------------

//格始化样式
function p_first(){
	if(firstbg){
		
	}else{
		$(".menu p:first").addClass("p_v_bg_on");
	}
}

function dl_hide_int(){
	$(".menu dl").hide();
}

function p_class_int(){
	$(".menu p").removeClass("p_on");	
}

function pv_class_int(){
	$(".menu p").removeClass("p_v_on");	
}

function p_v_bg_class_int(){
	$(".menu p").removeClass("p_v_bg_on");	
}

function dd_class_int(){
	$(".menu dd").removeClass("dd_on");	
}


//点击一级栏目
$(".menu p").click(function(){
	dl_hide_int();
	p_class_int();
	p_v_bg_class_int();
	dd_class_int();
	p_first();
	$(this).siblings().show();
	$(this).addClass("p_on");	
		
	//内容区显示
	var li_num = $(this).parent().index()+1;
	var linr = $(this).text();

	//当二级栏目为空，不调用显示函数，不为空时才调用
	var arrpliddName = eval("arrddName"+li_num)
	if(!arrpliddName){
		qdwz(li_num,linr,'');
		play(li_num,'',linr);	
	}
})

//点击第一个栏目时
if(firstbg){
	
}else{
	$(".menu p:first").click(function(){
		pv_class_int();
		p_v_bg_class_int();
		$(this).addClass("p_v_on");	
		$(this).siblings().show();
	})
}


//点击二级栏目
$(".menu dd").click(function(){
	p_class_int();
	dd_class_int();
	p_first();
	$(this).addClass("dd_on");	
	
	//内容区显示
	var li_num = $(this).parent().parent().index()+1;
	var dd_num = $(this).index()+1;
	
	var linr = $(this).parent().parent().children("p").text()
	var ddnr = $(this).text();
	
	qdwz(li_num,linr,ddnr); 
	play(li_num,dd_num,ddnr);
})


//内容区显示函数
function play(li_num,dd_num,ddnr){

	var playstyle;
	var arrliddName = eval("arrddName"+li_num)

	var playli = eval("arrddStyle"+li_num);
	
	//判断存在二级栏目&二级栏目类型相同则默认一级栏目类型
	if(arrliddName){
		if(playli){
			playstyle = playli[dd_num-1]
		}else{
			playstyle = arrMenuStyle[li_num-1]
		}	
	}else{
		playstyle = arrMenuStyle[li_num-1]
	}
	
	if(!ddnr){
		ddnr = arrMenuName[0]
	}
	
	switch(playstyle){
		case "video":playvideo(li_num,dd_num)
		break;
		case "swf":playswf(li_num,dd_num)
		break;
		case "html":playhtml(li_num,dd_num)
		break;
		case "down":playdown(li_num,dd_num,ddnr)
		break;
		default:
		break;	
	}

}

//---------------页面加载完成后计时器相关begin---------------
//获取url中参数
function getUrlParam(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg); 
	if (r!=null) return unescape(r[2]); return null; 
} 

var platformiframeurl;
platformiframeurl = getUrlParam('callParentIframeUrl');

//平台已传参,添加iframe嵌套父级页面,用于跨主域访问
if(platformiframeurl){	
	//向body创建div
	var yy_div=document.createElement("div");
	document.body.appendChild(yy_div);
	yy_div.id="yy_iframe";
	//添加iframe
	document.getElementById("yy_iframe").innerHTML='<iframe name="iframeRight" id="iframeRight" style="display:none;" src="'+ platformiframeurl +'"></iframe>'
}
//---------------页面加载完成后计时器相关end---------------	

//总结束符号
});


//---------------计时器相关begin---------------
function getSWF( swfID ) {
if (window.document[ swfID ]) {
	return window.document[ swfID ];
} else if (navigator.appName.indexOf("Microsoft") == -1) {
	if (document.embeds && document.embeds[ swfID ]) {
	return document.embeds[ swfID ];
	}
} else {
	return document.getElementById( swfID );
	}
}

var videovid;
var objectid;

//播放器界面元素初始化时
function on_cc_player_init( vid, objectID ){
	videovid=vid;
	objectid=objectID;
	var ccplayer = getSWF( objectID );
	var config = {};
	ccplayer.setConfig(config);
}

//开始播放
function on_spark_player_start(){
	jsqplay(true);
}

//暂停播放
function on_spark_player_pause(){
	jsqplay(false);
}

//恢复播放
function on_spark_player_resume(){
	jsqplay(true);
}

//结束播放
function on_spark_player_stop(){
	jsqplay(false);
}

//设置页面加载完成后是否开始计时
var videoifplay=true;

//计时器回调函数
function jsqplay(videoifplay){
	changeVideoFlag(videoifplay)
}

//与平台交互的函数
function changeVideoFlag(videoifplay) {
	var ifr = document.getElementById('iframeRight');
	if(ifr){
		//iframe嵌套添加成功
		var targetOrigin = '*';
		if(typeof(videoifplay)=="undefined"){
			//未设置videoifplay跳过不处理
		}else{
			//设置videoifplay执行
			var func = {name:"callParentFun",value:videoifplay};
			var str
			if(typeof(JSON)=="undefined"){
				//当浏览器不支持JSON时,如IE7,则使用此方法将JSON对象转化为字符串
				str = "'name':"+"'"+func.name+"','value':"+func.value
				str = "{" + str +"}";
			}else{
				//当浏览器支持JSON时,则使用此方法将JSON对象转化为字符串
				str = JSON.stringify(func);
			}
			ifr.contentWindow.postMessage(str, targetOrigin);
		}
	}
}
//---------------计时器相关end---------------