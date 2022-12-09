import { useNavigate } from "react-router-dom";

const CardModule = (props) => {

    let navigate = useNavigate(); 
    
    const routeChange = (e) => { 
        e.preventDefault();
        let path = `../` + props.moduleCode; 
        navigate(path);
        console.log(props.moduleCode)
    }
    
    return (
        <div class="card">
            <div class="card-header">
                {props.moduleCode}
            </div>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.description}</p>
                <button type="button" class="btn btn-outline-dark" onClick={(e)=>routeChange(e)}>Read More</button>
            </div>
        </div>
    )  
}

export default CardModule