function feladat(színek) {

    let megoldás = hatvány(2, színek.length) - színek.length;

    return megoldás;
}

function hatvány(alap, kitevő) {
    let eredmény = 1;
    for (let i = 0; i < kitevő; i++) {
        eredmény *= alap;
    }
    return eredmény - 1;
}
