import { OrderDirection } from "./order-direction";

export class PagingInfo {
    public PageIndex: number;
    public PageSize: number;
    public OrderBy: string;
    public OrderDirection: OrderDirection;
}
