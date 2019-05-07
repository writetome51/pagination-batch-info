import { BaseClass } from '@writetome51/base-class';


/********************
 Has properties that give information about a dataset too big to be loaded all at once that
 is stored in memory one batch at-a-time, with the intention of paginating the batch.
 *******************/

export declare class PaginationBatchInfo extends BaseClass {

	itemsPerBatch: number;
	currentBatchNumber: number;
	readonly currentBatchNumberIsLast: boolean;
	readonly totalBatches: number;
	readonly pagesPerBatch: number;

	private __pageInfo;
	private __itemsPerBatch;
	private __currentBatchNumber;


	constructor(
		__pageInfo: {
			itemsPerPage: number;
			totalPages: number;
		}
	);


	private __errorIfValueIsNotOneOrGreater;
	private __checkValueOf_itemsPerBatch;
	private __ensure_itemsPerBatch_isCompatibleWith_itemsPerPage;

}
