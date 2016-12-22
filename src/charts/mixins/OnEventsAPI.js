let OnEventAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        /**
         * @type {Map}
         */
        this.events = new Map();
    }

    setEvent(name, func) {
        this.events.set(name, func);

        return this;
    }

    getEvent(name) {
        let fallBack = () => {};
        return this.events.get(name) || fallBack;
    }

};
module.exports = OnEventAPI;