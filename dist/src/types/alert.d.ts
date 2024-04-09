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
export declare class LovelyAlert implements IAlert<void, string> {
    /**
     * Represents the options for the LovelyAlert component.
     * @property {object} options - The options object for the LovelyAlert component.
     * @property {string} alertAttr - The attribute name used to identify alert elements.
     * @property {string} alertIndex - The attribute name used to identify the index of an alert element.
     */
    options: object;
    readonly alertAttr: string;
    readonly alertIndex: string;
    /**
     * Constructs a new LovelyAlert instance with the provided options.
     *
     * @param {object} [option] - An optional object containing options to override the default initial state.
     * @returns {void}
     */
    constructor(option?: object);
    /**
     * Initializes the alert component.
     *
     * @returns {void} - This method does not return a value.
     */
    readonly init: () => void;
    /**
     * Creates a new alert element and adds it to the document body.
     * The alert is positioned based on the configured options, and automatically
     * fades out and hides after 3 seconds.
     */
    private createAlert;
    /**
     * Adds text content to the provided HTML element and returns the modified element.
     *
     * @param {HTMLDivElement} elem - The HTML element to add text content to.
     * @returns {HTMLDivElement} - The modified HTML element with the added text content.
     */
    private addText;
    /**
     * Sets the title and paragraph content for the alert container.
     *
     * @param {HTMLDivElement} container - The container element to append the title and paragraph to.
     * @returns {HTMLDivElement} The modified container element.
     */
    private setTitle;
    /**
     * Creates a paragraph element with the specified text content.
     * @returns {HTMLParagraphElement} The created paragraph element.
     */
    private setParagraph;
    /**
     * Sets the position of an HTML element based on the specified position option.
     *
     * @param elem - The HTML element to position.
     */
    private setPosition;
    private setTranslateY;
    /**
     * Counts the number of existing alert elements on the page and returns the next index as a string.
     * @returns {string} The next available alert index as a string.
     */
    private countAlert;
}
export {};
