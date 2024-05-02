/**
 * Async / Await rende sincrono un codice asincrono.
 */

// ASYNC: dichiara la funzione come asincrona
// AWAIT: sospende l'esecuzione fino a quando l'operazione
// non restituisce una promessa risolta.

// Funzione asincrona
async function ottieniDatiDaAPI() {
  console.log("Inizio a scaricare i dati da JSONPlaceholder");

  // Usiamo FETCH per la richiesta http
  // e AWAIT per ottenere la risposta
  let risposta = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  // Estraggo i dati JSON dalla risposta
  let dati = await risposta.json();

  // Uso i dati ricevuti
  console.log(dati);
  console.log("Scaricamento completato!");
}

// Eseguo la funzione
ottieniDatiDaAPI();
//--------------------------------------------

/**
 * THEN vs ASYNC/AWAIT
 *
 * Entrambe le tecniche sono valide per gestire le promise.
 *
 * Usare THEN
 * 1) Stile più "classico"
 * 2) Chaining - concatenare più promise
 * 3) Casi semplici
 *
 * Usare ASYNC/AWAIT
 * 1) Leggibilità (asincrono diventa sincrono)
 * 2) Error Handling -> Try / Catch
 * 3) Operazioni complesse
 *
 */

// THEN
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Errore:", error);
  });

// ASYNC / AWAIT
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Errore:", error);
  }
}

fetchData();
//--------------------------------------------

// TRY / CATCH
try {
  // Codice che potrebbe generare un errore
} catch (errore) {
  // Codice per gestire l'errore
} finally {
  // OPZIONALE - Codice che verrà sempre eseguito
}

// ESEMPIO
// Leggere oggetto e gestire "null" o "undefined"

function ottieniValore(oggetto, chiave) {
  try {
    // Prova ad accedere alla proprietà specificata
    if (!oggetto) {
      throw new Error("Oggetto null o undefined");
    }

    // Controlla se la proprietà esiste nell'oggetto
    if (!(chiave in oggetto)) {
      throw new Error(`La proprietà "${chiave}" non esiste`);
    }

    // Restituisce il valore della proprietà
    return oggetto[chiave];
  } catch (error) {
    // Gestisce l'errore mostrando un messaggio
    console.error("Errore:", error.message);
    return null; // Valore di default in caso di errore
  }
}

// Esempi di utilizzo:

// Oggetto valido con proprietà esistente
const insegnanteFantastico = { nome: "Simone", età: 28 };
console.log(ottieniValore(insegnanteFantastico, "nome")); // Stampa "Simone"

// Oggetto valido ma proprietà inesistente
console.log(ottieniValore(insegnanteFantastico, "altezza")); // Stampa "Errore: La proprietà "altezza" non esiste"

// Oggetto null
console.log(ottieniValore(null, "nome")); // Stampa "Errore: L'oggetto è null o undefined"

// Oggetto undefined
console.log(ottieniValore(undefined, "nome")); // Stampa "Errore: L'oggetto è null o undefined"
