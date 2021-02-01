import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia } from '@material-ui/core';

import './styles.scss';

const CountryData = ({
    data
}) => {
    const {
        name, flag, population, demonym
    } = data;
    return (
        <Card class="country__card">
            <CardMedia className="country__flag" image={flag} title={`Flag of ${name}`} />
            <h1 className="country__name">{name}</h1>
            <CardContent>
                <dl className="country__dataset">
                    <dt className="country__item">Population</dt>
                    <dd className="country__data">{population}</dd>
                    <dt className="country__item">Demonym</dt>
                    <dd className="country__data">{demonym}</dd>
                </dl>
            </CardContent>
        </Card>
    );
};

CountryData.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        flag: PropTypes.string,
        population: PropTypes.number,
        demonym: PropTypes.string
    }).isRequired
};

export default CountryData;
