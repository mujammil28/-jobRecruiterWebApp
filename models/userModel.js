const users = [];

export default class UserModel {
  static createUser({ name, email, password }) {
    if (users.some((user) => user.email === email)) return false;
    users.push({ id: users.length + 1, name, email, password });
    return true;
  }

  static authenticateUser(email, password) {
    return users.find((user) => user.email === email && user.password === password);
  }
}
