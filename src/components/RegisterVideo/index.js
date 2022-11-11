import React from "react";
import { StyledRegisterVideo } from "./Styles";
import { createClient } from '@supabase/supabase-js'

function useForm(propsDoForm){
    const [values, setValues] = React.useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
              ...values,
              [name]: value,
            });
            },
        clearForm(){
            setValues({})
        }
    };
}

const supabaseUrl = "https://ugbybrwbofvgiimkxoce.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnYnlicndib2Z2Z2lpbWt4b2NlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxODAxNzksImV4cCI6MTk4Mzc1NjE3OX0.c6wFj1iowioivMixW5yLq3pp9oFe7YA8Af_WDi885EI";
const supabase = createClient(supabaseUrl, supabaseKey)
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

export default function RegisterVideo() {
  const formCadastro = useForm({
      initialValues: { titulo: "", url: ""},
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(formCadastro.values);

            supabase.from("video").insert({
              title: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumbnail(formCadastro.values.url),
              playlist:"jogos",
            })
            .then((oqueveio) => {
              console.log(oqueveio);
            })
            .catch((err) => {
              console.log(err);
            })

            setFormVisivel(false);
            formCadastro.clearForm();
        }}>
          <div>
            <button type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}>
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input 
                placeholder="URL" 
                name="url"
                value={formCadastro.values.url}
                onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
