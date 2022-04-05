// Code your solution here
function findMatching(drivArr, match){
    const matchDriv = drivArr.filter(driver => driver.toLowerCase() === match.toLowerCase())
    return matchDriv
}

function fuzzyMatch(drivArr, matchBegin){
    function checkBeginning(driver){
        return driver.slice(0, matchBegin.length) === matchBegin
    }
    const match = drivArr.filter(checkBeginning)
    return match
}

function matchName(drivArr, name){
    const match = drivArr.filter(driver => driver.name === name)
    return match
}