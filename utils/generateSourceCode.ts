export default function generateSourceCode(currName: string, currState: object) {
    return `<${currName}
${Object.keys(currState).map(key => {
      if (currState[key] !== false && currState[key] !== null && currState[key] !== '') {
        return `   :${key}='${currState[key]}'\n`
      }
      return ''
    }).join('')}/>`
}