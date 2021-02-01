import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';

import { URLS } from '../../utils';

import './styles.scss';

const CountriesList = ({
    data
}) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = Math.ceil(data.length / itemsPerPage);
    const startingIndex = (currentPage - 1) * itemsPerPage;
    let dataSubSet = data.slice(startingIndex, (startingIndex + itemsPerPage));
    useEffect(() => {
        dataSubSet = data.slice(startingIndex, (startingIndex + itemsPerPage));
    }, [currentPage]);

    const pagination = {
        previous: 'previous',
        next: 'next'
    };
    const paginate = (direction) => {
        if (direction === pagination.next) {
            setCurrentPage(currentPage + 1);
        } else {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <List component="nav">
                {dataSubSet.map(country => <ListItem
                    key={country.alpha3Code}
                    button
                    component="a"
                    href={`${URLS.COUNTRY}?c=${country.alpha3Code}`}
                >
                    <ListItemText>{country.name}</ListItemText>
                </ListItem>)}
            </List>
            <div className="countries__pagination">
                <Button
                    onClick={() => paginate(pagination.previous)}
                    variant="outlined"
                    size="large"
                    hidden={currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    onClick={() => paginate(pagination.next)}
                    variant="outlined"
                    size="large"
                    hidden={currentPage === numberOfPages}
                >
                    Next
                </Button>
            </div>
        </>
    );
};

CountriesList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CountriesList;
