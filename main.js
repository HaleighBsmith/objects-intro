const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(`The wardrobe's height it ${wardrobe.height}`)
wardrobe.material = "Cedar"
console.log(wardrobe)
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`The Empire State Building is ${empireStateBuilding.stories} stories tall`)
console.log(`The Empire State Building is ${empireStateBuilding.height} feet tall`)
console.log(`The Empire State Building's address is ${empireStateBuilding.address}.`)
console.log(`The Empire State Building was constructed in ${empireStateBuilding.constructionDate}.`)
console.log(`It cost ${empireStateBuilding.cost} dollars to construct the Empire State Building.`)
console.log(`The Empire State Building is owned by ${empireStateBuilding.owner}.`)
console.log(`From east to west, the Empire State Building is ${empireStateBuilding.eastWestLength} feet long.`)
console.log(`From north to south, the Empire State Building is ${empireStateBuilding.northSouthLength} feet long.`)
console.log(`The architect responsible for the Empire State Building was ${empireStateBuilding.architect}.`)
console.log(empireStateBuilding["cost"])
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(nashvilleSoftwareSchool.instructors["fullTime"])
console.log(nashvilleSoftwareSchool.instructors["partTime"])
console.log(nashvilleSoftwareSchool.instructors["fullTime"][4])
console.log(nashvilleSoftwareSchool.instructors["partTime"][0])