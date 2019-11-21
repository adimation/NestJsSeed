import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";

export class CustomPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(value, metadata);

        // throw new BadRequestException(`Bad request error message.`);

        return value;
    }

    private anyPrivateMethod(): any {
        return null;
    }
}
