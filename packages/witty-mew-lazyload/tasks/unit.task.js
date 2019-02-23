const Server = require("karma").Server;
const config = require("./config/karma.config");

function unit(done) {
    const server = new Server(
        Object.assign(config, {
            autoWatch: true,
            singleRun: false
        }),
        exitCode => {
            done();
            process.exit(exitCode);
        }
    );

    server.start();
}

module.exports = unit;
