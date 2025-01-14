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


let unusualMap = (rawInput: Occurence[]) => {
    let RESULT = new Map();

    for (const occurence of rawInput) {
        let date = new Date(occurence.occurence);
        let time = getTime(date);
        // @ts-ignore
        occurence.time = time;
        let resultant_key = `${date.getDate()} ${date.toLocaleString("default", { month: "long" })}`;
        //@ts-ignore
        occurence.date = resultant_key;
        if (!RESULT.has(resultant_key)) {
            RESULT.set(resultant_key, [occurence]);
        } else {
            let inter = RESULT.get(resultant_key);
            inter.push(occurence);
        }
    }

    return RESULT;
};

let yetanotherUnusualMap = (input: any) => {
    input.forEach((value, key, map) => {
        let RESULT = new Map();
        value.forEach(val => {
            if (!RESULT.has(`${val.hallName}, ${val.address}`)) {
                RESULT.set(`${val.hallName}, ${val.address}`, [ val ])
            } else {
                let inter = RESULT.get(`${val.hallName}, ${val.address}`);
                inter.push(val);
            }
        })
        input.set(key, RESULT);
    });
    console.log(input)
};


export { LOGIN_FIELD_NAMES, AUTH_STATES, CREATE_USER_FIELD_NAMES, unusualMap, yetanotherUnusualMap };