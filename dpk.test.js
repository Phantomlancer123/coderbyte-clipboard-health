const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("No partitionKey event object", () => {
    const partitionKey = deterministicPartitionKey({
      id: "test"
    });
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBeLessThanOrEqual(256);
    expect(partitionKey).toBe(deterministicPartitionKey({
      id: "test"
    }));
  });

  it("Checking event object by partitionKey", () => {
    const partitionKey = deterministicPartitionKey({
      partitionKey: 11280615
    });
    expect(partitionKey).toBe("11280615");
  });


  it("Checking if there is an event where the partitionKey is longer than the limit", () => {
    const partitionKey = deterministicPartitionKey({
      partitionKey: "0".repeat(257)
    });
    expect(typeof partitionKey).toBe("string");
    expect(partitionKey.length).toBe(128);
  });
});
