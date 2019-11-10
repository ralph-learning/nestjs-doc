import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements  NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('Request...');
    next();
  }
}

// Consider using the simpler functional middleware alternative any time your middleware doesn't need any dependencies.
export function logger(req, res, next) {
  console.log('request...');
  next();
}