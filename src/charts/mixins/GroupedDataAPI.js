let GroupedDataAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this._groups = [];
    }

    getGroups() {
        return this._groups;
    }

    setGroups(groups) {
        this._groups = groups;

        return this;
    }

    addGroup(group) {
        this._groups.push(group);
    }

};

module.exports = GroupedDataAPI;
