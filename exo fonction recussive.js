function somme(x) {
    if(x == 1){
        return 1;
    }
    return x + somme(x-1)
}

console.log(somme(5));