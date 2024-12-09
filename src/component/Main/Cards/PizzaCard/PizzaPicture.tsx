interface PizzaPictureProps {
  name: string;
  picture: string;
}

function PizzaPicture({ name, picture }: PizzaPictureProps) {
  return (
    <div id="card-img-container" className="w-full h-48 overflow-hidden">
      <img src={picture} alt={`photo of a ${name} pizza`} id="card-img" />
    </div>
  );
}

export default PizzaPicture;
