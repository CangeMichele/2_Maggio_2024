// Funzione per scaricare i dati da un'API
async function fetchPosts() {
  try {
    // Effettua una richiesta GET all'API
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Verifica se la risposta è stata ottenuta correttamente
    if (!response.ok) {
      throw new Error("Errore nella richiesta");
    }

    // Converti la risposta in formato JSON
    let posts = await response.json();

    // Salva i dati convertiti nel localStorage come stringa JSON
    localStorage.setItem("posts", JSON.stringify(posts));

    // Console.log di conferma
    console.log("Post scaricati e salvati nel localStorage");
  } catch (error) {
    // Gestisce gli errori che possono verificarsi
    // durante la richiesta
    console.error("Errore nel fetch");
  }
}

// Funzione per recuperare i dati dal localStorage
function caricaDatiDaLocalStorage() {
  // Recupera la stringa JSON dal localStorage
  let posts = localStorage.getItem("posts");

  if (posts) {
    // Restituisce l'array convertito (se esiste)
    return JSON.parse(posts);
  } else {
    // Informa l'utente se non ci sono dati nel localStorage
    console.log("Nessun post trovato nel localStorage");
    return []; // Se non ci sono dati restituisco un array vuoto
  }
}

// Funzione principale per gestire i post
async function gestisciPosts() {
  // Prova a caricare i dati dal localStorage
  let posts = caricaDatiDaLocalStorage();

  // Se non ci sono post nel localStorage, scaricali dall'API
  if (posts.length === 0) {
    // Chiama fetchPosts per scaricare i dati
    // e attendi il completamento
    await fetchPosts();
    // Ricarica i post dal localStorage dopo il fetch
    posts = caricaDatiDaLocalStorage();
  }

  // Utilizza i dati scaricati
  console.log("Post da utilizzare:", posts);
}

// Esegui la funzione principale
gestisciPosts();
