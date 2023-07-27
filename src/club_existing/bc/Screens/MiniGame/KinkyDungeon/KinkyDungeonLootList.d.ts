declare let KDBasicArmorWeight: number;
declare let KDBasicArmorWeight_Cursed: number;
declare let KDAdvancedArmorWeight: number;
declare let KDAdvancedArmorWeight_Cursed: number;
declare let KDBasicArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    norestraint: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDAdvancedArmor: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    norestraint: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDBasicArmor_Cursed: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    curses: string[];
    norestraint: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare let KDAdvancedArmor_Cursed: {
    name: string;
    minLevel: number;
    weight: number;
    armor: string;
    curses: string[];
    norestraint: string[];
    message: string;
    messageColor: string;
    messageTime: number;
    allFloors: boolean;
}[];
declare namespace KinkyDungeonLootTable {
    const rubble: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon?: undefined;
        prerequisites?: undefined;
        key?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        prerequisites?: undefined;
        key?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        noweapon?: undefined;
        key?: undefined;
    } | {
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon?: undefined;
        prerequisites?: undefined;
    })[];
    const shelf: ({
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
    })[];
    const pearl: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    const shadow: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        norestraint: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weapon: string;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        max?: undefined;
        magic?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max: number;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        max?: undefined;
        magic?: undefined;
    } | {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max: number;
        weapon?: undefined;
        noweapon?: undefined;
    })[];
    const storage: ({
        name: string;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        key?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        key?: undefined;
    })[];
    const blue: {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max: number;
    }[];
    const tutorial1: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    const tutorial2: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
    }[];
    const chest: ({
        name: string;
        minLevel: number;
        weight: number;
        armor: string;
        norestraint: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        minlevel?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        prerequisites?: undefined;
        power?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        redspecial?: undefined;
        key?: undefined;
        minlevel?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        prerequisites?: undefined;
        power?: undefined;
    } | {
        name: string;
        redspecial: number;
        key: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        minlevel?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        prerequisites?: undefined;
        power?: undefined;
    } | {
        name: string;
        minlevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        minLevel?: undefined;
        weapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        prerequisites?: undefined;
        power?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        trap: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        weapon?: undefined;
        noweapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        minlevel?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        weapon?: undefined;
        noweapon?: undefined;
        redspecial?: undefined;
        key?: undefined;
        minlevel?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        power?: undefined;
    })[];
    const lost_items: {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
    }[];
    const cache: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon?: undefined;
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        weapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        goddess?: undefined;
        goddessWeight?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        noweapon: string[];
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
    })[];
    const gold: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        norestraint?: undefined;
        minlevel?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        count: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        submissive: number;
        arousalMode?: undefined;
        norestraint?: undefined;
        minlevel?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        minlevel?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        count?: undefined;
        submissive?: undefined;
        arousalMode?: undefined;
        minlevel?: undefined;
    } | {
        name: string;
        minlevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        submissive: number;
        minLevel?: undefined;
        max?: undefined;
        count?: undefined;
        arousalMode?: undefined;
    })[];
    const lessergold: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        max?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        max: number;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        max?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        special: number;
        allFloors: boolean;
        max: number;
        weapon?: undefined;
        noweapon?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        goddess: string;
        goddessWeight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        max?: undefined;
        magic?: undefined;
        special?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        trap: boolean;
        minlevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        minLevel?: undefined;
        max?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        lock?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        trap: boolean;
        lock: string;
        minlevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        minLevel?: undefined;
        max?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        max?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        special?: undefined;
        goddess?: undefined;
        goddessWeight?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        prerequisites?: undefined;
        power?: undefined;
        lock?: undefined;
    })[];
    const silver: ({
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        power?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        weapon: string;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        noweapon: string[];
        magic?: undefined;
        prerequisites?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        power?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        magic: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        weapon?: undefined;
        noweapon?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        power?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        trap: boolean;
        minlevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        minLevel?: undefined;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        arousalMode: boolean;
        trap: boolean;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        power: number;
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        minlevel?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        prerequisites: string[];
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        power?: undefined;
        norestraint?: undefined;
    } | {
        name: string;
        minLevel: number;
        weight: number;
        message: string;
        messageColor: string;
        messageTime: number;
        allFloors: boolean;
        norestraint: string[];
        weapon?: undefined;
        noweapon?: undefined;
        magic?: undefined;
        prerequisites?: undefined;
        arousalMode?: undefined;
        trap?: undefined;
        minlevel?: undefined;
        power?: undefined;
    })[];
}
declare namespace KDLootEvents {
    function Armor(Loot: any, Floor: any, Replacemsg: any, Lock: any): {
        value: number;
        Replacemsg: any;
    };
}
