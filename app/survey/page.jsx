'use client'
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

export default function Survey() {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        educationLevel: '',
        subjects: [],
        skillLevel: '',
        goals: '',
        studyTime: '',
        contentPreference: '',
        feedbackPreference: '',
        learningStyle: '',
        difficulties: '',
        supportAreas: '',
        series: '',
        studyField: '',
    });

    const [step, setStep] = useState(0);
    const [showSeriesQuestion, setShowSeriesQuestion] = useState(false);
    const [showStudyFieldQuestion, setShowStudyFieldQuestion] = useState(false);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (name === 'educationLevel') {
            setShowSeriesQuestion(value === 'Lycée');
            setShowStudyFieldQuestion(value === 'Université');
            setFormData(prevState => ({
                ...prevState,
                series: '', 
                studyField: '' 
            }));
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? [...prevState[name], value] : value
        }));
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        AOS.init();
    }, []);

    const questions = [
        {
            label: 'Nom',
            name: 'name',
            type: 'text',
        },
        {
            label: 'Âge',
            name: 'age',
            type: 'number',
        },
        {
            label: 'Niveau d\'éducation',
            name: 'educationLevel',
            type: 'select',
            options: ['Collège', 'Lycée', 'Université', 'Autre'],
        },
        {
            label: 'Niveau de compétence',
            name: 'skillLevel',
            type: 'select',
            options: ['Débutant', 'Intermédiaire', 'Avancé'],
        },
        {
            label: 'Objectifs',
            name: 'goals',
            type: 'text',
        },
        {
            label: 'Temps d\'étude quotidien',
            name: 'studyTime',
            type: 'select',
            options: ['Moins de 30 minutes', '30 minutes à 1 heure', '1 à 2 heures', 'Plus de 2 heures'],
        },
        {
            label: 'Préférence de contenu',
            name: 'contentPreference',
            type: 'select',
            options: ['Vidéos explicatives', 'Cours interactifs', 'Exercices pratiques', 'Quiz et évaluations', 'Articles et lectures'],
        },
        {
            label: 'Préférence de feedback',
            name: 'feedbackPreference',
            type: 'select',
            options: ['Feedbacks immédiats', 'Rapports périodiques'],
        },
        {
            label: 'Style d\'apprentissage',
            name: 'learningStyle',
            type: 'select',
            options: ['Visuel', 'Auditif', 'Kinesthésique', 'Lecture/Écriture'],
        },
        {
            label: 'Difficultés particulières',
            name: 'difficulties',
            type: 'text',
        },
        // {
        //     label: 'Domaines de soutien',
        //     name: 'supportAreas',
        //     type: 'text',
        // },
    ];

    const seriesOptions = ['STMG', 'ES', 'S', 'Autre'];
    const studyFieldOptions = ['Informatique', 'Biologie', 'Chimie', 'Physique', 'Autre', 'Finance et économie', 'Médecine', 'Droit'];

    // Calcul de la progression en pourcentage basée sur le nombre de réponses remplies
    const totalQuestions = questions.length + (showSeriesQuestion ? 1 : 0) + (showStudyFieldQuestion ? 1 : 0);
    const answeredQuestions = Object.values(formData).filter(value => value !== '').length;
    const progress = Math.min((answeredQuestions / totalQuestions) * 100, 100); // Clamp the progress to 100%

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="formulaire-survey p-8 max-w-lg mx-auto shadow-lg">
            <div className="my-4">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                            className="bg-ffc244 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mb-4">Questionnaire pour Nouveaux Utilisateurs</h1>
                {questions.map((question, index) => (
                    <div key={index} className={`mb-4 ${index >= step * 4 && index < (step + 1) * 4 ? '' : 'hidden'}`}>
                        <label className="block mb-2">
                            {question.label}:
                            {question.type === 'text' || question.type === 'number' ? (
                                <input
                                    type={question.type}
                                    name={question.name}
                                    value={formData[question.name]}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                />
                            ) : (
                                <select
                                    name={question.name}
                                    value={formData[question.name]}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border rounded"
                                >
                                    <option value="">Sélectionnez</option>
                                    {question.options.map((option, i) => (
                                        <option key={i} value={option}>{option}</option>
                                    ))}
                                </select>
                            )}
                        </label>
                        {question.name === 'educationLevel' && (
                            <>
                                {showSeriesQuestion && (
                                    <div className="mb-4">
                                        <label className="block mb-2">
                                            Série:
                                            <select
                                                name="series"
                                                value={formData.series}
                                                onChange={handleChange}
                                                className="w-full mt-1 p-2 border rounded"
                                            >
                                                <option value="">Sélectionnez</option>
                                                {seriesOptions.map((option, i) => (
                                                    <option key={i} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                )}
                                {showStudyFieldQuestion && (
                                    <div className="mb-4">
                                        <label className="block mb-2">
                                            Filière:
                                            <select
                                                name="studyField"
                                                value={formData.studyField}
                                                onChange={handleChange}
                                                className="w-full mt-1 p-2 border rounded"
                                            >
                                                <option value="">Sélectionnez</option>
                                                {studyFieldOptions.map((option, i) => (
                                                    <option key={i} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        </label>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                ))}
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={step === 0}
                        className="btn-prev px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition-colors duration-300"
                    >
                        Précédent
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={step === Math.ceil((questions.length + (showSeriesQuestion ? 1 : 0) + (showStudyFieldQuestion ? 1 : 0)) / 4) - 1}
                        className="btn-next px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Suivant
                    </button>
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-submit mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                    Soumettre
                </button>
            </div>
        </div>
    );
}
