let Axis = require('./Axis');

class DependentAxis extends Axis{
    constructor() {
        super();

        /**
         * The position of the label
         * @type {string}
         */
        this.position = 'outer-middle';
    }
}

module.exports = DependentAxis;