import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


const PetForm = (props) => {

    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [petSkill1, setPetSkill1] = useState('');
    const [petSkill2, setPetSkill2] = useState('');
    const [petSkill3, setPetSkill3] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/pets', {
            petName,
            petType,
            petDescription,
            petSkill1,
            petSkill2,
            petSkill3
        }).then(res => {
            console.log(res);
            navigate('/')
        }).catch((err) => {
            setErrors(err.response.data.error.errors);
            console.log(err)})
    }
    return (
        <>
        <form onSubmit = {submitHandler}>
            <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px"
                }
            }>
            <h1>Pet Shelter</h1>
            <Link to = {"/"}>back to home</Link>
            </div>
            <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px"
                }
            }><h2>Know a pet needing a home?</h2></div>
            <div style = {{
                    border: "2px solid black",
                    padding: "20px",
                    margin: "0px 50px 0px 20px"
                }}>

            <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px",
                    margin: "0px 300px 10px 25px"
                    

                }
            } >
                <div >
                    <div>
                        <p>Pet Name:</p>
                        <input onChange = { (e) => setPetName(e.target.value)} type = "text"></input>
                        {errors.petName ? 
                        <p  style = {{
                            color:"red"
                        }}>{errors.petName.message}</p>
                        :null}
                    </div>
                    <div>
                        <p>Pet Type:</p>
                        <input onChange = { (e) => setPetType(e.target.value)} type = "text"></input>
                        {errors.petType ? 
                        <p style = {{
                            color:"red"
                        }}>{errors.petType.message}</p>
                        :null}
                    </div>
                    <div>
                        <p>Pet Description:</p>
                        <input onChange = { (e) => setPetDescription(e.target.value)} type = "text"></input>
                        {errors.petDescription ? 
                        <p style = {{
                            color:"red"
                        }}>{errors.petDescription.message}</p>
                        :null}
                    </div>
                </div>
                <div>

                    <div>
                        <p>Skill 1:</p>
                        <input onChange = { (e) => setPetSkill1(e.target.value)} type = "text"></input>
                    </div>
                    <div>
                        <p>Skill 2:</p>
                        <input onChange = { (e) => setPetSkill2(e.target.value)} type = "text"></input>
                    </div>
                    <div>
                        <p>Skill 3:</p>
                        <input onChange = { (e) => setPetSkill3(e.target.value)} type = "text"></input>
                    </div>
                    </div>
                </div>
                <div style = {{
                    marginLeft : "45px"
                }}>

            <input style = {{ backgroundColor:"blue", color:"white", width:"100px",boxShadow: "5px 5px 5px black"
            }} type = "submit" value= "Add Pet"/>
                </div>
            </div>
        </form>
        </>
    )
};

export default PetForm;
