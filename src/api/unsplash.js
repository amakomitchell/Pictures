import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID e1cad4f3aafc5029cb66b1835fec6702568edd5380b294687b8f80347a3ba14d'
    }
});