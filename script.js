const imageList = [
    "./img/bibimbap.jpg",
    "./img/gyeongbokgung.jpg",
    "./img/Kimchi.jpg",
    "./img/Mandu.jpg",
    "./img/mountains.jpg",
    "./img/mountain_palace.jpg",
    "./img/N-Tower.jpg",
    "./img/nightlights.jpg",
    "./img/Palace.jpg",
    "./img/Seoul_at_night.jpg",
    "./img/Seoul_streets.jpg",
    "./img/Streetfood.jpg",
];


function create_img_html() {
    let container = document.getElementById("photo_container");


    for (let index = 0; index < imageList.length; index++) {

        let img = document.createElement("img");

        img.src = imageList[index];

        img.classList.add("photo");

        //hier lege ich ID fest (Id circled durch die Liste und nimmt sich Index-Nr.)
        //zum navigieren für links/rechts-Buttons
        img.setAttribute("id", index);

        
        //hier adde ich, dass die Bilder anklickbar sind und die FUnktion toggleOVerlay() triggert
        img.addEventListener("click", () => {
            toggleOverlay(img.id);}
        );

        container.appendChild(img);
    }
}


function toggleOverlay(id) {

    let overlayRef = document.getElementById("overlay");

    let imgRef = document.getElementById('hero_img')

    let numID = parseInt(id, 10);

    //Fehlermeldung 404 undefined - WHY??? 
    imgRef.src = imageList[id];


    // für Anzeige unter Bild (z.B. 1 / 12)
    let counterRef = document.getElementById('counter');
    counterRef.innerHTML = +numID+1 + " / " + imageList.length;


    let nameRef = document.getElementById('img_name');
    nameRef.innerHTML = imageList[id];

    let truenameRef = document.getElementById('true_name');
    truenameRef.innerHTML = imageList[id].slice(6);
    overlayRef.classList.toggle("d_none");
}


function toggleOverlayonClosing() {


    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
}


function goright() {
    let current_img_src = document.getElementById('img_name').innerHTML.trim();

    let current_index = imageList.indexOf(current_img_src);

    if (current_index === -1) {
        console.error("Current image source not found in the array!");
        return;
    }

    // modulo operation (%) sorgt dafür,dass Array wieder auf Index 0 springt.
    let next_index = (current_index + 1) % imageList.length;

    let new_img_Ref = document.getElementById('hero_img');
    new_img_Ref.src = imageList[next_index];

    let nameRef = document.getElementById('img_name');
    nameRef.innerHTML = imageList[next_index];

    let counterRef = document.getElementById('counter');
    counterRef.innerHTML = (next_index + 1) + " / " + imageList.length;

    let truenameRef = document.getElementById('true_name');
    truenameRef.innerHTML = imageList[next_index].slice(6);
}


function goleft(){

    let current_img_src = document.getElementById('img_name').innerHTML.trim();

    let current_index = imageList.indexOf(current_img_src);

    if (current_index === -1) {
        console.error("Current image source not found in the array!");
        return;
    }

    let previous_index = (current_index -1 + imageList.length) % imageList.length;

    let new_img_Ref = document.getElementById ('hero_img');
    new_img_Ref.src = imageList[previous_index];

    let nameRef = document.getElementById('img_name');
    nameRef.innerHTML = imageList[previous_index];

    let counterRef = document.getElementById('counter');
    counterRef.innerHTML = (previous_index + 1) + " / " + imageList.length;

    let truenameRef = document.getElementById('true_name');
    truenameRef.innerHTML = imageList[previous_index].slice(6);

}


document.getElementById("overlay").addEventListener("click", function(event) {

    const obottom = document.getElementById("obottom");
    

    if (!obottom.contains(event.target)) {
        toggleOverlayonClosing();
    } else {
        
        event.stopPropagation();
    }
});
