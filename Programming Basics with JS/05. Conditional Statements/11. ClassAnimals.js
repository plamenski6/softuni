function solve(input) {

    let anim = input.shift();
    switch (anim) {
        case "dog": console.log("mammal"); break;
        case "crocodile": console.log("reptile"); break;
        case "tortoise": console.log("reptile"); break;
        case "snake": console.log("reptile"); break;
        default: console.log("unknown"); break;
    }

}

solve(["dog"]);
