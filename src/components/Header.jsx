import DropdownButton from './DropdownButton.jsx'
import './Header.css'
export default function Header ({setCategory}) {
    const dropdownInfo = {label: 'Category', buttons: ['Electronics', 'Relics', 'Household'], defaultText: 'All', setState: setCategory }
    return (
        <DropdownButton className='header' dropdownInfo={dropdownInfo}/>

    
    
    )
}