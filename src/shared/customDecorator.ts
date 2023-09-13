import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions
} from 'class-validator';
import { Types } from 'mongoose';

export function IsMongoIdObject(validationOptions?: ValidationOptions) {
    return function (object: Record<string, any>, propertyName: string) {
        registerDecorator({
            name: 'IsMongoIdObject',
            target: object.constructor,
            propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return value && Types.ObjectId.isValid(value);
                },
            },
        });
    };
}
