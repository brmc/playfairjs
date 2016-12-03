let AxisAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._xAxis = undefined;
        this._leftYAxis = undefined;
        this._rightYAxis = undefined;
    }

        setXAxis(axis) {
        this._xAxis = axis;

        return this;
    }

    createAxis(axisClass, label, formatter) {
        formatter = formatter || defaultFormatter;

        var axis = new axisClass();
        axis.setLabel(label)
            .setFormatter(formatter);

        return axis;
    }

    createXAxis(label, formatter) {
        this._xAxis = createAxis(XAxis, label, formatter);

        return this;
    }

    setLeftYAxis(axis) {
        this._leftYAxis = axis;

        return this;
    }

    createLeftYAxis(label, formatter) {
        this._leftYAxis = createAxis(YAxis, label, formatter);

        return this;
    }

    hasLeftYAxis () {
        return this._leftYAxis !== undefined;
    }

    hasRightYAxis() {
        return this._rightYAxis !== undefined
    }

    getRightYAxis() {
        return this._rightYAxis;
    }

    createRightYAxis(label, formatter) {
        this._rightYAxis = createAxis(YAxis, label, formatter);

        return this;
    }

    setRightYAxis(axis) {
        this._rightYAxis = axis;
        this.addDataSet(axis);

        return this;
    }

    getLeftYAxis() {
        return this._leftYAxis;
    }


    getXAxis() {
        return this._xAxis;
    }
};

module.exports = AxisAPI;
