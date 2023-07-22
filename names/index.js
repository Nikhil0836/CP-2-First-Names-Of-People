const x = require("../country/state/city/index.js");

const y = require("../utilities/utils/index.js");

const getPeopleInCity = (firstNameOfPeople) => {
  return y(firstNameOfPeople);
};

module.exports = getPeopleInCity;
