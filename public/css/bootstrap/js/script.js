//var age=prompt("youre age:");

//var age =20;
/*if(age<18){
    alert("sorry");
    
}
else if(age<21){
    alert("y can enter but cant drink");

}
else {
    alert("u can drink");
}*/
/*var ageInt=parseInt(age);
if(ageInt<0){
    alert("ska moshe negative");
}
else if(ageInt==21){
    alert("happy 21th birthday");
}
else if(ageInt%2!=0){
    alert("odd age");
}
else{
    alert("asnjeri opsion");
} */

/*var i = -10;
while (i >=-10 && i<20) {
    console.log("count is: "+ i);
    i++;
}*/
/*var tek=10;
while (tek>=10 && tek<=40)
{
    if(tek % 2==0){
    console.log(tek);
}
    tek++;
}*/
/*for (var i = -10; i >=-10 && i<20; i++){
    console.log(i)
}*/

/*function isEven(x){
    if(x%2==0){return true;}
    else {return false;}

}
var rez=isEven(6);
console.log(rez);

var array = ["Charlie", "Sam", 21,31];
array[1];
array[3];
var c=array.length;
console.log(c);
console.log(array[0]);

var person={
    name: "dalina",
    age: 24,
    city: "Fr"

};
console.log(person.name);*/
/*$('#trigger').click(function(){
    console.log("triggered");
   $('body').css('background', 'green');
});*/
$(document).ready(function(){

    Highcharts.chart('container', {
        
            title: {
                text: 'Techstitution'
            },
        
            subtitle: {
                text: 'Second training group'
            },
        
            yAxis: {
                title: {
                    text: 'Number of Students'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
        
            series: [{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Manufacturing',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Project Development',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Other',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],
        
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        
        });

});



