module.exports = function(errorReport) {
  this.publish = function() {
    console.log(errorReport.getSummary().errorCount);
  };
};
