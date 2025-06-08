import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecomendacaoService } from './recomendacao/service/recomendacao.service';
import { RecomendacaoController } from './recomendacao/controller/recomendacao.controller';

@Module({
  imports: [],
  controllers: [AppController, RecomendacaoController],
  providers: [AppService, RecomendacaoService],
})
export class AppModule {}
