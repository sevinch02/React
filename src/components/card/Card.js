import React from 'react';
import { useState, useRef } from "react";
import './card.css'

const Card = () => {
  const [name,
    setName] = useState('');

  const [form,
    setFrom] = useState('');
  const [mesage,
    setMesage] = useState('');

  const contentRef = useRef();
  const [file,
    setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contentRef.current.value)
  }
  return (

    <div className="card-content">
      <h2 className='card-title' > Build Your Own Holiday Cards</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-card">
          <div className='row' >
            <label className="card__label" htmlFor="name">Card Title:
            <input className="card__input" placeholder="Title" type="text"
              id="title"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }} />
         </label>
         <label htmlFor="file" className="card__img">
              <span className="card__img_text">Add photo</span>
              <input
                style={{
                  display: 'none'
                }}
                type="file"
                id="file"
                accept=".png, .JPG, .jpeg"
                onChange={(e) => {
                  setFile(e.target.files[0])
                }} />
            </label>
            </div>
         <div className="from-card__message">
            <label className="card__label" htmlFor="description">Message:
            <textarea
              className="card__input"
              type="textarea"
              id="description"
              value={mesage}
              required
              placeholder="Write your wishes"
              onChange={(e) => {
                setMesage(e.target.value)
              }} /></label>
          
            {/* <button type="button" className="add_btn">save card</button> */}
          </div>
            <label className="card__label" htmlFor="from">From
            <input
              className="card__input"
              type="text"
              id="quanity"
              value={form}
              onChange={(e) => {
                setFrom(e.target.value)
              }} /></label>
          
        
        </div>
        <div className="view-card">
          <div className="view-text">
            <h3 className="view-text__title"> {name}</h3>
              <h2 className="view-text__text">  {mesage}</h2>
            <p className="view-text__form"> {form} </p>
          </div>
          {file && (
            <div className="view__img">
              <img src={URL.createObjectURL(file)} alt="img" className="view__img_img" />
              <span onClick={() => setFile(null)}>   </span>
            </div>
          )}
        </div>

      </form>
    </div>
  )
};

export default Card;
