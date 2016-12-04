let DrilldownAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.drillDown = undefined;
    }

    setDrilldown(func) {
        this.drillDown = func;

        return this;
    }
};

module.exports = DrilldownAPI;
