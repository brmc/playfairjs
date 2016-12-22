/**
 * Created by brian on 12/22/16.
 */
let DesignAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        /**
         * @type {Object}
         */
        this.size = null;

        /**
         * @type {Object}
         */
        this.padding = null;

        /**
         * @type {Array}
         */
        this.colors = null;

        /**
         * @type {boolean}
         */
        this.interactive = true;

        /**
         * @type {Number}
         */
        this.transitionDuration = 350;
    }

    /**
     * @returns {DesignAPI}
     */
    setDimensions(width, height) {
        this.size = {width, height};

        return this;
    }
    /**
     * @returns {DesignAPI}
     */
    setPadding(left=0, top=0, right=0, bottom=0) {
        this.padding = {left, top, right, bottom};

        return this;
    }

    /**
     * @param {Array} colors
     */
    setColors(colors) {
        this.colors = colors;

        return this;
    }

    /**
     * @returns {DesignAPI}
     */
    enableInteractions() {
        this.interactive = true;

        return this;
    }

    /**
     * @returns {DesignAPI}
     */
    disableInteractions() {
        this.interactive = false;

        return this;
    }

    /**
     * @returns {boolean}
     */
    isInteractive() {
        return this.interactive;
    }

    setTransitionDuration(duration) {
        this.transitionDuration = duration;

        return this;
    }
};

module.exports = DesignAPI;