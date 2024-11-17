import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { swaggerConfig, swaggerCustomOptions } from './config/swagger';
import { json, urlencoded } from 'express';
import { config } from './config/config';

async function bootstrap() {
  const { port } = config;
  const app = await NestFactory.create(AppModule);

  // Configuracion Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document, swaggerCustomOptions);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders:
      'Origin,X-Requested-With,Content-Type,Accept,Authorization,authorization,X-Forwarded-for',
  });

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  await app.listen(port).then(() => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
