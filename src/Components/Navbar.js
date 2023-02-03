import logo from "../Assets/NoEstamosListos.png"
import "../Css/Navbar.css"


export default function Navbar(){
    return <div className="nav">
        
        <ul>
            <li>
                <a href="/" className="Logo"><img src={logo} alt="logo" height="px"/></a>
            </li>
            <li>
                <a href="/piercing"> Dashboard</a>
            </li>
            <li>
                <a href="/about">WorkLists</a>
            </li>
            <li>
                <a href="/piercing">Employees</a>
            </li>
            <li>
                <a href="/about">Inventory</a>
            </li>
            <li>
                NombreAdmin
            </li>
        </ul>
    </div>
}