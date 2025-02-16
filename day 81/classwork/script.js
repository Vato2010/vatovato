let result = 133;
for (let i = 1; i <= 10000; i++) {
    result *= i
    if (result > 10000) {
        break; 
    }
}
console.log(result);
for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }
    if (i % 3 === 0) {
        continue; 
    }
    console.log(i);
}
for (let i = 1; i <= 100; i++) {
    if (i == 50) {
        break; 
    }
    
    if (i % 4 !== 0) {
        continue; 
    }

    console.log(i); 
}
