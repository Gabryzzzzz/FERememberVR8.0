
export default interface prodotti {
    id: number;
    nome: string;
    descrizione: string;
    prezzo: number;
    immagine: string;
}

export default class prodottiAcquistati implements prodotti {
    public acquistato: boolean = false
}