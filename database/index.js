module.exports = class Database {
    constructor(name) {
        this.db = new PouchDB(name);
    }

    
};
