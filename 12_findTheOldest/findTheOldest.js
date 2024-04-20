const findTheOldest = function (people) {
  return people.reduce((acc, person, index) => {
    let now = new Date();
    now = now.getFullYear();
    if (
      (person.yearOfDeath || now) - person.yearOfBirth >
      (acc.yearOfDeath || now) - acc.yearOfBirth
    ) {
      return person;
    } else {
      return acc;
    }
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
