interface PizzaPictureProps {
  name: string;
  picture: string;
}

function PizzaPicture({ name, picture }: PizzaPictureProps) {
  const cardImgContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  };

  const cardImgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  return (
    <div className="card-img-container" style={cardImgContainerStyle}>
      <img src={picture} alt={name} className="card-img" style={cardImgStyle} />
    </div>
  );
}

export default PizzaPicture;
