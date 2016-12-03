let UpdateAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._updateInterval = false;
    }

    setUpdateInterval(interval) {
        this._updateInterval = interval;

        return this;
    }

    disableUpdate() {
        this._updateInterval = false;

        return this;
    }
};

module.exports = UpdateAPI;
