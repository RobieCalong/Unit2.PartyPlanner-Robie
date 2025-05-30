events = [
  {
    name: "is this it",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  },
  {
    name: "Comic Gate",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    date: "Sat, Jun 14",
    time: "10pm",
    location: "Stereo Live Nation",
  }
];


function renderEvents() {
    const gridElem = document.querySelector('.event-grid')

    let eventCardsHTML = "";
    console.log(events.length)

    events.forEach((event) => {
        // console.log(event)

        eventCardsHTML += `
            <div class="event-container">
                <img src="./images/party.jpeg">
                <div class="event-details">
                    <span>Cosmic Gate</span>
                    <span>Date</span>
                    <span>Time</span>
                    <span>Location</span>
                    <span>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</span>
                </div>
                <div class="div-delete-button">
                    <button>DELETE</button>
                </div>
            </div>
        `;
    });

    // console.log(eventCardsHTML)
    gridElem.innerHTML = eventCardsHTML;
}

function init() {
    renderEvents()
}

init()