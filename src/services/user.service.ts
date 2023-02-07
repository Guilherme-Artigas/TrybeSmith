import connection from '../models/connection';
import UserModel from '../models/user.model';
import IUser from '../interfaces/user';
import createTokenJWT from '../utils/token.generate';

export default class UserService {
  private model : UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user : IUser) : Promise<string> {
    const newUser = await this.model.createUser(user);
    const token = createTokenJWT(newUser);
    return token;
  }
}