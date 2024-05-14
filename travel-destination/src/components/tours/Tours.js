import './Tours.css'
function Tours(props) {
    return (
        <div class="container">
            <div class='card'>
               
                    <h2>{props.TourName}</h2>
                    <img src={props.TourImage} alt={props.TourName} />
                    <hr />
              
            </div>
        </div>
    );
}


export default Tours;