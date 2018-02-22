class Sorter {
  constructor(name) {
    
    this.name=[];
    
    // your implementation
  }

  add(element) {
    
    this.name.push(element);
    

    // your implementation
  }

  at(index) {
    return this.name[index];
    // your implementation
  }

  get length() { 
    return this.name.length;
    // your implementation
  }

  toArray() {
    return this.name;
    // your implementation
  }

  sort(indices) {
    if (indices.length==3) {
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3 - i - 1; j++) {
            if (this.name[j] > this.name[j + 1]) {
                // меняем элементы местами
                var temp = this.name[j];
                this.name[j] = this.name[j + 1];
                this.name[j + 1] = temp;
            }
        }
      }
    }
    if (indices[0] > indices[1]) {
      var r = indices[1];
      indices[1]=indices[0];
      indices[0]=r;
    };
    if (this.name[indices[0]] > this.name[indices[1]]) {
      var t = this.name[indices[1]];
      this.name[indices[1]] = this.name[indices[0]];
      this.name[indices[0]] = t; 
    };
    return this.name;  
      // your implementation
  }


  setComparator(compareFunction) {

   
     this.name.sort(compareFunction);
      
    
   

  }
}
module.exports = Sorter;