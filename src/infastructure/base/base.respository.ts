import { Repository } from "typeorm";
import { PagedList } from "../paging/paged-list";
import { PagingInfo } from "../paging/paging-info";
import { OrderDirection } from '../paging/order-direction';

export default class BaseRepository<T> extends Repository<T> {
    public async getPaged(pagingInfo: PagingInfo): Promise<PagedList<T>> {
        let order = {};
        pagingInfo.OrderDirection = pagingInfo.OrderDirection || OrderDirection.Asc;
        order[pagingInfo.OrderBy || 'Id'] = pagingInfo.OrderDirection === OrderDirection.Asc ? 'ASC' : 'DESC';

        const [result, total] = await this.findAndCount({ take: pagingInfo.PageSize, skip: (pagingInfo.PageIndex - 1) * pagingInfo.PageSize });

        const ret: PagedList<T> = new PagedList<T>();
        ret.PageIndex = pagingInfo.PageIndex;
        ret.PageIndex = pagingInfo.PageSize;
        ret.Source = result;
        ret.TotalRows = total;
        ret.TotalPages = Math.ceil(total / pagingInfo.PageSize);

        return ret;
    }
}
