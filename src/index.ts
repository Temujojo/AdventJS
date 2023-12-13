function findFirstRepeated(_giftIds: Array<number>): Array<any> {
    return _giftIds
        .map((a) => {
            return _giftIds.map((b) => {
                console.log(a, b);
                a === b ? a + " " + b : -1;
            });
        })
        .reduce((a, b) => (a = b));
}

const giftIds: Array<number> = [2, 1, 3, 5, 3, 2];
//const giftIds: Array<number> = [1, 3, 4, 5, 0, 1, 3, 0, 7];

const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);
