// JavaScript Document

function startMove1 (obj,attr,iTarget,fn){

	clearInterval(obj.timer);//每个obj，有各自的定时器，这样相互不影响
	obj.timer = setInterval(function (){
		var iCur =0;
		
		if(attr == 'opacity'){
			var iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
				}
		
		var iSpeed = (iTarget-iCur)/8;
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		
		if(iCur==iTarget){
			
			
			clearInterval(obj.timer);//先清除定时器，在进行下一步的链式操作
			
			if(fn){
				fn();
				}
			}else{
				if(attr=='opacity'){
					obj.style.filter ='alpha(opacity:'+(iCur+iSpeed)+')';
					obj.style.opacity = (iCur+iSpeed)/100;
					}else{
						obj.style[attr] =iCur+iSpeed+'px';
						}
				
				}
		},40);
	}
function getStyle(obj,attr){
	
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}
	
/*比较完美的运动框架*/

function startMove (obj,json,fn){

	clearInterval(obj.timer);//每个obj，有各自的定时器，这样相互不影响
	obj.timer = setInterval(function (){
	var bStop = true;
  for(var attr in json){
	  
	  //取当前值
		var iCur=0;
		
		if(attr == 'opacity')
		{
			var iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
		}else
		{
			var iCur = parseInt(getStyle(obj,attr));
		}
		//算速度
		var iSpeed = (json[attr]-iCur)/8;
		iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
		//检测停止
		if(iCur!=json[attr]){
			
			bStop = false;
			
			}
		if(attr=='opacity'){
			obj.style.filter ='alpha(opacity:'+(iCur+iSpeed)+')';
			obj.style.opacity = (iCur+iSpeed)/100;
		}else{
			obj.style[attr] =iCur+iSpeed+'px';
			}
				
			
  }
  		if(bStop){
			
			clearInterval(obj.timer);//bStop确保所有的值都执行完毕，再清除定时器
			
			if(fn){
			    fn();
			}
		}
		},40);
	}
function getStyle(obj,attr){
	
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
    }

/**/