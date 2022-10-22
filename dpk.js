const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {  // take optional event object and calculate partitionKey
  const TRIVIAL_PARTITION_KEY = "0";  // default
  const MAX_PARTITION_KEY_LENGTH = 256; // max key length
  
  if (!event) { // event doesn't exist return 0
    return TRIVIAL_PARTITION_KEY;
  }
 
  if (!event.partitionKey) {    // partitionKey doen't exist return hex encoded
    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  }

  let candidate = event.partitionKey; 

  if (typeof candidate !== 'string') {    // convert partitionKey to string.
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {  // sha-512 hash in hex.
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};