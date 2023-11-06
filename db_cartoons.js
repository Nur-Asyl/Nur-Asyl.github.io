// const isGitHubPages = window.location.hostname === "nur-asyl.github.io";
// const imagePathPrefix = isGitHubPages ? "Cartoon/" : "";

const imagePathPrefix = "";

const cartoons = [
    {
        image: `${imagePathPrefix}assets/Adventure_time.jpg`,
        heading: "Adventure Time",
        description: "A twelve-year-old boy and his best friend, \n a wise twenty-eight-year-old dog with magical powers, \n go on a series of surreal adventures in a remote future",
        release: "02.11.2023",
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
        image: `${imagePathPrefix}assets/avatar.jpg`,
        heading: "Avatar",
        description: "In a war-torn world of elemental magic, \n a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, \n and bring peace to the world.",
        release: "07.09.2022",
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
        image: `${imagePathPrefix}assets/Gravity-Falls.png`,
        heading: "Gravity Falls",
        description: "Twin siblings Dipper and Mabel Pines \n spend the summer at their great-uncle's tourist \n trap in the enigmatic Gravity Falls, Oregon.",
        release: "21.03.2016",
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
        image: `${imagePathPrefix}assets/Over_The_Garden_Wall.jpg`,
        heading: "Over The Garden Wall",
        description: "Two brothers find themselves lost in a mysterious \n land and try to find their way home.",
        release: "27.06.2016",
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
        image: `${imagePathPrefix}assets/Regular_show.jpg`,
        heading: "Regular Show",
        description: "The surreal misadventures of two \n best friends - a blue jay and a raccoon - as they seek \n to liven up their mundane jobs as groundskeepers at the local park.",
        release: "03.01.2013",
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

export { cartoons };