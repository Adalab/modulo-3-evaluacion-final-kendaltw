function Filters({ onChangeName }) {
  const onChangeInput = (ev) => {
    console.log(typeof ev.target.value);
    onChangeName(ev.target.value);
  };
  return (
    <form className="form" action="">
      <label htmlFor="name">Nombre</label>
      <input type="text" id="name" name="name" onChange={onChangeInput} />
    </form>
  );
}

export default Filters;
