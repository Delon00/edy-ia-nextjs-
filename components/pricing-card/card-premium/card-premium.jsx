import "./card.css"


export default function CardFree(){
return (
    <div className="pricing-card" data-aos="zoom-in"  data-aos-duration="800">
        <div className=" mt-3 ">
            <h1 className="title">Premium</h1>
            <p className="title-description">Pour étudiant</p>
        </div>
        <div className="hr"></div>
        <div>
            <p>Fonction basique</p>
            <p>50 token</p>
            <p>10Gb/mois</p>
            <p>1 utilisateur</p>
            <p>24 Lorem ipsum</p>
        </div>
        <div className="pricing-card-amount">
            <h1>€10,99<span className="text-base">/mois</span></h1>
        </div>
        <div className="w-full flex  justify-center">
            <button className="pricing-card-btn">Souscrire</button>
        </div>
        
    </div>
    );
};