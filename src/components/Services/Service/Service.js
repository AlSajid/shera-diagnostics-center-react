import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Service = () => {
    const { ID } = useParams();

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('/data/services.json')
            .then(result => result.json())
            .then(data => setService(data[ID]));
    }, []);


    return (
        <div className="container">
            <div className="card">
                <img src={service["image"]} className="card-img-top" alt={service["image"]} />
                <div className="card-body">
                    <div className="my-2">
                        <h2 className="card-title text-center">{service["Title"]}</h2>
                        <p className="card-text">{service["Info"]}</p>
                        {service["Tests"]}
                        <p>
                            <b>Price: </b>{service["Price"]} Taka
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;