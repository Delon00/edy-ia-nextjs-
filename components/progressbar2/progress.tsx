import './progress.css'
import Image from 'next/image';
import Brain from'@/public/assets/images/brain.png'

export default function ProgressBar(){
return (
    <>
        <div className="flex justify-between mb-1">
            <Image className='brain' src={Brain} alt=''/>
            <span className="text-percent-pb2 mx-2">40%</span>
        </div>
        <div className="bar-line  h-2.5 dark:bg-gray-700">
        <div className="progress-line h-2.5 " style={{ width: '40%' }}
        ></div>
        </div>
    </>
    );
};


