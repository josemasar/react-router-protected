import {Navigate} from "react-router-dom"

export function Landing(){
    return <h2>Landing page (public)</h2>
}

export function Home({user}){
    return <h2>Home page (private)</h2>
}

export function Dashboard(){
    return <h2>Dashboard page (private)</h2>
}

export function Analytics(){
    return <h2>Analytics page (private, permission:"analytics")</h2>
}

export function Admin(){
    return <h2>Admin page (private, permission:"analytics")</h2>
}
