let prevBtn = document.querySelector(.'prevBtn');
let nextBtn = document.querySelector(.'nextBtn');

let images [
    'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fwww.sportsbusinessjournal.com%2Fresizer%2Fc_nYy9CCdHqGGG4YJvkykyJxzng%3D%2Farc-photo-leadersgroup%2Farc2-prod%2Fpublic%2FHNVJO4MINV2MWFGGD3LHF2RNTE.png&imgrefurl=https%3A%2F%2Fwww.sportsbusinessjournal.com%2FArticles%2F2023%2F09%2F13%2Fimg-unveils-new-logo%2F&docid=U4vbyjZfAoC9nM&tbnid=Etip7U5oDrr65M&vet=12ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECHEQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECHEQAA',
    
    'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Fdynamic-media-cdn.tripadvisor.com%2Fmedia%2Fphoto-o%2F0e%2Fd9%2Ffa%2F1b%2Flost-valley.jpg%3Fw%3D1200%26h%3D-1%26s%3D1&imgrefurl=https%3A%2F%2Fwww.tripadvisor.com%2FAttraction_Review-g295424-d10687494-Reviews-IMG_Worlds_of_Adventure-Dubai_Emirate_of_Dubai.html&docid=4CepYyh_L6BPmM&tbnid=ONOuL3Ts_VAeQM&vet=12ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECBwQAA..i&w=1200&h=900&hcb=2&ved=2ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECBwQAA',


    'https://www.google.com/imgres?q=img&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D799465342359958&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FIMGWorldwide%2F&docid=2HWlbCp1xquQxM&tbnid=2IYtGEcov-sMXM&vet=12ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECCsQAA..i&w=2037&h=754&hcb=2&ved=2ahUKEwjzubjtuoqNAxXDU6QEHUoEJ4oQM3oECCsQAA'

];


let num = 0;

function next() {
    let slider = document.querySelector('.slider');
    num++
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    let slider = document.querySelector('.slider');
    num--
    if(num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}