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
        this.yAxis = undefined;

        /**
         *
         * @type {DependentAxis}
         * @private
         */
        this.y2Axis = undefined;
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
    createYAxis(label, formatter) {
        this.yAxis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createY2Axis(label, formatter) {
        this.y2Axis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @returns {boolean}
     */
    hasYAxis () {
        return this.yAxis !== undefined;
    }

    /**
     * @returns {boolean}
     */
    hasY2Axis() {
        return this.y2Axis !== undefined
    }

    /**
     * @param {DependentAxis} axis
     */
    setYAxis(axis) {
        this.yAxis = axis;

        return this;
    }


    /**
     * @param {DependentAxis} axis
     */
    setY2Axis(axis) {
        this.y2Axis = axis;

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
