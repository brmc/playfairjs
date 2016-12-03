let DrilldownAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._drillDown = undefined;
    }

    setDrilldown(func) {
        this._drillDown = func;

        return this;
    }

    getDrilldown() {
        return this._drillDown;
    }
};

module.exports = DrilldownAPI;
