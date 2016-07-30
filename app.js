var favTeam = {
  codeName: 'Avengers',
  realm: 'Marvel Cinematic Universe',
  realmAbr: 'MCU',
  mainMembers: ['Iron Man', 'Captain America', 'Thor', 'Black Widow', 'The Hulk', 'Hawkeye'],
  secondaryMembers: ['War Machine', 'Quicksilver', 'Scarlet Witch', 'Vision', 'Falcon'],
  teamRivals: ['Loki', 'Ultron', 'Thanos', 'Winter Soldier', 'Hydra'],
  numCitiesDestroyed: 3,
  citiesDestroyed: ['New York', 'Washington DC', 'Sokovia'],
  mainNames: ['Tony Stark', 'Steve Rogers', 'Thor', 'Natasha Romanoff', 'Bruce Banner', 'Clint Barton'],
  secondaryNames: ['James Rhodes', 'Pietro Maximoff', 'Wanda Maximoff', 'JARVIS', 'Sam Wilson']
};

console.log('The ', favTeam.codeName, 'are a collection of Super Heroes set to protect humaity',
  'from the likes of', favTeam.teamRivals.toString(), '. This all takes place within the', favTeam.realm,
  ', or (', favTeam.realmAbr,')  Over their time together', favTeam.mainMembers.toString(),
  'have save the world from evil forces. However, not without a cost. There have been', favTeam.numCitiesDestroyed,
  'cities destroyed, including:', favTeam.citiesDestroyed.toString(), '.\n There has also been additional',
  'team members to come along. This includes:', favTeam.secondaryMembers.toString(), '.');
