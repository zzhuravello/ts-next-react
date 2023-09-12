let a: number = 4;
let b = 'sssdd';

let d: string[] = ['fsf', 'fdf'];

let e: any = 3;
//void
function test(a: string): number | string {
    return 0;
};

d = d.map((x: string) => x.toLowerCase());

function countCoord (coord: { lat: number, long?: number }) {

};

function printIt(id: number | string): void {
    if (typeof id === 'number') {
        console.log(id.toString());
    } else if (typeof id === 'string') {
        id.toUpperCase();
    }
}

function getSum (a: number | number[]) {
    if (Array.isArray(a)) {
        a.length;
    }
};

const x: undefined = undefined;
const z: null = null;

type Point = {
    a: number,
    b: number
}

/////interfaces

interface UserInfo {
    userId: number,
    id: number,
    title: string
    info: Info,
    tags: Tags[]
}

interface Info {
    desc: string,
    isActive: boolean
}

interface Tags {
    name: string,
    value: number
}


//literal types

let c: 'test' = 'test';

type actionType = 'up' | 'down';

function performAction(action: actionType | ComplexAction): -1 | 1 {
    switch (action) {
        case "down":
            return -1;
        case "up":
            return 1;
    }
}

interface ComplexAction {
    s: string
}

