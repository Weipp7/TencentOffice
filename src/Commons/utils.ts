const ACode = "A".charCodeAt(0);

export function toName(index: number) {
    let columnName = "";
    index--;
    do {
        if (columnName.length > 0) {
            index--;
        }
        columnName = String.fromCharCode(index % 26 + ACode) + columnName;
        index = (index - index % 26) / 26;
    } while (index > 0);
    return columnName;
}

export function toIndex(columnName: string) {
    let index = 0;
    let charsLenght = columnName.length;
    for (let i = 0; i < charsLenght; i++) {
        index += (columnName.charCodeAt(0) - ACode + 1) * Math.pow(26, charsLenght - i - 1);
    }

    return index;
}