import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { GitRepositoryService } from '../services/git-repository.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  CreateGitRepositoryDto,
  UpdateGitRepositoryDto,
} from '../dtos/git-repository.dto';

@ApiTags('git-repository')
@Controller('git-repository')
export class GitRepositoryController {
  constructor(private readonly _gitRepositoryService: GitRepositoryService) {}

  @ApiOperation({ summary: 'Get all git repositories' })
  @Get()
  getAll() {
    return this._gitRepositoryService.findAllOrById();
  }

  @ApiOperation({ summary: 'Create git repository' })
  @Post()
  createOne(@Body() payload: CreateGitRepositoryDto) {
    return this._gitRepositoryService.saveOne(payload);
  }

  @ApiOperation({ summary: 'Update git repository' })
  @Put(':id')
  updateOneById(
    @Body() payload: UpdateGitRepositoryDto,
    @Param('id') id: string,
  ) {
    return this._gitRepositoryService.updateOneById(id, payload);
  }

  @ApiOperation({ summary: 'Get one git repository by id' })
  @Get(':id')
  getById(@Param('id') id: string) {
    return this._gitRepositoryService.findAllOrById(id);
  }
}
