import React from 'react';
import "../Sass/Form.scss"

function Form({handleAdd}: {handleAdd: (item: IMensage) => void}) {
  
  const [image, setImage] = React.useState<string|"">("")

  const handleForm = (e: React.FormEvent<HTMLFormElement>)=> {
    e.preventDefault()

    const inputs: NodeListOf<HTMLInputElement> = (e.target as HTMLFormElement).querySelectorAll("input[type='text'], textarea")

    const item = {
      image
    } as IMensage

    inputs.forEach(el => {
      item[el.name as keyof typeof item] = el.value;
    });

    handleAdd(item);

    setImage("") 
    inputs.forEach((e) => e.value = "")
    const file = (e.target as HTMLFormElement).querySelector('input[type="file"]')
    //@ts-ignore
    file.value = ""
  }

  return (
    <form onSubmit={handleForm} className="form">
      <div className='container-input'>
        <input type="file" name="image" id="image" onChange={(e)=> setImage(URL.createObjectURL((e.target.files as any)[0]))} accept="image/png, image/jpeg"/>
        <label htmlFor="image"><img alt='perfil' className={image ? "notNone" : ""} src={image || '/img/input-file.svg'}></img></label>
        <input required type="text" placeholder='Digite seu nome' name="name" id="name"/>
        <textarea required name="mensage" placeholder='Mensagem' id="mensage"/>
      </div>
      <div className='container-button'>
        <button type="reset" className='primary-outline'>Discartar</button>
        <button type="submit" className='primary'>Publicar</button>
      </div>
    </form>
  );
}

export default Form;
