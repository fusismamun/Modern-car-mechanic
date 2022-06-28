import React from 'react';
import Expert from '../Expert/Expert';
import mechanic1 from '../../../images/experts/expert-1.jpg'
import mechanic2 from '../../../images/experts/expert-2.jpg'
import mechanic3 from '../../../images/experts/expert-3.jpg'
import mechanic4 from '../../../images/experts/expert-4.jpg'
import mechanic5 from '../../../images/experts/expert-5.jpg'
import mechanic6 from '../../../images/experts/expert-6.png'
const experts = [
    {
        id: 1,
        name: "ENGINE DIAGNOSTIC",
        expertige: "ENGINE",
        img: mechanic1
    },
    {
        id: 2,
        name: "WHEEL ALIGNMENT",
        expertige: "ENGINE",
        img: mechanic2
    },
    {
        id: 3,
        name: "CAR DOCTOR",
        expertige: "ENGINE",
        img: mechanic3
    },
    {
        id: 4,
        name: "TYRES ARE FLAT",
        expertige: "ENGINE",
        img: mechanic4
    },
    {
        id: 5,
        name: "CAR CONSUMING OIL",
        expertige: "ENGINE",
        img: mechanic5
    },
    {
        id: 6,
        name: "ALTERNATOR IS FALLING",
        expertige: "ENGINE",
        img: mechanic6
    }
]

const Experts = () => {
    return (
        <div className='container' id='experts'>
            <h2 className='m-5 fw-bold text-info'>Our Expert</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert = {expert}
                    >

                    </Expert>)
                }

            </div>

        </div>
    );
};

export default Experts;