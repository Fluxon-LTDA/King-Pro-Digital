/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Feedback {
    id: number;
    name: string;
    photo: string;
    comment: string;
}

const feedbacks: Feedback[] = [
    {
        id: 1,
        name: 'Alice Johnson',
        photo: '/images/Wallpaper.jpeg',
        comment: "'A experiência foi incrível! O time foi muito atencioso e entregou tudo com qualidade.'",
    },
    {
        id: 2,
        name: 'Carlos Souza',
        photo: '/images/Wallpaper.jpeg',
        comment: "'Fluxon superou todas as expectativas! Recomendo fortemente.'",
    },
    {
        id: 3,
        name: 'Julia Mendes',
        photo: '/images/Wallpaper.jpeg',
        comment: "'O serviço foi excelente, com entrega rápida e suporte incrível.'",
    },
];

const FeedbackCarousel: React.FC = () => {
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    const currentFeedback = feedbacks[currentFeedbackIndex];

    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">
                <Image
                    alt={currentFeedback.name}
                    className="rounded-full border-2 border-gray-300 object-cover"
                    height={100}
                    src={currentFeedback.photo}
                    width={100} // already correctly set to avoid the warning
                />

            </div>
            <h2 className="text-lg font-semibold mb-2">{currentFeedback.name}</h2>
            <p className="text-gray-600">{currentFeedback.comment}</p>
        </div>
    );
};

export default FeedbackCarousel;
