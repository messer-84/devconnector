console.clear();
const privateMethod = Symbol('privateMethod');

class ClientService {
  constructor () {
    this.clients = 250;

  }

  [privateMethod] () {
    console.log(this.clients);
  }

  publicMethod () {
    this[privateMethod]();
  }
}
const service = new ClientService();

service.publicMethod();
// service.privateMethod();