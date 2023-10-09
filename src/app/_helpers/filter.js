export const filterArrayOfObject = (obj) => {
    let uniq = []
    // console.log(obj.algorithm);
    if (obj.algorithm == "absolute_value") {
        for (let i = 0; i < obj.values.length; i++) {
            if (!uniq.includes(obj.values[i].name) && obj.values[i].name != "" && obj.values[i].name != "-") {
                uniq.push(obj.values[i].name);
            }
        }
        if(uniq.includes('no') && !uniq.includes('yes'))
        {
            uniq.push('yes');
        }
        else if(uniq.includes('yes') && !uniq.includes('no'))
        {
            uniq.push('no');
        }

        if (uniq.length > 0)
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
        let numberedUniq = uniq.map((ele) => Number(ele)).filter((element) => !isNaN(element))
        let sortedArray = numberedUniq.sort(function (a, b) { return a - b })
        if (sortedArray.length <= 6) {
            if (sortedArray.length > 0)
                return {
                    type: "dropdown",
                    values: sortedArray
                }
        }
        else {
            return {
                type: "range",
                values: sortedArray,
                minValue: Math.min(...sortedArray),
                maxValue: Math.max(...sortedArray)
            }
        }
    }

}

export const removeDecimalAboveNine = (value)=> {
    if (value > 9) {
        return Math.floor(value);
    } else {
        return value.toFixed(1);
    }
}


export const filterProducts = (filterObject , products) =>{
    if(Object.entries(filterObject).length === 0)  
        return products

        return products.filter((product) => {
            // Iterate over the filter categories
            for (const categoryName in filterObject) {
              // Find the attribute category within the product
              const categoryAttributes = product.attributes.find(
                attr => attr.attribute_category.name === categoryName
              );
        
              // if (categoryAttributes) {
              //   // Iterate over the attributes and their values within the category
              //   for (const attributeName in filterObject[categoryName]) {
              //     const attributeValues = filterObject[categoryName][attributeName];
        
              //     // Find the corresponding attribute within the category
              //     const attribute = categoryAttributes.attributes.find(
              //       (attr) => attr.attribute === attributeName
              //     );
        
              //     if (attribute) {
              //       // Check if the attribute value matches any of the filter values
              //       if (attributeValues.includes(attribute.attribute_value)) {
              //         continue;
              //       } else {
              //         return false; // At least one attribute did not match, so skip this product
              //       }
              //     } else {
              //       return false; // Attribute not found, skip this product
              //     }
              //   }
              // } else {
              //   return false; // Category not found, skip this product
              // }

            // console.log(categoryName)
            // console.log(product.attributes.find(attr => attr.attribute_category.name === categoryName))
            }
        
            return true; // All filter conditions matched, include this product
          });
    
}

