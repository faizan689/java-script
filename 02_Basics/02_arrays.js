const marvel_heros =["thor","CA","MM","SM"]
const dc_heros =["Flash","Batman","Superman"]

    // marvel_heros.push(dc_heros)

    // console.log(marvel_heros);

    //const allHeros=marvel_heros.concat(dc_heros)
    //console.log(allHeros);

    // const all_new_heros = [...marvel_heros,...dc_heros]

    // console.log(all_new_heros);


    const another_array =[1,2,3,[4,5,6],7[6,7,[4,5]]]
    const real_another_array = another_array.flat(Infinity)
    console.log(real_another_array);




console.log(Array.isArray("faiz"))
console.log(Array.from("faiz"))
console.log(Array.from({name: "faiz"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
