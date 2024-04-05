// Define custom functions

// 1. myEach
// Define the myEach function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    } else {
        for (const key in collection) {
            callback(collection[key]);
        }
    }
    return collection; // Return the original collection
}

// 2. myMap
function myMap(collection, callback) {
    const newArray = [];
    myEach(collection, function(item) {
        newArray.push(callback(item));
    });
    return newArray;
}

// 3. myReduce
// Define the myReduce function
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    // Check if the collection is an array
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (accumulator === undefined) {
                accumulator = collection[i];
            } else {
                accumulator = callback(accumulator, collection[i], i, collection);
            }
        }
    } else if (typeof collection === 'object') { // Check if the collection is an object
        for (let key in collection) {
            if (accumulator === undefined) {
                accumulator = collection[key];
            } else {
                accumulator = callback(accumulator, collection[key], key, collection);
            }
        }
    }

    return accumulator;
}

module.exports = {
    myReduce
};



// 4. myFind
function myFind(collection, predicate) {
    for (const item of collection) {
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}

// 5. myFilter
function myFilter(collection, predicate) {
    const newArray = [];
    myEach(collection, function(item) {
        if (predicate(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// 6. mySize
function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

// 7. myFirst
// Define the myFirst function
function myFirst(collection, n = 1) {
    if (n === 1) {
        return collection[0];
    } else {
        return collection.slice(0, n);
    }
}

// 8. myLast
// Define the myLast function
function myLast(collection, n = 1) {
    if (n === 1) {
        return collection[collection.length - 1];
    } else {
        return collection.slice(-n);
    }
}


// 9. myKeys
function myKeys(object) {
    return Object.keys(object);
}

// 10. myValues
function myValues(object) {
    return Object.values(object);
}

// Export the custom functions
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};
