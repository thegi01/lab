'use strict'

let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("Success!")
    }, 250)
})
myFirstPromise.then((successMessage) => {
    console.log('Yay!' + successMessage)
})

// 출처 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise