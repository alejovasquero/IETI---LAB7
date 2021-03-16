var handler = require('../tasks.js');

module.exports = async function (context, req) {

    console.log(handler.get());
    const responseMessage = { response: handler.get() };

    context.res = {
        status: 200,
        body: responseMessage
    };


}