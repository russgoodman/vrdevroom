const width = 0.4
const height = 0.4
const z = 0.1

function Row(text, position) {
  const rowLabel = document.createElement('a-entity')

  rowLabel.setAttribute('geometry', {
    primitive: 'plane',
    width,
    height
  })
  rowLabel.setAttribute('material', {
    color: 'grey'
  })
  rowLabel.setAttribute('text', {
    value: text,
    color: 'white',
    wrapCount: 8,
    align: 'center'
  })


  rowLabel.setAttribute('position', position)

  return rowLabel
}

function Column(text, position) {
  const colLabel = document.createElement('a-entity')

  colLabel.setAttribute('geometry', {
    primitive: 'plane',
    width,
    height
  })
  colLabel.setAttribute('material', {
    color: 'grey'
  })
  colLabel.setAttribute('text', {
    value: text,
    color: 'white',
    wrapCount: 8,
    align: 'center'
  })


  colLabel.setAttribute('position', position)

  return colLabel
}

function findRowLabelPosition(rowPosition, boardWidth) {
  return new THREE.Vector3().addVectors(rowPosition,
    new THREE.Vector3(
      -0.5 * boardWidth - 0.5 * width,
      -0.1,
      z
    ))
}

function findColumnLabelPosition(columnPosition, rowHeight) {
  return new THREE.Vector3().addVectors(columnPosition,
    new THREE.Vector3(
      0,
      0.5 * rowHeight + 0.5 * height,
      z
    ))
}

export {
  Row,
  Column,
  findRowLabelPosition,
  findColumnLabelPosition
}
