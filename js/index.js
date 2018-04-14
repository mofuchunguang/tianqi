
// 创建吕梁市天气状况

var weather;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	type:"get",
	// 减少跨地域的阻碍
	dataType: "jsonp",
	
	success:function(obj){
    console.log(weather);
		weather=obj.data.weather;
		// console.log(weather);
		// console.log(obj.data.weather);
	}
	
})

// $.ajax({
//   url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=北京",
//   type:"get",
//   // 减少跨地域的阻碍
//   dataType: "jsonp",
  
//   success:function(obj){
//     console.log(weather);
//     weather=obj.data.weather;
//     // console.log(weather);
//     // console.log(obj.data.weather);
//   }
  
// })
 // 创建各个城市的天气状况
 var city;
$.ajax({
  url:"https://www.toutiao.com/stream/widget/local_weather/city/",
  type:"get",
  // 减少跨地域的阻碍
  dataType: "jsonp",
  
  success:function(obj){
    city=obj.data;
    console.log(city);
    
   
    
  }
  
})



function update(){
	// 获取当前城市
	var city_name=document.querySelector(".city-1");
	city_name.innerHTML=weather.city_name;
	// 获取当前温度

	var city_wendu=document.querySelector(".temperature");
	city_wendu.innerHTML=weather.current_temperature+"°";
    // 获取当前天气状况
	var city_zhuankuang=document.querySelector(".condition");
	city_zhuankuang.innerHTML=weather.current_condition;
    // 当前最高温度
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
     // 当前最低温度
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
    // 当前天气状况
    var day_condition=document.querySelector("#day_condition");
	day_condition.innerHTML=weather.day_condition;

   // 获取明天的最高温度
   var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
     
   // 获取明天的最低温度
   
   var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
   // 明天天气状况
   var tomorrow_condition=document.querySelector("#tomorrow_condition");
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
	// 当前icon
	var dat_weather_icon_id=document.querySelector(".tianqi-tubiao");
	dat_weather_icon_id.style=`background-image:url("img/${weather.dat_weather_icon_id}.png")`;
    // 明天icon
    var tomorrow_weather_icon_id=document.querySelector(".tianqi-tubiaojia");
	tomorrow_weather_icon_id.style=`background-image:url("img/${weather.tomorrow_weather_icon_id}.png")`;
    
  for(var i in weather.hourly_forecast){
  	var now=document.createElement("div");
  	now.className="now";
  	var swap=document.querySelector(".swap");
  	swap.appendChild(now);

  	// 创建时间元素
  	var h2=document.createElement("h2");
  	h2.className="now-time";
  	
  	h2.innerHTML=weather.hourly_forecast[i].hour+":00";
  	now.appendChild(h2);

// 创建icon
  	var nowimg=document.createElement("div");
     nowimg.className="now-img";
     nowimg.style=`background-image:url("img/${weather.hourly_forecast[i].weather_icon_id}.png")`;
      now.appendChild(nowimg);

// 创建温度

var h1=document.createElement("h2");
  	h1.className="now-wendu";
  	
  	h1.innerHTML=weather.hourly_forecast[i].temperature+"°";
  	now.appendChild(h1);



  }  

for(var j in weather.forecast_list){

var con=document.createElement("div");
con.className="con";
var jinqi1=document.querySelector(".jinqi-1");
jinqi1.appendChild(con);

 //创建时间
 
 var date=document.createElement("div");
 date.className="con-1";
 date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
  con.appendChild(date);

  // 创建天气状况
  
var weaH=document.createElement("div");
 weaH.className="weaH";
 weaH.innerHTML=weather.forecast_list[j].condition;
  con.appendChild(weaH);


// 创建icon


   var imgH=document.createElement("div");
     imgH.className="imgH";
     imgH.style=`background-image:url("img/${weather.forecast_list[j].weather_icon_id}.png")`;
     con.appendChild(imgH);

  // 创建最高温
  
var heaH=document.createElement("div");
 heaH.className="heaH";
 heaH.innerHTML=weather.forecast_list[j].high_temperature+"°";
  con.appendChild(heaH);


// 创建最低温
  
var heah=document.createElement("div");
 heah.className="heaH";
 heah.innerHTML=weather.forecast_list[j].low_temperature+"°";
  con.appendChild(heah);


// 创建东南西北风
  
var fengxiang=document.createElement("div");
 fengxiang.className="fengxiang";
 fengxiang.innerHTML=weather.forecast_list[j].wind_direction;
  con.appendChild(fengxiang);

// 创建风级
  
var dengji=document.createElement("div");
 dengji.className="dengji";
 dengji.innerHTML=weather.forecast_list[j].wind_level;
  con.appendChild(dengji);


}
// 渲染城市
for(var m in city){
  // console.log(m);
  var h1=document.createElement("h1");
  h1.className="renmen";
  h1.innerHTML=m;
  var cityrenmen=document.querySelector(".city-renmen");
  cityrenmen.appendChild(h1);

  var renmencity=document.createElement("ul");
  renmencity.className="renmencity";
  cityrenmen.appendChild(renmencity);


// 渲染各个省会
  for(var n in city[m]){
  // console.log(city[m][n]);
  // console.log(n);
  var li=document.createElement("li");
  li.className="bb";
  li.innerHTML=n;

  // var renmencity=document.querySelector(".renmencity");
  renmencity.appendChild(li);
 }
 }



}

// 请求各个城市天气状况
function AJAX(str){
var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
$.ajax({
  url: url1,
  type: "get",
  dataType: 'jsonp',
  success:function(obj){
    // 获取数据
    
    weather=obj.data.weather;
    // 渲染数据
    update();
    // 让城市盒子消失
    $(".city").css({"display":"none"});
    
  }
})
}



window.onload=function(){
	update();
  $(".bb").on("click",function(){
    var cityh=this.innerHTML;
    AJAX(cityh);
  })
    $(".city-1").on("click",function(){
     $(".city").css({"display":"block"});
})
// 输入框获取焦点，按钮内容变搜索
$("input").on("focus",function(){

  $(".quxiao").html("搜索");
})
//操作按钮
var button=document.querySelector(".quxiao");
button.onclick=function(){
 // console.log(button)
var text=button.innerText;
console.log(text)
if(text=="取消"){
  $(".city").css({"display":"none"})
} 
else{
  var str1=document.querySelector("input").value;
  for(var i in city){
    for(var j in city[i]){
      // console.log(`${j}市`);
      if(str1==j||str1==`${j}市`){
        AJAX(str1);
        return;
      }
    }

  }
  alert("没有该城市");
}

}

}




  
