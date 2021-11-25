import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories/Categories";
import PetDetails from './components/PetDetails/PetDetails'
import "./App.css";
import CreatePet from "./components/CreatePet/CreatePet";

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories} />
        
        <Route path="/categories/:category" component={Categories}/>
        <Route path="/pets/details/:petId" component={PetDetails}/>
        <Route path="/pets/create" component={CreatePet}/>
      </Switch>
      <h1>Hello World</h1>
      <Footer />
    </div>
  );
}

export default App;
