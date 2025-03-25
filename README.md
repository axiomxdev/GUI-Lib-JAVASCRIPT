# GUI-Lib-JAVASCRIPT

```js
(async () => {
    await fetch('https://raw.githubusercontent.com/axiomxdev/GUI-Lib-JAVASCRIPT/main/index.js').then(async (response) => {
        eval(response.text());

        new MyPopup({
            'name': 'GUI Lib JAVASCRIPT',
            'main-color': '#45414F',
            'second-color': '#302D39',
            'size-width': '800px',
            'size-height': '600px',
            'positionX': '40px',
            'positionY': '10px',
            'font-color': '#ffffff',
            'close-button-color': '#ffffff',
            'separation': '10px'
        }).addButton({
            'label': 'Button',
            'sizeHeight': '50px',
            'fontColor': '#ffffff',
            'Xseparation': '10px',
            'fontSize': '18px',
            'callback': console.log('Button clicked!')
        }).addText({
            'text':
`**GUI-Lib-JAVASCRIPT** is a library that allows you to **create a popup** window with buttons and text in a simple way.
You can **customize the colors**, **size**, **position**, **font size**, **font color**, **text alignment**, **padding** and **separation** between elements.
\`\`\`js
new MyPopup({
    'name': 'GUI Lib JAVASCRIPT',
    'main-color': '#45414F',
    'second-color': '#302D39',
    'size-width': '400px',
    'size-height': '300px',
    'positionX': '40px',
    'positionY': '10px',
    'font-color': '#ffffff',
    'close-button-color': '#ffffff',
    'separation': '10px'
}).addButton({
    'label': 'Button',
    'sizeHeight': '50px',
    'fontColor': '#ffffff',
    'Xseparation': '10px',
    'fontSize': '18px',
    'callback': () => console.log('Button clicked!')
})
\`\`\`
or you can use same this :
\`\`\`js
(async () => {
    await fetch('https://raw.githubusercontent.com/axiomxdev/GUI-Lib-JAVASCRIPT/main/index.js').then(async (response) => {
        eval(response.text());

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
})();
\`\`\`
`,
            'Xseparation': '10px',
            'size-height': '400px',
            'padding': '5px',
            'text-align': 'left',
            'font-color': '#ffffff',
            'font-size': '12px'
        }).addText({
            'Xseparation': '10px',
            'size-height': '400px',
            'padding': '5px',
            'text-align': 'left',
            'font-color': '#ffffff',
            'font-size': '12px',
            'text': `<iframe src="https://example.com" width="800" height="600" style="border:none;"></iframe>`
        });

        new MyPopup({
            'name': 'GUI Lib JAVASCRIPT',
            'main-color': '#45414F',
            'second-color': '#302D39',
            'size-width': '800px',
            'size-height': '600px',
            'positionX': '40px',
            'positionY': '10px',
            'font-color': '#ffffff',
            'close-button-color': '#ffffff',
            'separation': '10px'
        }).addButton({
            'label': 'Button',
            'sizeHeight': '50px',
            'fontColor': '#ffffff',
            'Xseparation': '10px',
            'fontSize': '18px',
            'callback': console.log('Button clicked!')
        }).addText({
            'text':
`**GUI-Lib-JAVASCRIPT** is a library that allows you to **create a popup** window with buttons and text in a simple way.
You can **customize the colors**, **size**, **position**, **font size**, **font color**, **text alignment**, **padding** and **separation** between elements.
\`\`\`js
new MyPopup({
    'name': 'GUI Lib JAVASCRIPT',
    'main-color': '#45414F',
    'second-color': '#302D39',
    'size-width': '400px',
    'size-height': '300px',
    'positionX': '40px',
    'positionY': '10px',
    'font-color': '#ffffff',
    'close-button-color': '#ffffff',
    'separation': '10px'
}).addButton({
    'label': 'Button',
    'sizeHeight': '50px',
    'fontColor': '#ffffff',
    'Xseparation': '10px',
    'fontSize': '18px',
    'callback': () => console.log('Button clicked!')
})
\`\`\`
or you can use same this :
\`\`\`js
(async () => {
    await fetch('https://raw.githubusercontent.com/axiomxdev/GUI-Lib-JAVASCRIPT/main/index.js').then(async (response) => {
        eval(response.text());

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
})();
\`\`\`
`,
            'Xseparation': '10px',
            'size-height': '400px',
            'padding': '5px',
            'text-align': 'left',
            'font-color': '#ffffff',
            'font-size': '12px'
        }).addText({
            'Xseparation': '10px',
            'size-height': '400px',
            'padding': '5px',
            'text-align': 'left',
            'font-color': '#ffffff',
            'font-size': '12px',
            'text': `<iframe src="https://example.com" width="800" height="600" style="border:none;"></iframe>`
        });
    });
})();

```
