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



const misjaBeta = zaplanujMisje("Wyprawa na Marsa", "Obserwacyjna")
dodajCzlonkaZalogi(misjaBeta, "inż. Maciejewski")
dodajCzlonkaZalogi(misjaBeta, "kpt. Skrent")

przemierzDystans(misjaBeta, 15)
przemierzDystans(misjaBeta, 25)

zaladujSprzet(misjaBeta, "Kamera")
zaladujSprzet(misjaBeta, "Spektometr")

dodajCeleBadawcze(misjaBeta, "Zbadanie siły grawitacji Jowisza")
console.log(raportMisji(misjaBeta))



const misja = {
    nazwa: "Ekspedycja na Marsa",
    typ: "Badawcza", 
    zaloga: ["kpt. Nowacki", "dr Marcinka"],
    dystans: 0, 
    celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wody"],
    ladownia: {
        narzedzia: ["Spektrometr", "Wiertło geologiczne"],
        zapasy: 100 
    }
}
console.log(misja);



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
