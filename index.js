const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


let totalBatteries = batteryBatches.reduce((total, num) => {return total += num}, 0)
// Code your solution here
