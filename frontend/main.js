var list = ["01", "02", "03", "1_1", "1_2", "1_3", "2_1", "2_2", "2_3"]


function easy() {

    var randomIndex = Math.floor(Math.random() * list.length);

    cube = document.getElementById(list[randomIndex])

    cube.style.backgroundColor = "blue"
    list = list.filter(item => item !== list[randomIndex]);
    console.log(list[randomIndex])
    

}


function color(a) {
    var cubo = document.getElementById(a)

    for (let b = 0; b < list.length + 1; b++) {

        if (list[b] === a) {
            console.log(a)
            cubo.style.backgroundColor = "red"
            /*id = Math.random(0, (length(list))*/
            list = list.filter(item => item !== a);
            easy()
        }
    }
    

}