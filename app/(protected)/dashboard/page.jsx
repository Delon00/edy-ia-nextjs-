/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth, signOut } from "@/auth";
import ProgressBar from "@/components/progressbar/progress";
import { LogoutAction } from '@/controller/LogoutController';
import AOS from 'aos';
import'./styles.css'
import 'aos/dist/aos.css';
// ---------IMAGE
import Close from '@/public/assets/images/icon-effacer-100.png';
import UserProfile from '@/public/assets/images/profile.png';
import Clock from '@/public/assets/images/temps.png';
import Up from '@/public/assets/images/up.png';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-navbar grid grid-cols-3 gap-4">
        <div className="w-full flex items-center justify-start ">
          <Image className="userprofile" src={UserProfile} alt="Profil utilisateur" />
          <input className="section-input" />
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="tab-1">Apprentissage</div>
          <div className="tab-2">Evaluation</div>
          <div className="tab-3">Objectif</div>
        </div>
        <div className="w-full flex items-center justify-end">
          <button className="button">Commencer</button>
        </div>
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
        </div>
      </div>
      <div className="dashboard-section-a">
        <div className="course-card">
          <div className="flex">
            <div className="title-course-card"><h1>Neuroanatomie</h1></div>
            <div className="progress-group "><div className="circle-green"><Image src={Up} className="flche" alt="en haut" /></div><p className="text-module">17%</p></div>
          </div>
          <div className="grid grid-cols-2">
            <div className="my-1"><ProgressBar /></div>
            <div className="div-remaining-time">
              <div className="flex"><Image className="clock" src={Clock} alt="clock" /><p className="hours-remaining-time" >4h25</p></div>
              <p className="text-remaining-time">restant avant la révision</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
