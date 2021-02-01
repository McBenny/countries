import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField, InputLabel } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import CountriesList from '../../components/countries-list';

import './styles.scss';

const countriesAPI = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';

const Countries = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [displayedCountries, setDisplayedCountries] = useState([]);
    const getCountriesList = () => (
        axios.get(countriesAPI)
    );
    useEffect(() => {
        getCountriesList().then(
            (response) => {
                setCountriesList(response.data);
                setDisplayedCountries(response.data);
            },
            (error) => {
                // eslint-disable-next-line no-console
                console.log(error);
            }
        );
    }, []);

    const [keyword, setKeyword] = useState('');
    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    };
    const searchCountry = () => {
        const regex = new RegExp(keyword, 'i');
        setDisplayedCountries(countriesList.filter(country => regex.test(country.name)));
    };

    return (
        <div className="countries">
            <h1 className="sr-only">Countries</h1>
            <form className="countries__search">
                <InputLabel htmlFor="keyword" className="sr-only">Type here to search...</InputLabel>
                <TextField
                    id="keyword"
                    className="countries__keyword"
                    variant="outlined"
                    size="small"
                    placeholder="Type here to search..."
                    value={keyword}
                    onChange={handleSearchChange}
                />
                <Button
                    className="countries__search-button"
                    variant="outlined"
                    onClick={searchCountry}
                >
                    Search
                </Button>
            </form>
            <div className="countries__list">
                {displayedCountries.length > 0 ? <CountriesList data={displayedCountries} /> : <CircularProgress />}
            </div>
        </div>
    );
};

export default Countries;
