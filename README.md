# User manual - Manuel d'utilisateur

[En francais](#manuel-dutilisateur)

## Creating your own

First, you need to clone this repository on your machine. In a terminal window, paste this and hit enter:

```bash
git clone https://github.com/amazingphilippe/user-manual.git
```

Just to see things happening, you can start the site locally. in your terminal window, run this:

```bash
cd user-manual
npm run start
```

Your user manual with **my** info should be visible on [localhost:8080/en](http://localhost:8080/en/)! Keep that tab open and open the whole user-manual folder with a text editor. [Atom](https://atom.io/) is a great free and simple one.

## Your turn now

The first thing you'd like to probably do is to switch my name for yours! This can be done in the `/src/_data/site.js` file by changing the title property in both languages.

```json
title: "Your Name - User manual",
```

## Your user manual

You'll want to add in your user manual and configure the feedback form if you want it.

The user manual contains eight sections. You can simply overwrite the markdown section of all the files under the `/src/en/manual` and `/src/fr/manuel` folders. Just make sure to keep the front matter in place. This is the part that looks like this:

```yaml
---
title: "Things I love"
displayOrder: 7
---

```

(You **can** change it, but you don't need to.)

If you edit all the sections and check back in your browser, you should already see your changes! You may have guessed that each folder is for either French or English manuals. If you need, [Reverso](https://www.reverso.net/text_translation.aspx?lang=EN) is a quick and easy translation tool.

Good!

## Feedback form

You may want to configure an anonymous feedback form. You may have noticed two files named `feedback.md` and `feedback-success.md` alongside our manual folders.

You don't need to edit anything, but if you want to switch up the questions, you can do that in the front matter. You can only have textarea field types at the moment.

## Making this site available to the World Wide Web

This site is made to be hosted on Netlify, especially for the form. It's free, and it's easy! If you don't have an account, you'll first want to set that up.

There are a few ways to host on Netlify. By far the easiest way is to simply drag and drop your site in Netlify. To do this, in your terminal window, run this command:

```bash
npm run production
```

If you check in your finder or file explorer, you'll see that a `dist` folder just appeared. With this in hand:

1. Navigate to https://app.netlify.com/drop
2. Drop that `dist` folder right in that drag and drop box
3. Magic!:tada::sparkles:

If you signed in to Netlify, here are a few extra steps:
1. You can change the site url if you'd like to name it with your name. Completely optional.
2. To receive feedback in your email inbox, you can enable them in **Site settings > Forms > Form notifications**

That's it! You now have an amazing user manual and feedback form site for your amazing colleagues!

# Manuel d'utilisateur

## Créer ton site

D'abord, tu dois cloner ce dépôt sur ton ordi. Dans une fenêtre terminal, colle ceci et appuie sur entrer:

```bash
git clone https://github.com/amazingphilippe/user-manual.git
```

Juste pour voir la chose, tu peux éxécuter le site localement. Dans ta fenêtre terminal, colle ceci et appuie sur entrer:

```bash
cd user-manual
npm run start
```

Ton manuel d'utilisateur avec **mes** infos devrait être visible au [localhost:8080/fr](http://localhost:8080/fr/) ! Garde cet onglet ouvert et ouvre le dossier `user-manual` au complet dans un éditeur de texte. [Atom](https://atom.io/) est gratuit et très sympa.

## À toi de jouer!

La première chose est probablement de remplacer mon nom par le tien! Ceci peut être fait dans le fichier `/src/_data/site.js` en changeant la propriété titre and les deux langues.

```json
title: "Ton nom - Manuel d'utilisateur",
```

## Ton manuel d'utilisateur

Tu peux maintenant ajouter ton propre manuel et configurer le forumlaire de feedback au besoin.

Le manuel d'utilisateur contient huit sections. Tu peux simplement ré-écrire la portion markdown de tous les fichiers sous `/src/en/manual` et `/src/fr/manuel`. Garde simplement le front matter. Ça ressemble à ceci:

```yaml
---
title: "Ce que j'aime"
displayOrder: 7
---

```

(Tu **peux** changer le front matter, mais tu n'es pas obligé.)

Si tu as modifié toutes les sections, regarde à nouveau dans le navigateur, tu devrais déjà voir tes changements! T'as surement deviné que chaque dossier du manuel correspond au manuel en français, puis en anglais. [Reverso](https://www.reverso.net/text_translation.aspx?lang=FR) est utile pour traduire rapidement.

Super!

## Formulaire de feedback

Au besoin, tu peux configurer le formulaire de feedback anonyme. Si tu as remarqué les fichiers nommés `feedback.md` and `feedback-success.md`, tu as trouvé!

Pas besoin de configurer d'avantage. Si tu veux changer les questions, tu peux le faire dans le front matter. Que les champs de type textarea sont possibles en ce moment.

## Rendre ton site visible sur le Web

Ce site est conçu pour fonctionner sur Netlify, surtout à cause du formulaire. C'est gratuit et c'est facile! Si tu n'as pas déjà de compte, tu veux commencer par t'en créer un.

Il y a différentes façon de publier son site avec Netlify. De loin la plus facile, tu peux simplement déposer ton site direct sur Netlify. Pour ce faire, commence par éxécuter cette commande dans ta fenêtre terminal:

```bash
npm run production
```

Si tu jettes un coup d'oeil dans Finder ou l'exploreur de fichier, tu verras un dossier nommé `dist`. Avec cela en main:

1. Rend toi au https://app.netlify.com/drop
2. Dépose le dossier `dist` en entier dans la boîte qui dit « drag and drop »
3. Tada!:tada::sparkles:

Si tu t'es créé un compte Netlify, voici quelques étapes extra:
1. Tu peux changer l'url de ton site pour ton nom. Mais c'est optionel.
2. Pour recevoir le feeback dans tes courriels, ajoute ton courriel sous **Site settings > Forms > Form notifications**

Et voilà! Tu as maintenant un manuel d'utilisateur et un formulaire de feedback pour tes chers collègues!
