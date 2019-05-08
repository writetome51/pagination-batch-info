# PaginationBatchInfo

A TypeScript/Javascript class that has properties that give information about a  
dataset too big to be loaded all at once that is stored in memory one batch  
at-a-time, with the intention of paginating the batch.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    pageInfo: {itemsPerPage: number, totalPages: number}
        // Its properties are used to calculate `totalBatches` and
        // validate `itemsPerBatch` and `currentBatchNumber`
) 
```
</details>


## Properties
<details>
<summary>view properties</summary>

```ts
itemsPerBatch: number
    // Must be set before doing anything else with the class.
    // If it does not divide evenly by `pageInfo.itemsPerPage` 
    // (from the constructor), its value is automatically lowered until it does.
    // Note: whenever itemsPerBatch changes, this.currentBatchNumber becomes 
    // undefined.

currentBatchNumber: number | undefined
    // Intended to refer to the batch that is currently loaded for viewing.
    // You can set it to undefined, if, say, you want to empty the batch.

currentBatchNumberIsLast : boolean  // read-only
    // Whether or not this.currentBatchNumber is the last batch in the dataset.

totalBatches: number  // read-only

pagesPerBatch: number  // read-only

className: string // read-only
```
</details>


## Methods
<details>
<summary>view methods</summary>

The methods below are not important to know about in order to use this  
class.  They're inherited from [BaseClass](https://github.com/writetome51/typescript-base-class#baseclass) .
```ts
protected   _createGetterAndOrSetterForEach(
                  propertyNames: string[],
                  configuration: IGetterSetterConfiguration
            ) : void
     /*********************
     Use this method when you have a bunch of properties that need getter and/or 
     setter functions that all do the same thing. You pass in an array of string 
     names of those properties, and the method attaches the same getter and/or 
     setter function to each property.
     IGetterSetterConfiguration is this object:
     {
         get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function,
             // get_setterFunction takes the property name as first argument and 
             // returns the setter function.  The setter function must take one 
             // parameter and return void.
     
         get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
         ) => Function
             // get_getterFunction takes the property name as first argument and 
             // returns the getter function.  The getter function must return something.
     }
     *********************/ 
   
   
protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.


protected   _errorIfPropertyHasNoValue(
                property: string, // can contain dot-notation, i.e., 'property.subproperty'
                propertyNameInError? = ''
            ) : void
    // If value of this[property] is undefined or null, it triggers fatal error:
    // `The property "${propertyNameInError}" has no value.`
```
</details>


## Inheritance Chain

PaginationBatchInfo<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm install @writetome51/pagination-batch-info`

## Loading
```ts
// if using TypeScript:
import { PaginationBatchInfo } from '@writetome51/pagination-batch-info';
// if using ES5 JavaScript:
var PaginationBatchInfo = require('@writetome51/pagination-batch-info').PaginationBatchInfo;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
