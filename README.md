const misja = {
    nazwa: "Ekspedycja na Marsa",
    typ: "Badawcza", 
    zaloga: ["kpt. Nowak", "dr Kowalska"],
    dystans: 0, 
    celeBadawcze: ["Analiza próbek gleby", "Poszukiwanie wody"],
    ladownia: {
        narzedzia: ["Spektrometr", "Wiertło geologiczne"],
        zapasy: 100 
    }
}
const misjaBleta = zaplanujMisje("ekspedycja po wode", "Badawcza");
                            

dodajCzlonkaZalogi(misjaBleta, "specjalista od wody")



zaladujSprzet(misjaBleta, "butla tlenowa")



przemierzDystans(misjaBleta, 10)



console.log(raportMisji(misjaBleta));




