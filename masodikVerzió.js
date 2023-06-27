function hossz(tömb) {
    let hossz = 0;
    const tmp = {};

    for (let i = 0; i < tömb.length; i++) {
        if (!tmp[tömb[i]]) {
            tmp[tömb[i]] = 1;
            tömb[hossz] = tömb[i];
            hossz++;
        }
    }
    return hossz;
}

function feladat(színek) {
    let színekSzáma = hossz(színek);
    let megoldás = hatvány(2, színekSzáma) - színekSzáma;

    return megoldás;
}

function hatvány(alap, kitevő) {
    let eredmény = 1;
    for (let i = 0; i < kitevő; i++) {
        eredmény *= alap;
    }
    return eredmény - 1;
}
