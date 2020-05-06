// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("openModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//Search section. Tabs
function openType(evt, typeName) {
    // Declare all letiables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(typeName).style.display = "block";
    evt.currentTarget.className += " active";
}
//Click at the button on load 
window.onload = function() {
    this.document.getElementById("hotel-button").click();
}


//Just test
function sendButton() {
    alert("Thank you for your respond!");
}


//Сountdown

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let daysSpan = clock.querySelector('.days');
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 365 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);


//Open modal at the button from DISCOUNT section
let modal2 = document.getElementById("myModal2")
let btn2 = document.getElementById("openModal2")
let span2 = document.getElementsByClassName("close-2")[0];

btn2.onclick = function() {
        modal2.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span2.onclick = function() {
        modal2.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


//Smooth scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



//Icon for navbar when size of the screen less than
function navBar() {
    // Do it if the screen size is less than 768
    let w = window.innerWidth;
    if (w < 768) {
        let menu_icon = document.getElementById("menu_icon");
        let side_nav = document.getElementById("side_nav");

        side_nav.style.right = "-200px";
        // side_nav.style.display = "none";
        menu_icon.onclick = function() {
            if (side_nav.style.right == "-200px") {
                side_nav.style.right = "0";
                //side_nav.style.display = "flex";
            } else {
                side_nav.style.right = "-200px";
                //side_nav.style.display = "none";
            }
        };
    }
}

// Do again with refresh the screen size
window.addEventListener('resize', function() {
    console.log("Resized");
    navBar();
});