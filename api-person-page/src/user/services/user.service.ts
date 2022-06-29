import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly _userModel: Model<User>,
  ) {}

  findAllOrById(id?: string): Promise<User[]> {
    try {
      let objectId: mongoose.Types.ObjectId;
      if (id) {
        objectId = new mongoose.Types.ObjectId(id);
      }

      return this._userModel.find(id ? { _id: objectId } : {}).exec();
    } catch (e) {
      console.error({ err: e });
      return Promise.resolve([]);
    }
  }

  saveOne(user: CreateUserDto): Promise<User> {
    const userNew = new this._userModel(user);
    return userNew.save();
  }

  updateOneById(id: string, user: UpdateUserDto) {
    return this._userModel.findByIdAndUpdate(id, user);
  }

  deleteOneById(id: string) {
    return this._userModel.findByIdAndDelete(id);
  }
}
