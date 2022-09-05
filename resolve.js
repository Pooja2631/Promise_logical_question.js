let promise = new Promise((resolve, reject) => {
    resolve(1)
    setTimeout(() => {resolve(2)}, 1000)
});
//promise cunsume
promise.then((r) => {console.log(r)})