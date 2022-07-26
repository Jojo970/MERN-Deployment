import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PetList from '../components/PetList';


const Main = (props) => {
    const [pets, setPets] = useState([]);
    return (
        <div>
            <PetList pets = {pets} setPets = {setPets} />
        </div>
    )
}

export default Main;
