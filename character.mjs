export let characters = [
    {name:'Frodo', hasRing:false},
    {name:'Bilbo', hasRing:false},
];

export function greet(character){
    console.log("Поздравляю "+character);
}

export default function log(){
    console.log("log");
}