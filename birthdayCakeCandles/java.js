function birthdayCakeCandles(idade) {
    var maisAlta = Math.max(...idade);

    let velas = 0;
    for (let i=0; i < idade.length; i++) {
        if (idade[i] === maisAlta) {
            velas++;
        }
    }

    return velas;

}