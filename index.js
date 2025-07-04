let rahulSalesTarget =100;
let priyaSalesTarget = 200;
let amitSalesTarget = 150;
let rahulActualSales = 85;
let priyaActualSales = 180;
let amitActualSales = 120;
let rahulSalesPercentage = (rahulActualSales/rahulSalesTarget)*100;  
let priyaSalesPercentage = (priyaActualSales/priyaSalesTarget)*100;
let amitSalesPercentage = (amitActualSales/amitSalesTarget)*100;
let rahulBonus = rahulActualSales*calculateBonus(rahulSalesPercentage);
let priyaBonus = priyaActualSales*calculateBonus(priyaSalesPercentage);
let amitBonus = amitActualSales*calculateBonus(amitSalesPercentage);

function checkPerformance(salesPercentage){
    if(salesPercentage >= 90){
        return "High Performer";
    }
    else if(salesPercentage>=70){
        return "Average Performer";
    }
    else{
        return "Low Performer";
    }
}
function calculateBonus(salesPercentage){
  if(salesPercentage >= 90){
    return 0.20;
  }
  else if(salesPercentage>=70){
    return 0.10;
  }
  else{
    return 0;
  }  
}
console.log("Sales Performance Report");
console.log("Rahul");
console.log("Sales Target "+ rahulSalesTarget+" units");
console.log("Units sold "+ rahulActualSales+" units");
console.log("Sales Percentage "+ rahulSalesPercentage+"%");
console.log(`Performance ${checkPerformance(rahulSalesPercentage)}`);
console.log('Bonus '+ rahulBonus+ ' units');

console.log("Priya");
console.log("Sales Target "+ priyaSalesTarget+" units");
console.log("Units sold "+ priyaActualSales+" units");
console.log("Sales Percentage "+ priyaSalesPercentage+"%");
console.log(`Performance ${checkPerformance(priyaSalesPercentage)}`);
console.log('Bonus '+ priyaBonus+ ' units');

console.log("Amit");
console.log("Sales Target "+ amitSalesTarget+" units");
console.log("Units sold "+ amitActualSales+" units");
console.log("Sales Percentage "+ amitSalesPercentage+"%");
console.log(`Performance ${checkPerformance(amitSalesPercentage)}`);
console.log('Bonus '+ amitBonus+ ' units');