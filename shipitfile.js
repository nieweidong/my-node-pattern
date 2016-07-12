module.exports = function(shipit) {
  shipit.initConfig({
    staging: {
      servers: ['']
    }
  });

  shipit.task('pwd', function() {
    return shipit.remote('pwd');
  });
};
