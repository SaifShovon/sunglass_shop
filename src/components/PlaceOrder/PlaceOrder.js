import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/AuthProvider';
import Header from '../Header/Header';
import './PlaceOrder.css';
const PlaceOrder = (props) => {
    const { user } = useAuth();
    const { product_id } = useParams();
    var product = props.all_product.filter(product => product._id === product_id);

    //const url = 'https://grim-spell-56760.herokuapp.com/orders';
    const url = 'https://mysterious-gorge-96095.herokuapp.com/orders';
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        data.email = user.email;
        data.name = user.displayName;
        data.status = "Pending";
        data.product_name = product[0].name;
        data.price = product[0].price;
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
        <div className="add-order">
            <Header></Header>
            <h2>Add an Order- {product[0]?.name}</h2>
            <h5><b> Your Name:</b> {user.displayName}</h5>
            <h5><b> Your Email:</b> {user.email}</h5>
            <p><b> Price:</b> {product[0]?.price}</p>
            <p><b> Delivery Days:</b> {product[0]?.delivery_duration}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="date" {...register("date")} placeholder="Date" />
                <textarea {...register("shipping_address")} placeholder="Shipping Address" />
                <textarea {...register("billing_address")} placeholder="Billing Address" />
                <input type="number" {...register("quantity")} placeholder="Quantity" />
                <input type="submit" />
            </form>
        </div>

    );
};

export default PlaceOrder;