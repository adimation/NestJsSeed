import { IdentifyableDTO } from './identifyable.dto';

export class AuditableDTO extends IdentifyableDTO {
    public CreatedBy: string;
    public CreatedOn: Date;
    public UpdatedBy: string;
    public UpdatedOn: Date;
}
