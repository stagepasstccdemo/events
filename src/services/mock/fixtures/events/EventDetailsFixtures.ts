import { EventDetailsDTO } from "@services/mock/DTO";

export const EventDetailsFixtures: EventDetailsDTO[] = [
  {
    id: 1,
    eventMainTitle: "Justin Bieber",
    eventSubTitle: "#PeachesTour",
    parentalRating: 18,
    amountOfCountriesForEvent: 5,
    peopleInterestedAtThisEvent: 100,
    aboutEvent:
      " Immerse yourself in an electrifying and unforgettable musical experience as global pop sensation Justin Bieber takes the stage in a dazzling concert event. Step into a world of lights, music, and unparalleled energy as the arena comes alive with anticipation. From the moment the lights dim and the crowd's excitement reaches a crescendo, Justin Bieber's magnetic presence commands the stage. The air is charged with a palpable energy as the first notes of his chart-topping hits reverberate through the venue, instantly transporting the audience into a realm of pure musical ecstasy.",
    eventImageURL:
      "https://www.vagalume.com.br/justin-bieber/discografia/justice-11.jpg",
    eventVideoURL:
      "https://www.youtube.com/watch?v=Fp8msa5uYsc&ab_channel=JustinBieberVEVO",
    tourSetlist: [
      {
        id: 1,
        songName: "Intro: Believe",
      },
      {
        id: 2,
        songName: "Love Yourself",
      },
      {
        id: 3,
        songName: "Sorry",
      },
      {
        id: 4,
        songName: "Yummy",
      },
      {
        id: 5,
        songName: "Intentions",
      },
      {
        id: 6,
        songName: "Where Are Ü Now",
      },
      {
        id: 7,
        songName: "Peaches",
      },
      {
        id: 8,
        songName: "Lonely",
      },
      {
        id: 9,
        songName: "Baby",
      },
      {
        id: 10,
        songName: "What Do You Mean?",
      },
    ],
    recommendedEvents: [
      {
        id: 1,
        eventImageURL: "https://example.com/event1_image.jpg",
        eventMainTitle: "Summer Vibes Music Festival",
        eventSecondaryTitle: "A Celebration of Music and Culture",
      },
      {
        id: 2,
        eventImageURL: "https://example.com/event2_image.jpg",
        eventMainTitle: "Art & Beats Exhibition",
        eventSecondaryTitle: "Where Art and Music Collide",
      },
      {
        id: 3,
        eventImageURL: "https://example.com/event3_image.jpg",
        eventMainTitle: "Dance Fever Showcase",
        eventSecondaryTitle: "Groove to the Rhythm of the Night",
      },
    ],
    tickets: [
      {
        id: "123131",
        eventKind: "concert",
        totalAmount: 100,
        metadata: {
          eventLocation: "Allianz Parque Stadium",
          city: "Sao Paulo",
          country: "Brazil",
          date: "December 20, 2021",
        },
        ticketType: {
          id: "123131",
          type: "VIP",
          price: 200,
          amountAvailable: 100,
        },
      },
    ],
  },
];
