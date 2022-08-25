import { useState } from 'react';
import { toast } from 'react-toastify';

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

    // <-------------- get method from Home page-------------->
    const getMethod=(url) => {
        fetch(url)
        .then(res=>res.json())
        .then(data => {
            // console.log(data);
            setAllBills(data);
        })  
    }
    // <-------------- get method from Home page -------------->


    // <-------------- post method from AddModal page -------------->
    const postMethod = (url, billInfo, e, setShow) => {
        fetch(url, {
            method: "POST",
            headers: {
                'content-type':'application/json',
            },
            body:JSON.stringify(billInfo),
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                toast.success('Wow so easily add this bill!');
                e.target.reset();
                setShow(false);
            }
            else {
                toast.error('Something went wrong. Please try again !');
                setShow(false);
            }
        })
    }  
    // <-------------- post method from AddModal page -------------->


    // <-------------- Delete  method from TableData page-------------->
    const deleteMethod = (url) => {
        if (window.confirm('do you want to delete this data ?') === true) {
            fetch(url, {
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Wow so easily add this bill!');
                }
                else {
                    toast.error('Something went wrong. Please try again !');
                }
            })
        }
        else {
            toast.error('You canceled!');
        }
    }
    // <-------------- Delete  method from TableData page -------------->



    // <-------------- put  method form EditModal -------------->
    const putMethod = (url,  data, e, setShow) => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                toast.success('Wow so easily add this bill!');
                e.target.reset();
                setShow(false);
            }
            else {
                toast.error('Something went wrong. Please try again !');
                setShow(false);
            }
        })
    }

    // <-------------- put  method form EditModal -------------->

    return {
        allBills,
        setAllBills,
        getMethod,
        postMethod,
        deleteMethod,
        putMethod
    }
};

export default useFetch;