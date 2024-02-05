
function  match_per_year_for_all_the_years(data){

let obj={}
for(let data1 of data){
    if(!obj[data1.season]){
        obj[data1.season]=1
    }else{
        obj[data1.season]=(obj[data1.season]||0)+1
    }

}
   
return obj

}
module.exports={
    match_per_year_for_all_the_years
 
 }