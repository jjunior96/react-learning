import React from 'react'

import PropTypes from 'prop-types'

function TechItem ({ tech, onDelete }) {
  return (
    <li >
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  )
}

// Define valor padrão para tech, caso nao seja passado pelo o usuario
TechItem.defaultProps = {
  tech: 'Oculto',
}

TechItem.PropTypes = {
  tech: PropTypes.string, // Define formato da prop "tech"
  onDelete: PropTypes.func.isRequired, // Define que onDelete é uma funcao e é obrigatória
}

export default TechItem;