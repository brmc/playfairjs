let DependentAxis = require('../../components/DependentAxis');
let IndependentAxis = require('../../components/IndependentAxis');

/**
 * @param superClass
 * @constructor
 */
let AxisAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        /**
         *
         * @type {IndependentAxis}
         * @private
         */
        this.xAxis = undefined;

        /**
         *
         * @type {DependentAxis}
         * @private
         */
        this.leftYAxis = undefined;

        /**
         *
         * @type {DependentAxis}
         * @private
         */
        this.rightYAxis = undefined;
    }

    /**
     * @param {IndependentAxis} axis
     */
    setXAxis(axis) {
        this.xAxis = axis;

        return this;
    }

    /**
     * @param {Axis} axisClass
     * @param {String} label
     * @param {Formatter} formatter
     * @returns {Axis}
     */
    createAxis(axisClass, label, formatter = (x) => x) {
        let axis = new axisClass();
        axis.setLabel(label)
            .setFormatter(formatter);

        return axis;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createXAxis(label, formatter) {
        this.xAxis = this.createAxis(IndependentAxis, label, formatter);

        return this;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createLeftYAxis(label, formatter) {
        this.leftYAxis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createRightYAxis(label, formatter) {
        this.rightYAxis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @returns {boolean}
     */
    hasLeftYAxis () {
        return this.leftYAxis !== undefined;
    }

    /**
     * @returns {boolean}
     */
    hasRightYAxis() {
        return this.rightYAxis !== undefined
    }

    /**
     * @param {DependentAxis} axis
     */
    setLeftYAxis(axis) {
        this.leftYAxis = axis;

        return this;
    }


    /**
     * @param {DependentAxis} axis
     */
    setRightYAxis(axis) {
        this.rightYAxis = axis;

        return this;
    }

    /**
     * @returns {IndependentAxis}
     */
    getXAxis() {
        return this.xAxis;
    }
};

module.exports = AxisAPI;
