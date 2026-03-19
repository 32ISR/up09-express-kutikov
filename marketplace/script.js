// const a = [1, 2, 3]
// const b = [...a]
// b.push(4)

// console.log(`a: ${a}`)
// console.log(`b: ${b}`)


// let a = 1
// let b = a
// b = b + 1
// console.log(a);
// console.log(b);

// let a = {
//     name: "ktkv"
// }
// let b = a
// b.name = "idk"
// console.log(a)
// console.log(b)

// const a = [1, 2, 3]
// const b = [1, 2, 3]

// console.log(a == b)

const obj = {
    username: "ktkv",
    email: "kutikovpasha@...",
    domain: "ktkv.dev"
}
const { ...newObj } = obj
console.log(obj)
console.log(newObj)
console.log(newObj === obj)
