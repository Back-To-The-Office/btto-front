const ironMan = {
    id: 'ironMan',
    timezone: "America/New_York",
    name: 'Anthony Stark',
    geo: 'New York, USA',
    role: 'Co-Founder "Shield" initiative',
    img: 'https://i.pinimg.com/originals/f0/d3/f9/f0d3f9063896bd44631cb386ebdfd914.jpg',
    isOnline: true,
    workTime: [[10, 14], [16, 23]]
}

const thor = {
    id: 'thor',
    timezone: 'Europe/London',
    name: 'Thor',
    geo: 'Asgard',
    role: 'God of Asgard',
    img: 'https://s3.r29static.com/bin/entry/ce2/x,80/2169674/image.jpg',
    isOnline: false,
    workTime: [[12, 18]]
}

const blackWidow = {
    id: 'blackWidow',
    timezone: 'Europe/Moscow',
    name: 'Natasha Romanova',
    geo: 'Moscow',
    role: 'Spy',
    img: 'https://www.hindustantimes.com/rf/image_size_1200x900/HT/p2/2020/05/03/Pictures/_91ad5416-8d0f-11ea-8bae-d48e751bd032.jpg',
    isOnline: true,
    workTime: [[3, 9], [12, 18]]
}

const hulk = {
    id: 'hulk',
    timezone: "America/New_York",
    name: 'Bruce Banner',
    geo: 'New York, USA',
    role: 'Gamma rays scientist',
    img: 'https://www.pinkvilla.com/files/avengers-endgame-star-mark-ruffalo-celebrates-bruce-banners-50th-birthday-with-an-endearing-post.jpg',
    isOnline: true,
    workTime: [[8, 12], [13, 17]]
}

const spiderMan = {
    id: 'spiderMan',
    timezone: "America/New_York",
    name: 'Peter Parker',
    geo: 'New York, USA',
    role: 'Student',
    img: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile.jpg/revision/latest?cb=20190917181733',
    isOnline: false,
    workTime: [[20, 23], [0, 8]]
}

const captainAmerica = {
    id: 'captainAmerica',
    timezone: "America/New_York",
    name: 'Steven Rogers',
    geo: 'New York, USA',
    role: 'Super Soldier',
    img: 'https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg',
    isOnline: true,
    workTime: [[8, 14]]
}

const hawkeye = {
    id: 'hawkeye',
    timezone: "America/New_York",
    name: 'Clint Barton',
    geo: 'New York, USA',
    role: 'Archer',
    img: 'https://img.cinemablend.com/filter:scale/quill/8/c/6/b/9/5/8c6b956929470355d6a16667d9a515fb23c110a9.jpg?fw=1200',
    isOnline: true,
    workTime: [[8, 14]]
}

const vision = {
    id: 'vision',
    timezone: "America/New_York",
    name: 'Vision',
    geo: 'New York, USA',
    role: 'Android',
    img: 'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-marvel-the-avengers-paul-bettany.jpg',
    isOnline: true,
    workTime: [[4, 22]]
}

const avengers = {
    id: 'avengers',
    name: 'Avengers',
    members: {
        'ironMan': ironMan,
        'thor': thor, 
        'blackWindow': blackWidow, 
        'hulk': hulk, 
        'spiderMan': spiderMan, 
        'captainAmerica': captainAmerica, 
        'hawkeye': hawkeye, 
        'vision': vision
    }
}

const avengurs = {
    id: 'asdasdd232312dasdsa',
    name: 'Avengurs',
    usersObject: {
        'thor': thor, 
        'blackWindow': blackWidow, 
        'hulk': hulk, 
        'spiderMan': spiderMan, 
        'captainAmerica': captainAmerica, 
        'hawkeye': hawkeye, 
        'vision': vision
    }
}

export const marvel = {
    id: 'marvel',
    name: 'Marvel',
    teams: {
        'avengers': avengers,
        'asdasdd232312dasdsa': avengurs
    }
}