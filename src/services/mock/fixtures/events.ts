import {
  EventSummaryDTO,
  EventTrendingDTO,
  QuickEventFilterDTO,
  EventKindCategoriesDTO,
} from "../DTO";

export const EventSummaryFixtures: EventSummaryDTO[] = [
  {
    id: 1,
    eventImageURL:
      "https://musicmayhemmagazine.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-04-at-10.11.52-PM.png",
    eventName: "Justin Bieber | #PeachesTour",
    fullDateWithHour: "Next Concert on December 20 & 22 | 5PM - 7PM",
    location: "Location: Allianz Parque Stadium, Sao Paulo, Brazil",
    priceTag: "Starting at $200",
    parentalRating: "18+",
  },
  {
    id: 2,
    eventImageURL:
      "https://m.media-amazon.com/images/I/81FH-xfuK5L._AC_SL1500_.jpg",
    eventName: "Ariana Grande | #SweetnerTour",
    fullDateWithHour: "Next Concert on December 22 | 4PM - 5:30PM",
    location: "Location: Allianz Parque Stadium, Sao Paulo, Brazil",
    priceTag: "Starting at $500",
    parentalRating: "18+",
  },
  {
    id: 3,
    eventImageURL:
      "https://veja.abril.com.br/wp-content/uploads/2021/02/FOOFIGHTERS-PRESS-SONY-MUSIC-1.jpg.jpg?quality=70&strip=info&w=680&h=453&crop=1",
    eventName: "Next Concert on Foo Fighters | #Everlong Tour",
    fullDateWithHour: "December 23 | 2PM - 3:30PM",
    location: "Location: Maracanã Stadium, Rio de Janeiro, Brazil",
    priceTag: "Starting at $250",
    parentalRating: "16+",
  },
  {
    id: 4,
    eventImageURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDxUQDxAQFQ8QEA8PDxAQDw8QDxAPFRYWFhUVFRUYHSggGBolGxYVITEhJSkrLi4uGB8zOjMsNygtLisBCgoKDg0OGA4PFy0dHR0tKy0rKy0tNy0tKystLS0rLSsrKystLSsuLS03Ky0tLS0tLSsrLSsrNzctLS43KysrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA/EAACAQIEAgcEBwcDBQAAAAABAgADEQQSITEFQQYTIlFhcZEygaGxBxQjUsHR8EJicoKSouEkQ5M0RGOywv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAdEQEBAQEAAwEBAQAAAAAAAAAAARECEiExcUED/9oADAMBAAIRAxEAPwDw6IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJMQIiTECIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJMWgItKgsrCQLdotLwpyergWLRaXykjJAsWiXSspKwKIkkSICRJiBESZEBERAREQEREBERAREQEREBJiSIC0qVYAl1VgQqy8qSUWX0SRVtacq6uZCrJKwMRltLPWDxA7ztMoAMxG+VWIA3JtOzw/wBGVU4Rar4lFqtTzGj1ZYAnVQXDCzagXAO3OS9SfVnN6+OF6uUmnK8KDcoRYi/uINiJeNOVlhMktlZmskttTgYZEiX3SWiJRTEm0iBESYgRERAREQEREBERASZEmAlaiQol1RAKJeRZCLLyLIqUWX0WUqsvIIFSrKxSJ15S7hsOzkhASQpY2F8qjdj4f4HOehtwo4HA9ZTpK2J6stmqFgqsFuwULYsRcX1A1HjJR5WAadYg7gjf97f8p68KzDAdZXxgCijRLZcikbFlBCrZytwFBY31uLieS1zmpg6llADMbm/iTOmwXHMuCy16dSoCmRalJaYYCw7FUuDcfvDW0z3NdP8ALqTdc3x+giY2oMOcyKc4Pb/aAYjtEkjW1ySSOZ3lTJMUORZja7kl9/2j+FpsmpzbmwmSW2SZjLLLLAw3SY7pM9lliosIwiJTaX3WWiJRTIlRlMBIkyICIiAiIgIiSICSJEqECtRLyLLaCZCCQVIsvKshBLyrCpVZeprKVWZWGolmCgXLEKBcC5Og1OkD036L+iy1cM2IqnSrUCIthZkpMDc87ZwdNrop5TsemtBTQcCwY0+rpjazMSWI7tDv5zN6JYQUMLToXXNRpJTYKRfrALubeLE+s0OO4n9Z4i2HQr9lRcAMdBUbKOXcrE85z1vHmWF4EXphBTPbci/cCAB2d952PQTouA7JWplqVPrEObJkzZuYvcnLoPftOk4dwulT7Ya9iD9YcZaanf7IH2jroduc2gq08PTZjpT/ANtf2m56d9zz/wAxbpJjxXpR0aC4it1aWVHAVFvYWXMx225bbuoE0lRJ7Y3Cesw9fFnL1mIpOaOzBbjcd9yqf0ieOYOm1bOVWy07B2J0DG9h8DNSs2Ne6yyyzZYvCtTYo4sykgjxBsfjMV6cqMJ1lh1mc6Sw6SjAqJMdhNk1EnYH0mNVonuPpAwiJTLzrLREqKYkyICIiAiIgJMiTASpZTLtGnfygXKYvNng+G1qhARDrp3S/wALwoFtNTtPRujuAsAx0uubbZNvUzNuNSOZ4d0Kqv7ZI8ALE+RP5Td0Po8B3qPfwy2+Inc4Olpci17e5RbT8Js8MLAseWoHjymfKrjzat9G1QexUPkyhjf3Wt6TI6N9D6lDG02xaA0Ez1bWJFRkViq2PiAde609JwL21Nydh43/ADl3ilT7K51YugFvZXUEi/PQESXpZNrWU6GtOkvZDM7MtMBeTOVUDYX08Jc4vwanh6T1qKBaoHbyXz1F5q9TVm0HMmZnBwDmqgEuG6pCdgLAkj11Ph5zJ4lV0tyG/iZjmem+77xr+DVMPiaYxFMuX1B62q9WpTc7jtE5fda4tNd0t6LPjKDU6dapSqMNGDDKR3MLXt5ETE6MYAYfFVcrNdXR6dMmyNScNlFh3WI9ymdvRqrVFxcEW7JtpcX9/fNM64jorhalPB08JiSPrOHXJUUMWumZurYE6lSo+BHKcRwbhmTidbC5fsqb510JADFSCQOSi/fsJ6xxbBPrUpWFS6Em17qu48dCZyvAerbilSvlKmvhFGVgQQ1Oot/UVFPuPMG0nqtW7z+NueimBrkGrTzHtEMWdWZmJZr5ct+e4mLxfoNhCv2dGmCBpkDLf47zoKtcB1C/cfbWxzU9PT8JeZ9PeFOvebTTDxqh0WpvijQeqUFjlGXtsRut9gbXPPbab5ehWHQaLc7XY3JP4TV9NsQfrrW0anTY5wSDnVva05iwM3PDLVcPSrZqgNWjSqH7V92UEjfxMqMXEdG0tYAeg+Hh+vCcrxrgwp8ufrO1rYQ8qlb/AJqn5zTY/h4b2mdv4qjN8zEo4DEYFSPX3EbzUVqIHOdxjcAANL+pnOY/BL3TbLnzIl7EUrbSzKhERAREQEmRECQLmZ9Bdbfq0xKA1mZQPagdP0dw/WVBfbn5T03h9O/loWPIKuw/GcN0TpAC/M6X+Znf4QWUADuJHeTsPTWc+m421EX8ANT4DkPx98vBr6cvaPyUemvvmM50CDc7nxOpmRsfLtHxPIfKZVl0m1t3D4nT/Hr3TF6Q1x9nSGpHbI5cwCR4m4HkZdUkAAe0Tfwzcr+A3/lM0HSnD1VLVaeZqfVBa22dCoKhwfS/r32lb4+um4DW/wBIvM56oHLU1GP42k48Hqz3ma7o3iw2FRlpnIyZ7syXDMbkBAS2m2w0F/CZOL4rQSmz1qgVFRnJYEXUdwO8sS/WFSTVq4+8tNfFad7/ABb1Bm34JiQbqd1sg8F/Z+AHrOZ4G9Q4RXqDKazVcSEP7FOqxZB55bX85VwbH2xWQ7OpTwzbj5Qy7LEkkEd4IuDt42nmnH2qU8UmJoEFqQYMqZW7VwHQnmCHYqPvFudrd25FQEPfUdpCAdPxE8+6f11wWV6VMuatlVEA7IpsgVrAC/bdV00uQN9jX67D2Eo1AwdXp0qnWbhnd8znyKke5R3TPxlTIjMdksx8lIb8J530GxmJ+pNTxQrUlTFBFDq6P1bjtKc1uypZTe3f3adL0o47Tw+FqFnGc0yig82Ol7fGVl5h9JeMyYmut9WJT+W7A/rwnecGw5pYajSO9OhRQ/xKgB+InmXAabcS4ma1QE0Kbda2Y7Kt+qU99yF0/inqgfaWpE1BNXixNg9Sa7EsPXb0/wA/CSK0WPE5zHpOkxxHa8B8bTR4pAQdR4a8/wBWm4zXJ45ZgTZ8RYa/hNZNMkREBERAREQL1EzLoC7WmAjWmVRxIXX4QO14LjcgCj9fozvuGY4EL3kArf71wB8yfSeK0OKsguou25J290yl6WYgKFIQ2a97MDa4Nt9uyJizWte80K6g3v36n1JmTQe+vkZ4vhvpCbLlqUuVuwx1799vjOh6P9O6AQB6liAL5zY352vvzmcq69SoMO0x5LYe/f3/AJy5grNe4urFhYjQqBYgjmNTOUwfSWlVXq0YFmIAKkFSOfyM6XhjhrC+hS2m4v498itbxnE0cHhXpoVVAGVBfd3Oign95iPfaY3R3g2HbA0sXWXra/axCNUZ2VLHshUvl0VRyJJue63lPHRiHu1eq700PYUPZbg9m6+du+bHo7xvir1MNSVnTC4ViznKyUjQzAutQ2s5t2VHK/vmsNeo1qo6thtkd6YHcvtKPKxE5R8SVxAKnVSCD3EG/wCUy8RxdVwfWf8AlNEfvFPZt/IB/TOfp4m9VSebLf8AhO/wMg9SDJkWoCPtdQoF6l27WUW33J8Nfdw30rMKeCqu+mIqnDUKIB1pUlqLVNrbXZP7PCbrgr5qdmJzUcyAXIBRmB1tvYg+g93GfTLhuro0SvsNV7Wg9rIcuu+2b4xJ7L8bLHdKaRwqVqzAGrRSplvdiWVWIA56kieadJekVTGP2r5F0AJJJ7r8h5DvM01fGO4VSeyi5VA7vHvlgMf0AR6Tc5Z16F0K4eEoF6mK6vrSHVKJpF8trXckNqfu8uepsOjsg/7rFHyVT/60p5gek+Otb6zVA2AUhQB4WGksvxzFtvisR/zVB8jJhr0+o1Lm2MbzpYwL6qgEsVur+5W1vulcfFp5meJVzvXrHzq1D+MjrmO7MfNifnHia7nFCmP9n1Wnf+4zVYmun3Le+iP/AKnOKo7h6Su0oz8YpNIvYZSSBqDyPdOfM6fHaYKn5H8ZzEsSkREqEREBERAREQM7qFyE6+yTv4TBmxv2D/CflNeBCoiVBDKuqMIzuj/FDhMSlfLmC3DLexKkWNjyM936M8cpYikKlJrjKTb9oEciORnzyaZ7jNlwLjtfB1M1JtCRmQ+y3+ZmzVlx9E0eEYQV+vFJetLF73bKH+8Fva/PbfXeab6QeMLSohL9piQBubFWv5DUTWdFOmSYykRqtWnlDqba9zDwOo8x4iajjBqV6nUfWQzu5FNerpsHbXduVrG9trGYbctxHijPhOpY6U8UzsT49aynwFqhHu8JoqfHKqHsm4G2Yki3lLXE3qdY9N7ArUKuAbgul13585g2m5GbW8xHS7Gva1Xq1BUlaV1DFTcFrkk+W09n4hxfB1cItTFqjUKqU6pV0zjtAEG1p89zMr8Vr1KS0XquaVMWRCdAO7xHnFhK6npNx7h5pPhcJQHUe3RyqVArnRqjMTmJAsANraTipESyJUxIkgSoXlxXlIpHu/CVjDN4esiq1qTIpuDMX6se8SRRI5wOg4l/0VP+b5Tl50+MH+ipg/db5CcyREKiIiVCIiAiJMCJIEkS6ghVSE2tylS0pWsrUTOqpWmO+XAo75N/P1k/rlIuGSUtS/WhlYHlKgv6vCuo+j+kt8RuLpRFxoQSX1F+ekwuMY+tgq5ykGsqdXTraMtOiRcZEsArHW5Oa5J11N8zoQcvX+WH7u+pNX0wr3xbKFzHJTBB2tlB3k/qOadyxLEksSSSSSSTqST3ygmZTYFu9PK7C3vIkDANzK+5gTN7ExiS4tBjy9dJsaeGy7KfPLc+sNbuPyk08WAMMe8fGW2p9wJ9xmyFpItGniwaSDmrX/hNpkpTW2xHqJeAEgyauKOrHj85IQQTKS0CWXxlph4w1SWWeWIzK2Pc0hTOXKoIGhva1u+a5pLNKDKhIiJUIiIExIiBIMuK0tSbwMlXlwPMMNKg8mLrNDyrNMIVZUKsmLrLzCSHExRVlQqRi62OExbJfKzC9r2Zhe17XsddzKa1csxJNydzMIVZPWyYayS0m8xeskipGGsgx1hHM+4mWOtkGpGGr/W+N/PtfOQanl/SsxzUlPWRhq+ag7h/d+ctlx3ehlovKC8uJq9n/V5Qzy0XlBaXE1WzygtIJkSokmREQEREBERAREQEREBERASZEQJvJzSmIFYeTnluIFeeM8oiBczxnluIFeeRmlMQKryLyIgTIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z",
    eventName: "Next Concert on Billie Eilish | #WHERE DO WE GO? WORLD TOUR",
    fullDateWithHour: "January 17 | 2PM - 3:30PM",
    location: "Location: Madison Square Garden, New York, NY",
    priceTag: "Starting at $450",
    parentalRating: "15+",
  },
  {
    id: 5,
    eventImageURL:
      "https://cdns-images.dzcdn.net/images/artist/1eee3deb6835a4d9d7aa598417b7b80b/500x500.jpg",
    eventName: "Next Concert on Against The Current | #INFINITY WORLD TOUR",
    fullDateWithHour: "January 18 | 2PM - 3:30PM",
    location: "Location: Radio City Music Hall, New York, NY",
    priceTag: "Starting at $80",
    parentalRating: "16+",
  },
  {
    id: 6,
    eventImageURL:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg",
    eventName: "Next Concert on Eminem | #ENCORE WORLD TOUR",
    fullDateWithHour: "January 21 | 2PM - 3:30PM",
    location: "Location: Radio City Music Hall, New York, NY",
    priceTag: "Starting at $250",
    parentalRating: "18+",
  },
  {
    id: 7,
    eventImageURL:
      "https://m.media-amazon.com/images/I/81D5il1PpPL._AC_SL1425_.jpg",
    eventName: "Next Concert on Avenged Sevenfold | #THE STAGE WORLD TOUR",
    fullDateWithHour: "January 22 | 2PM - 3:30PM",
    location: "Location: Radio City Music Hall, New York, NY",
    priceTag: "Starting at $150",
    parentalRating: "16+",
  },
];

export const EventTrendingFixtures: EventTrendingDTO[] = [
  {
    id: 1,
    trendingPosition: 1,
    eventImageURL:
      "https://veja.abril.com.br/wp-content/uploads/2021/02/FOOFIGHTERS-PRESS-SONY-MUSIC-1.jpg.jpg?quality=70&strip=info&w=680&h=453&crop=1",
    eventName: "Foo Fighters",
  },
  {
    id: 2,
    trendingPosition: 2,
    eventImageURL:
      "https://media.resources.festicket.com/www/artists/against-the-current.jpg",
    eventName: "Against the Current",
  },
  {
    id: 3,
    trendingPosition: 3,
    eventImageURL:
      "https://s2.glbimg.com/OlN3QwAYeZCtcc_2se4K6mfZZMc=/0x0:1440x1800/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/K/r/rL4V5AT3Cb3G7EBtsn7g/paramore.jpg",
    eventName: "Paramore",
  },
  {
    id: 4,
    trendingPosition: 4,
    eventImageURL:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Encore_%28Eminem_album%29_coverart.jpg",
    eventName: "Eminem",
  },
  {
    id: 5,
    trendingPosition: 5,
    eventImageURL:
      "https://m.media-amazon.com/images/I/81D5il1PpPL._AC_SL1425_.jpg",
    eventName: "Avenged Sevenfold",
  },
  {
    id: 6,
    trendingPosition: 6,
    eventImageURL:
      "https://upload.wikimedia.org/wikipedia/pt/2/2f/Billie_Eilish_-_Don%27t_Smile_at_Me.png",
    eventName: "Billie Eilish",
  },
  {
    id: 7,
    trendingPosition: 7,
    eventImageURL:
      "https://www.etonline.com/sites/default/files/styles/970xh/public/images/2016-04/set_blake_shelton_if_im_honest.jpg?itok=zbIDN2Jp",
    eventName: "Blake Shelton",
  },
  {
    id: 8,
    trendingPosition: 8,
    eventImageURL:
      "https://observatoriodosfamosos.uol.com.br/portal/wp-content/uploads/2023/02/bts-5.jpg",
    eventName: "BTS",
  },
  {
    id: 9,
    trendingPosition: 9,
    eventImageURL:
      "https://classic.exame.com/wp-content/uploads/2023/03/Coldplay_divulgacao.jpg?quality=70&strip=info&w=800",
    eventName: "Coldplay",
  },
  {
    id: 10,
    trendingPosition: 10,
    eventImageURL:
      "https://s2.glbimg.com/vSRLEaJXKRYK5bZqjXQ3DNWQJ08=/0x0:1600x1066/924x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/03/21/30009872300-c7bb7716ea-k.jpg",
    eventName: "Marshmello",
  },
];

export const QuickEventFilterFixtures: QuickEventFilterDTO[] = [
  {
    id: 1,
    categoryName: "All",
  },
  {
    id: 2,
    categoryName: "Music",
  },
  {
    id: 3,
    categoryName: "Sports",
  },
  {
    id: 4,
    categoryName: "Theater",
  },
  {
    id: 5,
    categoryName: "Comedy",
  },
  {
    id: 6,
    categoryName: "Festivals",
  },
];

export const EventKindCategoriesFixtures: EventKindCategoriesDTO[] = [
  {
    id: 1,
    title: "Music",
    items: [
      {
        id: 1,
        title: "All",
        pathTo: "/events/music/all",
      },

      {
        id: 2,
        title: "Alternative",
        pathTo: "/events/music/alternative",
      },
    ],
  },
  {
    id: 2,
    title: "Sports",
    items: [
      {
        id: 1,
        title: "All",
        pathTo: "/events/sports/all",
      },
      {
        id: 2,
        title: "Baseball",
        pathTo: "/events/sports/baseball",
      },
    ],
  },
];
