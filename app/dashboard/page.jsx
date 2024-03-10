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
import Close from '@/public/assets/images/icon-effacer-100.png';
import UserProfile from '@/public/assets/images/profile.png';
import Clock from '@/public/assets/images/temps.png';
import Up from '@/public/assets/images/up.png';

export default function dashboard(){
    return(
      <div  className="screenshot screenshot-b">
        <div className="screenshot-navbar">
          <Image  className="userprofile" src={UserProfile} alt="Profil utilisateur"/>
          <input className="section-input" />
          <div className="tab-1">Apprentissage</div>
          <div className="tab-2">Evaluation</div>
          <div className="tab-3">Objectif</div>
        </div>
        <div className="screenshot-section">
          <div className="carte">
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
    );
}

