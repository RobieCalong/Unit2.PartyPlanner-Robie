const state = {
  events: [
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
  events2: []
};


function renderEvents() {
    const gridElem = document.querySelector('.event-grid')
    gridElem.innerHTML = "";            //clears first

    state.events.forEach((eventE) => {
        const cardContainerElem = document.createElement("div")
        cardContainerElem.classList.add("card-event-container")
        cardContainerElem.classList.add(`js-card-event-container-${eventE.id}`)
        // console.log(cardContainerElem)

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
        cardContainerElem.innerHTML = eventCardHTML
        // console.log(cardContainerElem)

        gridElem.appendChild(cardContainerElem)     //rendered all cards
        // console.log(gridElem)

        //create Delete buttons and addEventListener
        const deleteButtons = document.querySelectorAll(".js-delete-button");
        deleteButtons.forEach((delButton) => {
          delButton.addEventListener("click", () => {
            const eventid = delButton.dataset.eventId;
            // console.log(eventid)
            removeEvent(eventid);
            // console.log("removed successful" + eventid);

            renderEvents();
          });
        });
    });
}

function removeEvent(id) {
    const newEvents = []

    state.events.forEach((eventE) => {
        if (eventE.id !== Number(id)) {
            newEvents.push(eventE)
        }
    })

    state.events = newEvents
}

function init() {
    renderEvents()
}

init()