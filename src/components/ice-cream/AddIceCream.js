import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Header from "./Header";


const AddIceCream = () => {
    let navigate = useNavigate();
    
    const [image,setImage] =useState('');
    const [name,setname]= useState('');
    const [description,setdescription]= useState('');
    const [price,setprice]= useState('');
    const [stock,setstock]= useState('');
    const [quanity,setquanity]= useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newObj = {
            iceCream: {
                id: image,
            //  id: Math.floor(1 * Math.random() * 100),
             name
            },
            inStock: stock,
            quantity: quanity,
            price,
            description
        };
        console.log('Ice-cream qo`shildi');
        console.log(newObj);
          // postni serverga joylash
          fetch('http://localhost:8000/menuData', {
            method: 'Post',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(newObj)
          })
          .then(res =>  {
            toast.success('Ice-cream qo`shildi', {
                position: "bottom-right",
                autoClose: 2000
            });
            navigate('/IceCream');
          });
           // Forma elementlarini tozalash
      setImage('');
      setname('');
      setprice('');
      setdescription('');
      setstock('');
      setquanity('');
    };
    return (
        <div className="iceCreamList">
            <Header/>
            <div className="container">
                <h2>Add post page</h2>
                <form className="from" onSubmit={handleSubmit}>
                    <label className="label-text" htmlFor="image">Choose image</label>
                    <input className="input" type="file" id="image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
                <br></br>
                <label className="label-text" htmlFor="name">Choose name</label>
                    <input className="input" type="text" id="name" value={name} onChange={(e) => {setname(e.target.value)}}/>
                <br></br>
                <label className="label-text" htmlFor="stock">Choose stocks</label>
                    <input className="input" type="number" id="stock" value={stock} onChange={(e) => {setstock(e.target.value)}}/>
                <br></br>
                <label className="label-text" htmlFor="quanity">Choose quanity</label>
                    <input className="input" type="number" id="quanity" value={quanity} onChange={(e) => {setquanity(e.target.value)}}/>
                <br></br>
                <label className="label-text" htmlFor="price">Choose price</label>
                    <input className="input" type="number" id="price" value={price} onChange={(e) => {setprice(e.target.value)}}/>
                <br></br>
                <label className="label-text" htmlFor="description">Type description</label>
                    <input className="input" type="text" id="description" value={description} onChange={(e) => {setdescription(e.target.value)}}/>
                <br></br>
                <button type="submit" className="add-btn">Add ice-cream</button>
                </form>
            </div>
        </div>
    );
  }

export default AddIceCream;