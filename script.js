function zaplanujMisje(nazwaMisji, typMisji) {
    return {
        nazwa: nazwaMisji,
        typ: typMisji,
        zaloga: [],
        dystans: 0,
        celeBadawcze: [],
        ladownia: {
            narzedzia: [],
            zapasy: 100
        }
    }
}

function dodajCzlonkaZalogi(misja, czlonek) {
    misja.zaloga.push(czlonek)
}

function zaladujSprzet(misja, sprzet) {
    misja.ladownia.narzedzia.push(sprzet)
}

function przemierzDystans(misja, odleglosc) {
    misja.dystans += odleglosc
}

function dodajCeleBadawcze(misja, cele) {
    misja.celeBadawcze.push(cele)
}

function raportMisji(misja) {
    console.log("===RAPORT MISJI===")
    console.log("NAZWA:", misja.nazwa)
    console.log("TYP:", misja.typ)
    console.log("ZAŁOGA:", misja.zaloga)
    console.log("PRZEBYTY DYSTANS:", misja.dystans)
    console.log("CELE BADAWCZE", misja.celeBadawcze)
    console.log("SPRZĘT:", misja.ladownia.narzedzia)
    console.log("ZAPASY:", misja.ladownia.zapasy)
    console.log("===KONIEC RAPORTU===")
}



const misjaBeta = zaplanujMisje("Wkroczenie na orbitę Jowisza", "Obserwacyjna")
dodajCzlonkaZalogi(misjaBeta, "inż. Kowalski")
dodajCzlonkaZalogi(misjaBeta, "kpt. Skipper")

przemierzDystans(misjaBeta, 15)
przemierzDystans(misjaBeta, 25)

zaladujSprzet(misjaBeta, "Kamera wysokiej rozdzielczości")
zaladujSprzet(misjaBeta, "Spektometr pola magnetycznego")

dodajCeleBadawcze(misjaBeta, "Zbadanie siły grawitacji Jowisza")
console.log(raportMisji(misjaBeta))


//////////////////////////////////////////////////////////////////////////////////
const misja = {
    nazwa: "Ekspedycja na Marsa",
    typ: "Badawcza", // Inne typy: "Transportowa", "Kolonizacyjna"
    zaloga: ["kpt. Nowak", "dr Kowalska"],
    dystans: 0, // w jednostkach astronomicznych (AU)
    celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wody"],
    ladownia: {
        narzedzia: ["Spektrometr", "Wiertło geologiczne"],
        zapasy: 100 // można oznaczać np. procent dostępnych zapasów
    }
}
console.log(misja);

//////////////////////////////////////////////////////////////////////////////////

const misjaAlfa = {
    nazwa: "Ekspedycja na Księżyc",
    typ: "Badawcza",
    zaloga: ["kpt. Wiśniewski", "dr. Nowicka"],
    dystans: 30,
    celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wartości mineralnych"],
    ladownia: {
        narzedzia: ["Spektrometr", "Wiertło geologiczne"],
        zapasy: 80
    }
}
console.log(misjaAlfa);
//////////////////////////////////////////////////////////////////////////////////



















// // Tworzenie nowej misji
// const misjaAlfa = zaplanujMisje("Ekspedycja na Marsa", "Badawcza");

// // Personalizacja misji
// dodajDoZalogi(misjaAlfa, "Specjalista ds. komunikacji");
// zaladujSprzet(misjaAlfa, "Generator tlenu");
// zaladujSprzet(misjaAlfa, "Drukarka 3D");

// // Postęp misji
// przemierzDystans(misjaAlfa, 10);
// przemierzDystans(misjaAlfa, 5);

// // Wygenerowanie końcowego raportu
// console.log(raportMisji(misjaBeta));

///////////////////////////////////////////////

// zaloga: ["kpt. Skipper", "inż. Kowalski", "dr. Krico"],
//     dystans: 0,
//         celeBadawcze: ["Fotografia atmosfery Jowisza", "Analiza pól magnetycznych"],
//             ladownia:
