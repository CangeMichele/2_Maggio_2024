// LOCALSTORAGE

/**
 * Modo per memorizzare dati direttamente nel browser
 * I dati rimangono anche dopo che la pagina si chiude
 *
 * Si tratta di una proprietà dell'oggetto "window"
 * che ci permette di memorizzare coppie
 * chiave - valore
 * sotto forma di stringhe.
 *
 * Memorizza SOLO stringhe
 * Ha una memoria limite di 5/10 MB.
 *
 * NB: un carattere pesa 2 byte
 * Es: "Ciao" -> 4 caratteri (4 * 2) = 8 byte
 * 5 MB = 5.2 milioni di byte.
 */

// Esempi

// Memorizzare un valore (SET)
localStorage.setItem("chiave", "valore");
localStorage.setItem("nomeutente", "Simone");

// Recuperare il valore salvato (GET)
let user = localStorage.getItem("nomeutente");
console.log(user);

// Cancellare (REMOVE)
localStorage.removeItem("chiave");

// Cancellare tutto (CLEAR)
localStorage.clear();

// Classico esempio di sempre: dark/light mode
function salvaPreferenza(mode) {
  localStorage.setItem("mode", mode);
}

salvaPreferenza("dark");
