Formatter = require('../formatters/Formatter');

class Axis {
    constructor() {
        /**
         * @type {Formatter}
         * @private
         */
        this._formatter = null;

        /**
         * @type {string}
         * @private
         */
        this._label = '';
    }

    /**
     * @param {string} val
     * @returns {Axis}
     */
    setLabel(val) {
        this._label = val;

        return this;
    };

    /**
     * @returns {string}
     */
    getLabel() {
        return this._label;
    };

    /**
     * @param {Formatter} formatter
     * @returns {Axis}
     */
    setFormatter(formatter) {
        this._formatter = formatter;

        return this;
    };

    /**
     * @returns {Formatter}
     */
    getFormatter() {
        return this._formatter;
    }
}

module.exports = Axis;