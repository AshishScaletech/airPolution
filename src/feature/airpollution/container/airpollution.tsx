import React, { useMemo, useState } from 'react'
import Select from 'react-select';
import AirPollutionHead from '../component/airPollutionHead'
import AirepollutionMap from '../component/airepollutionMap'

import data from '../../../assets/jason/pollutionData.json'

const Airpollution = () => {
    const location = data.data.sensors.map((item) => ({ label: item.location, value: item.location, lat: item.latitude, lng: item.longitude }));
    const severity = data.data.sensors.map((item, index) => item.severity);
    const temperature = data.data.sensors.map((item) => ({ label: item.temperature, value: item.temperature, lat: item.latitude, lng: item.longitude }));
    const newArray = severity.filter((elem, pos) => {
        return severity.indexOf(elem) === pos;
    });
    const optionSeverity = newArray.map(item => ({ label: item, value: item }));

    const [selectedOption, setSelectedOption] = useState<any>(null)
    console.log("selectedOption:", selectedOption);

    const handleChange = (selectedOption: any) => {
        setSelectedOption(selectedOption)
    };
    return (
        <div className='width--full '>
            <AirPollutionHead />
            <div className=" filter width--full justify-content--around flex align-items--center flex--wrap">
                <div className='width--25'>
                    <p className='mb--8 text--black font--bold'>Availabe Location</p>
                    <Select
                        className='width--full'
                        options={location}
                        value={selectedOption}
                        onChange={handleChange}

                    />
                </div>
                <div className=' width--25'>

                    <p className='mb--8 text--black font--bold'>Severity</p>
                    <Select
                        className='width--full'
                        value={selectedOption}
                        onChange={handleChange}
                        options={optionSeverity}
                    />
                </div>
                <div className=' width--25'>

                    <p className='mb--8 text--black font--bold'>Temperature</p>
                    <Select
                        className='width--full'
                        options={temperature}
                        value={selectedOption}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <AirepollutionMap data={data} selectedOption={selectedOption} />
        </div>
    )
}

export default Airpollution