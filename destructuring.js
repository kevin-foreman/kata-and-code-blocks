const apple = {
    numberOfLeaves: 2,
    colors: {
        actual: ['green', 'yellow'],
        possible: ['red', 'green', 'yellow'],
    },
    kind: 'Golden Delicious',
    sku: 'A-GD-01',
};

const { kind, sku } = apple;

console.log(kind);