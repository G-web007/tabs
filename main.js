const elements = document.querySelectorAll('.tablinks');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event) {
        const targetId = this.getAttribute('data-target');
        openCity(event, targetId);
    });
}

function openCity(evt, targetId) {
    let tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    let tablinks = document.getElementsByClassName('tablinks');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); 
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.style.display = "block";
        evt.currentTarget.className += " active";
    } else {
        console.error("No element found with ID:", targetId);
    }
}

