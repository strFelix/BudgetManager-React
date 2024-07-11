import React from "react";

const ProjectForm = () => {
  return (
    <form>
      <div>
        <input type="number" placeholder="Insira o o orçamento total" />
      </div>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>Selecione uma categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value='Criar projeto'/>
      </div>
    </form>
  );
};

export default ProjectForm;
