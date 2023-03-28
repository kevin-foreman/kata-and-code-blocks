const inspect = (obj) => {
    const propertySet = new Set();
    let proto = obj;

    while (proto) {
        const names = Object.getOwnPropertyNames(proto);

        for (let i = 0; i < names.length; i++) {
            const name = names[i];

            if (!propertySet.has(name) && !name.startsWith('__') && !Object.prototype.hasOwnProperty(name)) {
                propertySet.add(name);
            }
        }

        proto = Object.getPrototypeOf(proto);
    }

    return Array.from(propertySet).sort();
};