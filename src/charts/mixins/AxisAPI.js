var DependentAxis = require('../../components/DependentAxis');
var IndependentAxis = require('../../components/IndependentAxis');

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
        this._xAxis = undefined;

        /**
         *
         * @type {DependentAxis}
         * @private
         */
        this._leftYAxis = undefined;

        /**
         *
         * @type {DependentAxis}
         * @private
         */
        this._rightYAxis = undefined;
    }

    /**
     * @param {IndependentAxis} axis
     */
    setXAxis(axis) {
        this._xAxis = axis;

        return this;
    }

    /**
     * @param {Axis} axisClass
     * @param {String} label
     * @param {Formatter} formatter
     * @returns {Axis}
     */
    static createAxis(axisClass, label, formatter) {
        formatter = formatter || defaultFormatter;

        var axis = new axisClass();
        axis.setLabel(label)
            .setFormatter(formatter);

        return axis;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createXAxis(label, formatter) {
        this._xAxis = this.createAxis(IndependentAxis, label, formatter);

        return this;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createLeftYAxis(label, formatter) {
        this._leftYAxis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @param {String} label
     * @param {Formatter} formatter
     */
    createRightYAxis(label, formatter) {
        this._rightYAxis = this.createAxis(DependentAxis, label, formatter);

        return this;
    }

    /**
     * @returns {boolean}
     */
    hasLeftYAxis () {
        return this._leftYAxis !== undefined;
    }

    /**
     * @returns {boolean}
     */
    hasRightYAxis() {
        return this._rightYAxis !== undefined
    }

    /**
     * @returns {DependentAxis|*}
     */
    getRightYAxis() {
        return this._rightYAxis;
    }

    /**
     * @param {DependentAxis} axis
     */
    setLeftYAxis(axis) {
        this._leftYAxis = axis;

        return this;
    }


    /**
     * @param {DependentAxis} axis
     */
    setRightYAxis(axis) {
        this._rightYAxis = axis;

        return this;
    }

    /**
     * @returns {DependentAxis}
     */
    getLeftYAxis() {
        return this._leftYAxis;
    }


    /**
     * @returns {IndependentAxis}
     */
    getXAxis() {
        return this._xAxis;
    }
};

module.exports = AxisAPI;
