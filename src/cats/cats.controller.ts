import { Controller, Get, Post, Param, Header, Body, Delete, Put, Query } from '@nestjs/common';
import { CreateCatDto, QueryDTO, UpdateCatDto } from './dto';
import { SlowBuffer } from 'buffer';

@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return `this actions create a new cat with: ${JSON.stringify(createCatDto)}`;
  }

  @Get()
  async findAll(@Query() query: QueryDTO): Promise<string> {
    return `this actions return all cats2 (limit: ${query.limit} items)`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return a cay by id - ${id}`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return `This action update a cat by id ${id} with: ${JSON.stringify(updateCatDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action remove a cat by id, ${id}`;
  }
}
