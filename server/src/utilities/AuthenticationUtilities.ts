import * as jwt from 'jsonwebtoken'
import Configuration from '../Configuration'

interface Context {
  request: any
}

export function signJwt(payload) {
  return jwt.sign(payload, Configuration.AppSecret);
}

export function verifyJwt(token): any {
  return jwt.verify(token, Configuration.AppSecret);
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = verifyJwt(token) as {
      userId: string
    };
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
