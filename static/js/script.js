const closeIcon             = document.querySelector(".close-icon");
const openIcon              = document.querySelector(".open-icon");
const navigatorLinksElement = document.querySelectorAll(".navigator a");
const navigatorElement      = document.querySelector(".navigator");


closeIcon.addEventListener("click", handleCloseIconClick);
openIcon.addEventListener("click", handleOpenClickIcon);




function toggleNavigatorMenu() {
    if (!navigatorElement || !navigatorLinksElement) {
        throw new Error("One or more of the selector elements needed could not be found!!!");
    }

    // Check the current state of the navigation menu and toggle accordingly
    if (navigatorElement.classList.contains("height-hidden")) {
        handleOpenClickIcon();
    } else {
        handleCloseIconClick();
    }
}

function handleCloseIconClick() {
    navigatorLinksElement.forEach((linkElement) => {
        linkElement.classList.add("hidden");
    });
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("display-none");
    navigatorElement.classList.add("height-hidden");
}

function handleOpenClickIcon() {
    navigatorLinksElement.forEach((linkElement) => {
        linkElement.classList.remove("hidden");
    });
    navigatorElement.classList.remove("height-hidden");
    closeIcon.classList.remove("hidden");
    openIcon.classList.add("display-none");
}


toggleNavigatorMenu();
