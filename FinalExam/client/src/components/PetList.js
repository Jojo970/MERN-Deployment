import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PetList = (props) => {

    const {pets, setPets} = props;


    useEffect( (e) => {
        axios.get("http://localhost:8000/api/pets").then(res => {
            setPets(res.data.Pets)
            console.log(res.data.Pets)
        }).catch(err => console.log(err))
    },[]);

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
            <Link to= {'/add'}>add a pet to the shelter</Link>
        </div>
        <div style = {
                {
                    display:"flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 20px"
                }
            }>
        <h2>These pets are looking for a good home</h2>
        </div>
        <div>
            <table style = {{
                border : "1px solid",
                margin: "10px",
                padding: "10px"
            }}>
                <tr style = {{
                border : "1px solid",
                margin: "10px",
                padding: "10px"
            }}>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {   
                    pets.map((pet, index) => {
                        
                        return(
                            <tr style = {{
                                border : "1px solid"
                            }} key= {index}>
                                <td style = {{
                border : "1px solid"
            }}>{pet.petName}</td>
                                <td style = {{
                border : "1px solid"
            }}>{pet.petType}</td>
                                <td style = {{
                border : "1px solid"
            }}> {<Link to = {`/detail/${pet._id}`}>details</Link>} | {<Link to = {`/edit/${pet._id}`}>edit</Link>}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        </>
    )
}

export default PetList;
