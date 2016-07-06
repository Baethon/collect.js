import {collect} from '../../lib';

export default {
  collapse: [
    {collection: collect([[1, 2], [3, 4]]), expected: [1, 2, 3, 4]},
  ],
  combine: [
    {collection: collect(['name', 'age']), args: [['Jon', 16]], expected: {name: 'Jon', age: 16}},
    {collection: collect(['name', 'age']), args: [collect(['Jon', 16])], expected: {name: 'Jon', age: 16}},
  ],
};