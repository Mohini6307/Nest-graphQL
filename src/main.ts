import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TryCatchInterceptor } from './middleware/trycatch.intercepter';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TryCatchInterceptor());
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Prototype')
    .setDescription('The prototype API description')
    .setVersion('1.0')
    .addTag('')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`🚀 Swagger Running on Path --> http://localhost:${process.env.PORT ?? 3000}/api-docs`)
  Logger.log(`🚀 GrapghQL Running on Path --> http://localhost:${process.env.PORT ?? 3000}/graphql`)
}
bootstrap();
