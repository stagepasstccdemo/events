import { EventDetailsDTO } from "@services/mock/DTO";

// TODO
// 3 - Foo Fighters
// 4 - Billie Eilish
// 5 - Against The Current
// 6 - Eminem
// 7 - Avenged Sevenfold

export const EventDetailsFixtures: EventDetailsDTO[] = [
  {
    id: 1,
    locationsAmount: 12,
    eventMainTitle: "Justin Bieber",
    eventSubTitle: "#PeachesTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 100,
    aboutEvent:
      "Immerse yourself in an electrifying and unforgettable musical experience as global pop sensation Justin Bieber takes the stage in a dazzling concert event. Step into a world of lights, music, and unparalleled energy as the arena comes alive with anticipation. From the moment the lights dim and the crowd's excitement reaches a crescendo, Justin Bieber's magnetic presence commands the stage. The air is charged with a palpable energy as the first notes of his chart-topping hits reverberate through the venue, instantly transporting the audience into a realm of pure musical ecstasy.",
    eventImageURL:
      "https://www.vagalume.com.br/justin-bieber/discografia/justice-11.jpg",
    eventVideoURL: "https://www.youtube.com/embed/Fp8msa5uYsc",
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
        eventImageURL:
          "https://www.udiscovermusic.com/wp-content/uploads/2019/08/Taylor-Swift-Lover-album-cover-820.jpg",
        eventMainTitle: "Taylor Swift",
        eventSecondaryTitle: "The Eras Tour",
      },
      {
        id: 2,
        eventImageURL:
          "https://lmcexperience.com/wp-content/uploads/2023/04/NFHope.jpg",
        eventMainTitle: "NF",
        eventSecondaryTitle: "The Search",
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
          day: "Monday",
          time: "8:00 PM",
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
  {
    id: 2,
    locationsAmount: 4,
    eventMainTitle: "Ariana Grande",
    eventSubTitle: "#SweetnerTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1702,
    aboutEvent:
      "Following the release of Grande's fourth studio album, Sweetener, Grande embarked on a promotional concert tour, The Sweetener Sessions, which concluded after 4 dates.[4] On October 1, 2018, Grande started recording her fifth studio album, Thank U, Next. She later confirmed that a longer tour, the Sweetener World Tour, would be for both Sweetener and Thank U, Next.",
    eventImageURL:
      "https://cdn.semana.es/wp-content/uploads/2021/06/ariana-grande-min.jpg",
    eventVideoURL: "https://www.youtube.com/embed/tcYodQoapMg",
    tourSetlist: [
      {
        id: 1,
        songName: "Intro: Believe",
      },
      {
        id: 2,
        songName: "Problem",
      },
      {
        id: 3,
        songName: "Into You",
      },
      {
        id: 4,
        songName: "Bang Bang",
      },
      {
        id: 5,
        songName: "7 Rings",
      },
      {
        id: 6,
        songName: "Thank U, Next",
      },
      {
        id: 7,
        songName: "Break Free",
      },
      {
        id: 8,
        songName: "Side to Side",
      },
      {
        id: 9,
        songName: "Dangerous Woman",
      },
      {
        id: 10,
        songName: "God Is a Woman",
      },
      {
        id: 11,
        songName: "No Tears Left to Cry",
      },
      {
        id: 12,
        songName: "Breathin'",
      },
      {
        id: 13,
        songName: "Love Me Harder",
      },
      {
        id: 14,
        songName: "One Last Time",
      },
      {
        id: 15,
        songName: "The Way",
      },
    ],
    recommendedEvents: [
      {
        id: 1,
        eventImageURL:
          "https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png",
        eventMainTitle: "Justin Bieber",
        eventSecondaryTitle: "#PeachesTour",
      },
    ],
    tickets: [
      {
        id: "123131",
        eventKind: "concert",
        totalAmount: 400,
        metadata: {
          eventLocation: "Global Arena",
          city: "Metropolis",
          country: "Wonderland",
          date: "September 10, 2023",
          day: "Saturday",
          time: "7:00 PM",
        },
        ticketType: {
          id: "123131",
          type: "VIP",
          price: 800,
          amountAvailable: 100,
        },
      },
      {
        id: "123131",
        eventKind: "concert",
        totalAmount: 400,
        metadata: {
          eventLocation: "Starlight Pavilion",
          city: "Celestia",
          country: "Galaxia",
          date: "November 5, 2023",
          day: "Friday",
          time: "6:30 PM",
        },
        ticketType: {
          id: "123131",
          type: "Student",
          price: 200,
          amountAvailable: 200,
        },
      },
    ],
  },
];
