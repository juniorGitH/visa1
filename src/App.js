import './App.css';
import TableDeBord from './component/TableDeBord';
import Service from './component/Service';
import Notification from './component/Notification';
import Accueil from './component/Accueil';
import Connexion from './component/Connexion';
import{ BrowserRouter, Route, Routes} from 'react-router-dom';
import Inscription from './component/Inscription';
import Layout from './component/Layout';
import ContactDev from './component/ContactDev';
import Discussions from './component/Discussions';
function App() {
    return ( <
        >
        
        <BrowserRouter>
        <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Accueil/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/Inscription" element={<Inscription/>}/>
        <Route path="/TableDeBord" element={<TableDeBord/>}/>
        <Route path="/Notification" element={<Notification/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/ContactDev" element={<ContactDev/>}/>
        <Route path="/Discussions" element={<Discussions/>}/>
        

        </Route>
        
        </Routes>
        </BrowserRouter> 
         
        </>
    );
}

export default App;