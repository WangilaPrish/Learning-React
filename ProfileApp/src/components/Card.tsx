import React from 'react';

type CardProps = {
    title: string;
    description: string;
};

const Card = ({ title, description }: CardProps) => (
    <div className="card w-80 bg-base-100 shadow-xl">
        <figure className="bg-gray-200 w-full h-[200px]"></figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    </div>
);

export default Card;
