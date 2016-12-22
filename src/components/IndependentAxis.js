let Axis = require('./Axis');

class IndependentAxis extends Axis{
    constructor() {
        super();

        this.type = 'categories';
        this.tickMarks = [];
     }

    setType(val) {
        this.type = val;

        return this;
    };

    setTickMarks(ticks) {
        this.tickMarks = this.formmatter ? ticks.map(this.formatter) : ticks;

        return this;
    };

    setFormatter(formatter) {
        super.setFormatter(formatter);

        if (this.tickMarks !== undefined) {
            this.setTickMarks(this.tickMarks);
        }
    }

    useIndexes() {
        return this.setType('indexed');
    };

    useCategories() {
        return this.setType('category');
    };

    useTimeseries() {
        return this.setType('timeseries');
    };
}

module.exports = IndependentAxis;