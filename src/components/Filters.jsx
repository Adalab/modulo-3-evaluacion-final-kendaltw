import photo from "../images/photo.png";

function Filters({ onChangeName }) {
  const onChangeInput = (ev) => {
    console.log(typeof ev.target.value);
    onChangeName(ev.target.value);
  };
  return (
    <div className="search">
      <img className="photo-portal" src={photo} alt="rick & morty" />
      <form className="form" action="">
        <label htmlFor="name">Nombre de personaje</label>
        <input type="text" id="name" name="name" onChange={onChangeInput} />
      </form>
    </div>
  );
}

export default Filters;
