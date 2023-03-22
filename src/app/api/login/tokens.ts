import jwt from 'jsonwebtoken'


const TOKEN_SECRET_KEY = 'secret-key';

interface IToken {
  id: number;
  name: string
}

export class Token {
  data: IToken;
  constructor(data: IToken) {
    this.data = data
  }

  signToken(type: 'access' | 'refresh') {
    const {id, name} = this.data;

    const token = jwt.sign(
      { user_id: id, name, type },
      TOKEN_SECRET_KEY,
      {
        expiresIn: type === "access" ? "30m" : "1h",
      }
    );

    return token
  }

  verifyToken(token: string) {
    return jwt.verify(token, TOKEN_SECRET_KEY)
  }
}
