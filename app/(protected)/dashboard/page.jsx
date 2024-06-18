/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth, signOut } from "@/auth";
import ProgressBar from "@/components/progressbar/progress";
import ProgressBar2 from "@/components/progressbar2/progress";
// import { LogoutAction } from '@/controller/LogoutController';
import AOS from 'aos';
import'./styles.css'
import 'aos/dist/aos.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
// ---------IMAGE
import Close from '@/public/assets/images/icon-effacer-100.png';
import UserProfile from '@/public/assets/images/profile.png';
import Clock from '@/public/assets/images/temps.png';
import Up from '@/public/assets/images/up.png';
import Plus from '@/public/assets/images/plus.png';
import { Interaction } from "@fullcalendar/core/internal";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="">
      <div className="dashboard-navbar grid grid-cols-3 gap-4">
        <div className="w-full flex items-center justify-start ">
                  {/* MENU DECONECTION
          <div className="dashboard-menu">
            <div className="flex items-center">
              <Image className="userprofile" src={UserProfile} alt="Profil utilisateur" />
              <h4>Jean-Philippe Delon</h4>
            </div>
            <hr/>
          <p>Paramètre</p>
          <p></p>
          <p></p>
          <p></p>
          <button onClick={signOut}>Se déconnecter</button>          
        </div> */}
          <Image className="userprofile" src={UserProfile} alt="Profil utilisateur" />
          <input className="navbar-section-input" placeholder="recherche"/>
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
          <div className="course-card-b">
            <div className="flex">
              <div className="title-course-card"><h1>Biochimie</h1></div>
              <div className="progress-group "><div className="circle-green"><Image src={Up} className="flche" alt="en haut"/></div>
              <p className="text-module">17%</p></div>
            </div>
            <div className="grid grid-cols-2">
              <div className="my-1"><ProgressBar2 /></div>
              <div className="div-remaining-time">
              <div className="flex"><Image className="clock" src={Clock} alt="clock" />
                <p className="hours-remaining-time" >4h25</p>
              </div>
              <p className="text-remaining-time">restant avant la révision</p>
              </div>
            </div>
          </div>

          <div className="course-card-c">
            <div className="flex">
              <div className="title-course-card-c"><h1>Ajouter</h1></div>
              <div className="progress-group-c"><Image src={Plus} className="plus" alt="en haut"/></div>
            </div>
            <p>Ajouter une nouvelle matière</p>
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
        </section>
      </div>
    </div>
  );
}
