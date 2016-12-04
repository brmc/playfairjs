var DataSet = require('./DataSet');

class Series extends DataSet{
    constructor(label, values) {
        super(label, values);
        this.axis = 'y';
        this.type = 'line';
        this.ALLOWED_TYPES = ['line', 'bar', 'scatter', 'area', 'spline', 'pie'];
     }

    isAllowed(type) {
        return this.ALLOWED_TYPES.indexOf(type) != -1;
    }

    setAxis(val) {
        this.axis = val;

        return this;
    };

    setType(val) {
        if (!this.isAllowed(val)) {
            throw new UnexpectedChartTypeError("type should be one of the following: ");
        }

        this.type = val;

        return this;
    }

    renderAs(val) {
        this.setType(val);

        return this;
    };

    renderAsPie() {
        this.setType('pie');

        return this;
    };

    renderAsSpline() {
        this.setType('spline');

        return this;
    };

    renderAsLine() {
        this.setType('line');

        return this;
    };

    renderAsBar() {
        this.setType('bar');

        return this;
    };

    renderAsArea() {
        this.setType('area');

        return this;
    };

    renderAsScatter() {
        this.setType('scatter');

        return this;
    };

    useLeftYAxis() {
        return this.setAxis('y');
    };

    useRightYAxis() {
        return this.setAxis('y2');
    };

}

module.exports = Series;