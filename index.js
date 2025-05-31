const COHORT = "2109-CPU-RM-WEB-PTt";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;

const state = {
    //events to be used to store API fetched data
    events: [],
    //mocked data (my pre-made static data for testing)
    events2: [
        {
        id: 1,
        name: "Comic Gate1",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        time: "10pm",
        location: "Stereo Live Nation",
        },
        {
        id: 2,
        name: "Comic Gate2",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        time: "10pm",
        location: "Stereo Live Nation",
        },
        {
        id: 3,
        name: "Comic Gate3",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        time: "10pm",
        location: "Stereo Live Nation",
        },
        {
        id: 4,
        name: "Comic Gate4",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        time: "10pm",
        location: "Stereo Live Nation",
        },
        {
        id: 5,
        name: "Comic Gate5",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        time: "10pm",
        location: "Stereo Live Nation",
        },
    ],
};

//use fetch to get all Events from API
const getAllEvents = async () => {
    try {
        const response = await fetch(API_URL)
        // console.log(response)

        //using {    } the data is being deconstructed from the .json() body
        const { data } = await response.json()
        console.log(data)

        //stores fetched data to our state of events
        state.events = data
        renderEvents()
    } catch (error) {
        console.log(error.message)
    }
}

function renderEvents() {
    //grabs the div element and clears all cards before re-render later
    const gridElem = document.querySelector('.event-grid')
    gridElem.innerHTML = "";            //clears first

    state.events.forEach((eventE) => {
        //creates the div to act as 'container' to hold 1 card event
        const cardContainerElem = document.createElement("div")
        cardContainerElem.classList.add("card-event-container")
        cardContainerElem.classList.add(`js-card-event-container-${eventE.id}`)
        // console.log(cardContainerElem)

        //template for each card event
        const eventCardHTML = `
                <img src="./images/party.jpeg">
                <div class="event-details">
                    <span>Event Name: ${eventE.name}</span>
                    <span>Date: ${eventE.date}</span>
                    <span>Time: ${eventE.time}</span>
                    <span>Location: ${eventE.location}</span>
                    <span>Description: ${eventE.description}</span>
                </div>
                <div class="div-delete-button">
                    <button class="js-delete-button" data-event-id="${eventE.id}">DELETE</button>
                </div>
        `;
        cardContainerElem.innerHTML = eventCardHTML     //insert the card template in the div 'cardContainerElem'
        // console.log(cardContainerElem)

        gridElem.appendChild(cardContainerElem)     //DOM manipulation to render all cards
        // console.log(gridElem)

        //create Delete buttons and addEventListener
        const deleteButtons = document.querySelectorAll(".js-delete-button");
        deleteButtons.forEach((delButton) => {
          delButton.addEventListener("click", () => {
            const eventid = delButton.dataset.eventId;

            removeEvent(eventid);       
            // console.log("removed successful" + eventid);

            renderEvents();         //when you click 'Delete' button it renders all the cards
          });
        });
    });
}

//update the state of events
function removeEvent(id) {
    const newEvents = []

    //removes the event, by creating a newEvents to hold all the persisted event without the event-id
    state.events.forEach((eventE) => {
        if (eventE.id !== Number(id)) {
            newEvents.push(eventE)
        }
    })

    //updates the current state with the newly Events array
    state.events = newEvents
}

function init() {
    getAllEvents()
    // renderEvents()
}

init()