import { IoMoonSharp } from "react-icons/io5";
import '../styles/Navbar.css';
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar(){

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

        return(
        <div className="main-container">
            <div className="nav-container">
                <div>
              <h1>Expense Tracker</h1>
                </div>

                <div className="nav-link">
                    <ul>
                        <li><NavLink to="/" className="links">Home</NavLink></li>
                    </ul>

                    <ul>
                        <li><NavLink to="/add-expense" className="links">Add Expense</NavLink></li>
                    </ul>

                    <ul>
                        <li><NavLink to="/expense-items"  className="links">Expense Items</NavLink></li>
                    </ul>

                </div>
                <div className="nav-actions">
                    <button type="button" className="theme-toggle">
                        <IoMoonSharp />

                    </button>

                    <a href="" className="links logout-btn" onClick={logout}>
                        Logout
                    </a>
                </div>
            </div>
        </div>

                

        
    );
}