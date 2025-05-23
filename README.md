# Progetto Contest Nibol - Login & Signup

Questo progetto è stato realizzato per partecipare a un contest organizzato da **Nibol**.  
L'obiettivo era creare la rappresentazione di due pagine web fondamentali: **Login** e **Signup**, seguendo un template fornito su **Figma**.

---

## Tecnologie utilizzate

- **Next.js**: framework React per creare applicazioni web moderne e performanti.
- **TypeScript**: per aggiungere tipizzazione statica al progetto e migliorare la qualità del codice.
- **Tailwind CSS**: per stilizzare le pagine in modo rapido e modulare, seguendo il design di Figma.

---

## Funzionalità aggiuntive

Oltre alle due pagine richieste (Login e Signup), mi sono permesso di creare altre due pagine di supporto per migliorare la comprensione e la navigazione del progetto.

---

## Scelta dei componenti UI

Per velocizzare lo sviluppo, ho utilizzato i **componenti di Shadcn UI**.  
Le ragioni principali sono:

1. La somiglianza con il design originale di Figma, che ha reso più semplice mantenere coerenza visiva.
2. L'importanza della velocità di sviluppo in contesti laddove un progetto bisogna portarlo a termine entro una certa data, saper integrare librerie di componenti già pronte può fare una grande differenza nel rispettare le scadenze. Ovviamente ho apportato delle modifiche

---

## Note sull'autenticazione

- L'autenticazione è **fake**, quindi non si basa su un database reale (non richiesto nel contest).
- Le credenziali di login sono definite manualmente da me e anche scritte in chiaro nel codice. Troverai più in basso le credenziali corrette per effettuare il login.
- La registrazione è sempre possibile con qualsiasi dato, ma la password ha una sua validazione specifica.
- Poiché non c'è un database reale, non è possibile effettuare il login con le credenziali usate in fase di registrazione.

-L'app non fa richieste in quanto non è connessa a un backend, per cui viene simulata la fase di login e signup semplicemente nel context api

---

## Extra

Per migliorare l’esperienza utente ho aggiunto alcune funzionalità extra:

- **Loader**: indicatore di caricamento per segnalare che un’azione è in corso.
- **Spinner**: animazione per indicare attesa o caricamento.
- **Toasts**: notifiche temporanee per informare l’utente di successi, errori o altri eventi.

---

## Credenziali di accesso corrette (per login)

- **Email:** fake@email.io
- **Password:** password
