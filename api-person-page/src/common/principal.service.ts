import mongoose, { Model } from 'mongoose';
import { Logger } from '@nestjs/common';

export class PrincipalService<Document, CreateDto, UpdateDto> {
  constructor(
    protected readonly _model: Model<Document>,
    protected readonly logger: Logger,
  ) {}

  async findAllOrById(id?: string): Promise<Document[]> {
    try {
      let objectId: mongoose.Types.ObjectId;
      if (id) {
        objectId = new mongoose.Types.ObjectId(id);
      }

      return this._model.find(id ? { _id: objectId } : {}).exec();
    } catch (e) {
      console.error({ err: e });
      return Promise.resolve([]);
    }
  }

  async saveOne(payload: CreateDto): Promise<Document> {
    const userNew = new this._model(payload);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return userNew.save();
  }

  async updateOneById(id: string, payload: UpdateDto): Promise<Document> {
    return await this._model.findByIdAndUpdate(id, payload).exec();
  }

  deleteOneById(id: string) {
    return this._model.findByIdAndDelete(id);
  }
}
