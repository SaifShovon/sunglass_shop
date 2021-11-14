import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = 'https://mysterious-gorge-96095.herokuapp.com/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resData => {
                console.log(resData)
                if (resData.insertedId) {
                    alert('Inserted Successfully!!!')
                    reset({})
                }
            })
    }
    return (
        <div className="add-product">
            <h2>Add a Product</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />
                <textarea {...register("short_description")} placeholder="Short Description" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input  {...register("img")} placeholder="Full URL of online storage image" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;