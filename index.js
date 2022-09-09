function clicar_calcular() {
    let valorDoA = Number(document.getElementById("valorA").value);
    let valorDoB = Number(document.getElementById("valorB").value);
    let valorDoC = Number(document.getElementById("valorC").value);
    const delta = Math.pow(valorDoB, 2) - 4 * valorDoA * valorDoC
    if (delta > 0) {
        const contaUm = (-valorDoB + Math.sqrt(delta)) / (2 * valorDoA);
        const contaDois = (-valorDoB - Math.sqrt(delta)) / (2 * valorDoA);
        document.getElementById("resultado").innerHTML = `resultado = ${contaUm}, ${contaDois} `
    }

}

