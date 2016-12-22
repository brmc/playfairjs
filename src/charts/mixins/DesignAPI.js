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
    }

    setDimensions(width, height) {
        this.size = {width, height};

        return this;
    }

    setPadding(left=0, top=0, right=0, bottom=0) {
        this.padding = {left, top, right, bottom};

        return this;
    }

    /**
     * @param {Array} colors
     */
    setColors(colors) {
        this.colors = colors;
    }
};

module.exports = DesignAPI;