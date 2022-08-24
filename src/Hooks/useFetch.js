import { useState } from 'react';

const useFetch = () => {
    /* const blogs = [
        {
            name:'Lisha',
            email:'abc@gmail.com',
            phoneNumber:"01234567891",
            paidAmount:"123",
        },
        {
            name:'Tisha',
            email:'bbc@gmail.com',
            phoneNumber:"01234567892",
            paidAmount:"456",
        },
        {
            name:'Nisha',
            email:'cca@gmail.com',
            phoneNumber:"01234567893",
            paidAmount:"789",
        }
    ] */

    const [allBills, setAllBills] = useState();

    const getMethod=(url) => {
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            // console.log(data);
            setAllBills(data);
        })
         
    }

    const postMethod = (url, billInfo, e) => {
        fetch(url, {
            method: "POST",
            headers: {
                'content-type':'application/json',
            },
            body:JSON.stringify(billInfo),
        })
        .then(res=>res.json())
            .then(data => {
                setAllBills(data)
            console.log(allBills);
        })
    }  

    return {
        allBills,
        setAllBills,
        getMethod
    }
};

export default useFetch;