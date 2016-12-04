let DrilldownAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.drilldown = undefined;
    }

    setDrilldown(func) {
        this.drilldown = func;

        return this;
    }
};

module.exports = DrilldownAPI;
