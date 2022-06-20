export default function Article(props) {
  return (
    <div className="article-block">
      <img src={props.imageUrl} alt="image" className="image-article" />
      <div className="info-block">
        <div className="head-section-info">
          <img
            src={require("../icons/location.png")}
            className="location-icon"
          />
          <p className="head-section-info-text">
            {props.location}{" "}
            <a
              target="_blank"
              href={props.googleMapsUrl}
              className="view-image-text"
            >
              View on Google Maps
            </a>{" "}
          </p>
        </div>
        <h1 className="title">{props.title}</h1>
        <div className="bottom-setion-info">
          <h3 className="date">
            {props.startDate} - {props.endDate}
          </h3>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
