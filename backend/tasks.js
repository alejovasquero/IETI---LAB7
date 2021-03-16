var Tasks = module.exports = {
    list: [],
    push: function(task) {
        Tasks.list.push(task);
    },
    get: function() {
        return Tasks.list;
    }
}