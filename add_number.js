function a(num, num2) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { resolve(num+num2)

        }, 2000)
    })
}
a(2,5).then((sum) => {
    console.log(sum)
    return a(sum, 5)
})
.then((sum2) => {
    console.log(sum2)
})


function a(name,name) {
    return new Promise ((resolve , resolve) => {
        setTimeout (() => {resolve(num+num2)

        } , 2000)
    })
    
}
