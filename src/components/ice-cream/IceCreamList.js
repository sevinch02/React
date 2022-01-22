import React, { useState } from 'react';
import { useEffect } from 'react';
import Header from './Header';
import { toast } from 'react-toastify';
import './css/css.css'
import Loader from './Loader';

const IceCreamList = () => {
    const [iceCream, setIceCream] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/menuData').then(res => {
                if (!res.ok) {
                    throw Error('Server dan ma`lumot olishda xatolik!' + ' ' + res.status);
                }
                return res.json();
            })
                .then(data => {
                    setIceCream(data);
                    console.log(data)
                    setIsLoading(false);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err.message);
                });
        }, 1000);
    }, []);
    const hendleDelete = (id) => {
        fetch(`http://localhost:8000/menuData/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            toast.error(id + ' id li post serverdan o`chirildi!', {
                position: "bottom-right",
                autoClose: 2000
            });
        });
        const newIce = iceCream.filter((el) => el.id !== id);
        setIceCream(newIce);
        console.log(newIce + ' delete')
    };

    const mapppedIceCream = iceCream.map((el) => {
        return (
            <div className="ice-card" key={el.id}>
                <img className="ice-card__img" src={`assets/img/ice-cream-${el.iceCream.id}.svg`} alt={el.iceCream.name} />
                <h4 className="ice-card__title"> {el.iceCream.name} </h4>
                <span className="ice-card__sum"> $ {el.price} </span>
                <span className="ice-card__pcs"> {el.quantity} in stock </span>
                <p className="ice-card__description"> {el.description} </p>
                <button type="button" className="btn-delete" onClick={() => { hendleDelete(el.id) }}> Delete </button>
            </div>
        )
    })
    return (
        <>
            {isLoading ? <Loader /> : ''}
                {error ? <h3>{error}</h3> : ''}
                <div className='iceCreamList'>
                <Header />
                <div className='row' >
                    {!isLoading && !error ? mapppedIceCream : ''}
                </div>
            </div>
        </>
    )
};

export default IceCreamList;
