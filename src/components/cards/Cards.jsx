import Card from '../card/Card';
import styled from './cards.module.css';


export default function Cards({characters} ) {
  
   const onClose= () => window.alert('Emulamos que se cierra la card');
   
   
   return  (
    <div className={styled.tarjetas} >
      {characters.map(({name, species, gender, image})=>{
        return (
        <Card
        name={name}
        species={species}
        gender={gender}
        image= {image}
        onClose={onClose}
        />)
      })}
   </div>
   
   );
}
