function drawCircle(radius) {
    let fieldWidth = radius * 2;
    for (let x = -radius; x <= radius; ++x) {
        let arr = [];
        for (let y = -radius; y <= radius; ++y) {
            let sqr = n => n * n;
            let isInCircle = sqr(x) + sqr(y) <= sqr(radius);
            arr.push(isInCircle ? '000' : '   ');
        }
        console.log(arr.join(''));
    }
}

drawCircle(10);
