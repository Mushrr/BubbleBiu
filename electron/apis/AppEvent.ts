type AppEvent = {
    minWindow: () => void,
    getUserList: (order: "asc" | "desc") => { name: string, age: number }[],
}

export default AppEvent;