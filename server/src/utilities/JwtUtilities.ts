import * as jwt from 'jsonwebtoken';
import Configuration from '../Configuration';

export function signJwt(payload) {
  return jwt.sign(payload, Configuration.AppSecret);
}
