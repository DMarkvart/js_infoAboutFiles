
async function main(){
    try {
        const {characters, greet} = await import("./character.mjs")
        for (let c of characters)
            greet(c.name)
    }catch (e){
        console.log("Ошибка")
    }
}

main()