import ImageCard from "../ImageCard/ImageCard";

const ImageGalery = ({ photos }) => {
  return (
    <ul>
      {photos.map((photo, index) => (
        <li key={`${photo.id}-${index}`}>
          <div>
            <ImageCard photo={photo} />
            <h2>{photo.user.name}</h2>
            <p>Likes: {photo.likes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGalery;
