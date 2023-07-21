const Printer = (name, sheetCount = 0) => {
    return {
        name,
        get sheetCount() {
            return sheetCount;
        },
        set sheetCount(value) {
            sheetCount = value;
        },
        addSheets(Number) {
            this.sheetCount += Number;
        },
        printJob(jobName, printSize) {
            if (printSize > this.sheetCount) {
                throw new Error("Print job failed, please refill paper")
            }
            for (let i = 1; i <= printSize; i++) {
                console.log(`Printing ${jobName} - page ${i} of ${printSize}`);
                this.sheetCount--;
            }
        }
    };
};

const myPrinter = Printer('Epson', 10);
console.log(myPrinter);
myPrinter.addSheets(50);
console.log(myPrinter);
myPrinter.printJob('Document', 5);
console.log(myPrinter);