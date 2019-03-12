const { from } = require("rxjs");
const { filter } = require("rxjs/operators");

const users = [
  { name: "유비", birth_year: 161, nationality: "촉" },
  { name: "손권", birth_year: 182, nationality: "오" },
  { name: "관우", birth_year: 160, nationality: "촉" },
  { name: "장비", birth_year: 168, nationality: "촉" },
  { name: "조조", birth_year: 155, nationality: "위" },
  { name: "손권", birth_year: 182, nationality: "오" }
];

// core
const list = users.filter(user => user.nationality === "촉");
const log = user => console.log(user);
list.forEach(log);

// rxjs
const list$ = from(users).pipe(filter(user => user.nationality === "촉"));
const observer = user => console.log(user);
list$.subscribe(observer);
