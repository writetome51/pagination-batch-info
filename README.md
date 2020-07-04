# PaginationLoadInfo

A TypeScript/Javascript class that has properties that give information about a  
dataset too big to be loaded all at once that is stored in memory one load  
at-a-time, with the intention of paginating the load.

## Constructor

<details>
<summary>view constructor</summary>

```ts
constructor(
    __pageInfo: { 
        getItemsPerPage: () => number, 
        getTotalPages: () => number 
    }
)
```
</details>


## Properties

```ts
className: string // read-only
```

## Methods
<details>
<summary>view methods</summary>

```
setItemsPerLoad(value: number): void

getItemsPerLoad(): number

setCurrentLoadNumber(value: number): void

getCurrentLoadNumber(): number | undefined

currentLoadIsLast(): boolean

getTotalLoads(): number

getPagesPerLoad(): number
```

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

PaginationLoadInfo<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## Installation

`npm i @writetome51/pagination-load-info`

## Loading
```ts
// if using TypeScript:
import { PaginationLoadInfo } from '@writetome51/pagination-load-info';
// if using ES5 JavaScript:
var PaginationLoadInfo = require('@writetome51/pagination-load-info').PaginationLoadInfo;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
