const maiorNumero = (...numeros) => {
    const maior = numeros.reduce((ac, num) => {
        if(num > ac) {
            ac = num;
        }

        return ac;
    }, 0);

    return maior;
};  

console.log(maiorNumero(15, 45, 8, 9)); // 45
console.log(maiorNumero(0, 0, 1)); // 1
console.log(maiorNumero(1, 6, 8)); // 8
console.log(maiorNumero(8, 1, 8)); // 8
console.log(maiorNumero(-1, -5, -85, 0)); //0