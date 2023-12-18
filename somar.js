function somar() {
    const soma = [...arguments].reduce((ac, num) => {
        return ac += num;
    }, 0); 

    return soma;
}

console.log(somar(15, 4));
console.log(somar(21, 3, 45, 8));