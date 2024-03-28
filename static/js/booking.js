const selectTimeOptions  = document.querySelector("#appointment-time");
const timeSlotsContainer = document.querySelector(".time-slots");

const fragment = document.createDocumentFragment();
function createTimeSlots() {

   
    const options = selectTimeOptions.options;
    

    for (let i =0; i < options.length; i++) {
        if (options[i].value) {
            const createTimeSlotElement = document.createElement("div");
            createTimeSlotElement.className = "time-slot";
            createTimeSlotElement.textContent = options[i].value;
   
            fragment.appendChild(createTimeSlotElement);
        }
        
    }
    timeSlotsContainer.appendChild(fragment);
}


function highlightSelection() {
    selectTimeOptions.addEventListener("change", () => {
        const selectedTime = selectTimeOptions.value; 
        const timeSlots    = document.querySelectorAll(".time-slot");
        
        
        removeActiveTag(timeSlots);
        timeSlots.forEach((timeSlot) => {
            if (timeSlot.textContent.trim() === selectedTime.trim()) {
                timeSlot.classList.add("active");
                return;
            }
        })
    })
}


function removeActiveTag(timeSlots) {
    timeSlots.forEach((timeSlot) => {
        if (timeSlot.classList.contains("active")) {
            timeSlot.classList.remove("active");
            return;
        }
    })
}

highlightSelection();
createTimeSlots();
