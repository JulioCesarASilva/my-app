import "../Sass/Mensage.scss";

function Mensage({image, mensage, name, remove, i}: IMensage & {i: number, remove: (index: number) => void}) {
  return (
    <div className="mensage">
        <img src="/img/delete.svg" alt="Delete"  className="delete" onClick={()=> remove(i)} />
      <div className="image">
        { image  
            ? <object data={image} type="image/png">
              <img className="perfil" src="/img/photo-base.png" alt={name} />
            </object>
            : <img className="perfil" src="/img/photo-base.png" alt={name} />}
      </div>
      <div className="container-mensage">
        <p>{mensage}</p>
        <small>Enviado por</small>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Mensage;
