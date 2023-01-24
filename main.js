
var state = ["open","close"]
$("#btn1").on("click",function(){
    if($("#btn1").text() === "open"){
        $("#container").show();
        $("#btn1").text(state[1])
    }else {

        $("#container").hide();
        $("#btn1").text(state[0])
    }
    
   
})

var data =[
    {category:"Movies",
    imgSrc:"./movie/1.jpg"
 },   {category:"Movies",
 imgSrc:"./movie/dac.jpg"
},    {category:"Movies",
imgSrc:"./movie/iron.jpg"
},   {category:"Movies",
imgSrc:"./movie/john.jpg"
},  {category:"Movies",
imgSrc:"./movie/Luc.jpg"
},  {category:"Movies",
imgSrc:"./movie/red.jpg"
},  {category:"Anime",
imgSrc:"./anime/black.jpg"
},  {category:"Anime",
imgSrc:"./anime/con.jpg"
},  {category:"Anime",
imgSrc:"./anime/dea.jpg"
},  {category:"Anime",
imgSrc:"./anime/hunter.jpg"
},  {category:"Anime",
imgSrc:"./anime/nar.jpg"
},  {category:"Anime",
imgSrc:"./anime/one.jpg"
},{category:"Series",
imgSrc:"./series/s1.jpg"
},{category:"Series",
imgSrc:"./series/s2.jpg"
},{category:"Series",
imgSrc:"./series/s3.jpg"
},{category:"Series",
imgSrc:"./series/s4.jpg"
},{category:"Series",
imgSrc:"./series/s5.jpg"
},{category:"Series",
imgSrc:"./series/s6.jpg"
}
]

var each = function (coll,func){
    if (Array.isArray(coll)){
        for (var i =0;i<coll.length;i++){
        func(coll[i],i)
    }
    }
    else {
        for (var key in coll){
            func(coll[key],key)
        }
    }
}
var filter = function(array,predicate){
var acc = [];
each(array,function(e,i){
    if (predicate(e,i)){
        acc.push(e)
    }
})
return acc;
}
console.log("hii")

each(data,function(e,i){
    $("#make").append(`<div class="put"><img class="imgs" id="l${i}"src="${e.imgSrc}" "/><center><input type='button' value='Resize' onclick="resise(${i})"></center> </div>`)
})

$("#btn").click(function(e){
    e.preventDefault();
    var x= filter(data,function(e,i){
        return e.category===$("#inpt").val() || $("#inpt").val() ===''
    })
        $("#make").empty()
        each(x,function(e,i){
            $("#make").append(`<div class="put"><img class="imgs" id="l${i}"src="${e.imgSrc}" "/><center><input type='button' value='Resize' onclick="resise(${i})"></center> </div>`)
        })
     
})

function resise(i){
   
    $("#l"+i).css("width","400px")
}


