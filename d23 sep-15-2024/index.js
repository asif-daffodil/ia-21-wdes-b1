// Break 
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        break;
    }
    console.log(i);
}

// Continue
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log('Ignores 5');
        continue;
    }
    console.log(i);
}