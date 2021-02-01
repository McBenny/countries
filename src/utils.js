export const URLS = {
    HOME: '/',
    COUNTRY: '/country'
};

export const navigate = (destination) => {
    window.location.href = destination;
};

export const getParamFromURL = (param) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
};
