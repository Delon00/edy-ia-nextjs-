import styles from '@/app/components/login/login.css'; 
import { useRouter } from 'next/navigation'; 
import React from 'react'; 

export default function LoginBtn() {
    const router = useRouter();
    
    const onClick = () => {
        router.push("/auth/login"); 
    };

    return (
        <main className='btn-main'>
            <button onClick={onClick} className='login-btn'>Se connecter</button>
        </main>
    );
}
