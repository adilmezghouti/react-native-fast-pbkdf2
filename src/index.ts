import { NativeModules } from 'react-native';

const implementation = {
  derive(
    password: string,
    salt: string,
    iterations: number,
    keySize: number,
    hash: 'sha-1' | 'sha-256' | 'sha-512'
  ): Promise<string> {
    return NativeModules.Pbkdf2.derive(
      password,
      salt,
      iterations,
      keySize,
      hash
    );
  },
  deriveSync(
    password: string,
    salt: string,
    iterations: number,
    keySize: number,
    hash: 'sha-1' | 'sha-256' | 'sha-512'
  ): string {
    return NativeModules.Pbkdf2.deriveSync(
      password,
      salt,
      iterations,
      keySize,
      hash
    );
  },
};

export default implementation;
