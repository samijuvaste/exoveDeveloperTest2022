/*
function to order two strings based on the ASCII code
of the third letter first, then second letter and then the first letter

returns negative int if first < second,
        positive int if first > second,
        otherwise 0
*/
function order(first, second) {
    for (let i = 2; i >= 0; i--) {
        if (first.charCodeAt(i) != second.charCodeAt(i)) {
            return first.charCodeAt(i) - second.charCodeAt(i)
        }
    }
    return 0
}

//function that quicksorts given strings
function quicksort(words) {

    //function that swaps places of two elements in the words array
    function swap(a, b) {
        const temporary = words[a]
        words[a] = words[b]
        words[b] = temporary
    }

    //function that uses Lomuto’s partitioning algorithm
    function partition(lower, higher) {
        
        //random selection for pivot element to optimize sorting of nearly sorted arrays
        const pivotIndex = lower + Math.floor(Math.random() * (higher - lower))
        const pivot = words[pivotIndex]

        //swap the pivot element to last element
        swap(pivotIndex, higher)

        let i = lower
        let j = lower

        //go through subarray and swap elements smaller than pivot to i
        while (j < higher) {
            if (order(words[j], pivot) <= 0) {
                swap(i, j)
                i++
            }
            j++
        }

        //swaps the pivot element back to correct place
        swap(i, higher)
        return i //returns the pivot index
    }

    //recursive call for quicksort
    function recursive(lower, higher) {
        
        //sorting is only needed if sub-array has at least 2 elements
        if (lower < higher) {
            const middle = partition(lower, higher)

            //sort subarrays before and after the middle element
            recursive(lower, middle - 1)
            recursive(middle + 1, higher)
        }
    }

    recursive(0, words.length - 1)
}

const examples = [
    "BOAT",
    "Locomotive",
    "Poet",
    "Accelerate",
    "GOLF",
    "ACCIDENTAL",
    "Submarine"
]

console.log("Array before the sort:")
examples.forEach(word => console.log(word))

//I could have used examples.sort(order)
//but I understood that I was supposed to write the sorting algorithm too
quicksort(examples)
console.log("\nArray after the sort")
examples.forEach(word => console.log(word))