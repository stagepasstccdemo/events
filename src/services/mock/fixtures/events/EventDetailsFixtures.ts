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
  {
    id: 8,
    locationsAmount: 120,
    eventMainTitle: "Paramore",
    eventSubTitle: "#ThisIsWhy",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1600,
    aboutEvent:
      "Paramore is an American rock band from Franklin, Tennessee, formed in 2004. The band currently consists of lead vocalist Hayley Williams, guitarist Taylor York and drummer Zac Farro. Williams and Farro are founding members of the group, while York, a high school friend of the original lineup, joined in 2007. Williams is the only member listed on the band's recording contract with Warner Music Group's Fueled by Ramen sublabel and the only member to appear on all five of Paramore's studio albums.",
    eventImageURL:
      "https://s2-g1.glbimg.com/OlN3QwAYeZCtcc_2se4K6mfZZMc=/0x0:1440x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/K/r/rL4V5AT3Cb3G7EBtsn7g/paramore.jpg",
    eventVideoURL:
      "https://www.youtube.com/embed/iMyjRBW-Nf8?si=_xhqrvJ2Y5E3wqVE",
    tourSetlist: [
      {
        id: 1,
        songName: "Misery Business",
      },
      {
        id: 2,
        songName: "Decode",
      },
      {
        id: 3,
        songName: "Ain't It Fun",
      },
      {
        id: 4,
        songName: "Still Into You",
      },
      {
        id: 5,
        songName: "The Only Exception",
      },
      {
        id: 6,
        songName: "Brick by Boring Brick",
      },
      {
        id: 7,
        songName: "Hard Times",
      },
      {
        id: 8,
        songName: "Crushcrushcrush",
      },
      {
        id: 9,
        songName: "Ignorance",
      },
      {
        id: 10,
        songName: "That's What You Get",
      },
      {
        id: 11,
        songName: "Pressure",
      },
      {
        id: 12,
        songName: "Monster",
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
            id: "price_1Ni3VVGTOYfIjEnGFcs9zydl",
            type: "Student",
            price: 250,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3VVGTOYfIjEnGUd57fTYh",
            type: "Standard",
            price: 500,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3VVGTOYfIjEnGhBZfjVxf",
            type: "VIP",
            price: 1000,
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
            id: "price_1Ni3VVGTOYfIjEnGFcs9zydl",
            type: "Student",
            price: 250,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3VVGTOYfIjEnGUd57fTYh",
            type: "Standard",
            price: 500,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3VVGTOYfIjEnGhBZfjVxf",
            type: "VIP",
            price: 1000,
            amountAvailable: 400,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    locationsAmount: 120,
    eventMainTitle: "Blake Shelton",
    eventSubTitle: "#FriendsAndHeroesTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1600,
    aboutEvent:
      "Blake Tollison Shelton (born June 18, 1976) is an American country music singer and television personality. In 2001, he made his debut with the single 'Austin'. The lead-off single from his self-titled debut album, 'Austin' spent five weeks at number one on the Billboard Hot Country Songs chart. The now Platinum-certified debut album also produced two more top 20 entries ('All Over Me' and 'Ol' Red').",
    eventImageURL:
      "data:image/jpeg;base64,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",
    eventVideoURL:
      "https://www.youtube.com/embed/ZEWGyyLiqY4?si=MgozruUziPI_ZVAr",
    tourSetlist: [
      {
        id: 1,
        songName: "God's Country",
      },
      {
        id: 2,
        songName: "Honey Bee",
      },
      {
        id: 3,
        songName: "Austin",
      },
      {
        id: 4,
        songName: "I Lived It",
      },
      {
        id: 5,
        songName: "Ol' Red",
      },
      {
        id: 6,
        songName: "Sangria",
      },
      {
        id: 7,
        songName: "Boys 'Round Here",
      },
      {
        id: 8,
        songName: "Some Beach",
      },
      {
        id: 9,
        songName: "She's Got a Way with Words",
      },
      {
        id: 10,
        songName: "Mine Would Be You",
      },
      {
        id: 11,
        songName: "Came Here to Forget",
      },
      {
        id: 12,
        songName: "I'll Name the Dogs",
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
            id: "price_1Ni3WpGTOYfIjEnGktJzmplg",
            type: "Standard",
            price: 600,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3WpGTOYfIjEnG33EdH8s3",
            type: "VIP",
            price: 1400,
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
            id: "price_1Ni3WpGTOYfIjEnGktJzmplg",
            type: "Standard",
            price: 600,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3WpGTOYfIjEnG33EdH8s3",
            type: "VIP",
            price: 1400,
            amountAvailable: 400,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    locationsAmount: 120,
    eventMainTitle: "BTS",
    eventSubTitle: "#BTSWorldTour",
    parentalRating: 18,
    peopleInterestedAtThisEvent: 1600,
    aboutEvent:
      "BTS, an acronym of Bangtan Sonyeondan or “Beyond the Scene,” is a Grammy-nominated South Korean group that has been capturing the hearts of millions of fans globally since its debut in June 2013. The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook.",
    eventImageURL:
      "https://www.ofuxico.com.br/wp-content/uploads/2022/10/bts-confira-as-musicas-solo-dos-integrantes-do-grupo-foto.jpg",
    eventVideoURL:
      "https://www.youtube.com/embed/QU9c0053UAU?si=gA_jW7Y86C8-uLJn",
    tourSetlist: [
      {
        id: 1,
        songName: "Dynamite",
      },
      {
        id: 2,
        songName: "Boy With Luv",
      },
      {
        id: 3,
        songName: "Blood Sweat & Tears",
      },
      {
        id: 4,
        songName: "Fake Love",
      },
      {
        id: 5,
        songName: "Idol",
      },
      {
        id: 6,
        songName: "Spring Day",
      },
      {
        id: 7,
        songName: "Mic Drop",
      },
      {
        id: 8,
        songName: "Save Me",
      },
      {
        id: 9,
        songName: "Fire",
      },
      {
        id: 10,
        songName: "Not Today",
      },
      {
        id: 11,
        songName: "ON",
      },
      {
        id: 12,
        songName: "Black Swan",
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
            id: "price_1Ni3Y5GTOYfIjEnGZ8NN2xnq",
            type: "Standard",
            price: 2000,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3Y5GTOYfIjEnG1lCj7D5h",
            type: "VIP",
            price: 4000,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3Y5GTOYfIjEnG8YoNLkTZ",
            type: "Student",
            price: 1000,
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
            id: "price_1Ni3Y5GTOYfIjEnGZ8NN2xnq",
            type: "Standard",
            price: 2000,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3Y5GTOYfIjEnG1lCj7D5h",
            type: "VIP",
            price: 4000,
            amountAvailable: 400,
          },
          {
            id: "price_1Ni3Y5GTOYfIjEnG8YoNLkTZ",
            type: "Student",
            price: 1000,
            amountAvailable: 400,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    locationsAmount: 80,
    eventMainTitle: "Coldplay",
    eventSubTitle: "#EverydayLifeTour",
    parentalRating: 0,
    peopleInterestedAtThisEvent: 2500,
    aboutEvent:
      "Coldplay is a British rock band formed in London in 1996. The band's members are Chris Martin, Jonny Buckland, Guy Berryman, and Will Champion. Coldplay's music spans various genres, including alternative rock and pop.",
    eventImageURL:
      "https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3",
    eventVideoURL:
      "https://www.youtube.com/embed/I3Tuo5vOkC0?si=bglbDsPHrqcLadT2",
    tourSetlist: [
      {
        id: 1,
        songName: "Viva la Vida",
      },
      {
        id: 2,
        songName: "Yellow",
      },
      {
        id: 3,
        songName: "Fix You",
      },
      {
        id: 4,
        songName: "Clocks",
      },
      {
        id: 5,
        songName: "Paradise",
      },
      {
        id: 6,
        songName: "Adventure of a Lifetime",
      },
      {
        id: 7,
        songName: "The Scientist",
      },
      {
        id: 8,
        songName: "A Sky Full of Stars",
      },
      {
        id: 9,
        songName: "Magic",
      },
      {
        id: 10,
        songName: "Everyday Life",
      },
      {
        id: 11,
        songName: "Orphans",
      },
      {
        id: 12,
        songName: "Higher Power",
      },
    ],
    recommendedEvents: [
      {
        id: 10,
        eventImageURL:
          "https://play-lh.googleusercontent.com/nUzK8WjxbT-X59mlDYyPej6HO_j45Ou7qOIIgnJbTO6IzNA6iAU_kMdA38hHGONBv9c",
        eventMainTitle: "BTS",
        eventSubTitle: "#BTSWorldTour",
      },
    ],
    tickets: [
      {
        id: "21",
        kind: "concert",
        location: "Stadium of Lights",
        city: "Sunfield",
        country: "Aurora",
        date: "2023-09-25T20:00:00",
        day: "Sunday",
        time: "8:00 PM",
        ticketOptions: [
          {
            id: "price_1Ni3ZCGTOYfIjEnGbriUnrG1",
            type: "Standard",
            price: 400,
            amountAvailable: 350,
          },
          {
            id: "price_1Ni3ZCGTOYfIjEnGBzySEoyr",
            type: "Student",
            price: 150,
            amountAvailable: 200,
          },
        ],
      },
      {
        id: "22",
        kind: "concert",
        location: "Crystal Arena",
        city: "Moonville",
        country: "Lunaria",
        date: "2023-10-10T19:30:00",
        day: "Monday",
        time: "7:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3ZCGTOYfIjEnGbriUnrG1",
            type: "Standard",
            price: 400,
            amountAvailable: 350,
          },
          {
            id: "price_1Ni3ZCGTOYfIjEnGBzySEoyr",
            type: "Student",
            price: 150,
            amountAvailable: 200,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    locationsAmount: 60,
    eventMainTitle: "Marshmello",
    eventSubTitle: "#JoytimeTour",
    parentalRating: 16,
    peopleInterestedAtThisEvent: 1800,
    aboutEvent:
      "Marshmello is an American electronic music producer and DJ known for his signature helmet and marshmallow-shaped mask. He has gained widespread popularity for his energetic and upbeat music.",
    eventImageURL:
      "https://s2.glbimg.com/vSRLEaJXKRYK5bZqjXQ3DNWQJ08=/0x0:1600x1066/924x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/03/21/30009872300-c7bb7716ea-k.jpg",
    eventVideoURL:
      "https://www.youtube.com/embed/4JVxRDY_dGw?si=gmveP4tOLa3361Uj",
    tourSetlist: [
      {
        id: 1,
        songName: "Alone",
      },
      {
        id: 2,
        songName: "Happier",
      },
      {
        id: 3,
        songName: "Friends",
      },
      {
        id: 4,
        songName: "Silence",
      },
      {
        id: 5,
        songName: "Wolves",
      },
      {
        id: 6,
        songName: "Here With Me",
      },
      {
        id: 7,
        songName: "Be Kind",
      },
      {
        id: 8,
        songName: "Fly",
      },
      {
        id: 9,
        songName: "Moving On",
      },
      {
        id: 10,
        songName: "Spotlight",
      },
      {
        id: 11,
        songName: "Joytime",
      },
      {
        id: 12,
        songName: "Summer",
      },
    ],
    recommendedEvents: [
      {
        id: 9,
        eventImageURL:
          "https://static.billboard.com/files/media/coldplay-press-photo-2021-billboard-1548-compressed.jpg",
        eventMainTitle: "Coldplay",
        eventSubTitle: "#EverydayLifeTour",
      },
    ],
    tickets: [
      {
        id: "31",
        kind: "concert",
        location: "Glow Arena",
        city: "Neon City",
        country: "Electropolis",
        date: "2023-08-20T21:00:00",
        day: "Saturday",
        time: "9:00 PM",
        ticketOptions: [
          {
            id: "price_1Ni3bPGTOYfIjEnGrVJhjmY4",
            type: "Standard",
            price: 350,
            amountAvailable: 250,
          },
          {
            id: "price_1Ni3bPGTOYfIjEnGARPjdCux",
            type: "VIP",
            price: 900,
            amountAvailable: 100,
          },
          {
            id: "price_1Ni3bPGTOYfIjEnGfje5FZ8N",
            type: "Student",
            price: 150,
            amountAvailable: 150,
          },
        ],
      },
      {
        id: "32",
        kind: "concert",
        location: "Dream Dome",
        city: "Fantasyville",
        country: "Dreamland",
        date: "2023-09-10T20:30:00",
        day: "Friday",
        time: "8:30 PM",
        ticketOptions: [
          {
            id: "price_1Ni3bPGTOYfIjEnGrVJhjmY4",
            type: "Standard",
            price: 350,
            amountAvailable: 250,
          },
          {
            id: "price_1Ni3bPGTOYfIjEnGARPjdCux",
            type: "VIP",
            price: 900,
            amountAvailable: 100,
          },
          {
            id: "price_1Ni3bPGTOYfIjEnGfje5FZ8N",
            type: "Student",
            price: 150,
            amountAvailable: 150,
          },
        ],
      },
    ],
  },
];
