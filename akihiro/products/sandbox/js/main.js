
var cssSelector = anime({
  targets: '.square.anim',
  translateX: {
      value: function(el,index,total){
        if(index===0){
          return '250px';
        }
        else{
          return '-250px';
        }
      },
      duration: '1000',
      delay: '0',
      easing: 'linear',
  },
  translateY: {
      value: '300px',
      duration: '800',
      delay: '1000',
      //easing: 'linear',
  },
  rotateZ:{
    value:'540deg',
    dulation:'500',
    delay:'1800'
  },
  scale:{
    value:[2,1,2,1],
    dulation:'1000',
    delay:function(el,index,total,start){
      console.log("el : " + el);
      console.log("index : " + index);
      console.log("total : " + total);
      return 300;
    }
  },
  direction: 'alternate',
  loop: true,
});

var cssSelector2 = anime({
  targets: '.square2.anim',
  translateX: '200px',
  dulation:300,
  direction: 'alternate',
  loop: true,
});

/*document.body.addEventListener( "mousemove", function( e ) {
	// マウス位置を取得する
	var mouseX = e.pageX ;	// X座標
	var mouseY = e.pageY ;	// Y座標
    //console.log(mouseY);
    //console.log(mouseX);
} ) ;*/