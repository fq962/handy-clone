/* eslint-disable prettier/prettier */
import { DocumentBuilder, SwaggerCustomOptions } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('HANDY API')
  .setDescription('Coding')
  .setVersion('1')
  //LISTADO DE TAGS-------------------------------------------------------------
  .addTag('Handy', 'Endpoints for handy developers')
  //   .addBearerAuth()
  //FINALIZA CONFIGURACION------------------------------------------------------
  .build();

export const swaggerCustomOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    docExpansion: 'none', // Esto colapsará los tags por defecto
  },
};
