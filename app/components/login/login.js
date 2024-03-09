import styles from './login.css'
import Image from 'next/image';
import Google from '../../../public/assets/images/icon-google-100.png';
import Apple from '../../../public/assets/images/icon-mac-100.png';
import Facebook from '../../../public/assets/images/icon-facebook-100.png';
import LoginBtn from './login-btn';

export default function Login({ showLoginForm, showRegistrationForm, showForgetPasswordForm, formAnimation, toggleShowForgetPasswordForm, toggleRegistrationForm }) {
    return (
        showLoginForm && !showRegistrationForm && !showForgetPasswordForm && (
            <div className={`login-form ${formAnimation}`}>
                <form className='connexion'>
                    <h1>Connexion</h1>
                    <label htmlFor="email">Email ou identifiant</label>
                    <input type="text" id="email" name="email" placeholder="Email ou id" />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    <LoginBtn/>
                    <div className='lien-formulaire'>
                        <button className='link-button' onClick={toggleShowForgetPasswordForm}>Mot de passe oublié</button>
                        <button className='link-button' onClick={toggleRegistrationForm}>Pas encore inscrit</button>
                    </div>
                    <button className='google-btn' type="submit"><Image className='img-logo' src={Google} alt="google" /><p>continuer avec Google </p></button>
                    <button className='apple-btn' type="submit"><Image className='img-logo' src={Apple} alt="apple" /><p>continuer avec Apple </p></button>
                    <button className='facebook-btn' type="submit"><Image className='img-logo' src={Facebook} alt="facebook" /><p>continuer avec Facebook </p></button>
                </form>
            </div>
        )
    )
}