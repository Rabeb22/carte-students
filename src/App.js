
import './App.css';
import { Listecarte } from './component/listecarte/Listecarte';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carteinitial } from './component/carteinitial/Carteinitial';

import NewNav from './component/newNav/NewNav';
//import Navibar from './component/navibar/Navibar'



const premier=[{id:1, theme:"Learning Progress",now:60},{id:2, theme:"Average Checkpoint Score", now:90},{id:3, theme:"Average One To One Meeting Score", now:96},{id:4, theme:"Average Learning Score", now:82}]
const date={
  datedebut:"2022/11/28",
  datefin:"2023/05/16"
}


const liste=[{
  id:Math.random(),
  image:"https://cdn.unitycms.io/images/6noSHuprqylAI-s_8GqFIA.jpg?op=ocroped&val=1600,1600,1000,1000,0,0&sum=bL0HUoulwPo",
  nom:"Amira",
  course:"FS javaScript"

},{
  id:Math.random(),
  image:"https://st.depositphotos.com/1075946/4778/i/450/depositphotos_47780225-stock-photo-handsome-man-in-town.jpg",
  nom:"Karim",
  course:"FS javaScript"
},{
  id:Math.random(),
  image:"https://st3.depositphotos.com/9881890/16378/i/450/depositphotos_163785870-stock-photo-blonde-smiling-businesswoman.jpg",
  nom:"Mouna",
  course:"FS javaScript"
},{
  id:Math.random(),
  image:"https://st.depositphotos.com/1743476/2514/i/450/depositphotos_25144755-stock-photo-presenting-your-text.jpg",
  nom:"youssef",
  course:"FS javaScript"
},{
  id:Math.random(),
  image:"https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg",
  nom:"Ahmad",
  course:"FS javaScript"},
  {
    id:Math.random(),
    image:"https://st.depositphotos.com/1371851/1256/i/450/depositphotos_12560182-stock-photo-handsome-man-with-eyeglasses.jpg",
    nom:"wassim",
    course:"FS javaScript"}]


const greeting=(name)=>{alert(`Hello everybody, I am ${name}`)}

function App() {
  return (
    <div className="App">
    <NewNav/>
   
    <br></br>
    
      <Carteinitial array={premier} date={date}/>
      <br/>
        <hr/>
        <br/>

      {/*<Parent st={student}/>*/}
      
      <Listecarte  lis={liste} hello={greeting}/>
      
    </div>
  );
}

export default App;
