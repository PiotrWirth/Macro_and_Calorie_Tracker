var table = document.getElementById('table');
var carbs = 0, protein = 0, fats = 0, calories = 0;

for (var i = 1; i<table.rows.length-1; i++){
    
    carbs += parseFloat(table.rows[i].cells[2].innerHTML);
    carbs = Math.round(carbs);
    protein += parseFloat(table.rows[i].cells[3].innerHTML);
    protein = Math.round(protein);
    fats += parseFloat(table.rows[i].cells[4].innerHTML);
    fats = Math.round(fats);
    calories += parseFloat(table.rows[i].cells[5].innerHTML);
    calories = Math.round(calories);
}

document.getElementById('totalCarbs').innerHTML = '<b>' + carbs + '</b>';
document.getElementById('totalProtein').innerHTML = '<b>' + protein + '</b>';
document.getElementById('totalFats').innerHTML = '<b>' + fats + '</b>';
document.getElementById('totalCalories').innerHTML = '<b>' + calories + '</b>';

var calPer = (calories/2500) *100;
document.getElementsByClassName("progress-bar")[0].setAttribute("style","width:"+calPer+"%");

var total = carbs + protein + fats;
var carbsP = Math.round((carbs/total)*100);
var proteinP = Math.round((protein/total)*100);
var fatsP = Math.round((fats/total)*100);


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Carbs '+carbsP+'%', 'Protein '+proteinP+'%', 'Fats '+fatsP+'%'],
    datasets: [{
      label: '',
      data: [carbsP, proteinP, fatsP],
      borderWidth: 1
    }]
  },
  
});