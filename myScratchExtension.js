(function(Scratch) {
    'use strict';

    class MyExtension {
        constructor() {
            this.lastKey = '';

            // Écouteur d'événement pour les pressions de touche
            document.addEventListener('keydown', (event) => {
                this.lastKey = event.key;
            });
        }

        getInfo() {
            return {
                id: 'myExtension',
                name: 'My Extension',
                blocks: [
                    {
                        opcode: 'getLastKey',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'last key pressed',
                        func: 'getLastKey',
                    },
                    {
                        opcode: 'getEndChar',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'last character of [TEXT]',
                        arguments: {
                            TEXT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello, World!',
                            },
                        },
                        func: 'getEndChar',
                    },
                ],
            };
        }

        getLastKey() {
            return this.lastKey || 'No key pressed';
        }

        getEndChar(args) {
            const text = args.TEXT;
            if (text && text.length > 0) {
                return text.charAt(text.length - 1);
            } else {
                return 'No character';
            }
        }
    }

    Scratch.extensions.register(new MyExtension());
})(Scratch);
