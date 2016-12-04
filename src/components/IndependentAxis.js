var Axis = require('./Axis');

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
        this.tickMarks = ticks.map(this.formatter);

        return this;
    };

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
        var config = {
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
                config.tick.values =  function(x) {return x};

                break;
            case 'indexed':
            default:
                break;
        }

        return config;
    };
}

module.exports = IndependentAxis;