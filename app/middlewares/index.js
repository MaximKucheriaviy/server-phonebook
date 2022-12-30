const morgan = require('./morganSetup');
const defaultError = require('./defaultError');
const validator = require('./validator');
const errorCatcher = require('./errorCatcher');

module.exports = {
    morgan,
    defaultError,
    validator,
    errorCatcher
}