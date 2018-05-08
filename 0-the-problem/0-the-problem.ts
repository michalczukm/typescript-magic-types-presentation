function getValue(): any {
    switch(Math.random() % 3) {
        case 0:
            return 'foo';
        case 1:
            return 5;
        case 2: 
            return { value: '5' };
        default:
            throw new Error('Ups');
    }
}

const result = getValue() as number + 1;