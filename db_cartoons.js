const imagePathPrefix = "";

class Genre {
    constructor(name) {
        this.name = name;
    }
}

const genres = {
    adventure: new Genre("Adventure"),
    action: new Genre("Action"),
    fantasy: new Genre("Fantasy"),
    mystic: new Genre("Mystic"),
}

const cartoons = [
    {
        id: 0,
        image: `${imagePathPrefix}assets/Adventure_time.jpg`,
        heading: "Adventure Time",
        description: "A twelve-year-old boy and his best friend, \n a wise twenty-eight-year-old dog with magical powers, \n go on a series of surreal adventures in a remote future",
        genres: [genres.adventure, genres.action, genres.fantasy],
        release: "2022-11-02",
        likes: 0,
        episodes: 1,
        characters: [ {
            name: "Phin", 
            image: `${imagePathPrefix}assets/FinnAdventureTime.png`
        },
        {
            name: "Princess Bubblegum", 
            image: `${imagePathPrefix}assets/Princess_Bubblegum.png`
        }
        ]
    },
    {
        id: 1,
        image: `${imagePathPrefix}assets/avatar.jpg`,
        heading: "Avatar",
        description: "In a war-torn world of elemental magic, \n a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, \n and bring peace to the world.",
        genres: [genres.adventure, genres.action, genres.fantasy],
        release: "2024-09-14",
        likes: 0,
        episodes: 1,
        characters: [ {
            name: "Phin", 
            image: `${imagePathPrefix}assets/FinnAdventureTime.png`
        },
        {
            name: "Princess Bubblegum", 
            image: `${imagePathPrefix}assets/Princess_Bubblegum.png`
        }
        ]
    }, 
    {
        id: 2,
        image: `${imagePathPrefix}assets/Gravity-Falls.png`,
        heading: "Gravity Falls",
        description: "Twin siblings Dipper and Mabel Pines \n spend the summer at their great-uncle's tourist \n trap in the enigmatic Gravity Falls, Oregon.",
        genres: [genres.adventure, genres.mystic],
        release: "2023-05-29",
        likes: 0,
        episodes: 1,
        characters: [ {
            name: "Phin", 
            image: `${imagePathPrefix}assets/FinnAdventureTime.png`
        },
        {
            name: "Princess Bubblegum", 
            image: `${imagePathPrefix}assets/Princess_Bubblegum.png`  
        }
        ]
    },
    {
        id: 3,
        image: `${imagePathPrefix}assets/Over_The_Garden_Wall.jpg`,
        heading: "Over The Garden Wall",
        description: "Two brothers find themselves lost in a mysterious \n land and try to find their way home.",
        genres: [genres.adventure, genres.mystic],
        release: "2025-04-23",
        likes: 0,
        episodes: 1,
        characters: [ {
            name: "Phin", 
            image: `${imagePathPrefix}assets/FinnAdventureTime.png`
        },
        {
            name: "Princess Bubblegum", 
            image: `${imagePathPrefix}assets/Princess_Bubblegum.png`
        }
        ]
    },
    {
        id: 4,
        image: `${imagePathPrefix}assets/Regular_show.jpg`,
        heading: "Regular Show",
        description: "The surreal misadventures of two \n best friends - a blue jay and a raccoon - as they seek \n to liven up their mundane jobs as groundskeepers at the local park.",
        genres: [genres.adventure, genres.fantasy],
        release: "2013-06-01",
        likes: 0,
        episodes: 1,
        characters: [ {
            name: "Phin", 
            image: `${imagePathPrefix}assets/FinnAdventureTime.png`
        },
        {
            name: "Princess Bubblegum", 
            image: `${imagePathPrefix}assets/Princess_Bubblegum.png` 
        }
        ]
    }
];

export { cartoons, genres };