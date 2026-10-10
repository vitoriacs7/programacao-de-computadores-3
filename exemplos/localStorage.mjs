export const localStorage = {
    store: {},

    setItem(key, value) {
        this.store[key] = value;
    },

    getItem() {
        return this.store[key] || null;
    },

    removeItem(key) {
        delete this.store[key];
    }, 

    clear() {
        this.store = {};
    }
};