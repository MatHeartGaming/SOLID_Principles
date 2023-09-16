(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {}
    }

    class InputEvents {
        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface Inputs {
        id : string, 
        type : HtmlType,
        value : string, 
        placeholder : string
    }

    class InputElement {
        
        public htmlElement      : HtmlElement;
        public inputAttributes  : InputAttributes;
        public inputEvents      : InputEvents;

        constructor({
            id, type,
            value, placeholder} : Inputs ){

                this.htmlElement = new HtmlElement(id, type);
                this.inputAttributes = new InputAttributes(value, placeholder);
                this.inputEvents = new InputEvents();
            }

    }


    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({
        id: '1',
        type: "select",
        value: "Matteo",
        placeholder: "Enter name...",
    });

    console.log({ nameField });

})()