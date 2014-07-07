# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Scenario.create([{name: "Zombie Dinosaurs", weakness: "strength"}, {name: "Killer Space Clowns", weakness: "agility"}, { name: "Ghost Army", weakness: "intellect" }, { name: "Sharks with Lasers", weakness: "dexterity" }]);
Hero.create([
  {name: "James Dalton", quote: "Give me the biggest guy in the world, you smash his knee and he'll drop like stone.", strength: 70, intellect: 85, dexterity: 82, agility: 87 },
  {name: "John Nada", quote: "I have come here to chew bubblegum and kick ass, and I am all out of bubblegum.", strength: 87, intellect: 62, dexterity: 51, agility: 57 },
  {name: "John McClane", quote: "Yippee-ki-yay, motherfucker.", strength: 81, intellect: 80, dexterity: 76, agility: 83 },
  {name: "Snake Plissken", quote: " All right, get your machine ready, I'm coming out.", strength: 91, intellect: 88, dexterity: 92, agility: 93 },
  {name: "George Dillon", quote: "I woke up. Why don't you? You're an asset, an expendable asset and I used you to get the job done. Got it?", strength: 82, intellect: 77, dexterity: 70, agility: 69 },
  {name: "Martin Riggs", quote: "I don't make things difficult. That's the way they get, all by themselves.", strength: 82, intellect: 77, dexterity: 73, agility: 72 },
  {name: "Indiana Jones", quote: "Professor of Archaeology, expert on the occult, and how does one say it… obtainer of rare antiquities.", strength: 72, intellect: 92, dexterity: 84, agility: 86 },
  {name: "Ellen Ripley", quote: "We will and then we will blow it the fuck out into space!", strength: 66, intellect: 86, dexterity: 87, agility: 86 },
  {name: "Sarah Connor", quote: "The unknown future rolls toward us.", strength: 65, intellect: 87, dexterity: 86, agility: 85 },
  {name: "Colonel John Matrix", quote: "I eat green berets for breakfast and right now, I'm very hungry!", strength: 91, intellect: 67, dexterity: 71, agility: 64 },
  {name: "Benjamin Franklin Gates", quote: " I'm gonna steal the Declaration of Independence.", strength: 77, intellect: 92, dexterity: 87, agility: 86 },
  {name: "Freddie Wong", quote: "Water floats, but also capsizes boats.", strength: 85, intellect: 85, dexterity: 91, agility: 95 },
  ]);
