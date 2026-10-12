const dns = require('dns');

dns.lookup('google.com', (err, address, family) => {
    if (err) {
        console.log("Error:", err.message);
        return;
    }

    console.log("IP Address:", address);
    console.log("IP Version:", family);
});