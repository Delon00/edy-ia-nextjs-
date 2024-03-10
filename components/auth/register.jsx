/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Image from 'next/image';
import Google from '@/public/assets/images/icon-google-100.png';
import Apple from '@/public/assets/images/icon-mac-100.png';
import Facebook from '@/public/assets/images/icon-facebook-100.png';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RegisterSchema } from '@/schemas';
import { RegisterAction } from '@/controller/RegisterController';
import { useTransition } from 'react';

export default function Register({ showRegistrationForm, toggleLoginForm }) {
    const [isPending,startTransition]= useTransition();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: { email: '', password: '' }
    });
    const [errorMessage, setErrorMessage] = useState('');
    const onSubmitRegister = async (values) => {
        try {
            const result = await RegisterAction(values);
            if (result.error) {
                setErrorMessage(result.error);
            } else {
                // Afficher un message de succès si nécessaire
            }
        } catch (error) {
            console.error('Erreur lors de la soumission du formulaire :', error);
        }
    };
    

    return (
        showRegistrationForm && (
            <div className="login-form">
                <form className='inscription' onSubmit={handleSubmit(onSubmitRegister)}>
                    <h1>Inscription</h1>
                    <label htmlFor="email">Email</label>
                    <input disabled={isPending} type="email" id="email" name="email" {...register('email')} placeholder="example@edyia.fr" />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                    {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
                    <label htmlFor="password">Mot de passe</label>
                    <input disabled={isPending} type="password" id="password" name="password" {...register('password')} placeholder="******" />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                    <label htmlFor="password">Confirmation du mot de passe</label>
                    <input disabled={isPending} type="password" id="password_repeat" name="password_repeat" {...register('password_repeat')} placeholder="******" />
                    {errors.password_repeat && <span style={{ color: 'red' }}>{errors.password_repeat.message}</span>}
                    <button disabled={isPending} className='login-btn' type='submit'>S'inscrire</button>
                    <button className='link-button' onClick={toggleLoginForm}>Déjà inscrit</button>
                    <button className='google-btn' type="button" onClick={() => signIn('google')}><Image className='img-logo' src={Google} alt="google" /><p>continuer avec Google </p></button>
                    <button className='apple-btn' type="button" onClick={() => signIn('apple')}><Image className='img-logo' src={Apple} alt="apple" /><p>continuer avec Apple </p></button>
                    <button className='facebook-btn' type="button" onClick={() => signIn('facebook')}><Image className='img-logo' src={Facebook} alt="facebook" /><p>continuer avec Facebook </p></button>
                </form>
            </div>
        )
    );
}
