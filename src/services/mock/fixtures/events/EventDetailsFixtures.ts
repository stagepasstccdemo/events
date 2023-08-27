import { EventDetailsDTO } from "@services/mock/DTO";

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
          "https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png",
        eventMainTitle: "Justin Bieber",
        eventSubTitle: "#PeachesTour",
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
  {
    id: 4,
    locationsAmount: 22,
    eventMainTitle: "Billie Eilish",
    eventSubTitle: "#HappierThanEverTour",
    parentalRating: 16,
    peopleInterestedAtThisEvent: 12309,
    aboutEvent:
      "Billie Eilish Pirate Baird O'Connell (/ˈaɪlɪʃ/ EYE-lish; born December 18, 2001) is an American singer-songwriter. She first gained attention in 2015 when she uploaded the song 'Ocean Eyes' to SoundCloud, which was subsequently released by the Interscope Records subsidiary Darkroom. The song was written and produced by her brother Finneas, with whom she collaborates on music and live shows. Her debut EP, Don't Smile at Me (2017), became a sleeper hit, reaching the top 15 in the US, UK, Canada, and Australia.",
    eventImageURL:
      "https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_3000,h_3000,c_limit/Billie-Eilish-Happier-Than-Ever.jpeg",
    eventVideoURL:
      "https://www.youtube.com/embed/cNzH19D6s_I?si=c6bqkLBnCwJdr_6j",
    tourSetlist: [
      {
        id: 1,
        songName: "Bad Guy",
      },
      {
        id: 2,
        songName: "Ocean Eyes",
      },
      {
        id: 3,
        songName: "When the Party's Over",
      },
      {
        id: 4,
        songName: "Bury a Friend",
      },
      {
        id: 5,
        songName: "Therefore I Am",
      },
      {
        id: 6,
        songName: "My Future",
      },
      {
        id: 7,
        songName: "Lovely",
      },
      {
        id: 8,
        songName: "Everything I Wanted",
      },
      {
        id: 9,
        songName: "You Should See Me in a Crown",
      },
      {
        id: 10,
        songName: "Hostage",
      },
      {
        id: 11,
        songName: "Xanny",
      },
      {
        id: 12,
        songName: "No Time to Die",
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
        id: "6",
        kind: "concert",
        location: "Epic Stadium",
        city: "Harborville",
        country: "Atlantis",
        date: "2023-10-15T19:30:00",
        day: "Saturday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3LbGTOYfIjEnGfEOLqwjo",
            type: "VIP",
            price: 1200,
            amountAvailable: 150,
          },
          {
            id: "price_1Ni3LbGTOYfIjEnG5NQcmLdb",
            type: "Standard",
            price: 800,
            amountAvailable: 400,
          },
        ],
      },
      {
        id: "7",
        kind: "concert",
        location: "Phoenix Arena",
        city: "Sunsetville",
        country: "Celestia",
        date: "2023-11-08T18:45:00",
        day: "Wednesday",
        time: "6:45 PM",
        ticketOptions: [
          {
            id: "price_1Ni3LbGTOYfIjEnGfEOLqwjo",
            type: "VIP",
            price: 1200,
            amountAvailable: 200,
          },
          {
            id: "price_1Ni3LbGTOYfIjEnG5NQcmLdb",
            type: "Standard",
            price: 450,
            amountAvailable: 500,
          },
          {
            id: "price_1Ni3LbGTOYfIjEnGh4kt8vtp",
            type: "Student",
            price: 350,
            amountAvailable: 500,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    locationsAmount: 5,
    eventMainTitle: "Against the Current",
    eventSubTitle: "#PastLivesTour",
    parentalRating: 15,
    peopleInterestedAtThisEvent: 1230,
    aboutEvent:
      "Against the Current (often abbreviated as ATC) is an American rock band based in Poughkeepsie, New York, and formed in 2011. The band currently consists of lead vocalist Chrissy Costanza, guitarist Dan Gow, and drummer Will Ferri. The group gained a sizable online following after posting covers of various pop songs on YouTube. They signed to Fueled by Ramen in 2015, and released their debut full-length album, In Our Bones, the following year. Their second full-length album, Past Lives, was released in 2018.",
    eventImageURL:
      "https://www.rappler.com/tachyon/2023/01/against-the-current-manila.jpeg",
    eventVideoURL:
      "https://www.youtube.com/embed/UgrigXr1aos?si=hOw9Ealk1R0fLemk",
    tourSetlist: [
      {
        id: 1,
        songName: "Running with the Wild Things",
      },
      {
        id: 2,
        songName: "Gravity",
      },
      {
        id: 3,
        songName: "Paralyzed",
      },
      {
        id: 4,
        songName: "Wasteland",
      },
      {
        id: 5,
        songName: "Voices",
      },
      {
        id: 6,
        songName: "Legends Never Die",
      },
      {
        id: 7,
        songName: "Chasing Ghosts",
      },
      {
        id: 8,
        songName: "Forget Me Now",
      },
      {
        id: 9,
        songName: "Almost Forgot",
      },
      {
        id: 10,
        songName: "Young & Relentless",
      },
      {
        id: 11,
        songName: "Strangers Again",
      },
      {
        id: 12,
        songName: "Demons",
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
        id: "8",
        kind: "concert",
        location: "Epic Stadium",
        city: "Harborville",
        country: "Atlantis",
        date: "2023-10-15T19:30:00",
        day: "Saturday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3NYGTOYfIjEnGFtxnKC3N",
            type: "VIP",
            price: 860,
            amountAvailable: 150,
          },
          {
            id: "price_1Ni3NYGTOYfIjEnGovAgy0Vy",
            type: "Student",
            price: 200,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3NYGTOYfIjEnG2KSDjTaC",
            type: "Standard",
            price: 450,
            amountAvailable: 400,
          },
        ],
      },
      {
        id: "9",
        kind: "concert",
        location: "Phoenix Arena",
        city: "Sunsetville",
        country: "Celestia",
        date: "2023-11-08T18:45:00",
        day: "Wednesday",
        time: "6:45 PM",
        ticketOptions: [
          {
            id: "price_1Ni3NYGTOYfIjEnGFtxnKC3N",
            type: "VIP",
            price: 860,
            amountAvailable: 500,
          },
          {
            id: "price_1Ni3NYGTOYfIjEnGovAgy0Vy",
            type: "Student",
            price: 200,
            amountAvailable: 1200,
          },
          {
            id: "price_1Ni3NYGTOYfIjEnG2KSDjTaC",
            type: "Standard",
            price: 450,
            amountAvailable: 4000,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    locationsAmount: 120,
    eventMainTitle: "Eminem",
    eventSubTitle: "#TheSlimShadyLP20thAnniversaryTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1400,
    aboutEvent:
      "The Slim Shady LP is the second studio album and the major-label debut by American rapper Eminem. It was released on February 23, 1999, under Interscope Records and Dr. Dre's Aftermath Entertainment. Recorded in Ferndale, Michigan, following Eminem's recruitment by Dr. Dre and Jimmy Iovine, the album features production from Dr. Dre, the Bass Brothers, and Eminem himself. The majority of the record's lyrical content is written from the perspective of the rapper's alter ego Slim Shady, whom the rapper created on Slim Shady EP (1997).",
    eventImageURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Eminem_live_at_D.C._2014_%28cropped%29.jpg/640px-Eminem_live_at_D.C._2014_%28cropped%29.jpg",
    eventVideoURL:
      "https://www.youtube.com/embed/_Yhyp-_hX2s?si=URi29y5GB1y_o407",
    tourSetlist: [
      {
        id: 1,
        songName: "Lose Yourself",
      },
      {
        id: 2,
        songName: "Stan",
      },
      {
        id: 3,
        songName: "Without Me",
      },
      {
        id: 4,
        songName: "The Real Slim Shady",
      },
      {
        id: 5,
        songName: "Love The Way You Lie",
      },
      {
        id: 6,
        songName: "Not Afraid",
      },
      {
        id: 7,
        songName: "Mockingbird",
      },
      {
        id: 8,
        songName: "Sing for the Moment",
      },
      {
        id: 9,
        songName: "Cleanin' Out My Closet",
      },
      {
        id: 10,
        songName: "Just Lose It",
      },
      {
        id: 11,
        songName: "The Monster",
      },
      {
        id: 12,
        songName: "Berzerk",
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
        id: "10",
        kind: "concert",
        location: "Epic Stadium",
        city: "Harborville",
        country: "Atlantis",
        date: "2023-10-15T19:30:00",
        day: "Saturday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3OpGTOYfIjEnGGsC85ahG",
            type: "VIP",
            price: 1400,
            amountAvailable: 150,
          },
          {
            id: "price_1Ni3OpGTOYfIjEnG02EQusB6",
            type: "Student",
            price: 450,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3OpGTOYfIjEnGEZTkdhrq",
            type: "Standard",
            price: 900,
            amountAvailable: 400,
          },
        ],
      },
      {
        id: "11",
        kind: "concert",
        location: "Phoenix Arena",
        city: "Sunsetville",
        country: "Celestia",
        date: "2023-11-08T18:45:00",
        day: "Wednesday",
        time: "6:45 PM",
        ticketOptions: [
          {
            id: "price_1Ni3OpGTOYfIjEnGGsC85ahG",
            type: "VIP",
            price: 1400,
            amountAvailable: 250,
          },
          {
            id: "price_1Ni3OpGTOYfIjEnG02EQusB6",
            type: "Student",
            price: 450,
            amountAvailable: 2000,
          },
          {
            id: "price_1Ni3OpGTOYfIjEnGEZTkdhrq",
            type: "Standard",
            price: 900,
            amountAvailable: 10000,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    locationsAmount: 120,
    eventMainTitle: "Avenged Sevenfold",
    eventSubTitle: "#TheStageTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1600,
    aboutEvent:
      "Avenged Sevenfold (sometimes abbreviated as A7X) is an American heavy metal band from Huntington Beach, California, formed in 1999. The band's current lineup consists of lead vocalist M. Shadows, rhythm guitarist and backing vocalist Zacky Vengeance, lead guitarist and backing vocalist Synyster Gates, bassist and backing vocalist Johnny Christ, and drummer Brooks Wackerman.",
    eventImageURL:
      "https://i0.wp.com/www.wikimetal.com.br/wp-content/uploads/2023/03/Avenged-Sevenfold.-Credito-Divulgacao.png?resize=1170%2C658&ssl=1",
    eventVideoURL:
      "https://www.youtube.com/embed/A7ry4cx6HfY?si=PSswTKsdmPqfUM1G",
    tourSetlist: [
      {
        id: 1,
        songName: "Bat Country",
      },
      {
        id: 2,
        songName: "Hail to the King",
      },
      {
        id: 3,
        songName: "Nightmare",
      },
      {
        id: 4,
        songName: "Afterlife",
      },
      {
        id: 5,
        songName: "A Little Piece of Heaven",
      },
      {
        id: 6,
        songName: "So Far Away",
      },
      {
        id: 7,
        songName: "Beast and the Harlot",
      },
      {
        id: 8,
        songName: "Critical Acclaim",
      },
      {
        id: 9,
        songName: "Buried Alive",
      },
      {
        id: 10,
        songName: "Seize the Day",
      },
      {
        id: 11,
        songName: "Shepherd of Fire",
      },
      {
        id: 12,
        songName: "The Stage",
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
        id: "12",
        kind: "concert",
        location: "Epic Stadium",
        city: "Harborville",
        country: "Atlantis",
        date: "2023-10-15T19:30:00",
        day: "Saturday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3TuGTOYfIjEnGx7ZSsq3K",
            type: "Student",
            price: 475,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3TuGTOYfIjEnGYQCVUe57",
            type: "Standard",
            price: 950,
            amountAvailable: 400,
          },
        ],
      },
      {
        id: "13",
        kind: "concert",
        location: "Phoenix Arena",
        city: "Sunsetville",
        country: "Celestia",
        date: "2023-11-08T18:45:00",
        day: "Wednesday",
        time: "6:45 PM",
        ticketOptions: [
          {
            id: "price_1Ni3TuGTOYfIjEnGx7ZSsq3K",
            type: "Student",
            price: 475,
            amountAvailable: 4000,
          },
          {
            id: "price_1Ni3TuGTOYfIjEnGYQCVUe57",
            type: "Standard",
            price: 950,
            amountAvailable: 12000,
          },
        ],
      },
    ],
  },
];
