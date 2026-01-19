import React, {useState} from 'react';
import {FormControl} from 'react-bootstrap';
import api from "../../axios";

export default function TaskEstimate(currentTask) {
    const [estimate, setEstimate] = useState(currentTask.estimate);

    const handleChange = (value) => {
        setEstimate(value);

        api.put(
            `/api/tasks/${currentTask.number}`,
            {estimate: value},
            {withCredentials: true}
        )
            .then((res) => res.data)
            .catch(console.log);
    };

    return (
        <div>
            <FormControl
                type="number"
                value={estimate}
                onChange={(e) => handleChange(e.target.value)}
            ></FormControl>
        </div>
    );
}
