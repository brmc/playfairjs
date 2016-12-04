let UpdateAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.updateInterval = false;
    }

    setUpdateInterval(interval) {
        this.updateInterval = interval;

        return this;
    }

    disableUpdate() {
        this.updateInterval = false;

        return this;
    }
};

module.exports = UpdateAPI;
