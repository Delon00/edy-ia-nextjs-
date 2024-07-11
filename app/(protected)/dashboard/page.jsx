/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser"
import { signOut } from "next-auth/react"
import ProgressBar from "@/components/progressbar/progress";
import ProgressBar2 from "@/components/progressbar2/progress";
import AOS from 'aos';
import'./styles.css' 
import 'aos/dist/aos.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import { Interaction } from "@fullcalendar/core/internal";
// --------------------------------------------------------IMAGE---------------------------------------------------------------------------------------------------
import Close from '@/public/assets/images/icon-effacer-100.png';
import UserProfile from '@/public/assets/images/profile.png';
import Clock from '@/public/assets/images/temps.png';
import Up from '@/public/assets/images/up.png';
import Plus from '@/public/assets/images/plus.png';
import Quizz from '@/public/assets/images/quizz.png';
import Brain from'@/public/assets/images/brain.png'
// ----------------------------------------------------------------------------------------------------------------------------

export default  function Dashboard(){
  const user = useCurrentUser();
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuShow = () => {setMenuVisible(true);};
  const toggleMenuHide = () => {setMenuVisible(false);};
  const logout = async () => {signOut()};


  return (
    <div className="dashboard">
      <div className="">
        <div className="dashboard-navbar grid grid-cols-3 gap-4">
          <div className="w-full flex items-center justify-start">
            <div className={menuVisible ? "dashboard-menu visible" : "dashboard-menu"}>
              <div className="flex items-center">
                <Image className="userprofile" onClick={toggleMenuHide} src={UserProfile} alt="Profil utilisateur" />
                <h4>{user.email}</h4>
              </div>
              <hr />
              <p>Paramètres</p>
              <button className="button-logout" onClick={logout}>Se déconnecter</button>
            </div>
            <Image className="userprofile" onClick={toggleMenuShow} src={UserProfile} alt="Profil utilisateur" />            <input className="navbar-section-input" placeholder="recherche"/>
          </div>
          <div className="navbar-center w-full flex items-center justify-center ">
            <div className="tab-1">Apprentissage</div>
            <div className="tab-2">Evaluation</div>
            <div className="tab-3">Objectif</div>
          </div>
          <div className="w-full flex items-center justify-end">
            <button className="button">Commencer</button>
          </div>
        </div>
        <section className="dashboard-section-a">
          <div className="course-card">
            <div className="flex">
              <div className="title-course-card"><h1>Neuroanatomie</h1></div>
              <div className="progress-group "><div className="circle-green"><Image src={Up} className="flche" alt="en haut"/></div>
              <p className="text-module">17%</p></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="my-1"><ProgressBar /></div>
              <div className="div-remaining-time">
                <div className="flex"><Image className="clock" src={Clock} alt="clock" />
                  <p className="hours-remaining-time" >4h25</p>
                </div>
                <p className="text-remaining-time">restant avant la révision</p>
              </div>
            </div>
          </div>
          <div className="bilan-card">
            <Image src={Quizz} className="quizz" alt="en haut"/>
            <div>
              <h4 className="my-1">25 Quizz réussi</h4>
              <p className="my-1">Félicitations ! Vous êtes sur la bonne voie pour atteindre vos objectifs !
              </p>
            </div>
          </div>
          <div className="course-card-c">
            <div className="flex">
              <div className="title-course-card-c"><h1>Ajouter</h1></div>
              <div className="progress-group-c"><Image src={Plus} className="plus" alt="en haut"/></div>
            </div>
            <p>Ajouter une carte</p>
          </div>
        </section>
        <section className="dashboard-section-b">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            headerToolbar={{
              left: '',
              center: 'today,dayGridMonth,timeGridWeek',
              right: 'prev,next'
            }}
            events={[]}
            nowIndicator={true}
            editable={true}
            droppable={true}
            selectable={true}
            selectMirror={true}
            locale={frLocale}
          />
          <div className="courses-container">
            <div className="flex justify-center items-center">
            <div className="course">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <div className="bg-icon-course mx-1"><Image className='brain' src={Brain} alt=''/></div>
                  <p className="course-title">Neurologie</p>
                </div>
                <div className="bg-pourcent-course">40%</div>
              </div>
              <h2>Science d'études des neurones humains</h2>
              <p>13 Chapitres</p>
            </div>
            <div className="courseb">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <div className="bg-icon-course mx-1"><Image className='brain' src={Brain} alt=''/></div>
                  <p className="course-title">Neurologie</p>
                </div>
                <div className="bg-pourcent-course">40%</div>
              </div>
              <h2>Science d'études des neurones humains</h2>
              <p>13 Chapitres</p>
            </div>
            </div>
            
            <div className="coursec">
              <div className="flex justify-between items-center ">
                <div className="flex items-center">
                  <div className="bg-icon-course mx-1"><Image className='brain' src={Brain} alt=''/></div>
                  <p className="course-title">Neurologie</p>
                </div>
                <div className="bg-pourcent-course">40%</div>
              </div>
              <h2>Science d'études des neurones humains</h2>
              <p>13 Chapitres</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
