let Axis = require('./Axis');

class IndependentAxis extends Axis{
    constructor() {
        super();

        this.type = 'categories';
        this.tickMarks = [];
        this.position = 'outer-center';
    }

    setPosition(isRotated) {
        this.position = isRotated ? 'outer-middle' : 'outer-center';

        return this;
    };

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

    
    buildConfiguration() {
        let config = {
            type: this.type,
            label: {
                text: this.label,
                position: this.position
            }
            //tick: {
                //format: this.getTickMarks() === undefined ? undefined : this.getFormatter()
            //}

        };

        switch (this.type){
            case 'categories':
                config.categories = this.tickMarks;
                break;
            case 'timeseries':
                config.tick.values = (x) => x;

                break;
            case 'indexed':
            default:
                break;
        }

        return config;
    };
}

module.exports = IndependentAxis;