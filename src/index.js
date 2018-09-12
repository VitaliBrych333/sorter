class Sorter {
  constructor(name) {
    this.name = name;
    this.array=[];
    this.sortMethod = (left,right) => left-right;
    // your implementation
  }

  add(element) {
    return this.array.push(element);
      // your implementation
  }

  at(index) {
    return this.array[index];
    // your implementation
  }

  get length() { 
    return this.array.length;
    // your implementation
  }

  toArray() {
    return this.array;
    // your implementation
  }

  sort(indices) {
    let length = indices.length;
    indices.sort((left, right) => left - right);

    if (length == 1) {
      return this.array[indices[0]];
    } else {
        let tempArray = []; 
             
        for (let i = 0; i < length; i++) { 
          tempArray[i] = this.array[indices[i]];
        }
      
        tempArray.sort(this.sortMethod);
      
        for (let i = 0; i < length; i++ ) {
          this.array[indices[i]] = tempArray[i];
        }
  
      return this.array; 
      }
    }

  setComparator(compareFunction) {
    this.sortMethod = compareFunction;
  }
}
module.exports = Sorter;
  setComparator(compareFunction) {
    this.sortMethod = compareFunction;
  }
}
module.exports = Sorter;
