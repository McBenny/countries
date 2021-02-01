import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { navigate, URLS, getParamFromURL } from '../../utils';

import CountryData from '../../components/country-data';

const countryAPI = 'https://restcountries.eu/rest/v2/alpha';

const Country = () => {
    const [selectedCountry, setSelectedCountry] = useState({});
    const getCountryData = () => (
        axios.get(`${countryAPI}/${getParamFromURL('c')}?fields=name;flag;population;demonym`)
    );
    useEffect(() => {
        getCountryData().then(
            (response) => {
                setSelectedCountry(response.data);
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        );
    }, []);

    return (
        <div className="country">
            <Button variant="outlined" onClick={() => navigate(URLS.HOME)}>Back</Button>
            {typeof selectedCountry.name === 'undefined'
                ? <div style={{ textAlign: 'center' }}>
                    <CircularProgress />
                </div>
                : <CountryData data={selectedCountry} />
            }
        </div>
    );
};

export default Country;
