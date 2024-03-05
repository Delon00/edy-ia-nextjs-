/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import  signIn  from 'next-auth/react';

import "./register.css";
import Image from "next/image";
import Google from "../../../public/assets/images/icon-google-100.png";
import Apple from "../../../public/assets/images/icon-mac-100.png";
import Facebook from "../../../public/assets/images/icon-facebook-100.png";

export default function Register({ showRegistrationForm, toggleLoginForm }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await signIn(); 
            if (!response.error) {
                console.log('Inscription réussie !');
            } else {
                console.error('Échec de l\'inscription:', response.error);
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
        }
    };

    return (
        showRegistrationForm && (
            <div className="login-form">
                <form onSubmit={handleSubmit} className='inscription'>
                    <h1>Inscription</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <button className='login-btn' type="submit">S'inscrire</button>
                    <button className='link-button' onClick={toggleLoginForm}>Déjà inscrit</button>
                    <button className='google-btn' type="button" onClick={() => signIn('google')}><Image className='img-logo' src={Google} alt="google" /><p>continuer avec Google </p></button>
                    <button className='apple-btn' type="button" onClick={() => signIn('apple')}><Image className='img-logo' src={Apple} alt="apple" /><p>continuer avec Apple </p></button>
                    <button className='facebook-btn' type="button" onClick={() => signIn('facebook')}><Image className='img-logo' src={Facebook} alt="facebook" /><p>continuer avec Facebook </p></button>
                </form>
            </div>
        )
    );
}
