// const amount=document.getElementById('amount');
// const myChart = document.getElementById('myChart');
// const date = document.getElementById('date');
const chart = document.getElementById('chart');
var amt = [];
function eltCreate(date, amount, style) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    chart.appendChild(dayDiv);

    const amountP = document.createElement('p');
    amountP.classList.add('amount');
    const amountPtxt = document.createTextNode(amount);
    amountP.appendChild(amountPtxt);

    dayDiv.appendChild(amountP);

    const chartCanvas = document.createElement('canvas');
    chartCanvas.classList.add('myChart');
    chartCanvas.style.backgroundColor= style;
    var wid = amount+50+"px";
    chartCanvas.style.height = wid ;
    
    dayDiv.appendChild(chartCanvas);

    const dateP = document.createElement('p');
    dateP.classList.add('date');
    const datePtxt = document.createTextNode(date);
    dateP.appendChild(datePtxt);
    
    
    dayDiv.appendChild(dateP);
    
}
fetch('./data.json')
.then(
    function(response){
        return response.json();
    }
    )
    .then(
    function(obj){
        for(var i=0; i<obj.length; i++){
            amt.push(obj[i].amount);
        }
        for(var i=0; i<obj.length; i++){
            if(obj[i].amount==Math.max(...amt)){
                const style = "hsl(186, 34%, 60%)";
                eltCreate(obj[i].day, obj[i].amount, style);
            }else{
                const style = null;
                eltCreate(obj[i].day, obj[i].amount, style);
            }
        }
        
  }
).catch(function(err){
  console.error("sth went wrong");
  console.error(err);
});
