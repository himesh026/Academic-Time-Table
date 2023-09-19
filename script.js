function revealtospan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            //create two span
            let parent = document.createElement("span");
            let child = document.createElement("span");
            //parent and child sets thier respective classes
            parent.classList.add("parent");
            child.classList.add("child");

            //span parent get child span  and child get elem details
            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);
            //elem replaces its value with parent span 
            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}

  


function loaderAnimation(){
    let tl=gsap.timeline();

tl
.from(".child span",{
    x:100,
    duration:1.45,
    // delay:1,
    stagger: .2,
    ease:Power3.easeInOut
})
.to(".parent .child",{
    y:"-100%",
    duration:1,
    // delay:1, 
    ease:Circ.easeInOut
})
.to("#loader",{
    height: 0,
    duration:2,
    ease:Expo.easeInOut

})
// .to("#green",{
//     height:"100%",
//     // top:0,
//     duration:2,
//     delay:-2,
//     ease:Expo.easeInOut
// })
.to("#home",{
    height:"100%",
    duration:2,
    delay:-1.7,
    ease:Expo.easeInOut
})


}


// function animateSvg(){
//     document.querySelectorAll("#Visual>g").forEach(function (e){
//         let character=e.childNodes[1].childNodes[1];

//         character.style.strokeDasharray = character.getTotalLength() + 'px';
//         character.style.strokeDashoffset = character.getTotalLength() + 'px';
//     })

//     gsap.to("#Visual>g>g>path,#Visual>g>g>Polyline", {
//         strokeDashoffset: 0,
//         duration: 2,
//         ease: Expo.easeInOut,
//         delay: 2
//     });
// }

revealtospan();
loaderAnimation();

let box=document.querySelector(".box");

let home=document.querySelector(".home");

setTimeout(function(){
    box.classList.add("show");
    home.classList.add("show");

},3300)
// animateSvg();

//loading-logo
// Function to hide the loader after 2 seconds
function hideLoader() {
    const loader_logo = document.querySelector('.loader-container');
    loader_logo.classList.add('hidden');
}

// Wait for the page to fully load, then hide the loader
window.addEventListener('load', function () {
    setTimeout(hideLoader, 3800); 
});

//-----------
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('timetable-form');
    const timetableDiv = document.getElementById('timetable');
    const daySelector = document.getElementById('daySelector');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the roll number input value
        const rollNumber = document.getElementById('rollNumber').value;

        // Get the selected day from the dropdown
        const selectedDay = daySelector.value;

        // Simulated timetable data (replace this with your actual data)
        const timetableData = getTimetableData(rollNumber, selectedDay);

        // Display the filtered timetable data on the page
        timetableDiv.innerHTML = generateTimetableHTML(timetableData);
    });

    function getTimetableData(rollNumber, selectedDay) {
        const timetableData = {
            'B21ES009': [
                'Monday    Humanities(K)          Room 101       8:00 AM - 8:50 AM',
                'Monday    Computer Architeture  Room 308 LHB  9:00 AM - 9:50 AM',
                'Monday    Biosensors            Room 105 LHB  10:00 AM - 10:50 AM',
                'Monday    Database System       Room 308 LHB  11:00 AM - 11:50 AM',
                'Monday    Proffessional Ethics  Room 110 LHB  5:00 PM - 5:50 PM',
                
                'Tuesday   Humanities(N)         Varies        8:00 AM - 8:50 AM',
                'Tuesday   Computer Architeture  Room 308 LHB  9:00 AM - 9:50 AM',
                'Tuesday   DAA                   Room 105 LHB  10:00 AM - 10:50 AM',
                'Tuesday   Operating System      Room 106 LHB  11:00 AM - 11:50 AM',
                '',
                'Wednesday  DAA                   Room 105 LHB  9:00 AM - 9:50 AM',
                'Wednesday  Biosensors            Room 105 LHB  10:00 AM - 10:50 AM',
                'Wednesday  Database System       Room 308 LHB  11:00 AM - 11:50 AM',
                'Wednesday  Database System Lab   CC Lab 2,      3:00 PM - 5:00 PM',
                '',
                'Thursday  Humanities(N)         Varies        8:00 AM - 8:50 AM',
                'Thursday  Computer Architeture  Room 308 LHB  9:00 AM - 9:50 AM',
                'Thursday  Biosensors            Room 105 LHB  10:00 AM - 10:50 AM',
                'Thursday  Operating System      Room 106 LHB  11:00 AM - 11:50 AM',
                'Thursday  Operating System Lab  CC Lab 1      5:00 PM - 7:00 PM',
                '',
                'Friday    DAA                   Room 105 LHB  9:00 AM - 9:50 AM',
                'Friday    Database System       Room 308 LHB  10:00 AM - 10:50 AM',
                'Friday    Operating System      Room 106 LHB  11:00 AM - 11:50 AM',
                'Friday    Biosensors Lab        Basic lab 202  1:00 PM - 3:00 PM',
                '',
                '',

                // Add more classes for the ES009 roll number
            ],
            // Add data for other roll numbers as needed
        };

        // Check if the roll number is in the range "B21ES001" to "B21ES021"
        if (rollNumber >= 'B21ES001' && rollNumber <= 'B21ES021') {
            // Filter the timetable data based on the selected day
            return timetableData['B21ES009'].filter(entry => entry.startsWith(selectedDay)) || [];
        }
    
        // If the roll number doesn't match the specific range, return an empty array
        return [];
    }
    
    function generateTimetableHTML(data) {
        // Check if the data array is empty
        if (data.length === 0) {
            // Return a message if no timetable was found
            return '<p>No timetable found for the provided roll number and selected day.</p>';
        }
    
        // Start building the HTML table with borders, auto-sized columns, and centered content
        let timetableHTML = '<table style="border-collapse: collapse; width: 100%;">';
        timetableHTML += '<tr style="border: 1px solid black;"><th style="border: 1px solid black; width: auto; text-align: center;">Day</th><th style="border: 1px solid black; width: auto; text-align: center;">Class</th><th style="border: 1px solid black; width: auto; text-align: center;">Room</th><th style="border: 1px solid black; width: auto; text-align: center;">Time</th></tr>';
    
        // Loop through the timetable data and add rows to the table with borders and centered content
        for (const entry of data) {
            // Split each entry into its components (day, class, room, and time)
            const [day, className, room, time] = entry.split(/\s{2,}/); // Split by 2 or more spaces
    
            // Check if all components are defined (not empty or undefined)
            if (day && className && room && time) {
                // Add a new table row with borders, auto-sized columns, and centered content
                timetableHTML += `<tr style="border: 1px solid black;"><td style="border: 1px solid black; width: auto; text-align: center;">${day}</td><td style="border: 1px solid black; width: auto; text-align: center;">${className}</td><td style="border: 1px solid black; width: auto; text-align: center;">${room}</td><td style="border: 1px solid black; width: auto; text-align: center;">${time}</td></tr>`;
            }
        }
    
        // Close the table
        timetableHTML += '</table>';
    
        // Return the HTML for the entire table
        return timetableHTML;
    }
});


