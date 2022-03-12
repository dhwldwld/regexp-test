const str =`
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234/
hxyp
동해물과 백두산이 마르고 닳도록
동해물과_백두산이_마르고_닳도록
`

// const regexp = new RegExp('the', 'gi')
//console.log(str.match(regexp))

// const regexp = /the/gi
//console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))

// const regexp = /HHHH/gi
// console.log(regexp.test(str))

// const regexp = /fox/gi
// console.log(str.replace(regexp, 'AAA'))

// const regexp = /the/
// console.log(str.match(regexp))

// const regexp = /the/g
// console.log(str.match(regexp))

console.log(str.match(/the/gi))

console.log(str.match(/\./gi))

console.log(str.match(/\.$/gi)) // $ : 문자열 끝에 정규식이 있는지  결과 : null

console.log(str.match(/\.$/gim)) // $ : 문자열 끝에 정규식이 있는지 결과 : ["."]

console.log(str.match(/d$/g))

console.log(str.match(/d$/gm))

console.log(str.match(/^t/gm))

console.log(str.match(/./g))

console.log(str.match(/h..p/g)) // 결과 : ["http", "hxyp"]

console.log(str.match(/fox|dog/g)) // 결과 : ["fox", "dog"]

console.log(str.match(/fox|dog/)) // 먼저 찾아지는 것을 반환 결과 : ["fox"] 

console.log(str.match(/dog|fox/)) // 먼저 찾아지는 것을 반환 결과 : ["fox"] 

console.log(str.match(/https/g)) // 결과 : ["https"]

console.log(str.match(/https?/g)) // 결과 : ["http", "https"]

console.log(str.match(/d/)) // 결과 : [0: "d" ...]
console.log(str.match(/d{2}/)) // 결과 : [0: "dd" ...]
console.log(str.match(/d{2}/g)) // 결과 : ["dd", "dd"]
console.log(str.match(/d{2,}/g)) // 결과 : ["dddd"]
console.log(str.match(/d{2,3}/g))
console.log(str.match(/\w{2,3}/g)) // 결과 : ["010", "123", "567", "..." ...]
console.log(str.match(/\b\w{2,3}\b/g)) // 결과 : ["010", "com", "www", "com"...]

console.log(str.match(/[fox]/g)) // 결과 : ["o","o","o","o","f","o","o","f","o","x","o","o","o","o"]

console.log(str.match(/[0-9]{1,}/g)) // 결과 : ["010", "1234", "5678", "7035" ...]

console.log(str.match(/[가-힣]{1,}/g)) // 결과 : ["동해물과", "백두산이", "마르고", ...]

console.log(str.match(/\w/g)) // 결과 : ["0",... "a", ... "동", ... "_" ]
console.log(str.match(/\b/g)) 
console.log(str.match(/\bf\w{1,}\b/g)) // 결과 : ["frozen", "fox" ]
console.log(str.match(/\d{1,}/g)) // 결과 : ["010", "123", "567", "..." ...]
console.log(str.match(/\s{1,}/g)) // 결과 : ['\n', '\n', '\n', '\n', ' ', ...]

const h = `  the hello  world   !

`

console.log(h.match(/\s/g))

console.log(h.replace(/\s/g, ""))

console.log(str.match(/.{1,}(?=@)/g)) // 결과 : ['thesecon']
console.log(str.match(/.{1,}(?<=@)/g)) // 결과 : ['thesecon@']

console.log(str.match(/(?<=@).{1,}/g)) // 결과 : ['gmail.com']