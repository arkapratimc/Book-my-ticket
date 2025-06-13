import { type Occurence } from "./types.js";

const LOGIN_FIELD_NAMES = {
    username: "username",
    password: "password",
};

const CREATE_USER_FIELD_NAMES = {
    username: "username",
    password: "password",
};

const AUTH_STATES = {
    nothing: "",
    successful: "User successfully logged in",
    failed: "Failed authentication",
};

let getTime = (date) => date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })




let yetanotherUnusualMap = (input: any) => {
    input.forEach((element, index, array) => {
        element.push([]);
        element[1].forEach(elem => {
            let total_address = `${elem.hallName}, ${elem.address}`;
            let does_it_have = element[2].map(x => x[0]).findIndex(elem => elem === total_address);
            if (does_it_have === -1) {
                element[2].push([total_address, [elem]]);
            } else {
                let inter = element[2][does_it_have][1];
                inter.push(elem);
            }
        })
        element.splice(1, 1);
    });
};
let unusualMap = (rawInput: Occurence[]) => {
    let RESULT = [];

    for (const occurence of rawInput) {
        let date = new Date(occurence.occurence);
        let time = getTime(date);
        // @ts-ignore
        occurence.time = time;
        let resultant_key = `${date.getDate()} ${date.toLocaleString("default", { month: "long" })}`;
        //@ts-ignore
        occurence.date = resultant_key;
        let does_it_have = RESULT.map(x => x[0]).findIndex(elem => elem === resultant_key);
        if (does_it_have === -1) {
            // RESULT.set(resultant_key, [occurence]);
            RESULT.push([resultant_key, [occurence]]);
        } else {
            let inter = RESULT[does_it_have][1]
            inter.push(occurence);
        }
    }
    yetanotherUnusualMap(RESULT);

    return RESULT;
};

function split_parts(given_string: string) {
    // const largeString = "This is the first sentence. Here's the second one. Now comes the third. And even more after that.";

    const sentences = given_string.match(/[^.!?]+[.!?]+/g); // Split into sentences

    const part1 = sentences[0]?.replace(/[.!?]+$/, '').trim() ?? "";
    const part2 = sentences[1]?.replace(/[.!?]+$/, '').trim() ?? "";
    const part3 = sentences.slice(2).join(' ').trim();

    // console.log("Part 1:", part1);
    // console.log("Part 2:", part2);
    // console.log("Part 3:", part3);
    return {
        part1, // type
        part2, // genre
        part3 // desc
    }
}




export { LOGIN_FIELD_NAMES, AUTH_STATES, CREATE_USER_FIELD_NAMES, unusualMap, split_parts };