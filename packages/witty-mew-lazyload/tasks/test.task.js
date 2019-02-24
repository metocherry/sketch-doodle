const Server = require("karma").Server;
const config = require("./config/karma.config");

function test(done) {
    process.env.NODE_ENV = "test";

    const server = new Server(
        Object.assign(config, {
            autoWatch: false,
            singleRun: true
        }),
        exitCode => {
            done();
            process.exit(exitCode);
        }
    );

    server.start();
}

module.exports = test;
