import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  // Recebe origins da variável de ambiente CORS_ORIGINS (separados por vírgula)
  const origins = process.env.CORS_ORIGINS?.split(',').map(origin => origin.trim()) || ['*'];

  app.enableCors({
    origin: origins,
    credentials: true,
    methods: 'GET,POST,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
  });

  await app.listen(Number(PORT));
  console.info(`Application is running on: http://localhost:${PORT}`);
  console.log('Memória usada:', process.memoryUsage());
}

void bootstrap();
