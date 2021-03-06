var id = 0;
var tasks = [];


var handler = require('../tasks.js');
console.log(handler.list);

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;
    // Implement the response

    task.id = ++id;
    
    

    if (!(task.description && task.responsible && task.status && task.dueDate)) {
        const responseMessage = { response: "Invalid task" };
        context.res = {
            status: 400,
            body: responseMessage
        };
    } else {
        handler.push(task);
        const responseMessage = { response: task };

        context.res = {
            status: 201,
            body: responseMessage
        };
    }

}