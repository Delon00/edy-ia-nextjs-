import Image from "next/image";
import styles from './auth.css';
import Google from '@/public/assets/images/icon-google-100.png';
import Apple from '@/public/assets/images/icon-mac-100.png';
import Facebook from '@/public/assets/images/icon-facebook-100.png';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
import { LoginAction } from "@/action/loginaction";


export default function Login({ showLoginForm, showRegistrationForm, showForgetPasswordForm, formAnimation,toggleShowForgetPasswordForm, toggleRegistrationForm}) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {email: "",password: "",}
    });

    const onSubmit = (values) => {
        LoginAction(values);

    };
    

    return (
        showLoginForm && !showRegistrationForm && !showForgetPasswordForm && (
            <div className={`login-form ${formAnimation}`}>
                <form className='connexion' onSubmit={handleSubmit(onSubmit)}>
                    <h1>Connexion</h1>
                    <label htmlFor="email">Email ou identifiant</label>
                    <input type="email" id="email" name="email" {...register("email")} placeholder="Email ou id" />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}   
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" {...register("password")} placeholder="******" />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                    <button className='login-btn' type="submit">Se connecter</button>
                    <div className='lien-formulaire'>
                        <button type="button" className='link-button' onClick={toggleShowForgetPasswordForm}>Mot de passe oublié</button>
                        <button type="button" className='link-button' onClick={toggleRegistrationForm}>Pas encore inscrit</button>
                    </div>
                    <button className='google-btn' type="button"><Image className='img-logo' src={Google} alt="google" /><p>continuer avec Google </p></button>
                    <button className='apple-btn' type="button"><Image className='img-logo' src={Apple} alt="apple" /><p>continuer avec Apple </p></button>
                    <button className='facebook-btn' type="button"><Image className='img-logo' src={Facebook} alt="facebook" /><p>continuer avec Facebook </p></button>
                </form>
            </div>
        )
    )
}
