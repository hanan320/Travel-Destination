import './Tours.css'
import Tour from './tour/Tour.js'
import db from '../../data/db.json'


const tour = db;

function Tours(props) {
    return (

        <Tour tour={tour} />
    );
}


export default Tours;