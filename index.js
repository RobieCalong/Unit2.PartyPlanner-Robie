const COHORT = "2109-CPU-RM-WEB-PTt";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
//https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-ftb-et-web-am/events

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
        location: "Stereo Live Nation",
        },
        {
        id: 2,
        name: "Comic Gate2",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        location: "Stereo Live Nation",
        },
        {
        id: 3,
        name: "Comic Gate3",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        location: "Stereo Live Nation",
        },
        {
        id: 4,
        name: "Comic Gate4",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        location: "Stereo Live Nation",
        },
        {
        id: 5,
        name: "Comic Gate5",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        date: "Sat, Jun 14",
        location: "Stereo Live Nation",
        },
    ],
};

//use fetch to get all Events from API
const getAllEvents = async () => {
    try {
      const response = await fetch(API_URL);
      // console.log(response)

      //using {    } the data is being deconstructed from the .json() body
      const { data } = await response.json()
      //const data = await response.json()//
      console.log(data);

      //stores fetched data to our state of events
      state.events = data;
      renderEvents();

    } catch (error) {
        console.log(error.message)
    }
}

const getSingleEvent = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`)
        const { data } = await response.json()
        console.log(data)

        state.events.push(data)

        console.log(state.events)

        renderEvents()
    } catch (error) {
        console.log(error.message)
    }
}

const createEvent = async (eventE) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      //data: field had to be hard coded for the specific date
    //   const testData = {
    //     name: eventE.name,
    //     description: eventE.description,
    //     date: "2021-09-15T00:00:00.000Z",
    //     location: eventE.location,
    //   };
      const testData = {...eventE, date: "2021-09-15T00:00:00.000Z",} //uses object property shorthand but with date: "2021****.000Z" override the date

      //fetches data using POST with body
      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(testData),
        headers: myHeaders,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.text();
      console.log("logged repsonse error: " + responseData);

      getAllEvents();
    } catch (error) {
        console.log(error.message)
    }
}

function addEventListenerToForm() {
    const form = document.querySelector("#new-event-form");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        //console.log("submit works");

        const name = document.getElementById("eventName").value;
        const date = document.getElementById('date').value
        const location = document.getElementById('location').value
        const description = document.getElementById('description').value
        //console.log(name);

        const eventE = {
            name,
            description,
            date,
            location
        }
        // console.log(eventE)

        try {
            await createEvent(eventE)
        } catch (error) {
            console.log(error.message)
        }

        form.reset()

        state.events.push(eventE)

        renderEvents()
    });
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
          });
        });
    });
}

//update the state of events
const removeEvent = async (id) => {
//   id = Number(id);
//   console.log(typeof id);
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log("HTTP Error: " + response.status);
      return;
    }

    getAllEvents()

  } catch (error) {
    console.log(error.message);
  }

  // Remove event locally **only if the API deletion was successful** //AI generated
  // state.events = state.events.filter((eventE) => eventE.id !== id);
}

function init() {
    getAllEvents()
    // getSingleEvent(9373)             //testing get single event based on id=9373
    // renderEvents()
    addEventListenerToForm();
}

init()