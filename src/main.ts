import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.API_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number(PORT ?? 3000));
  console.log(`Application is running on: http://localhost:${PORT ?? 3000}`);
}

void bootstrap();
