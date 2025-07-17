let son = Number(prompt("Son kiriting: "));

let yuzlik = ((son / 100) | 0);
let onlik = ((son % 100) / 10 | 0);
let birlik = (son % 10);

let result = "";


if (son >= 1 && son <= 999) {

    switch (yuzlik) {
        case 1:
            result += ("bir yuz");
            break;
        case 2:
            result += ("ikki yuz");
            break;
        case 3:
            result += ("uch yuz");
            break;
        case 4:
            result += ("to'rt yuz");
            break;
        case 5:
            result += ("besh yuz");
            break;
        case 6:
            result += ("olti yuz");
            break;
        case 7:
            result += ("yetti yuz");
            break;
        case 8:
            result += ("sakkiz yuz");
            break;
        case 9:
            result += ("to'qqiz yuz");
            break;
    }

    switch (onlik) {
        case 1:
            result += (" o'n");
            break;
        case 2:
            result += (" yigirma");
            break;
        case 3:
            result += (" o'ttiz");
            break;
        case 4:
            result += (" qirq");
            break;
        case 5:
            result += (" ellik");
            break;
        case 6:
            result += (" oltmish");
            break;
        case 7:
            result += (" yetmish");
            break;
        case 8:
            result += (" sakson");
            break;
        case 9:
            result += (" to'qson");
            break;
    }


    switch (birlik) {
        case 1:
            result += (" bir");
            break;
        case 2:
            result += (" ikki");
            break;
        case 3:
            result += (" uch");
            break;
        case 4:
            result += (" to'rt");
            break;
        case 5:
            result += (" besh");
            break;
        case 6:
            result += (" olti");
            break;
        case 7:
            result += (" yetti");
            break;
        case 8:
            result += (" sakkiz");
            break;
        case 9:
            result += (" to'qqiz");
            break;
    }

}
else{
    console.log("Faqat 1 va 999 oralig'ida son kiriting!");
}

console.log(result);

