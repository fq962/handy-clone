/* eslint-disable prettier/prettier */
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const defaultPort = 2000;

export const config = {
  port: process.env.PORT || defaultPort,
  usarCertificados: process.env.USAR_CERTIFICADOS === 'true',
};
