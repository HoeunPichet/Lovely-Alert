/**
 * Defines the interface for an alert component, with generic type parameters for the return value of the `init` method and the types of the `alertAttr` and `alertIndex` properties.
 * 
 * @template V - The return type of the `init` method.
 * @template S - The type of the `alertAttr` and `alertIndex` properties.
 */
interface IAlert<V, S> {
    /**
     * The attribute name used to identify alert elements.
     */
    readonly alertAttr: S;

    /**
     * The attribute name used to identify the index of an alert element.
     */
    readonly alertIndex: S;

    /**
     * Initializes the alert component.
     *
     * @returns {V} - The return value of the initialization process.
     */
    init: () => V;
}

/**
 * Defines the initial state of an alert, including its title, text, and position.
 */
type Initial = {
    title: string;
    text: string;
    position: string;
    fadeOut: number;
};

/**
 * Defines the initial state of an alert, including its title, text, and position.
 */
const Initial = {
    title: "Lovely Alert",
    text: "An opinionated toast component for Lovely Alert",
    position: "top-right",
    fadeOut: 3000,
};

export class LovelyAlert implements IAlert<void, string> {
    /**
     * Represents the options for the LovelyAlert component.
     * @property {object} options - The options object for the LovelyAlert component.
     * @property {string} alertAttr - The attribute name used to identify alert elements.
     * @property {string} alertIndex - The attribute name used to identify the index of an alert element.
     */
    options: object;
    readonly alertAttr: string = "data-lovely-alert";
    readonly alertIndex: string = "alert-index";


    /**
     * Constructs a new LovelyAlert instance with the provided options.
     *
     * @param {object} [option] - An optional object containing options to override the default initial state.
     * @returns {void}
     */
    constructor(option?: object) {
        this.options = { ...Initial, ...option };
        this.alertAttr = this.alertAttr;
        this.alertIndex = this.alertIndex;
        this.init();
    }

    /**
     * Initializes the alert component.
     *
     * @returns {void} - This method does not return a value.
     */
    readonly init = (): void => {
        this.createAlert();
    }

    /**
     * Creates a new alert element and adds it to the document body.
     * The alert is positioned based on the configured options, and automatically
     * fades out and hides after 3 seconds.
     */
    private createAlert = (): void => {
        let count: string = this.countAlert();
        const option: any = this.options;

        const element = document.createElement('lovely-alert');
        element.setAttribute(this.alertAttr, 'true');
        element.setAttribute(this.alertIndex, count);
        element.classList.add("fixed", "max-w-sm", "z-50", "transition-all", "duration-500", "ease-in-out");
        this.setPosition(element);
        setTimeout(() => {
            element.classList.add("opacity-0");
            setTimeout(() => {
                element.classList.add("hidden");
            }, 500);
        }, option.fadeOut);

        // this.setTranslateY();

        const finalPopup = this.addText(element);

        document.body.appendChild(finalPopup);
    }

    /**
     * Adds text content to the provided HTML element and returns the modified element.
     *
     * @param {HTMLDivElement} elem - The HTML element to add text content to.
     * @returns {HTMLDivElement} - The modified HTML element with the added text content.
     */
    private addText = (elem: any): HTMLDivElement => {
        const element: HTMLDivElement = elem as HTMLDivElement;
        const container: any = document.createElement('div');
        container.classList.add("p-4", "bg-white", "rounded-sm", "shadow-xl", "flex", "flex-col", "justify-center", "w-full");
        const innerElem: any = this.setTitle(container);

        element.appendChild(innerElem);

        return element;
    }

    /**
     * Sets the title and paragraph content for the alert container.
     *
     * @param {HTMLDivElement} container - The container element to append the title and paragraph to.
     * @returns {HTMLDivElement} The modified container element.
     */
    private setTitle = (container: any): void => {
        const option: any = this.options;

        const title: string = option.title || null;
        const paragraph: HTMLParagraphElement = this.setParagraph();

        const heading = document.createElement('h1');
        heading.classList.add("font-medium", "text-lg", "text-slate-600");
        heading.innerHTML = title;

        title ? container.appendChild(heading) : "";
        paragraph ? container.appendChild(paragraph) : "";

        return container;
    }

    /**
     * Creates a paragraph element with the specified text content.
     * @returns {HTMLParagraphElement} The created paragraph element.
     */
    private setParagraph = (): HTMLParagraphElement => {
        const option: any = this.options;
        const text: string = option.text || null;

        const paragraph = document.createElement('p');
        paragraph.classList.add("font-normal", "text-sm", "text-slate-500");
        paragraph.innerHTML = text;

        return paragraph;
    }

    /**
     * Sets the position of an HTML element based on the specified position option.
     *
     * @param elem - The HTML element to position.
     */
    private setPosition = (elem: any): void => {
        const option: any = this.options;
        const position: string = option.position || "top-right";
        const element: HTMLDivElement = elem;

        if (position === "top-left") {
            element.classList.add("top-5", "-left-full");
            setTimeout(() => {
                element.classList.remove("-left-full");
                element.classList.add("left-5");
            }, 50);
        } else if (position === "bottom-left") {
            element.classList.add("bottom-5", "-left-full");
            setTimeout(() => {
                element.classList.remove("-left-full");
                element.classList.add("left-5");
            }, 50);
        } else if (position === "bottom-right") {
            element.classList.add("bottom-5", "right-5");
            setTimeout(() => {
                element.classList.remove("-right-full");
                element.classList.add("right-5");
            }, 50);
        } else {
            element.classList.add("top-5", "-right-full");
            setTimeout(() => {
                element.classList.remove("-right-full");
                element.classList.add("right-5");
            }, 50);
        }
    }

    private setTranslateY = () : void => {
        const elem = document.querySelectorAll(`[${this.alertAttr}]`) || [];
        let validElem: any = [];

        Array.from(elem).forEach((element: any, index: number) => {

            if (index < (elem.length - 4)) {
                element.classList.add("hidden");
                element.setAttribute(this.alertAttr, "false");
            } else {
                validElem.push(element);
            }
        });

        if (validElem.length > 1) {
            Array.from(validElem).forEach((item: any, index: number) => {

                let k: number = 1;
                const y: string = "-translate-y-[" + String(k * 20) + "px]";

                if (index != (validElem.length)) {
                    item.classList.add("translate-y-0");
                    setTimeout(() => {
                        item.classList.remove("translate-y-0");
                        item.classList.add(y);
                    }, 50);
                    k++;
                }
            });
        }
    }

    /**
     * Counts the number of existing alert elements on the page and returns the next index as a string.
     * @returns {string} The next available alert index as a string.
     */
    private countAlert = (): string => {
        const elem = document.querySelectorAll(`[${this.alertAttr}]`) || [];
        const lengthElem: number = elem.length + 1 || 1;

        return String(lengthElem);
    }
}
