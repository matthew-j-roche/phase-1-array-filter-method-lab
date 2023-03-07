const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }

  findMatching(drivers, 'Bobby');

  findMatching(drivers, 'Sammy');
  
  findMatching(drivers, 'Susan');

  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
fuzzyMatch(drivers, 'Sa');

fuzzyMatch(drivers, 'y');

fuzzyMatch(drivers, 'mm');

  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }