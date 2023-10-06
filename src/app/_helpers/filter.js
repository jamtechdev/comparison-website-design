export const filterArrayOfObject = (obj) => {  
    let uniq = []
    // console.log(obj.algorithm);
    if (obj.algorithm == "absolute_value") {
        for (let i = 0; i < obj.values.length; i++) {
            if (!uniq.includes(obj.values[i].name) && obj.values[i].name != "" && obj.values[i].name != "-") {
                uniq.push(obj.values[i].name);
            }
        }
        if(uniq.length>0)
        return {
            type: "dropdown",
            values: uniq
        }
    }
    else if (obj.algorithm == "highest_to_lowest" || obj.algorithm == "lowest_to_highest") {
        // console.log(obj.values)
        for (let i = 0; i < obj.values.length; i++) {
            if (!uniq.includes(obj.values[i].name) && obj.values[i].name != "" && obj.values[i].name != "-") {
                uniq.push(obj.values[i].name);
            }
        }
        let numberedUniq = uniq.map((ele) => Number(ele))
        let sortedArray = numberedUniq.sort(function (a, b) { return a - b })
        if (sortedArray.length <= 6) {
            if(sortedArray.length>0)
            return {
                type: "dropdown",
                values: sortedArray
            }
        }
        else {
            return {
                type: "range",
                values: sortedArray,
                minValue : Math.min(...sortedArray),
                maxValue : Math.max(...sortedArray)
            }
        }
    }
}