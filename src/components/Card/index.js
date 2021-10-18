import "./styles.css";

const Card = (props) => {
    return (
        <div className="card">
            <h2 className="card-title">{props.title}</h2>
            <div className="card-container">{props.children}</div>
        </div>
    );
};

export default Card;
