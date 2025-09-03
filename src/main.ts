import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.API_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(PORT));
  console.info(`Application is running on: http://localhost:${PORT}`);
  console.log('Memória usada:', process.memoryUsage());
}

void bootstrap();
