import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 
                    'Client-ID e1cad4f3aafc5029cb66b1835fec6702568edd5380b294687b8f80347a3ba14d'
            }
        });
        console.log(response.data.results);
    }
    render() {
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        );
        
    }
};

export default App;