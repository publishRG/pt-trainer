import "./AlternatingPhotoText.css"; // Assumi che il tuo stile sia definito in YourComponent.css o in un file di stile simile

const AlternatingPhotoText = ({ photo, text, position }) => {
  return (
    <div className={`alternating-photo-text ${position}`}>
      <div className="photo">
        <img src={photo} alt="Foto" />
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AlternatingPhotoText;
