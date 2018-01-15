# Forma per regjistrimin e vonesave ne pikat kufitare

## Pershkrimi i projektit

Aplikacioni per regjistrimin e vonesave ne pikat kufitare eshte zhvilluar ne plaftformen node.js duke perdorur framework-in express.js. Forma kqyesore e aplikacionit konsiston ne plotesimin e input fushave ku kerkohet fillimisht te zgjidhet pika kufitare ne nje dropdown list e me pas per ate pike kufitare plotesohen textbox-at me vonesat perkatese ne minuta per hyrje/dalje dhe metra per hyrje/dalje. Te dhenat e plotesuara, pasi klikohet butoni ***Dergo*** ruhen ne nje baze te te dhenave jo-relacionale te tipit **MongoDB** dhe mund te shikohen, editohen of fshihen direkt nga aplikacioni kryesor duke hyre ne menyne ***Te dhenat*** .

## Parakushtet
Per ta bere ***run*** aplikacionin fillimisht duhet t'i keni te instaluara:
- Node.js
- MongoDB

## Ekzekutimi i aplikacionit
Fillimisht startohet MongoDB duke hapur dy cmd (ne Windows) ose terminal (ne Linux).
Ne njeren cmd/terminal shenohet mongod kurse ne tjetren mongo.
Pas ketyre hapave MongoDB eshte running ne portin e caktuar.
Pas startimit te MongoDB aplikacioni behet run ose nga terminali i brendshem i IDE ose nga cmd/terminal duke specifikuar path-in ku gjendet aplikacioni dhe duke shkruar komanden ***nodemon app.js***. Nese komanda ekzekutohet me sukses, ne browser shkruhet ***localhost:3000***, qe eshte porti te cilin e kemi specifikuar ne, dhe hapet aplikacioni per regjistrim te vonesave ne pika kufitare.
