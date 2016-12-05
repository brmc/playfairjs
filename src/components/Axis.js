var Formatter = require('../formatters/Formatter');

class Axis {
    constructor() {
        /**
         * @type {Formatter}
         * @private
         */
        this.formatter = function(x) {return x};

        /**
         * @type {string}
         * @private
         */
        this.label = '';
    }

    /**
     * @param {string} val
     * @returns {Axis}
     */
    setLabel(val) {
        this.label = val;

        return this;
    };

    /**
     * @param {Formatter} formatter
     * @returns {Axis}
     */
    setFormatter(formatter) {
        this.formatter = formatter;

        return this;
    };
}

module.exports = Axis;