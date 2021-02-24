interface User {
    id: string,
    timezone: string,
    name: string,
    geo: string,
    role: string,
    img: string,
    isOnline: boolean,
    workTime: Array<Array<number>>
}

export default User;
