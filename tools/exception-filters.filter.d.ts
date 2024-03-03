import { ExceptionFilter, ArgumentsHost, InternalServerErrorException } from '@nestjs/common';
export declare class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: InternalServerErrorException, host: ArgumentsHost): void;
}
