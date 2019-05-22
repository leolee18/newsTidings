window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var Scene = {};
Scene.extend = function (o) {
    return o;
};

var page=Scene.extend({
	 obj: null,
    action: 'click',
    width: parseInt(document.body.clientWidth),
    height: parseInt(document.body.clientHeight),
    isandroid: /Android (\d+\.\d+)/.test(navigator.userAgent),
    isweixin:window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger',
    btnfun: function () { },
    btnshow:false,
    btnshow2:false,
    isclick: false,
    startX: 0,
    startY:0,
    moveH:false,//touch是否水平移动
    isIscroll:false,
    way:1,//0:up  1:down
    shareInfo:{},
     pre_p_index:1,
    cur_p_index:1,
     ismove:false,
    allowMove:true,
    isproturn:false,
    allowUp:true,
    allowDown:false,
    indexa:0,
     allowList:[
               [true,false,800],//0
               [true,false,800],//1
               [true,true,800],//2
               [true,true,800],//3
               [true,true,800],//4
               [true,true,800],//5
               [false,true,800],//6
               ],
               showbtn:function(){
    	if(page.allowUp){
    		$(".downbtn").show();
        	$(".downbtn").width();
        	$(".downbtn").addClass("show");
    	}
        	
        if(page.allowDown){
        	$(".upbtn").show();
        	$(".upbtn").width();
        	$(".upbtn").addClass("show");
        }
       
        	
        
    },
    closebtn: function () {

    	$(".upbtn").removeClass("show");
    	$(".upbtn").width();
    	$(".upbtn").hide();

    	$(".downbtn").removeClass("show");
    	$(".downbtn").width();
    	$(".downbtn").hide();
    	
    },
     getPoint: function (e) {
        var touch;
        if (e.touches)
            touch = e.touches[0];
        if (!touch) {
            if (e.changedTouches && e.changedTouches.length > 0) {
                touch = e.changedTouches[0];
            } else if (e.originalEvent && e.originalEvent.touches) {
                touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
            }

        }
        if (!touch) {
            touch = e;
        }
        return { x: touch.pageX, y: touch.pageY };
    },
    touchstart: function (e) {
    	e.stopPropagation();
        var p = page.getPoint(e);
        //console.log(p);
        page.startX = p.x;
        page.startY = p.y;
        page.allowMove=true;

        try{
        	if($(e.srcElement).parent().parent().hasClass("unscroll"))
            	page.allowMove=false;
        }catch(e){
        	
        }
        
    },
    touchmove: function (e) {
    	e.preventDefault();
        var p = page.getPoint(e);
        if(page.ismove || !page.allowMove)
        	return;
        console.log("ismove="+page.ismove);
        console.log("allowMove="+page.allowMove);
        console.log("allowUp="+page.allowUp);
        if(page.moveH){
        	
        }else{
            if (Math.abs(p.x - page.startX) > Math.abs(p.y - page.startY)) {
            	if(page.cur_p_index==2 && !page.isproturn){
            		if (Math.abs(p.x - page.startX) > 20) {
                    	if(p.x > page.startX){
                    		page.p2proturn(1);
                    	}else{
                    		page.p2proturn(-1);
                    	}
                    }
            		
            		
            		return;
            	}
            	return;
            }
            if (Math.abs(p.y - page.startY) > 20) {

            	if(p.y > page.startY){
            		
            		if(page.allowDown)
                        page.swipeDown();
                        return;
            			console.log('allowDown')
            			//page.swipeDown();
            	}else{
            		console.log("allowUp="+page.allowUp);
            		console.log(1)
            		if(page.allowUp)
                      if($('.p2').hasClass('show')){
                        page.swipeUp();
                      }
            			
            	}
            }
        }
    },
    touchend: function (e) {
    	//e.stopPropagation();
        page.allowMove=false;
    },
    intime: function (f, t) {
        setTimeout(f, t);
    },
    swipeUp:function(prev){
    	var self=this;
        
         
    	console.log(page.pre_p_index)
    	if(self.ismove)
    		return;
    	self.ismove=true;
    	console.log("开始 swipeup   ismove=="+self.ismove);
    	
    	
    	
		self.pre_p_index=self.cur_p_index;

    	if(prev!=undefined)
    		self.pre_p_index=prev;
        if(page.cur_p_index==4){
            $('.p2-5').addClass('hide');
            $('.p2-6').hide();
            $('.p2-7').show()
            $('.p2-7').width()
            $('.p2-7,.p2-1,.p2-8').addClass('show')
        }
        if(page.cur_p_index>=5){
            return;
        }
    	self.cur_p_index++;
    	console.log(self.cur_p_index)
    	var prev_page=$(".pic"+self.pre_p_index);
    	var cur_page=$(".pic"+self.cur_p_index);
    	console.log(".pic"+self.cur_p_index)
    	prev_page.removeClass("show").addClass("swipe-up");
        cur_page.bind("webkitTransitionEnd", page.swipeShowEnd);
        prev_page.bind("webkitTransitionEnd", page.swipeHideEnd);
        
    	//cur_page.removeClass("swipe-down");
    	  setTimeout(function(){
            page.ismove=false;
            page.allowMove=true;
            page.allowUp=true;
          },1200)  	
    	//document.getElementById("p"+self.cur_p_index).addEventListener("webkitTransitionEnd", page.swipeShowEnd,true);
    	//document.getElementById("p"+self.cur_p_index).addEventListener("webkitTransitionEnd", page.swipeShowEnd,false);
    	
    	
    	
    	
    },
    swipeDown:function(){
    	/*var self=this;
    	console.log(555)
    	if(self.ismove)
    		return;
    	
    	page.ismove=true;
    	console.log("开始 swipedown   ismove=="+self.ismove);

    	self.pre_p_index=self.cur_p_index;
    	self.cur_p_index--;
    	if(self.cur_p_index==0)
            return;
    	
    	var prev_page=$("#p"+self.pre_p_index);
    	var cur_page=$("#p"+self.cur_p_index);

 
    	
    	prev_page.removeClass("show").addClass("swipe-down");
    	cur_page.removeClass("swipe-up");
    	
    	cur_page.bind("webkitTransitionEnd", page.swipeShowEnd);
    	prev_page.bind("webkitTransitionEnd", page.swipeHideEnd);*/
    },
    swipeHideEnd:function(e){
    	
    },
    swipeShowEnd:function(e){
    	var self=page;
    	//console.log("swipeend");
    	//console.log(e);
    	//if(e.target.className.indexOf("part")==-1 || e.originalEvent.propertyName!="transform")
    	
    	
    	console.log("swipe end");
    	$(this).addClass("show");
		self.allowUp=self.allowList[self.cur_p_index][0];
    	self.allowDown=self.allowList[self.cur_p_index][1];
    	
    	page.intime(function(){
    		self.ismove=false;
        	self.allowMove=false;
        	//page.showbtn();
/*
    		if(self.cur_p_index==4){
    			page.p4timer=setTimeout(function(){
    				page.swipeUp();
    			},5000);
    		}
        		*/
        	
    	},self.allowList[self.cur_p_index][2]);
    	$(this).unbind("webkitTransitionEnd");

    	page.closebtn();
    	
    },
    init:function(){
    	var self=this;
        
       if ("ontouchstart" in document) {
            this.action = "touchstart";
            //$('body').on(this.action, function () {
            //    if (page.btnshow)
            //        page.closebtn();
            //    if (!page.isinput)
            //        return false;
            //});
            /*$('.overs').on('touchstart', function (e) {
                //if (page.btnshow)
                     page.touchstart(e);
            });
            $('.overs').on('touchmove', function (e) {
                //if (page.btnshow)
                     page.touchstart(e);
            });
            $('').on('touchend', function (e) {
                //if (page.btnshow)
                page.touchend(e);
                   
            })*/
            $('.overs').on('touchstart', function (e) {
                //if (page.btnshow)
                    page.touchstart(e);
            });
            $('.overs').on('touchmove', function (e) {
                //if (page.btnshow)
                    page.touchmove(e);
            });
            $('.overs').on('touchend', function (e) {
                //if (page.btnshow)
                    page.touchend(e);
            });
        }
     $('.sharess').on('click',function(){
        
            $('.sharess').removeClass('show');
        setTimeout(function(){
            $('.sharess').hide();
        },500)
   
        

    })

     


    }
    
    
})
page.init();
$('.head1').on('click',function(){
    $('.header').toggleClass('show');
    if($('.header').hasClass('show')){
      $('.under').show();
    }else{
      $('.under').hide();

    }
  })
  $('.under li p').on('click',function(){
    
    $('.mena1').hide()
    $(this).next().show()
  
  })