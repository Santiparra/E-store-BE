import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductsService extends PrismaClient implements OnModuleInit {
  
  private readonly logger = new Logger("ProductsService");

  onModuleInit() {
    this.$connect();
    this.logger.log("Database connection started");
  }

  create(createProductDto: CreateProductDto) {
    return createProductDto;
  }

  findAll() {
  }

  findOne(id: string) {
;    
  }

  update(id: string, updateProductDto: UpdateProductDto) {    

  }

  remove(id: string) {

  }
}
