import React, { useEffect } from "react";
import axios from "axios";

export default function DogPage() {
    let LApi = "https://dog.ceo/api/breeds/image/random";

    function getApi(){
        axios.get(LApi).then(res =>{
            console.log(res)
        })
    }

    useEffect(()=>{
        getApi()
    })

    return (
        <>

        </>
    );
}