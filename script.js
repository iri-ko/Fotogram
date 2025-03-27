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

const body = document.body;


function renderImg() {
    const container = document.getElementById("photo_container");

    for (let index = 0; index < imageList.length; index++) {
        const img = document.createElement("img");

        img.src = imageList[index];

        img.classList.add("photo");

        //hier lege ich ID fest (Id circled durch die Liste und nimmt sich Index-Nr.)
        //zum navigieren für links/rechts-Buttons
        img.setAttribute("id", index);

        //hier adde ich, dass die Bilder anklickbar sind und die FUnktion toggleOVerlay() triggert
        img.addEventListener("click", () => {
            toggleOverlay(img.id);
        });

        container.appendChild(img);
    }
}

function toggleOverlay(id) {
    const overlayRef = document.getElementById("overlay");

    const imgRef = document.getElementById("hero_img");

    const numID = parseInt(id, 10);

    imgRef.src = imageList[id];

    // für Anzeige unter Bild (z.B. 1 / 12)
    const counterRef = document.getElementById("counter");
    counterRef.innerHTML = +numID + 1 + " / " + imageList.length;

    const nameRef = document.getElementById("img_name");
    nameRef.innerHTML = imageList[id];

    const truenameRef = document.getElementById("true_name");
    truenameRef.innerHTML = imageList[id].slice(6);
    overlayRef.classList.toggle("d_none");

    body.classList.toggle("no-scroll");
}

function toggleOverlayOnClosing() {
    const overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    body.classList.remove('no-scroll');
}

function showNext() {
    const currentImgSrc = document.getElementById("img_name").innerHTML.trim();

    const currentIndex = imageList.indexOf(currentImgSrc);

    if (currentIndex === -1) {
        console.error("Current image source not found in the array!");
        return;
    }

    // modulo operation (%) sorgt dafür,dass Array wieder auf Index 0 springt.
    const nextIndex = (currentIndex + 1) % imageList.length;

    const newImgRef = document.getElementById("hero_img");
    newImgRef.src = imageList[nextIndex];

    const nameRef = document.getElementById("img_name");
    nameRef.innerHTML = imageList[nextIndex];

    const counterRef = document.getElementById("counter");
    counterRef.innerHTML = nextIndex + 1 + " / " + imageList.length;

    const truenameRef = document.getElementById("true_name");
    truenameRef.innerHTML = imageList[nextIndex].slice(6);

    body.classList.add('no-scroll');

}

function showPrevious() {
    const currentImgSrc = document.getElementById("img_name").innerHTML.trim();

    const currentIndex = imageList.indexOf(currentImgSrc);

    if (currentIndex === -1) {
        console.error("Current image source not found in the array!");
        return;
    }

    const previous_index =
        (currentIndex - 1 + imageList.length) % imageList.length;

    const newImgRef = document.getElementById("hero_img");
    newImgRef.src = imageList[previous_index];

    const nameRef = document.getElementById("img_name");
    nameRef.innerHTML = imageList[previous_index];

    const counterRef = document.getElementById("counter");
    counterRef.innerHTML = previous_index + 1 + " / " + imageList.length;

    const truenameRef = document.getElementById("true_name");
    truenameRef.innerHTML = imageList[previous_index].slice(6);

    body.classList.add('no-scroll');
}

document.getElementById("overlay").addEventListener("click", function (event) {
    const obottom = document.getElementById("obottom");

    if (!obottom.contains(event.target)) {
        toggleOverlayOnClosing();
    } else {
        event.stopPropagation();
    }
});

