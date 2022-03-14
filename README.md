[jsrsasign](https://github.com/kjur/jsrsasign/) | [npm](https://www.npmjs.com/package/jsrsasign-oid-psd2) | [OIDs](https://github.com/kjur/jsrsasign-oid-psd2/blob/main/lib/index.js) | [Other AddOn](https://github.com/kjur/jsrsasign/wiki/jsrsasign-Add-On)

# jsrsasign-oid-psd2
jsrsasign add-on to add object identifier definitions for EU Payment Services Directive (PSD2).

## How to use add-on
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-psd2").addon(jsrsasign);
```

## OID definitions
You can see them in [the source code](https://github.com/kjur/jsrsasign-oid-psd2/blob/main/lib/index.js).

## Example
```JavaScript
var jsrsasign = require("jsrsasign");
require("jsrsasign-oid-psd2").addon(jsrsasign);

...snip...

h = "<<<PSD2 certificate hexadecimal data>>>";
console.log(JSON.stringify(jsrsasign.ASN1HEX.parse(h), null, " "));
```

You may find PSD2 QC statement:

```
{"seq": [
  {"oid": "psd2-qcStatement"},
  {"seq": [
    {"seq": [
      {"seq": [
        {"oid": "psd2-role-psp-as"},
        {"utf8str": {"str": "PSP_AS"}}
       ]},
      {"seq": [
        {"oid": "psd2-role-psp-pi"},
        {"utf8str": {"str": "PSP_PI"}}
       ]},
      {"seq": [
        {"oid": "psd2-role-psp-ai"},
        {"utf8str": {"str": "PSP_AI"}}
       ]}
    ]},
    {"utf8str": {"str": "Sample Bank"}},
    {"utf8str": {"str": "BE-XXX"}}
  ]}
]}
```

## Reference
- [ETSI TS 119 495 v1.5.1(2021-04)](https://www.etsi.org/deliver/etsi_ts/119400_119499/119495/01.05.01_60/ts_119495v010501p.pdf) Electronic Signatures and Infrastructures (ESI); Sector Specific Requirements; Certificate Profiles and TSP Policy Requirements for Open Banking 

