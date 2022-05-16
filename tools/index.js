#!/usr/bin/env node

const yargs = require('yargs');

module.exports = yargs
  .scriptName('tools')
  .usage('$0 <cmd>')
  .command({
    command: 'deploy',
    desc: 'Build the app and publish it',
  })
  .command({
    command: 'publish',
    desc: 'Publish the app',
    handler: publish,
  })
  .demandCommand()
  .help()
  .version(false)
  .strict()
  .fail((message, error, instance) => {
    if (error) {
      throw new Error(error);
    }

    console.log(instance.help());
    process.exit(1);
  }).argv;
