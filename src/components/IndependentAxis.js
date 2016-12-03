class IndependentAxis {
    constructor() {
        this._type = 'categories';
        this._tickMarks = [];
        this._position = 'outer-center';
    }

    setPosition(isRotated) {
        this._position = isRotated ? 'outer-middle' : 'outer-center';

        return this;
    };

    getPosition() {
        return this._position;
    };

    setType(val) {
        this._type = val;

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
            type: this._type,
            label: {
                text: this.getLabel(),
                position: this.getPosition()
            }
            //tick: {
                //format: this.getTickMarks() === undefined ? undefined : this.getFormatter()
            //}

        };

        switch (this._type){
            case 'categories':
                config.categories = this.getTickMarks();
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


    setTickMarks(ticks) {
        this._tickMarks = ticks.map(this.getFormatter());

        return this;
    };

    getTickMarks () {
        return this._tickMarks;
    };
}
