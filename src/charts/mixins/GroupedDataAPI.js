let GroupedDataAPI = (superClass) => class extends superClass {
    constructor(...args) {
        super(...args);

        this.groups = [];
    }

    getGroups() {
        return this.groups;
    }

    setGroups(groups) {
        this.groups = groups;

        return this;
    }

    addGroup(group) {
        this.groups.push(group);
    }

};

module.exports = GroupedDataAPI;
