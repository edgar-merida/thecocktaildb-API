import Title from '../../atoms/Title/Title'
import Buscador from "../../molecules/Buscador";

require("./Nav.css");


const Nav = ({text, getApi}) => {
    
    const asignar = (a) => {
        getApi(a)
       // console.log('Navegador: '+a)
    }

    return (
        <div className="navBar">
            <div>
                <Title title={text} />
            </div>
            <div className="navBar__link">
                <a href='https://www.thecocktaildb.com/api.php'><h5>API source</h5> </a>
            </div>
            <div className="navBar__formulario">
                <Buscador getApi={(a) => asignar(a)}/>
            </div>
        </div>
    );
};

export default Nav;
