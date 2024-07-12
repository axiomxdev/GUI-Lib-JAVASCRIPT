/**
 * Classe pour la création de la popup.
 * @class
 */
class MyPopup {
    /**
     * Crée une nouvelle instance de MyPopup.
     * @param {Object} options - Options de configuration pour la fenêtre contextuelle.
     * @param {string} options['main-color'] - Couleur principale de la fenêtre (par défaut : '#000000').
     * @param {string} options['second-color'] - Deuxième couleur de la fenêtre (par défaut : '#999999').
     * @param {string} options['size-width'] - Hauteur de la fenêtre (par défaut : '300px').
     * @param {string} options['size-height'] - Largeur de la fenêtre (par défaut : '400px').
     * @param {string} options['positionX'] - Position horizontale de la fenêtre (par défaut : '10%').
     * @param {string} options['positionY'] - Position verticale de la fenêtre (par défaut : '50%').
     * @param {string} options['name'] - Nom de la popup (par défaut : 'GUI Lib JAVASCRIPT').
     * @param {string} options['font'] - Font du texte de la popup (par défaut : 'sans-serif').
     * @param {string} options['font-color'] - Couleur du text (par défaut : '#ffffff').
     * @param {string} options['close-button-color'] - Couleur du boutton pour fermer la popup (par défaut : identique à 'font-color')
     * @param {string} options['separation'] - séparation en hauteur des modules (par défaut : '10px').
     */
    constructor(options) {
        // Initialisation des paramètres de la popup.
        this.mainColor = options['main-color'] || '#000000';
        this.secondColor = options['second-color'] || '#999999';
        this.sizeWidth = options['size-width'] || '300px';
        this.sizeHeight = options['size-height'] || '400px';
        this.positionX = options['positionX'] || '10%';
        this.positionY = options['positionY'] || '50%';
        this.name = options['name'] || 'GUI Lib JAVASCRIPT';
        this.font = options['font'] || 'sans-serif';
        this.fontcolor = options['font-color'] || '#ffffff';
        this.closeButtonColor = options['close-button-color'] || this.fontcolor;
        this.separation = options['separation'] || '10px'

        // Initialisation des variables de la poup.
        this.closed = false;
        this.nexteModulesize = this.addPixelValues('32px'+this.separation);

        // Création de la base de la popup.
        this.popup = document.createElement("div");
        this.popup.className = "mypopup"; // Ajout d'une classe pour la popup

        // Ajout des styles CSS à la base de la popup.
        Object.assign(this.popup.style, {
            userSelect: 'none',
            overflow: 'hidden',
            display: "block",
            position: "fixed",
            top: this.positionY,
            left: this.positionX,
            width: this.sizeWidth,
            height: this.sizeHeight,
            background: this.mainColor,
            borderRadius: "10px",
            color: this.fontcolor,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "9999",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            fontFamily: this.font,
            borderWidth: "3px",
            borderColor: this.secondColor,
            transition: "width 0.3s, height 0.3s"
        });

        // Bouton de fermeture
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&#10005;"; // Utilisation du symbole Unicode pour la croix
        Object.assign(closeButton.style, {
            position: "absolute",
            right: "8px",
            background: "transparent",
            color: this.closeButtonColor,
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            padding: "5px",
            borderRadius: "15px",
            transition: "background-color 0.3s"
        });
        closeButton.onmouseover = () => closeButton.style.backgroundColor = this.secondColor;
        closeButton.onmouseout = () => closeButton.style.backgroundColor = "transparent";
        closeButton.onclick = () => this.togglePopupSize();
        this.popup.appendChild(closeButton);

        // Ajoute le reste du contenu de base de la popup.
        this.popupContent = document.createElement("div");
        this.popupContent.className = "popup-content";
        this.popupContent.innerHTML = `
            <div class="popup-header" style="line-height: 30px; top: 0px; height: 30px; font-size: 18px;">
                ${this.name}
            </div>
            <div class="popup-bar" style="top: 30px; height: 3px; background: ${this.secondColor}"></div>
        `;
        this.popup.appendChild(this.popupContent);

        // Ajout de la popup au corps de la page web.
        document.body.appendChild(this.popup);

        // Activation du déplacement de la popup.
        this.dragElement(this.popup);
    }
    /**
     * 
     * @param {string} value - Calcule des pixel
     * @returns 
     */
    addPixelValues(value) {
        let result = 0;
        value.split('px').forEach(function(part) {
            const value = parseInt(part); // Convertit la partie en nombre
            if (!isNaN(value)) { // Vérifie si la conversion a réussi
                result += value;
            }
        });
        return result + 'px';
    }
    

    /**
     * Alterne la taille de la popup entre la taille normale et la taille réduite.
     */
    togglePopupSize() {
        if (this.closed) {
            // Si la popup est déjà réduite, restaurer sa taille normale
            this.popup.style.height = this.sizeHeight;

            this.closed = false;
        } else {
            // Si la popup est à sa taille normale, la réduire à une taille spécifique
            this.popup.style.height = '30px';

            this.closed = true;
        };
    };

    /**
     * 
     * @param {object} elmnt 
     */
    dragElement(elmnt) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        elmnt.onmousedown = function (e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        };

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = elmnt.offsetTop - pos2 + "px";
            elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    /**
     * Ajoute un bouton à la popup.
     * @param {object} ButtonOptions - Options de configuration pour le module addButton.
     * @param {string} ButtonOptions['label'] - Text du button (par défaut : 'Button').
     * @param {string} ButtonOptions['size-height'] - Hauteur du button (par défaut : '50px').
     * @param {string} ButtonOptions['font-color'] - Couleur du text du button (par défaut : this.fontcolor).
     * @param {string} ButtonOptions['Xseparation'] - Distance entre la bordure de la popup et le Button (par défaut : '10px').
     * @param {string} ButtonOptions['font-size'] - Taille du text du button (par défaut : '18px').
     * @returns {MyPopup} - L'instance de MyPopup pour permettre le chaînage des méthodes.
     */
    addButton(ButtonOptions) {
        const label = ButtonOptions['label'] || 'Button';
        const Xseparation = ButtonOptions['Xseparation'] || '10px';
        const sizeheight = ButtonOptions['size-height'] || '50px';
        const sizewidth = this.addPixelValues(this.sizeWidth+'-'+Xseparation+'-'+Xseparation);
        const fontcolor = ButtonOptions['font-color'] || this.fontcolor;
        const fontsize = ButtonOptions['font-size'] || '18px';
        const posX = Xseparation
        const posY = this.nexteModulesize;

        // calcul de la position du prochain module
        this.nexteModulesize = this.addPixelValues(this.nexteModulesize+this.separation+sizeheight)

        // créer l'élément du button
        const buttonContent = document.createElement("div");

        buttonContent.innerHTML = `
        <div style="border-radius: 10px; position: absolute; top: ${posY}; left: ${posX};line-height: ${sizeheight}; width:${sizewidth}; height: ${sizeheight}; background: ${this.secondColor}; font-size: ${fontsize}; color: ${fontcolor};">
            ${label}
        </div>
        `;

        this.popupContent.appendChild(buttonContent);

        return this; // Permet de chaîner les méthodes
    }
}

window.addEventListener('load', function () {
    // Exemple de construction de la popup.
    new MyPopup({
        'name': 'GUI Lib JAVASCRIPT',
        'main-color': '#45414F',
        'second-color': '#302D39',
        'size-width': '400px',
        'size-height': '300px',
        'positionX': '400px',
        'positionY': '100px',
        'font-color': '#ffffff',
        'close-button-color': '#ffffff',
        'separation': '10px'
    }).addButton({
        'label': 'Button',
        'size-height': '50px',
        'font-color': '#ffffff',
        'Xseparation': '10px',
        'font-size': '18px' 
    });
});