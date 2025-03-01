  const users = [
    { id: 1, name: "Orkhan Mammadov", age: 28, gender: "Male", city: "Baku", email: "orxan.m@mail.com" },
    { id: 2, name: "Leyla Aliyeva", age: 24, gender: "Female", city: "Ganja", email: "leyla.a@mail.com" },
    { id: 3, name: "Rashad Guliyev", age: 30, gender: "Male", city: "Sumqayit", email: "reshad.q@mail.com" },
    { id: 4, name: "Aytan Hasanova", age: 26, gender: "Female", city: "Shaki", email: "ayten.h@mail.com" },
    { id: 5, name: "Elvin Karimov", age: 32, gender: "Male", city: "Lankaran", email: "elvin.k@mail.com" },
    { id: 6, name: "Nigar Rahimli", age: 27, gender: "Female", city: "Mingachevir", email: "nigar.r@mail.com" },
    { id: 7, name: "Tural Abbasov", age: 29, gender: "Male", city: "Barda", email: "tural.a@mail.com" },
    { id: 8, name: "Aysel Mammadova", age: 23, gender: "Female", city: "Khachmaz", email: "aysel.m@mail.com" },
    { id: 9, name: "Murad Aliyev", age: 31, gender: "Male", city: "Shamakhi", email: "murad.a@mail.com" },
    { id: 10, name: "Gulnar Gasimova", age: 25, gender: "Female", city: "Zagatala", email: "gulnar.q@mail.com" }
];

// # Yaşı 30-dan kiçik olan istifadəçilərin sayını tapın
console.log(users.filter(u=>u.age < 30))

// # İstifadəçilərin yaşları ortalamasını tapın
console.log(users.reduce((sum,curr) => (sum + curr.age), 0)/users.length)

// # Bütün istifadəçilərin e-maillərindən ibarət array yaradın
console.log(users.map(u => u.email))

// # Qadın istifadəçilərdən ibarət array yaradın
console.log(users.filter(woman=>woman.gender.toLowerCase() === 'female' )
)
//# Kişi istifadəçiləri yaşına görə sıralayın (artan)  
console.log(users.filter(man=>man.gender.toLowerCase() === 'male' && users.sort((a, b) => a.age - b.age)))


// 1) 0 - 100 arası yalnız sadə ədədləri console'da çap edin
let odds = []
for (let i = 0; i <= 100; i++) {
  if (i % 2== 1) {
    odds.push(i);
  }
}
console.log(odds);

// 2) task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.
let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
and new features happen.`;
let countOfSpaces = (sampleNews.match(/\s+/g) || []).length;
console.log(countOfSpaces);

// 3) const fruits = ["alma", "banan", "qarpız", " portağal  ", "ananas", "nar"];
// array daxilindəki ən uzun sözü tapan alqoritm yazın
let fruits = ["alma", "banan", "qarpız", "portağal  ", "ananas", "nar"];
let longestWord = fruits.reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log(longestWord);

// 4) Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
// racecar - polidromdur
// hello - polidrom deyil
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
console.log(isPalindrome('abba')); 
console.log(isPalindrome('sas')); 

// 5) Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

// reverseWordOrder("javascript öyrənmək maraqlıdır");
// Nəticə: "maraqlıdır öyrənmək javascript"
// hint: (
// split reverse join metodlarını araşdırın )
function reverseWord(str){
  let words = str.split('');
  let reversedWords = words.reverse();
  let reversedStr = reversedWords.join('');
  return reversedStr;
}
console.log(reverseWord("javascript öyrənmək maraqlıdır"));


// 1) Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yazın.
// sentenceCapitalization("a short sentence")
// Expected Output:"A Short Sentence"
function firstUpperWord(sentence){
  let words = sentence.split('')
  let capitalizedWords = words.map((word, index) => index === 0? word.toUpperCase() : word)
  return capitalizedWords.join('')

}
console.log(firstUpperWord("a short sentence"));
