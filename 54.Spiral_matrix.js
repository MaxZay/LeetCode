const spiralOrder = (matrix) => {
  let shift = 0
  const rowCount = matrix.length
  const columnCount = matrix[shift].length
  const countOfMatrixElements = rowCount * columnCount
  let result = []

  while (result.length < countOfMatrixElements) {
    //top
    for(let i = shift; i < columnCount - shift && result.length < countOfMatrixElements; i++) {
      result.push(matrix[shift][i])
    }

    //right
    for (let i = shift + 1; i < rowCount - shift && result.length < countOfMatrixElements; i++) {
      result.push(matrix[i][columnCount - 1 - shift])
    }

    //bottom
    for (let i = columnCount - 2 - shift; i >= shift && result.length < countOfMatrixElements; i--) {
      result.push(matrix[rowCount - 1 - shift][i])
    }

    //left
    for (let i = rowCount - 2 - shift; i >= shift + 1 && result.length < countOfMatrixElements; i--) {
      result.push(matrix[i][shift])
    }

    shift++
  }

  return result
}

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))