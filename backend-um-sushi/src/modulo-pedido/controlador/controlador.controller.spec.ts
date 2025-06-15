import { Test, TestingModule } from '@nestjs/testing';
import { ControladorController } from './controlador.controller';

describe('ControladorController', () => {
    let controller: ControladorController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ControladorController],
        }).compile();

        controller = module.get<ControladorController>(ControladorController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
