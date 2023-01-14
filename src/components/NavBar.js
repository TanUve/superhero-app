import { useNavigate } from "react-router";
import '../assets/navbar.css'

function NavBar() {

    const navigate = useNavigate()

    return (
        <>
            <div className="navbarContainer">
                <button className="btnNav" onClick={() => navigate('/marvel')}>MARVEL CHARACTERS</button>
                <button className="btnNav" onClick={() => navigate('/dc')}>DC COMIC CHARACTERS</button>
                <button className="btnNav" onClick={() => navigate('/new')}>ADD NEW CHARACTER</button>
            </div>

        </>

    );
}

export default NavBar;
