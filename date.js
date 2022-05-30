//jshint esversion: 6



// console.log(module);

// module.exports.getDate = getDate;
// module.exports.getDay = getDay;

exports.getDate = function() {
  // module.exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return day = today.toLocaleDateString("en-US", options); //Monday - Sunday
}

exports.getDay = function() {
  const today = new Date();

  const options = {
    weekday: "long",
  };

  return day = today.toLocaleDateString("en-US", options); //Monday - Sunday
}
