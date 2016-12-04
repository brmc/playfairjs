var Axis = require('./Axis');

class DependentAxis extends Axis{
    constructor() {
        super();

        /**
         * The position of the label
         * @type {string}
         */
        this.position = 'outer-middle';
    }

    /**
     * @param isRotated
     * @returns {DependentAxis}
     */
    setPosition (isRotated) {
        this.position = isRotated ? 'outer-center' : 'outer-middle';

        return this;
    };

    /**
     * todo this is too library specific.  this should be moved to the chart layer
     * @returns {{show: boolean, label: {text: string, position: string}, tick: {format: Formatter}}}
     */
    buildConfiguration () {
        var config = {
            show: true,
            label:   {
                text: this.getLabel(),
                position: 'outer-middle'
            },
            tick: {
                format: this.getFormatter()
            }
        };

        config.label = {
            text: this.getLabel(),
            position: this.getPosition()
        };

        return config;
    }
}

module.exports = DependentAxis;