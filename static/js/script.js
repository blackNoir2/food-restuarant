

const closeIcon           =  document.querySelector(".close-icon");
const openIcon             =  document.querySelector(".open-icon");
const navigtorLinksElement = document.querySelectorAll(".navigator a");
const navigatorElement = document.querySelector(".navigator");


closeIcon.addEventListener("click", handleCloseIconClick);
openIcon.addEventListener("click", handleOpenClickIcon);

function handleCloseIconClick() {

    if (navigtorLinksElement && navigatorElement) {
      
        navigtorLinksElement.forEach((linkElement) => {
            linkElement.classList.add("hidden");
           
            closeIcon.classList.add("hidden");
            openIcon.classList.remove("display-none");
            
        })
         navigatorElement.classList.add("height-hidden");
    }
    
}

function handleOpenClickIcon() {
    if (navigtorLinksElement && navigatorElement) {
        navigtorLinksElement.forEach((linkElement) => {
            linkElement.classList.remove("hidden");
            
        }
        )

        navigatorElement.classList.remove("height-hidden");
        closeIcon.classList.remove("hidden");
        openIcon.classList.add("display-none");
    }
}