var oids = {
    // RFC 5280 
    "id-pkix":		"1.3.6.1.5.5.7",
    "id-pe:":		"1.3.6.1.5.5.7.1",
    "id-qt":		"1.3.6.1.5.5.7.2",
    "id-qt-cps":	"1.3.6.1.5.5.7.2.1",
    "id-qt-unotice":	"1.3.6.1.5.5.7.2.2",
    "id-kp":		"1.3.6.1.5.5.7.3",
    "id-ad":		"1.3.6.1.5.5.7.48",
    "id-ad-ocsp:":	"1.3.6.1.5.5.7.48.1",
    "id-ad-caIssuers":	"1.3.6.1.5.5.7.48.2",
    "id-ad-timeStamping": "1.3.6.1.5.5.7.48.3",
    "id-ad-caRepository": "1.3.6.1.5.5.7.48.5",

    "attributeType":	"2.5.4",
    "serialNumber":	"2.5.4.5",	// X.520, ISO 9594-6
    "name":		"2.5.4.41",	// X.520, ISO 9594-6, RFC 4519

    "pkcs9":		"1.2.840.113549.1.9",	// PKCS#9
    "unstructuredName": "1.2.840.113549.1.9.2",	// PKCS#9

    "id-cabf":				"2.23.140",	// CABF
    "id-cabf-cp":			"2.23.140.1",	// CABF CP
    "ev-Guidelines":			"2.23.140.1.1",	// CABF CP EV Guidelines
    "cabf-organizationIdentifier":	"2.23.140.3.1", // CABF v3ext

    "Google":			"1.3.6.1.4.1.11129",
    "ct-precertificate-scts":	"1.3.6.1.4.1.11129.2.4.2", // RFC 6962 CT Precertificate SCTs v3ext
    "ct-precertificate-poison":	"1.3.6.1.4.1.11129.2.4.3", // RFC 6962 CT Precertificate Poison v3ext
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
