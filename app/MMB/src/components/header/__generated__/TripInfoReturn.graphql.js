/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripTimes$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoReturn$ref: FragmentReference;
export type TripInfoReturn = {|
  +outbound: ?{|
    +$fragmentRefs: TripTimes$ref
  |},
  +inbound: ?{|
    +$fragmentRefs: TripTimes$ref
  |},
  +$refType: TripInfoReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "TripTimes",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripInfoReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '26c56886927cc4bdf6791ddc31a78f80';
module.exports = node;