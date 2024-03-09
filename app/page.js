/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";
import ProgressBar from "@/components/progressbar/progress";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// ---------IMAGE
import Close from '../public/assets/images/icon-effacer-100.png';
import UserProfile from '../public/assets/images/profile.png';
import Clock from '../public/assets/images/temps.png';
import Up from '../public/assets/images/up.png';

export default function Home() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
  const [buttonText, setButtonText] = useState("Se connecter");
  const [isLoading, setIsLoading] = useState(true); 
  const [formAnimation, setFormAnimation] = useState('');

  useEffect(() => {AOS.init();}, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleLoginForm = (show) => { 
    setShowRegistrationForm(false);
    setShowForgetPasswordForm(false);
    
    if (show) {
      setFormAnimation('slide-from-top');
      setShowLoginForm(true);
      setButtonText(<Image className='img-logo' src={Close} alt="Icône de fermeture" />);
    } else {
      setFormAnimation('slide-out');
      setTimeout(() => {
        setShowLoginForm(false);
        setButtonText("Se connecter");
      }, 300);
    }
  };

  return (
      <main>
        {isLoading ? ( <div className="loader-container"><h1 className='title-loader'>Edy<span className="span-title-loader">IA</span></h1><div className='loader'></div></div>)
          :(
          <>
            <div className="hero-container">
              <button className="hero-button" onClick={() => toggleLoginForm(!showLoginForm)}>
                {buttonText}
              </button>
              <div  className="hero-content">
                <h1 className='title-hero'>Edy<span className="span-title-hero">IA</span></h1>
                <p className='text-hero'>Lorem ipsum dolor sit amet. Eum dolore vitae est voluptas sunt et cupiditate optio.</p>
              </div>
              <Login
                showLoginForm={showLoginForm}
                showRegistrationForm={showRegistrationForm}
                showForgetPasswordForm={showForgetPasswordForm}
                formAnimation={formAnimation}
                toggleShowForgetPasswordForm={() => setShowForgetPasswordForm(!showForgetPasswordForm)}
                toggleRegistrationForm={() => setShowRegistrationForm(!showRegistrationForm)}
              />
              <Register 
                showRegistrationForm={showRegistrationForm}
                toggleLoginForm={() => toggleLoginForm(!showLoginForm)} 
              />
              {showForgetPasswordForm && (
                <div className="login-form">
                  <form>
                    <h1>Mot de passe oublié</h1>
                    <label htmlFor="email">Entrez votre mail</label>
                    <input type="text" id="email" name="email" placeholder="Email" />
                    <button className='login-btn' type="submit">Envoyer</button>
                  </form>
                </div>
              )}
            </div>

            <div class="home-section">
              <div class="col-section-a" data-aos="fade-right" data-aos-duration="1200" >
                <h1 className="title-section">Apprenez vos <span>cours grace a l'IA</span></h1>
                <p className="text-section">Apprenez vos cours grâce a l'IA</p>
                <button className="button section">En savoir plus</button>
              </div>
              <div class="col-section-b">
                <div  className="screenshot screenshot-a" data-aos-duration="700" data-aos="fade-up" >
                <div className="screenshot-navbar">
                    <Image className="userprofile" src={UserProfile} alt="Profil utilisateur"/>
                    <input className="section-input" />
                    <div className="tab-1">Apprentissage</div>
                    <div className="tab-2">Evaluation</div>
                    <div className="tab-3">Objectif</div>
                  </div>
                  <div className="screenshot-section">
                    <div className="carte">
                      
                    </div>
                  </div>
                </div>
                <div data-aos="fade-up"  className="screenshot screenshot-b">
                  <div className="screenshot-navbar">
                    <Image data-aos="zoom-out"  data-aos-duration="1500" className="userprofile" src={UserProfile} alt="Profil utilisateur"/>
                    <input className="section-input" />
                    <div className="tab-1">Apprentissage</div>
                    <div className="tab-2">Evaluation</div>
                    <div className="tab-3">Objectif</div>
                  </div>
                  <div className="screenshot-section">

                    <div className="carte" data-aos="zoom-in"  data-aos-duration="1500" >
                      <div className="flex">
                        <div className=""><h1>Neuroanatomie</h1></div>
                        <div className="progress-group "><div  className="circle-green"><Image  src={Up} className="flche" alt="en haut"/></div><p className="text-module">17%</p></div>
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="my-1"><ProgressBar/></div>
                        <div className="div-remaining-time">
                          <div className="flex"><Image className="clock" src={Clock} alt="clock"/><p className="hours-remaining-time" >4h25</p></div>
                          <p className="text-remaining-time">restant avant la révision</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </>
        )}
      </main>
  );
}
