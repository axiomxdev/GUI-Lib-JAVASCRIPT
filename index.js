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
     * @param {string} options['size-width'] - Largeur de la fenêtre (par défaut : '300px').
     * @param {string} options['size-height'] - Hauteur de la fenêtre (par défaut : '400px').
     * @param {string} options['positionX'] - Position horizontale de la fenêtre (par défaut : '10%').
     * @param {string} options['positionY'] - Position verticale de la fenêtre (par défaut : '50%').
     * @param {string} options['name'] - Nom de la popup (par défaut : 'GUI Lib JAVASCRIPT').
     * @param {string} options['font'] - Police du texte de la popup (par défaut : 'sans-serif').
     * @param {string} options['font-color'] - Couleur du texte (par défaut : '#ffffff').
     * @param {string} options['close-button-color'] - Couleur du bouton pour fermer la popup (par défaut : identique à 'font-color').
     * @param {string} options['separation'] - Séparation en hauteur des modules (par défaut : '10px').
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

        // Création de la base de la popup.
        this.popup = document.createElement("div");
        this.popup.className = "mypopup"; // Ajout d'une classe pour la popup
        this.popup.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown-dark.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/github-dark-dimmed.min.css">
        `;

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
            transition: "width 0.2s, height 0.3s"
        });

        // Bouton de reduction
        const minusButton = document.createElement("button");
        minusButton.innerHTML = "&#8722;"; // Utilisation du symbole Unicode pour le moins
        Object.assign(minusButton.style, {
            position: "absolute",
            right: "38px",
            background: "transparent",
            color: this.closeButtonColor,
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
            padding: "5px",
            borderRadius: "15px",
            transition: "background-color 0.3s"
        });
        minusButton.onmouseover = () => minusButton.style.backgroundColor = this.secondColor;
        minusButton.onmouseout = () => minusButton.style.backgroundColor = "transparent";
        minusButton.onclick = () => this.togglePopupSize();
        this.popup.appendChild(minusButton);

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
        closeButton.onclick = () => {

            this.popup.style.width = '0px';
            setTimeout(() => {
                this.popup.remove()
            }
            , 200);
        };
        this.popup.appendChild(closeButton);

        // Ajoute le reste du contenu de base de la popup.
        this.popupContent = document.createElement("div");
        this.popupContent.className = "popup-content";
        Object.assign(this.popupContent.style, {
            height: `calc(${this.sizeHeight})`
        });

        const header = document.createElement("div");
        header.className = "popup-header";
        Object.assign(header.style, {
            lineHeight: '30px',
            top: '0px',
            height: '30px',
            fontSize: '18px'
        });
        header.textContent = this.name;

        const bar = document.createElement("div");
        bar.className = "popup-bar";
        Object.assign(bar.style, {
            top: '30px',
            height: '3px',
            background: this.secondColor
        });

        const popupContentScroll = document.createElement("div");
        popupContentScroll.className = "popup-content-scroll";
        Object.assign(popupContentScroll.style, {
            height: `calc(${this.sizeHeight} - 33px)`,
            width: `calc(${this.sizeWidth} - 5px)`,
            overflowY: 'auto',
        });
        
        // Pour les navigateurs Webkit (Chrome, Safari, Edge)
        const style = document.createElement("style");
        style.textContent = `
            .popup-content-scroll::-webkit-scrollbar {
                width: 10px;
            }
        
            .popup-content-scroll::-webkit-scrollbar-thumb {
                background-color: ${this.secondColor};
                border-radius: 10px;
            }
        
            .popup-content-scroll::-webkit-scrollbar-track {
                background: transparent;
                border-radius: 10px;
            }
        
            .popup-content-scroll::-webkit-scrollbar-button {
                display: none;
            }
        `;
        document.head.appendChild(style);

        this.popupContentModule = document.createElement("div");
        this.popupContentModule.className = "popup-content-module";
        Object.assign(this.popupContentModule.style, {
            height: `(${this.sizeHeight} - 33)px`,
            width: `calc(${this.sizeWidth} - 20px)`,
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column'
        });
        this.popupContentModule.innerHTML = `
        <div style="margin-top: ${this.separation}"></div>
        `;

        this.popupContent.appendChild(header);
        this.popupContent.appendChild(bar);
        this.popupContent.appendChild(popupContentScroll);
        popupContentScroll.appendChild(this.popupContentModule);
        this.popup.appendChild(this.popupContent);

        // Ajout de la popup au corps de la page web.
        document.body.appendChild(this.popup);

        // Activation du déplacement de la popup.
        this.dragElement(this.popup);
    }

    /**
     * Calcule des valeurs en pixels.
     * @param {string} value - Valeur à calculer.
     * @returns {string} - Valeur calculée en pixels.
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
     * Permet de déplacer la popup.
     * @param {object} elmnt - Élément à déplacer.
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
     * @param {string} ButtonOptions['label'] - Texte du bouton (par défaut : 'Button').
     * @param {string} ButtonOptions['size-height'] - Hauteur du bouton (par défaut : '50px').
     * @param {string} ButtonOptions['font-color'] - Couleur du texte du bouton (par défaut : this.fontcolor).
     * @param {string} ButtonOptions['Xseparation'] - Distance entre la bordure de la popup et le bouton (par défaut : '10px').
     * @param {string} ButtonOptions['font-size'] - Taille du texte du bouton (par défaut : '18px').
     * @param {function} ButtonOptions['callback'] - Fonction de rappel pour le clic sur le bouton (par défaut : fonction vide).
     * @returns {MyPopup} - L'instance de MyPopup pour permettre le chaînage des méthodes.
     */
    addButton(ButtonOptions) {
        const label = ButtonOptions['label'] || 'Button';
        const Xseparation = ButtonOptions['Xseparation'] || '10px';
        const sizeheight = ButtonOptions['size-height'] || '50px';
        const sizewidth = this.addPixelValues(this.sizeWidth+'-'+Xseparation+'-'+Xseparation+'-10px');
        const fontcolor = ButtonOptions['font-color'] || this.fontcolor;
        const fontsize = ButtonOptions['font-size'] || '18px';
        const marginTop = this.separation;
        const callback = ButtonOptions['callback'] || function() {};

        // créer l'élément du button
        const buttonContent = document.createElement("div");
        buttonContent.innerHTML = `
        <div class="popup-button" style="border-radius: 10px; margin-left: 10px; margin-bottom: ${marginTop}; line-height: ${sizeheight}; width:${sizewidth}; height: ${sizeheight}; background: ${this.secondColor}; font-size: ${fontsize}; color: ${fontcolor}; cursor: pointer;">
            ${label}
        </div>
        `;
        buttonContent.addEventListener("click", (e) => {
            callback(e);
        });

        this.popupContentModule.appendChild(buttonContent);

        return this;
    }

    /**
     * Ajoute du texte à la popup.
     * @param {object} TextOptions - Options de configuration pour le module addText.
     * @param {string} TextOptions['text'] - Texte à afficher (par défaut : 'Text').
     * @param {string} TextOptions['Xseparation'] - Distance entre la bordure de la popup et le texte (par défaut : '10px').
     * @param {string} TextOptions['size-height'] - Hauteur du texte (par défaut : '50px').
     * @param {string} TextOptions['font-color'] - Couleur du texte (par défaut : this.fontcolor).
     * @param {string} TextOptions['font-size'] - Taille du texte (par défaut : '12px').
     * @param {string} TextOptions['text-align'] - Alignement du texte (par défaut : 'center').
     * @param {string} TextOptions['padding'] - Padding du texte (par défaut : '5px').
     * @returns {MyPopup} - L'instance de MyPopup pour permettre le chaînage des méthodes.
     */
    addText(TextOptions) {
        const text = TextOptions['text'] || 'Text';
        const Xseparation = TextOptions['Xseparation'] || '10px';
        const sizeheight = TextOptions['size-height'] || '50px';
        const sizewidth = this.addPixelValues(this.sizeWidth+'-'+Xseparation+'-'+Xseparation+'-10px');
        const fontcolor = TextOptions['font-color'] || this.fontcolor;
        const fontsize = TextOptions['font-size'] || '12px';
        const textAlign = TextOptions['text-align'] || 'center';
        const padding = TextOptions['padding'] || '5px';
        const marginTop = this.separation;

        const textContent = document.createElement("article");
        Object.assign(textContent.style, {
            borderRadius: '10px',
            marginBottom: marginTop,
            marginLeft: '10px',
            width: sizewidth,
            height: sizeheight,
            background: this.secondColor,
            fontSize: fontsize,
            color: fontcolor,
            cursor: 'default',
            textAlign: textAlign,
            overflow: 'hidden'
        });

        const innerDiv = document.createElement("div");
        Object.assign(innerDiv.style, {
            padding: padding,
            overflow: 'auto',
            height: '100%',
            width: '100%',
            scrollbarWidth: 'none', // Hide scrollbar for Firefox
            msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer and Edge
            '-webkit-overflow-scrolling': 'touch', // Hide scrollbar for WebKit browsers (Chrome, Safari)
            wordWrap: 'break-word', // Enable word wrapping for long text
            lineHeight: '1.5', // Set line height to a reasonable value
            whiteSpace: 'pre-wrap' // Ensure text wraps within the div
        });

        // Transform markdown to HTML
        const scriptMarkdown = document.createElement('script');
        scriptMarkdown.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
        scriptMarkdown.onload = () => {
            const htmlContent = marked.parse(text);
            innerDiv.innerHTML = htmlContent;

            // Remove padding from children
            Array.from(innerDiv.children).forEach(child => {
                child.style.margin = '0';
            });
            
            // Apply syntax highlighting
            const scriptHighlight = document.createElement('script');
            scriptHighlight.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js';
            scriptHighlight.onload = () => hljs.highlightAll();
            document.head.appendChild(scriptHighlight);
        };
        document.head.appendChild(scriptMarkdown);

        // Adjust the scrolling speed
        innerDiv.addEventListener('wheel', (e) => {
            e.preventDefault();
            innerDiv.scrollTop += e.deltaY * 0.2; // Adjust the multiplier to control the speed
        });

        textContent.appendChild(innerDiv);
        this.popupContentModule.appendChild(textContent);

        return this;
    }
}
