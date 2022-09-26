import React from "react";
import axios from "axios";

export default function DogPage() {
    let LApi = "https://dog.ceo/api/breeds/image/random";

    function GetDogs() {
        axios.get(LApi).then(() => {
            console.log(response)
        }
    }

    return (
        <>

        </>
    );
}