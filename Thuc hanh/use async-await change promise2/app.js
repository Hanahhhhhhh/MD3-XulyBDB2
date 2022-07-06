async function onMyBirthDayAsync(isKaySick) {
    if (!isKaySick) return 2;
    throw new Error('I am sad')
}

async function doSomethingAsync() {
    try {
        let result = await onMyBirthDayAsync(true);
        console.log(`I have ${result} cakes`)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Party')
    }
}

doSomethingAsync();


onMyBirthDayAsync(false)
    .then((result) => {
        console.log(`I have ${result} cakes`);
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Party')

    });

