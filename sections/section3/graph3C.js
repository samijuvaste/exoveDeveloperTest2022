//function that uses depth-first search
//returns the amount of nodes and if there is a cycle
function countNodes(edges) {

    let count = 0
    const visited = []
    let hasCycle = false

    const previous = new Map() //parent nodes are stored here

    function recursive(node) {

        visited.push(node)
        count++

        const neighbourEdges = edges.filter(edge => edge.includes(node) && !edge.includes(previous.get(node)))
        const neighbours = neighbourEdges.map(edge => {
            if (edge[0] == node) return edge[1]
            else return edge[0]
        })

        //goes through neighbours if they have not been visited yet
        //and otherwise marks that a cycle has been found
        neighbours.forEach(neighbour => {
            if (visited.includes(neighbour)) hasCycle = true
            else {
                previous.set(neighbour, node)
                recursive(neighbour)
            }
        })

        return [count, hasCycle]
    }


    return recursive(0)
}

const examples = [
    [[0, 1], [1, 2], [1, 3], [1, 4], [3, 4]],
    [[0, 1], [1, 2], [1, 3], [3, 4], [4, 5]]
]

const result1 = countNodes(examples[0])
const result2 = countNodes(examples[1])

console.log(`The first graph has ${result1[0]} nodes and hasCycle is ${result1[1]}`)
console.log(`The second graph has ${result2[0]} nodes and hasCycle is ${result2[1]}`)