import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import { AiOutlineSearch } from "react-icons/ai"
import Card from './Card';
function Companion() {
    const [fetchData, setFetchData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState([]);

    const [pageNumber, setPageNumber] = useState(1)
    const handleCheckboxChange = (event) => {
        const species = event.target.value;
        if (event.target.checked) {
            setSelectedSpecies((prevSelectedSpecies) => [...prevSelectedSpecies, species]);
        } else {
            setSelectedSpecies((prevSelectedSpecies) => prevSelectedSpecies.filter(item => item !== species));
        }
        setPageNumber(1)
      };
    useEffect(() => {
        fetch(`https://639af865d514150197465a63.mockapi.io/project?page=${pageNumber}&limit=5`)
            .then((res) => res.json())
            .then((data) => {
                setFetchData(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [pageNumber])

    useEffect(() => {
        if (selectedSpecies.length === 0) {
            // Show all data when no checkboxes are selected
            setFilteredData(fetchData);
        } else {
            // Filter data based on selected species
            const filtered = fetchData.filter(item => selectedSpecies.includes(item.petName));
            setFilteredData(filtered);
        }
    }, [fetchData, selectedSpecies]);
    // const startIndex = (pageNumber - 1) * 5;
    // const displayedData = filteredData.slice(startIndex, startIndex + 5);

    return (
        <div>
            <p className={style.com}>Companion Care &gt; <span>Search</span></p>
            <p style={{ fontSize: "20px", marginTop: "10px" }}>Please enter search keyword</p>
            <br />
            <div style={{ border: "1px solid grey", width: "30%", margin: "auto" }}>
                <input style={{ outline: "none", border: "none", fontSize: "15px" }} type="text" placeholder='Search' />
                <AiOutlineSearch style={{ fontSize: "20px", marginTop: "5px" }} />
            </div>
            <br />
            <div style={{ display: "flex", backgroundColor: "rgb(245, 244, 242)" }}>
                <div className={style.check} style={{ width: "20%", textAlign: "start", padding: "40px" }}>
                    <h3>Refine by</h3>
                    <br />
                    <hr />
                    <br />
                    <p>Species</p>

                    <div><input type="checkbox" value="Cat" onChange={handleCheckboxChange}/><span>Cat</span></div>
                    <div><input type="checkbox" value="Dog" onChange={handleCheckboxChange} /><span>Dog</span></div>
                    <div><input type="checkbox" value="Rabbit" onChange={handleCheckboxChange} /><span>Rabbit</span></div>
                    <div><input type="checkbox" value="Bird" onChange={handleCheckboxChange} /><span>Bird</span></div>
                    <div><input type="checkbox" value="Hamster" onChange={handleCheckboxChange} /><span>Hamster</span></div>
                    <div><input type="checkbox" value="Fish" onChange={handleCheckboxChange} /><span>Fish</span></div>

                </div>
                <div>{
                    filteredData.map((ele) => (
                        <Card key={ele.id} prop={ele} />
                    ))
                }</div>
            </div>
            <br />

            <div className={style.pagi}>
                <div><button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>Previous</button></div>
                <div><p>{pageNumber}</p></div>
                <div><button disabled={pageNumber === 5} onClick={() => setPageNumber(pageNumber + 1)}>Next</button></div>
            </div>

        </div>
    )
}

export default Companion