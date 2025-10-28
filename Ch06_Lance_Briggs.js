<<<<<<< HEAD


// Group


/*Write a class called Group (since Set is already taken). Like Set, it has add, delete,
 and has methods. Its constructor creates an empty group, add adds a value to the group 
 (but only if it isn’t already a member), delete removes its argument from the group (if it was a 
    member), and has returns a Boolean value indicating whether its argument is a member of 
    the group.
*/


// Example Code


class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// My code


class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(!== value);
  }

   has(value) {
    return this.#members.includes(value);
  }

  
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
}
  


let group = Group.from([10, 20]);
console.log(group.has(20));

console.log(group.has(60));

=======


// Group


/*Write a class called Group (since Set is already taken). Like Set, it has add, delete,
 and has methods. Its constructor creates an empty group, add adds a value to the group 
 (but only if it isn’t already a member), delete removes its argument from the group (if it was a 
    member), and has returns a Boolean value indicating whether its argument is a member of 
    the group.
*/


// Example Code


class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false


// My code


class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(!== value);
  }

   has(value) {
    return this.#members.includes(value);
  }

  
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
}
  


let group = Group.from([10, 20]);
console.log(group.has(20));

console.log(group.has(60));



