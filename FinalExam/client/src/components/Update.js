import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useNavigate, useParams} from "react-router-dom";

const Update = (props) => {
    const {id} = useParams();

    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('');
    const [petDescription, setPetDescription] = useState('');
    const [petSkill1, setPetSkill1] = useState('');
    const [petSkill2, setPetSkill2] = useState('');
    const [petSkill3, setPetSkill3] = useState('');
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/" + id).then (res => {
            console.log(res.data);
            setPetName(res.data.Pet.petName);
            setPetType(res.data.Pet.petType);
            setPetDescription(res.data.Pet.petDescription);
            setPetSkill1(res.data.Pet.petSkill1);
            setPetSkill2(res.data.Pet.petSkill2);
            setPetSkill3(res.data.Pet.petSkill3);
        }).catch( (err) =>{
            console.log(err)
        })
            
        
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/pets/' + id , {
            petName,
            petType,
            petDescription,
            petSkill1,
            petSkill2,
            petSkill3
        }).then(res => {
            console.log(res);
            navigate('/')
        }).catch(err => setErrors(err.response.data.error.errors))
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
            }>
            <h2>Edit {petName}</h2>
            </div>
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
            }>

            <div >

                <div>
                    <p>Pet Name:</p>
                    <input onChange = { (e) => setPetName(e.target.value)} type = "text" value= {petName}></input>
                    {errors.petName ? 
                    <p>{errors.petName.message}</p>
                    :null}
                </div>
                <div>
                    <p>Pet Type:</p>
                    <input onChange = { (e) => setPetType(e.target.value)} type = "text" value= {petType}></input>
                    {errors.petType ? 
                    <p>{errors.petType.message}</p>
                    :null}
                </div>
                <div>
                    <p>Pet Description:</p>
                    <input onChange = { (e) => setPetDescription(e.target.value)} type = "text" value= {petDescription}></input>
                    {errors.petDescription ? 
                    <p>{errors.petDescription.message}</p>
                    :null}
                </div>
            </div>
            <div>

                <div>
                    <p>Skill 1:</p>
                    <input onChange = { (e) => setPetSkill1(e.target.value)} type = "text" value= {petSkill1}></input>
                </div>
                <div>
                    <p>Skill 2:</p>
                    <input onChange = { (e) => setPetSkill2(e.target.value)} type = "text" value= {petSkill2}></input>
                </div>
                <div>
                    <p>Skill 3:</p>
                    <input onChange = { (e) => setPetSkill3(e.target.value)} type = "text" value= {petSkill3}></input>
                </div>
            </div>
                    </div>
                <button style = {{ backgroundColor:"blue", color:"white", width:"100px",boxShadow: "5px 5px 5px black"
            }}>Edit Pet</button>
            </div>
        </form>
        </>
    )
}

export default Update