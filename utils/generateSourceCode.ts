export default function generateSourceCode(currName: string, currState: object) {
    return `<${currName}
${Object.keys(currState).map(key => {
      if (currState[key] !== false && currState[key] !== null && currState[key] !== ''
        && currState[key] !== '{0} results are available' && currState[key] !== '{0} items selected'
        && currState[key] !== 'No selected item' && currState[key] !== 'No results found'
      ) {
        return `   :${key}='${currState[key]}'\n`
      }
      return ''
    }).join('')}/>`
}