import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './services/logger.service';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);
  
  // Configurar o logger customizado
  const logger = app.get(LoggerService);
  app.useLogger(logger);

  // Log de inicialização da aplicação
  logger.info('Starting application', {
    additional: {
      port: PORT,
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
    },
  });

  // Recebe origins da variável de ambiente CORS_ORIGINS (separados por vírgula)
  const origins = process.env.CORS_ORIGINS?.split(',').map(origin => origin.trim()) || ['*'];

  app.enableCors({
    origin: origins,
    credentials: true,
    methods: 'GET,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,apollo-require-preflight',
  });

  logger.info('CORS configured', {
    additional: {
      origins,
      credentials: true,
      methods: 'GET,POST,DELETE,OPTIONS',
    },
  });

  await app.listen(Number(PORT));
  logger.info(`Application is running on Port: ${PORT}`, {
    additional: {
      port: PORT,
      environment: process.env.NODE_ENV || 'development',
    },
  });
}

void bootstrap();
