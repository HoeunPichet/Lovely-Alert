export class Testing {
    constructor () {
        this.init();
    }

    init = () : void => {
        console.log("Hello")
    }
}

(window as any).Testing = Testing;