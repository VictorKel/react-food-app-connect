import { useContext } from 'react';
import './styles.css';
import ThemeButton from '../theme-button';
import { ThemeContext } from '../../App';

const RecipeItem = (props)=> {
  const {id,image,title, addToFavorites} = props;
  const {theme} = useContext(ThemeContext)


  return (
    <div key={id} className= "recipe-item">
     <div>
       <img src={image} alt="image of recipe"/>
     </div>

     <p style={theme ? {color: "#12343b"} : {}}>{title}</p>

     <button type="button" style={theme ? {backgroundColor : "#12343b"} : {}} onClick={addToFavorites}>Add to favorites</button>

    </div>
  );
};


export default RecipeItem;