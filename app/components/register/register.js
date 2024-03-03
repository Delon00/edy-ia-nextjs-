/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Joi from 'joi';
import "./register.css";
import Image from "next/image";
import Google from "../../../public/assets/images/icon-google-100.png";
import Apple from "../../../public/assets/images/icon-mac-100.png";
import Facebook from "../../../public/assets/images/icon-facebook-100.png";

export default function Register({ showRegistrationForm, toggleLoginForm }) {
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        email: '',
        nom: '',
        password: '',
        password_confirmation: '',
    });

    const validateUser = (data) => {
        const schema = Joi.object({
            nom: Joi.string().min(2).max(40).trim().required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr'] } }).required(),
            password: Joi.string().min(8).required(),
            password_confirmation: Joi.string().valid(Joi.ref('password')).required().strict()
        });
        return schema.validate(data, { abortEarly: false }).error.details.reduce((errors, error) => {
            return {
                ...errors,
                [error.path[0]]: error.message,
            };
        }, {});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        const validationErrors = validateUser({ ...formData, [name]: value });
        setFormErrors({
            ...formErrors,
            [name]: validationErrors[name]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationResult = validateUser(formData);
        if (Object.keys(validationResult).length !== 0) {
            setFormErrors(validationResult);
            return;
        }
        try {
            const response = await fetch('/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const responseData = await response.json();
            if (response.ok) {
                console.log('Inscription réussie !');
            } else {
                console.error('Échec de l\'inscription:', responseData.message);
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
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    {formErrors.email && <p className="error-message">{formErrors.email}</p>}
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} placeholder="Nom" />
                    {formErrors.nom && <p className="error-message">{formErrors.nom}</p>}
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Mot de passe" />
                    {formErrors.password && <p className="error-message">{formErrors.password}</p>}
                    <input type="password" id="password_confirmation" name="password_confirmation" value={formData.password_confirmation} onChange={handleChange} placeholder="Confirmation du mot de passe" />
                    {formErrors.password_confirmation && <p className="error-message">{formErrors.password_confirmation}</p>}
                    <button className='login-btn' type="submit">S'inscrire</button>
                    <button className='link-button' onClick={toggleLoginForm}>Déjà inscrit</button>
                    <button className='google-btn' type="submit"><Image className='img-logo' src={Google} alt="google" /><p>continuer avec Google </p></button>
                    <button className='apple-btn' type="submit"><Image className='img-logo' src={Apple} alt="apple" /><p>continuer avec Apple </p></button>
                    <button className='facebook-btn' type="submit"><Image className='img-logo' src={Facebook} alt="facebook" /><p>continuer avec Facebook </p></button>
                </form>
            </div>
        )
    );
}
