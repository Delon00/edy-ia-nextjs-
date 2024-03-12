/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import { auth, signOut } from "@/auth.config";
import ProgressBar from "@/components/progressbar/progress";
import AOS from 'aos';
import'./styles.css'
import 'aos/dist/aos.css';
// ---------IMAGE
import Close from '@/public/assets/images/icon-effacer-100.png';
import UserProfile from '@/public/assets/images/profile.png';
import Clock from '@/public/assets/images/temps.png';
import Up from '@/public/assets/images/up.png';

export default function Dashboard() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await auth();
      setSession(sessionData);
    };
    fetchSession();
  }, 
  []);

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
        
        {session && JSON.stringify(session)}
      </div>
      <div className="screenshot-section">
        <div className="carte">
          <div className="flex">
            <div className=""><h1>Neuroanatomie</h1></div>
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
