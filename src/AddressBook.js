function AddressBook() {
  this.contacts =[];
  this.initialComplete = false;
}
AddressBook.prototype.addContact = function(add) {
  this.contacts.push(add);
}
AddressBook.prototype.getContact = function(i) {
  return this.contacts[i];
}
AddressBook.prototype.deleteContact = function(del) {
  this.contacts.pop(del);
}
AddressBook.prototype.getInitialContacts = function(cb) {
  let self = this;
  setTimeout(function() {
    self.initialComplete = true;
    if (cb) {
      return cb();
    }
  }, 3);
}
