import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Food from '../Food/Food';

const Breakfast = () => {
    const first6 = fakeData.slice(0,6);
    const [breakfast, setBreakfast] = useState(first6);
    return (
        <div>
                {
                    breakfast.map(bf => <Food
                        id={bf.id}
                        breakfast={bf}>
                        </Food>)
                }
        </div>
    );
};

export default Breakfast;