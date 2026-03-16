/**
 * DATOS DE GOOGLE DRIVE - PORTAL JAVA BÁSICO
 * Videos organizados por sección
 */

const DRIVE_DATA = {
    seccion1: {
        nombre: "Descarga e Instalación de recursos",
        videos: [
            { numero: 1, titulo: "Intro Java", driveId: "1K6KbgCSBFYj_q1BC1tq3FNo7e2pHErUj" },
            {
                numero: 2,
                titulo: "Descarga e Instalación del JDK",
                driveId: "1HlwaQx4wWwDSY9cehN7K9U9TOSs_0bwn",
                materiales: [
                    {
                        nombre: "01 OpenJDK11U-jdk_x64_windows_hotspot_11.0.16.1_1.msi",
                        driveId: "1imsDJwnk78hpY6eFgw3f5F9ku1ODbEtb",
                        tipo: "application/x-msi"
                    }
                ]
            },
            {
                numero: 3,
                titulo: "Descarga e Instalación del IDE Apache NetBeans",
                driveId: "10BIx1tI3unQDBqKm5hGkQO71aaFAO3bv",
                materiales: [
                    {
                        nombre: "01 Apache-NetBeans-15-bin-windows-x64.exe",
                        driveId: "1dRwXBpQZVZZ3_5Qypteq278Nu-IQUyDE",
                        tipo: "application/x-dosexec"
                    }
                ]
            },
            { numero: 4, titulo: "Temas disponibles en IDE Apache NetBeans", driveId: "1I_Iz8MGO1M82NOrjGAuUtpwFW9-wq1ni" }
        ]
    },
    seccion2: {
        nombre: "Definición de Proyecto",
        videos: [
            { numero: 5, titulo: "Clásico Hola Mundo", driveId: "1Wdqh-BaeH6eLRBHBJD9WYkjZ8VWFg-sK" },
            { numero: 6, titulo: "Definir Comentarios", driveId: "1eao2aBX-B10lOoELzR_ubnNjj0ZdUBze" },
            { numero: 7, titulo: "Imprimir en Pantalla", driveId: "1FY52f7FsUSsv35y37CvZxxvEDm_j6AKQ" },
            { numero: 8, titulo: "Eliminar Proyecto", driveId: "15NjE1ZjwIY5bo_bFfIuadgZMCiJLewgw" },
            { numero: 9, titulo: "Crear Java Class", driveId: "1V_AHQSdUM5hz9xRkX4hbWLQFemXM_oWU" }
        ]
    },
    seccion3: {
        nombre: "Variables",
        videos: [
            { numero: 10, titulo: "Variables y Tipos de datos", driveId: "18wjp4G3xPsC8wnCPk7e8FepBYTLOS9CC" },
            { numero: 11, titulo: "Variables y Tipos de datos - parte 2", driveId: "1MhjYLvhN2YIfo5URFFgkKFioclEuqNeR" }
        ]
    },
    seccion4: {
        nombre: "Operadores",
        videos: [
            { numero: 12, titulo: "Operadores Aritméticos", driveId: "1Cq3VeWg0QC8xcoew67dONRV2mIEH0MPl" },
            { numero: 13, titulo: "Operadores de Comparación", driveId: "1niOCvkciDhv3CqErV2C9Qxmwz_k4bn5g" },
            { numero: 14, titulo: "Operadores Lógicos", driveId: "1m2fa6ugZQaiN0liKMB1W3BayeMqdrIEH" },
            { numero: 15, titulo: "Operadores de Incremento y Decremento", driveId: "1UA5kpzG_nxtVM75bErt5V2TUimYP1KHF" },
            { numero: 16, titulo: "Operador Condicional", driveId: "1NmgN_0BCImyDJPAXyzeCTulMUau4c8ya" },
            { numero: 17, titulo: "Concatenación", driveId: "1RCa-orA0Pz1IXlz2gN3eZrO8PdzK_6wS" }
        ]
    },
    seccion5: {
        nombre: "Entrada de datos",
        videos: [
            { numero: 18, titulo: "Entrada de datos por teclado", driveId: "1rwJm4yzKGzIKm4G91YGMp8JrbEg2N_X3" },
            { numero: 19, titulo: "Entrada de datos por teclado - parte 2", driveId: "1MUvtto9ZSTYbJnNAicAmU6nF4El3fv9e" }
        ]
    },
    seccion6: {
        nombre: "Personalizar el IDE NetBeans",
        videos: [
            {
                numero: 20,
                titulo: "Personalizar el IDE Apache NetBeans - Dracula Theme",
                driveId: "19wxTBHw5jnG87qLk0hip0ZB9G5YIQjic",
                materiales: [
                    {
                        nombre: "19 dracula-theme-for-netbeans-v0.1.1.zip",
                        driveId: "1CXbOOvVa4oMpWOlpkJYhqO0ghnQCXszv",
                        tipo: "application/zip"
                    }
                ]
            }
        ]
    },
    seccion7: {
        nombre: "Conversión de tipos de datos",
        videos: [
            { numero: 21, titulo: "Conversión de tipos de datos - parte 1", driveId: "1XVJzMmFNvsrol4CuH_69LcIJinpxJzLk" },
            { numero: 22, titulo: "Conversión de tipos de datos - parte 2", driveId: "1DUKp7I4EbE97sZ_L03akAW0R0-a7iiNu" },
            { numero: 23, titulo: "Conversión de tipos de datos - parte 3", driveId: "1RzcHxy27M1m06x2H_SUGQNpeWV-DsaxT" },
            { numero: 24, titulo: "Conversión de tipos de datos - parte 4", driveId: "1L_o-mp04CwWiSIm1pCBpG90ilivzEBUn" }
        ]
    },
    seccion8: {
        nombre: "Estructura Condicional IF",
        videos: [
            { numero: 25, titulo: "Estructura Condicional IF Else", driveId: "1LfxMHWTq_sm99QNNQKJqDo1GhsQTkQRx" },
            { numero: 26, titulo: "Estructura Condicional IF Else IF", driveId: "1AKb8ctdhtHcWJ0fzN__NDXTqvns862bm" }
        ]
    },
    seccion9: {
        nombre: "Estructura Condicional SWITCH",
        videos: [
            { numero: 27, titulo: "Estructura Condicional SWITCH", driveId: "1NLY1PWZoc1JU9RmO8RomDjZcAxmZdQHh" }
        ]
    },
    seccion10: {
        nombre: "Estructuras Cíclicas (Bucles)",
        videos: [
            { numero: 28, titulo: "Estructura Cíclica While", driveId: "1qOUBHuMTTMbWJLSX0HAxdmJoOBq8JYni" },
            { numero: 29, titulo: "Estructura Cíclica Do While", driveId: "1UnBbRlzY2D39Nx0w9ix_c2URLs-dv6Li" },
            { numero: 30, titulo: "Estructura Cíclica For", driveId: "18G7ETEn4eSwKeqyusU95NKzLSYo7MvTe" }
        ]
    },
    seccion11: {
        nombre: "Vectores y Matrices",
        videos: [
            { numero: 31, titulo: "Vectores", driveId: "11MIPxnIEajnLUPOGhhdscmqFr0_CFJIN" },
            { numero: 32, titulo: "Vectores - parte 02", driveId: "1yPJcBkHFG_yqeidiBIY59guHxb-qXCix" },
            { numero: 33, titulo: "Matrices", driveId: "1dFr_88LF5dl15h1QpaZ0fB9_Zml9_ZSh" }
        ]
    },
    seccion12: {
        nombre: "Métodos y Clases (POO)",
        videos: [
            { numero: 34, titulo: "Métodos - parte 01", driveId: "1Vdvjscbje2kiZpjyuZPhuLmVKQFoYoJX" },
            { numero: 35, titulo: "Métodos - parte 02", driveId: "1qmr76vmcZB4r-mk7UKYNIpeJShQj2J1e" },
            { numero: 36, titulo: "Métodos - parte 03", driveId: "1oqbCP70h-FQ04ZmJWzBFpHtqIQkFaV6u" },
            { numero: 37, titulo: "Clases - parte 01", driveId: "1rCJX8dYWVw91CgNOG2JPiOLzkvKf9qKH" },
            { numero: 38, titulo: "Clases - parte 02", driveId: "1vz_fQpNyaszcfIqq59T3e63mBySyNuot" },
            {
                numero: 39,
                titulo: "Clases - parte 03 (Final del Curso)",
                driveId: "1GVMN2mLerLwb5voEDddshYhRzLnqRPVL",
                materiales: [
                    {
                        nombre: "33 - Aprendizaje_Java.zip",
                        driveId: "1zNkThWr9f1s9NHVXSwWqD9e0XCmUp_Kb",
                        tipo: "application/zip"
                    }
                ]
            }
        ]
    }
};
