# GUI-Lib-JAVASCRIPT

**GUI-Lib-JAVASCRIPT** est une bibliothèque légère pour créer des fenêtres popup personnalisables avec des boutons et du texte. Elle permet de configurer facilement les couleurs, tailles, positions, polices, et bien plus.

## Fonctionnalités
- Créez des fenêtres popup avec des dimensions et positions personnalisables.
- Ajoutez des boutons avec des styles configurables et des fonctions de rappel.
- Ajoutez du texte avec prise en charge du markdown et de la mise en évidence syntaxique.
- Couleurs, polices, marges et espacements entièrement personnalisables.
- Fenêtres popup déplaçables avec des animations fluides.

## Installation
Incluez la bibliothèque dans votre projet :
```html
<script src="./GUI-Lib-JAVASCRIPT.js"></script>
```

Ou utilisez cette méthode pour charger dynamiquement la bibliothèque depuis un CDN :
```js
(async () => {
    await fetch('https://raw.githubusercontent.com/axiomxdev/GUI-Lib-JAVASCRIPT/main/index.js').then(async (response) => {
        eval(await response.text());
    });
})();
```

## Utilisation
### Exemple de base
```js
new MyPopup({
    'name': 'Mon Popup',
    'main-color': '#45414F',
    'second-color': '#302D39',
    'size-width': '400px',
    'size-height': '300px',
    'positionX': '50px',
    'positionY': '50px',
    'font-color': '#ffffff',
    'close-button-color': '#ffffff',
    'separation': '10px'
}).addButton({
    'label': 'Cliquez-moi',
    'size-height': '50px',
    'font-color': '#ffffff',
    'Xseparation': '10px',
    'font-size': '18px',
    'callback': () => alert('Bouton cliqué !')
}).addText({
    'text': '**Bonjour le monde !** Ceci est une fenêtre popup personnalisable.',
    'Xseparation': '10px',
    'size-height': '100px',
    'font-color': '#ffffff',
    'font-size': '14px',
    'text-align': 'center',
    'padding': '10px'
});
```

### Markdown, HTML et mise en évidence syntaxique
Vous pouvez utiliser du markdown ou du HTML pour le contenu textuel. Voici un exemple avec une iframe intégrée :
```js
new MyPopup({
    'name': 'Exemple de Code',
    'main-color': '#45414F',
    'second-color': '#302D39',
    'size-width': '500px',
    'size-height': '400px',
    'positionX': '100px',
    'positionY': '100px',
    'font-color': '#ffffff',
    'close-button-color': '#ffffff',
    'separation': '10px'
}).addText({
    'text': `
# Exemple Markdown
## Titre 1
## Titre 2
 - etc
  - ...
<h3>Exemple HTML</h3>
<iframe src="https://www.example.com" width="100%" height="200" style="border:none;"></iframe>
<p>Vous pouvez intégrer des éléments HTML comme cette iframe.</p>
    `,
    'Xseparation': '10px',
    'size-height': '300px',
    'font-color': '#ffffff',
    'font-size': '14px',
    'text-align': 'left',
    'padding': '10px'
});
```

### Fenêtres popup déplaçables
Toutes les fenêtres popup sont déplaçables par défaut. Cliquez et faites glisser la fenêtre pour la repositionner.

## Référence de l'API
### `MyPopup(options)`
Crée une nouvelle fenêtre popup.
- **`options`** : Objet de configuration avec les propriétés suivantes :
  - `name` : Titre de la fenêtre popup (par défaut : `'GUI Lib JAVASCRIPT'`).
  - `main-color` : Couleur de fond de la fenêtre popup (par défaut : `'#000000'`).
  - `second-color` : Couleur secondaire pour les bordures et accents (par défaut : `'#999999'`).
  - `size-width` : Largeur de la fenêtre popup (par défaut : `'300px'`).
  - `size-height` : Hauteur de la fenêtre popup (par défaut : `'400px'`).
  - `positionX` : Position horizontale (par défaut : `'10%'`).
  - `positionY` : Position verticale (par défaut : `'50%'`).
  - `font-color` : Couleur du texte (par défaut : `'#ffffff'`).
  - `close-button-color` : Couleur du bouton de fermeture (par défaut : identique à `font-color`).
  - `separation` : Espacement entre les éléments (par défaut : `'10px'`).

### `addButton(ButtonOptions)`
Ajoute un bouton à la fenêtre popup.
- **`ButtonOptions`** : Objet de configuration avec les propriétés :
  - `label` : Texte du bouton (par défaut : `'Button'`).
  - `size-height` : Hauteur du bouton (par défaut : `'50px'`).
  - `font-color` : Couleur du texte du bouton (par défaut : `font-color` de la fenêtre popup).
  - `Xseparation` : Marge horizontale (par défaut : `'10px'`).
  - `font-size` : Taille de la police (par défaut : `'18px'`).
  - `callback` : Fonction à exécuter lors du clic sur le bouton (par défaut : `() => {}`).

### `addText(TextOptions)`
Ajoute du contenu textuel à la fenêtre popup.
- **`TextOptions`** : Objet de configuration avec les propriétés :
  - `text` : Contenu textuel (prend en charge le markdown et le HTML).
  - `Xseparation` : Marge horizontale (par défaut : `'10px'`).
  - `size-height` : Hauteur du bloc de texte (par défaut : `'50px'`).
  - `font-color` : Couleur du texte (par défaut : `font-color` de la fenêtre popup).
  - `font-size` : Taille de la police (par défaut : `'12px'`).
  - `text-align` : Alignement du texte (par défaut : `'center'`).
  - `padding` : Espacement interne du bloc de texte (par défaut : `'5px'`).

## Licence
Ce projet est sous licence MIT.
