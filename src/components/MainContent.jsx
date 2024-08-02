import Header from './Header.jsx'
import {useState} from 'react'


export default function MainContent () {
    const [category, setCategory] = useState('')
    console.log(category)
    return <Header setCategory={setCategory}/>
}