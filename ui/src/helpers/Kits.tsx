import { Weapons } from './Weapons';

export var Kits: any = [
    {
        Name: "Assault",
        Weapons: {
            Primary: {
                U_AK74M: Weapons.U_AK74M,
                U_G36C: Weapons.U_G36C,
                /*U_M416: Weapons.U_M416,
                U_G36C: Weapons.U_G36C,

                U_M416: {
                    Key: "U_M416",
                    Name: "M416",
                    Image: "fb://UI/Art/Persistence/Weapons/m416",
                    Vext: "Weapons/M416/U_M416",
                },
                U_G36C: {
                    Key: "U_G36C",
                    Name: "G36C",
                    Image: "fb://UI/Art/Persistence/Weapons/g36c",
                    Vext: "Weapons/G36C/U_G36C",
                },*/
            },
            Secondary: {
                U_M9: Weapons.U_M9,
                U_Taurus44: Weapons.U_Taurus44,
            },
            Tactical: {
                U_Ammobag: Weapons.U_Ammobag,
                U_C4: Weapons.U_C4,
            },
            Lethal: {
                U_M67: Weapons.U_M67,
            },
            defaultPrimary: Weapons.U_AK74M.Key,
            defaultSecondary: Weapons.U_Taurus44.Key,
            defaultTactical: Weapons.U_Ammobag.Key,
            defaultLethal: Weapons.U_M67.Key,
        },
    },
    {
        Name: "SpecOps",
        Weapons: {
            Primary: {
                U_AKS74u: Weapons.U_AKS74u,
                U_F2000: Weapons.U_F2000,
            },
            Secondary: {
                U_M9: Weapons.U_M9,
                U_Taurus44: Weapons.U_Taurus44,
            },
            Tactical: {
                U_C4: Weapons.U_C4,
                U_Medkit: Weapons.U_Medkit,
            },
            Lethal: {
                U_M67: Weapons.U_M67,
            },
            defaultPrimary: Weapons.U_AKS74u.Key,
            defaultSecondary: Weapons.U_Taurus44.Key,
            defaultTactical: Weapons.U_Medkit.Key,
            defaultLethal: Weapons.U_M67.Key,
        },
    },
    {
        Name: "Demolition",
        Weapons: {
            Primary: {
                U_SPAS12: Weapons.U_SPAS12,
            },
            Secondary: {
                U_M9: Weapons.U_M9,
                U_Taurus44: Weapons.U_Taurus44,
            },
            Tactical: {
                U_C4: Weapons.U_C4,
                U_Medkit: Weapons.U_Medkit,
            },
            Lethal: {
                U_M67: Weapons.U_M67,
            },
            defaultPrimary: Weapons.U_SPAS12.Key,
            defaultSecondary: Weapons.U_Taurus44.Key,
            defaultTactical: Weapons.U_Medkit.Key,
            defaultLethal: Weapons.U_M67.Key,
        },
    },
    {
        Name: "Sniper",
        Weapons: {
            Primary: {
                U_M98B: Weapons.U_M98B,
            },
            Secondary: {
                U_M9: Weapons.U_M9,
                U_Taurus44: Weapons.U_Taurus44,
            },
            Tactical: {
                U_C4: Weapons.U_C4,
                U_Medkit: Weapons.U_Medkit,
            },
            Lethal: {
                U_M67: Weapons.U_M67,
            },
            defaultPrimary: Weapons.U_M98B.Key,
            defaultSecondary: Weapons.U_Taurus44.Key,
            defaultTactical: Weapons.U_Medkit.Key,
            defaultLethal: Weapons.U_M67.Key,
        },
    },
];