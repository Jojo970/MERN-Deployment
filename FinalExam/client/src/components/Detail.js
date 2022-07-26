import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link} from "react-router-dom";

const Detail = (props) => {
    const [pet, setPet] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const [likes, setLikes] = useState(0)
    const [didLike, setDidLike] = useState(false)

    const upLike = () => {
        setLikes(likes +1)
        setDidLike(true)
        };
    

    const adoptPet = (petId) => {
        axios.delete(`http://localhost:8000/api/pets/${petId}`).then(
            res => {
                console.log(res)
                navigate('/')
            }
        ).catch(err => console.log(err));
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`).then(
            res => {
                setPet(res.data.Pet)
                console.log(res.data)
            }
        ).catch(err => { console.log(err)})
    }, [])

    return (
        <>
        <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px"
                }
            }>
            <h1>Pet Shelter</h1>
            <Link to = {'/'}>back to home</Link>
        </div>
        <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px"
                }
            }>
            <h2>Details about Garfield</h2>
            <button onClick = {(e) => adoptPet(id)}>Adopt {pet.petName}</button>
        </div>
        <div style={{
            padding:"10px 100px 0px 0px",
            border: "1px solid black",
            margin: "0px 20px"
        }}>
        <div style = {{
            display:"flex",
            alignItems: "initial",
            padding: "5px 455px 0px 20px",
            margin: "0px 20px",
            justifyContent: "space-between"
        }}>
            <p>Pet type:</p>
            <p>{pet.petType}</p>
        </div>
        <div style = {{
            display:"flex",
            alignItems: "initial",
            padding: "5px 400px 0px 20px",
            margin: "0px 20px",
            justifyContent: "space-between"
        }}>
            <p>Description:</p>
            <p>{pet.petDescription}</p>
        </div>
        <div style = {{
            display:"flex",
            alignItems: "initial",
            padding: "5px 400px 0px 20px",
            margin: "0px 20px",
            justifyContent: "space-between"
        }}>
            <p>Skills:</p>
            <div>
                <p>{pet.petSkill1}</p>
                <p>{pet.petSkill2}</p>
                <p>{pet.petSkill3}</p>
            </div>
        </div>
        <div style = {{
            display:"flex",
            justifyContent:"space-between",
            margin: "0px 50px"
        }}>

        <button onClick = {(e) => {upLike()}} disabled = {didLike}>Like {pet.petName}</button>
        <p>{likes} like(s)</p>
        </div>
        </div>
        </>
    )
}

export default Detail;
