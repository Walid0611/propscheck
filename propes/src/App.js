
import './App.css';
import Profile from './component/Profile';
import ClassProfile from './component/ClassProfile';


const handleAlert=Name=> alert(`my name is ${Name}`)

function App() {
  return (
    <div className="App">

<h1>welcome to my page </h1>



<br></br> 


  <Profile
   Name="walid"
  bio="player of video games "
  profession="devlopeur"
  handleAlert={handleAlert}
  
/>
  





<ClassProfile Name='test' age={25}  >
  <div>
    <hr/>
<h4> hello i'm a child prop</h4>
 <p> hello i'm a child too </p>
 
<hr/>

  </div>
</ClassProfile>






    </div>
  );
}

export default App;
