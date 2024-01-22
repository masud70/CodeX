module.exports = class User {
    constructor({ name, handle, university }) {
        this.name = name;
        this.handle = handle;
        this.university = university;
        this.db = new PouchDB('user');
    }

    create = async () => {
        try {
            const res = await this.db.put({
                _id: this.handle,
                name: this.name,
                university: this.university,
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    get = async () => {
        return await this.db.get(this.handle);
    };

    update = async () => {};
    
    delete = async () => {};
};
