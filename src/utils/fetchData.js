// import axios from 'axios';
// const rapidApiKey = process.env.rapidApiKey;

export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "42f65e507dmsh2ee19b432e54da4p111e5bjsn709b42088e41",
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}