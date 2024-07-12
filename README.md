# GUI-Lib-JAVASCRIPT

```js
(async () => {
    await fetch('https://raw.githubusercontent.com/axiomxdev/GUI-Lib-JAVASCRIPT/main/index.js').then(async (response) => {
        const scriptText = response.text()
        eval(scriptText);

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
```
