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
        eventSubTitle: "The Eras Tour",
      },
      {
        id: 2,
        eventImageURL:
          "https://lmcexperience.com/wp-content/uploads/2023/04/NFHope.jpg",
        eventMainTitle: "NF",
        eventSubTitle: "The Search",
      },
    ],
    tickets: [
      {
        id: "1",
        kind: "concert",
        location: "Allianz Park",
        city: "São Paulo",
        country: "Brazil",
        date: "2023-09-30T20:00:00",
        day: "Monday",
        time: "8:00 PM",
        ticketOptions: [
          {
            id: "price_1NhOWxGTOYfIjEnGEbY8GGAV",
            type: "VIP",
            price: 800,
            amountAvailable: 100,
          },
          {
            id: "price_1NhOWxGTOYfIjEnGgI9tqMqK",
            type: "Standard",
            price: 400,
            amountAvailable: 300,
          },
          {
            id: "price_1NhOWxGTOYfIjEnGHSU8NtU7",
            type: "Student",
            price: 200,
            amountAvailable: 300,
          },
        ],
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
        eventSubTitle: "#PeachesTour",
      },
    ],
    tickets: [
      {
        id: "2",
        kind: "concert",
        location: "Global Arena",
        city: "Metropolis",
        country: "Wonderland",
        date: "2023-09-30T20:00:00",
        day: "Saturday",
        time: "7:00 PM",
        ticketOptions: [
          {
            id: "price_1NhOZ2GTOYfIjEnGTP6StwI3",
            type: "VIP",
            price: 800,
            amountAvailable: 100,
          },
          {
            id: "price_1NhOZ2GTOYfIjEnG2JP77eTa",
            type: "Standard",
            price: 400,
            amountAvailable: 300,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    locationsAmount: 10,
    eventMainTitle: "Foo Fighters",
    eventSubTitle: "#MedicineAtMidnightTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 2040,
    aboutEvent:
      "After 11 studio albums and a whopping 15 Grammy wins, here is EW's ranking of the best tracks across the rock band's storied career. Foo Fighters are well-known as one of the greater rock bands to arise out of grunge's ashes, though the beating heart of their widespread appeal takes many forms.",
    eventImageURL:
      "https://static.independent.co.uk/2021/01/29/14/newFile-4.jpg",
    eventVideoURL: "https://www.youtube.com/embed/-IS-GJWfus4",
    tourSetlist: [
      {
        id: 1,
        songName: "Intro: All My Life",
      },
      {
        id: 2,
        songName: "Monkey Wrench",
      },
      {
        id: 3,
        songName: "Learn to Fly",
      },
      {
        id: 4,
        songName: "The Pretender",
      },
      {
        id: 5,
        songName: "Best of You",
      },
      {
        id: 6,
        songName: "Everlong",
      },
      {
        id: 7,
        songName: "Times Like These",
      },
      {
        id: 8,
        songName: "My Hero",
      },
      {
        id: 9,
        songName: "Walk",
      },
      {
        id: 10,
        songName: "These Days",
      },
      {
        id: 11,
        songName: "Run",
      },
      {
        id: 12,
        songName: "Arlandria",
      },
    ],
    recommendedEvents: [
      {
        id: 1,
        eventImageURL:
          "https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png",
        eventMainTitle: "Justin Bieber",
        eventSubTitle: "#PeachesTour",
      },
      {
        id: 2,
        eventImageURL:
          "https://www.udiscovermusic.com/wp-content/uploads/2019/08/Taylor-Swift-Lover-album-cover-820.jpg",
        eventMainTitle: "Taylor Swift",
        eventSubTitle: "The Eras Tour",
      },
    ],
    tickets: [
      {
        id: "4",
        kind: "concert",
        location: "Epic Stadium",
        city: "Harborville",
        country: "Atlantis",
        date: "2023-10-15T19:30:00",
        day: "Saturday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_2AbC3dEFgHjK4LmNP7QrXyZ1",
            type: "VIP",
            price: 850,
            amountAvailable: 150,
          },
          {
            id: "price_2AbC3dEFgHjK4LmNQxJp7uW2",
            type: "Standard",
            price: 450,
            amountAvailable: 400,
          },
        ],
      },
      {
        id: "5",
        kind: "concert",
        location: "Phoenix Arena",
        city: "Sunsetville",
        country: "Celestia",
        date: "2023-11-08T18:45:00",
        day: "Wednesday",
        time: "6:45 PM",
        ticketOptions: [
          {
            id: "price_1NhOjJGTOYfIjEnGyeBoIndk",
            type: "VIP",
            price: 850,
            amountAvailable: 200,
          },
          {
            id: "price_1NhOjJGTOYfIjEnGUgGFmqo7",
            type: "Standard",
            price: 450,
            amountAvailable: 500,
          },
        ],
      },
    ],
  },
];
