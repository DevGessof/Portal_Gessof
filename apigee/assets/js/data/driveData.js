/**
 * DATOS DE GOOGLE DRIVE - CURSO APIGEE X
 * ========================================
 * Migrado desde Drive.csv
 * Estructura: 6 secciones con videos y materiales de apoyo
 */

const DRIVE_DATA = {
  seccion1: {
    nombre: "Introducción y aprovisionamiento de Apigee X",
    videos: [
      {
        numero: 1,
        titulo: "Introducción",
        archivo: "1. Introducción.mp4",
        idDrive: "1Ih5VB3GALGDufqR_FkRcWQKA1M5uP87U",
        tipo: "video/mp4",
        srt: "1lVcLPwZuBTJEuQfxe7QIz26RcgfVWKWs"
      },
      {
        numero: 2,
        titulo: "Creación cuenta Gmail (Saltar caso tener)",
        archivo: "2. Creación cuenta Gmail(Saltar caso tener ).mp4",
        idDrive: "18tQEZbNtY2oAWhfd32jXU7vp5yGMEPct",
        tipo: "video/mp4",
        srt: "1Yhb_hYki2QPWxxEoqO9qkVS-tY3LZ7BU"
      },
      {
        numero: 3,
        titulo: "Creación de cuenta en Google Cloud Platform",
        archivo: "3. Creación de cuenta en Google Cloud Platform.mp4",
        idDrive: "1BCRLMiAQoTM4sNgd_IH6HIQZyXpRjEOX",
        tipo: "video/mp4",
        srt: "1IwLI1AU4efjfjM5m_7AlF3bvDOo7s5BB"
      },
      {
        numero: 4,
        titulo: "Descripción general de la arquitectura de Apigee X",
        archivo: "4. Descripción general de la arquitectura de Apigee X.mp4",
        idDrive: "1mbamFKI4MhNeNwYnQFF_EAT5se4wkl5h",
        tipo: "video/mp4",
        srt: "1d4njuLROPpWUix5RXYsYoPcHS-Gior4O"
      },
      {
        numero: 5,
        titulo: "Aprovisionando tu Organización Apigee X Google Cloud",
        archivo: "5. Aprovisionando tu Organización Apigee X Google Cloud.mp4",
        idDrive: "1SA1GT4QyGUOnO7gb3ky7IzUCkLMBRZ8h",
        tipo: "video/mp4",
        srt: "1FIKa5nxtwDZqRYBBDvqcsgilFSDPDuDx"
      },
      {
        numero: 6,
        titulo: "Eliminar Apigee X de prueba",
        archivo: "6. Eliminar Apigee X de prueba.mp4",
        idDrive: "1NbL7qEcE_fryfM-zs8uWzyXrKrkqBnud",
        tipo: "video/mp4",
        srt: "152WkcxWOeVLWsEGlARprcQIUt1fzjL86"
      }
    ]
  },

  seccion2: {
    nombre: "Creación y Gestión de Proxies de API",
    videos: [
      {
        numero: 1,
        titulo: "Exploremos la UI de Apigee X",
        archivo: "1. Exploremos la UI de Apigee X.mp4",
        idDrive: "1G9SdMJR6tbTcgwwom6xRldSDNIMb4IgG",
        tipo: "video/mp4",
        srt: "1RQZza_QBGffEZvmwUVQEFMvgjhNHdo9V"
      },
      {
        numero: 2,
        titulo: "Que es un API proxy",
        archivo: "2. Que es un API proxy.mp4",
        idDrive: "1JroHZyI2xjJq4rRfTpl-I_O1-RM_TshE",
        tipo: "video/mp4",
        srt: "1nmEuVItF69FXxHDgbjz3eP0Uqnqwsc_y"
      },
      {
        numero: 3,
        titulo: "Creando nuestro primer API proxy",
        archivo: "3. Creando nuestro primer API proxy.mp4",
        idDrive: "1fC0EVLegqm3YiutpXhchgX-WA1Efsn_k",
        tipo: "video/mp4",
        srt: "1krpQMewMplnY_iTSOuD7oU8GpViTikxS"
      },
      {
        numero: 4,
        titulo: "Conociendo el Apigee API",
        archivo: "4. Conociendo el Apigee API.mp4",
        idDrive: "1xHPYc5PT1D7cB72C0A0OndN_jAzibDPQ",
        tipo: "video/mp4",
        srt: "1lb3GZkjnW4hdz9QuKuYytV0h9gN9AnuP"
      },
      {
        numero: 5,
        titulo: "Organizaciones de Apigee X",
        archivo: "5. Organizaciones de Apigee X.mp4",
        idDrive: "1oNx9EGpKS7F62p2Yptal1TI4nLziHR8Z",
        tipo: "video/mp4",
        srt: "1oqHufjw3Cpwf05AthrYoDxfuP8sQ5q8O"
      },
      {
        numero: 6,
        titulo: "Generando un access token para consumir el Apigee API",
        archivo: "6. Generando un access token para consumir el Apigee API.mp4",
        idDrive: "1Gx35tq5FZs5eItrNNEmaLmN_NwP677ZH",
        tipo: "video/mp4",
        srt: "1xTgWJNN2o-d4QtAY1tshF2lWtpFDsden"
      },
      {
        numero: 7,
        titulo: "Configuración de environments y environment groups",
        archivo: "7. Configuración de environments y environment groups.mp4",
        idDrive: "1-G28-wDfEcRKYsA-_TLlmx6BDyEtBSoL",
        tipo: "video/mp4",
        srt: "1eXvl5BGTJF2LoYZR1cBZXCnqsCsDQ4mv"
      },
      {
        numero: 8,
        titulo: "Load balancing y environments",
        archivo: "8. Load balancing y environments.mp4",
        idDrive: "10RQWaV4d4K8so0l6VoWTT6wiv5pczYfd",
        tipo: "video/mp4",
        srt: "1LkOMuO9HzdyP0EKACe4YDxkii-6y6Q7V"
      },
      {
        numero: 9,
        titulo: "Configurando frontend para ambiente productivo",
        archivo: "9. Configurando frontend para ambiente productivo.mp4",
        idDrive: "1FSZzIUnaQAA1_xrIEYqhGQOcnN4P94jf",
        tipo: "video/mp4",
        srt: "1zYdeeACzLuDz_K3GoKkzp7zD-O1wTyoR"
      },
      {
        numero: 10,
        titulo: "Solventando limite de ambientes en org trial",
        archivo: "10. Solventando limite de ambientes en org trial.mp4",
        idDrive: "1eVTWpIUCdRIs-uyECwd3zB3LuiPPzFwu",
        tipo: "video/mp4",
        srt: "15JQ7PUGKAnEo0XbTyDUabCFnWgu0aiV4"
      },
      {
        numero: 11,
        titulo: "Apigee flows",
        archivo: "11. Apigee flows.mp4",
        idDrive: "1EAIYtmUrey3CLhVdw5wVENgm-Yay2H9A",
        tipo: "video/mp4",
        srt: "1Hhf-my2h5kyhMum4_Es9bBK3MRdnbiPK"
      },
      {
        numero: 12,
        titulo: "Políticas y sus tipos",
        archivo: "12. Políticas y sus tipos.mp4",
        idDrive: "1CCI5tauB11pTc2hG3rIBQfUMRZPRW3Zk",
        tipo: "video/mp4",
        srt: "1rTzYbFyNLmPaWEvrBmUpKYZJaVIJ0CgF"
      },
      {
        numero: 13,
        titulo: "Agregando políticas nuestro API proxy (Extract)",
        archivo: "13. Agregando políticas nuestro API proxy(Extract.mp4",
        idDrive: "1z-f14iHBva6vASMefuOxfeNSK1SElolJ",
        tipo: "video/mp4",
        srt: "1iE2QxRWmqEW0fQvoohLSfryqvZp9doDp"
      },
      {
        numero: 14,
        titulo: "Xml to Json",
        archivo: "14. Xml to Json.mp4",
        idDrive: "1ZlTKX-LBOsnmcVKwsHT1uXKe65Cad1GL",
        tipo: "video/mp4",
        srt: "1Grh30cM2Upb6RxDDeBACJvAt_o5Vl_KK"
      },
      {
        numero: 15,
        titulo: "Service callout y Json to Xml",
        archivo: "15. Service callout y Json to Xml.mp4",
        idDrive: "1lAUWZ2INnl24c66w5ai_rKWZKB_mOMS7",
        tipo: "video/mp4",
        srt: "17-tQOQeR09RSi4zgiSnhUl83l48OCX_0"
      },
      {
        numero: 16,
        titulo: "Usuarios y roles en Apígee",
        archivo: "16. Usuarios y roles en Apígee.mp4",
        idDrive: "19RQ_-4t7bWqChNROzP8-SmO5-oucKH1V",
        tipo: "video/mp4",
        srt: "1DTIn0R-6so_HMCOcy-z8T0Qv15EysmRp"
      },
      {
        numero: 17,
        titulo: "Target servers",
        archivo: "17. Target servers.mp4",
        idDrive: "1MOsuyLZOhnbnVQ3Fyqec3WB0XL21u3LZ",
        tipo: "video/mp4",
        srt: "1ydJwkNUUg8gilDQBJOM3v9KxxBYIMmYQ",
        materiales: [
          {
            nombre: "Creación de Target Server.docx",
            idDrive: "1aRNWcxjuLdmK-zfJ4yIiNVxOiiknlxaO",
            tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }
        ]
      },
      {
        numero: 18,
        titulo: "Key value Maps",
        archivo: "18. Key value Maps.mp4",
        idDrive: "1XnCXnArmCbbEUYUNrTpeZEg2g7jg4_ZV",
        tipo: "video/mp4",
        srt: "1JFvHbN23J0vCJMynueEgFTQc4NeFkOe2"
      },
      {
        numero: 19,
        titulo: "Administración de KVMs",
        archivo: "19. Administración de KVMs.mp4",
        idDrive: "1dN3IHoul_MrEHaCMpqRHKvuRyTqlAgje",
        tipo: "video/mp4",
        srt: "1Gsmmo35CGTmPc5zJ2tVFOseDz3cpuAZC",
        materiales: [
          {
            nombre: "KVMS admin.postman_collection.json",
            idDrive: "1IC0LDp6vbAee5L8UdbJG4wb8uGdC_aRz",
            tipo: "application/json"
          }
        ]
      },
      {
        numero: 20,
        titulo: "KVM Operation policy",
        archivo: "20. KVM Operation policy.mp4",
        idDrive: "1AlAvtcI0t_aro7KJI0TBAMDyPjgKfDw7",
        tipo: "video/mp4",
        srt: "1pk8jZvXudJLJjpYQUBi17o_eZi1DqITn",
        materiales: [
          {
            nombre: "kvm-example-v1_rev4_2025_03_08.zip",
            idDrive: "1VId_Rgm5e-kKeQKBeRUy2pzDVOhr4usE",
            tipo: "application/zip"
          }
        ]
      },
      {
        numero: 21,
        titulo: "Laboratorio 1",
        archivo: "21. Laboratorio 1.html",
        idDrive: "14kya4dyewhNdqH7zdkZ3jkoRkkocDk3e",
        tipo: "text/html"
      }
    ]
  },

  // ============================================================
  // SECCIÓN ANEXA – Documentos de Implementación y Gestión
  // (Entre Sección 2 y Sección 3)
  // ============================================================
  seccionAnexa: {
    nombre: "Documentos Operacionales",
    documentos: [
      {
        id: "doc-actualizacion",
        titulo: "Documento de actualización de API",
        nombre: "Documento de actualización de API.docx",
        idDrive: "1KWP58P6N13eo8U_MW0ANAk5pFCdItdwx",
        tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        resumen: "Guía paso a paso para actualizar versiones de proxies y APIs existentes en Apigee X. Incluye procedimientos de versionamiento, consideraciones de retrocompatibilidad y flujo de aprobación recomendado para entornos productivos."
      },
      {
        id: "doc-actualizacion",
        titulo: "Documento de actualización de API",
        nombre: "Documento de actualización de API.docx",
        idDrive: "1KWP58P6N13eo8U_MW0ANAk5pFCdItdwx",
        tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        resumen: "Guía paso a paso para actualizar versiones de proxies y APIs existentes en Apigee X. Incluye procedimientos de versionamiento, consideraciones de retrocompatibilidad y flujo de aprobación recomendado para entornos productivos."
      }
    ]
  },

  seccion3: {
    nombre: "API Products, Developers y Apps",
    videos: [
      {
        numero: 1,
        titulo: "Explicando es API Product, developer App Apigee X",
        archivo: "1. Explicando es API Product, developer App Apigee X.mp4",
        idDrive: "18LXSYAbzGac3yQm4ofgLQrMoGGOEtoN8",
        tipo: "video/mp4",
        srt: "1CK2bcza_phTGaTAFnea7h5JOZluH6NcW"
      },
      {
        numero: 2,
        titulo: "Creando nuestro primer Developer en Apigee X",
        archivo: "2. Creando nuestro primer Developer en Apigee X.mp4",
        idDrive: "1iDk-VuG--ZMX0uBBOmDPZQw0kMHADBn9",
        tipo: "video/mp4",
        srt: "173mDwZ5knFpGifWrBzMUz64qwmzAR0SE",
        materiales: [
          {
            nombre: "Creación de Developer modificarlo.docx",
            idDrive: "19Islmg33mYaxwK6qSSI30T9jxFE7zrQT",
            tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }
        ]
      },
      {
        numero: 3,
        titulo: "Creando nuestro primer API Product en Apigee X",
        archivo: "3. Creando nuestro primer API Product en Apigee X.mp4",
        idDrive: "1qwzw9a_w7HFu4xeERE4MfHSu6uKFqNCT",
        tipo: "video/mp4",
        srt: "1-qIq2dZO8Oaoz37mADisDCet18jHH3UG",
        materiales: [
          {
            nombre: "Creación de Producto.docx",
            idDrive: "14ZPMD9F7pcicoJLqRa88fVrYivxNZq8k",
            tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }
        ]
      },
      {
        numero: 4,
        titulo: "Creando nuestra primera App en Apigee X",
        archivo: "4. Creando nuestra primera App en Apigee X.mp4",
        idDrive: "1GZ4rtOtqFQ9cqzZR-AP3FtswMvzld1Pn",
        tipo: "video/mp4",
        srt: "10E1X5SVdKcPyrZx3s7zPSYUToZRfzPYl",
        materiales: [
          {
            nombre: "Creación de APP modificarlo.docx",
            idDrive: "1eUEClyOgVlnZ3vkSx8iGLWU2sxuWaqHg",
            tipo: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          }
        ]
      },
      {
        numero: 5,
        titulo: "Protegiendo nuestro API proxy usando política",
        archivo: "5. Protegiendo nuestro API proxy usando política.mp4",
        idDrive: "1_L42Cvmmxb-_4EG0ZsYbOL3vSwiK4uVQ",
        tipo: "video/mp4",
        srt: "1ewAN2uaa-wSNkLyA8Hyfig0A-rk8Nl2Q"
      },
      {
        numero: 6,
        titulo: "Quota policy",
        archivo: "6. Quota policy.mp4",
        idDrive: "1FvsF7qy9-dL_yQKgPOPK_PgYa5HsglFd",
        tipo: "video/mp4",
        srt: "1R_pV5D3SwCRSNe9sgRzaLf_P7vyIpCmd"
      }
    ]
  },

  seccion4: {
    nombre: "Caso de uso seven-days-jobs-v1",
    videos: [
      {
        numero: 1,
        titulo: "Introducción",
        archivo: "1. Introducción.mp4",
        idDrive: "1WdN1JHKY_NujsViG4NgCfVliBNJDrGxh",
        tipo: "video/mp4",
        srt: "1qsUkkvkbButjf5DYT3i6FmtcXatxoPKA"
      },
      {
        numero: 2,
        titulo: "Creación de cuenta en rapidapi.com",
        archivo: "2. Creación de cuenta en rapidapi.com.mp4",
        idDrive: "1xFL95FvSXGw2CEw0RLMW_88G_s52qciG",
        tipo: "video/mp4",
        srt: "1sbydIpNWtNu0GJmQgTdcot3vchoX_WIe"
      },
      {
        numero: 3,
        titulo: "Creación de KVM y entrada para el Apikey",
        archivo: "3. Creación de KVM y entrada para el Apikey.mp4",
        idDrive: "1vTQV6Nk2HGmWM1py42AdTh5D8aOnUY_x",
        tipo: "video/mp4",
        srt: "18zTIpRbTHOEK4sPkKWfcsFDtnjuQaGUc"
      },
      {
        numero: 4,
        titulo: "Creación del proxy y preparación del request",
        archivo: "4. Creación del proxy y preparación del request.mp4",
        idDrive: "1hoshR69TI_lZTbasnZ5Ll-5cdPLcnQ67",
        tipo: "video/mp4",
        srt: "1TAcBnyRdtoh08QblHlj2csKv22mNQDsq"
      },
      {
        numero: 5,
        titulo: "Configuración del cache",
        archivo: "5. Configuración del cache.mp4",
        idDrive: "1RLUZTdBXtzsiy7J7ogsc48biIeFNtJlf",
        tipo: "video/mp4",
        srt: "1bNCDTUIYLrCzcgiH6joXcBtTC8Bwxv_S"
      },
      {
        numero: 6,
        titulo: "Personalizando la respuesta del API",
        archivo: "6. Personalizando la respuesta del API.mp4",
        idDrive: "1u2BaLvr3oFA7bVpssy_b1j0YwLGw8IcO",
        tipo: "video/mp4",
        srt: "1iKIFUssyLyX1ruNx5nPv9FjL3b-BqGkL"
      },
      {
        numero: 7,
        titulo: "Resultado del caso de uso",
        archivo: "7. Resultado del caso de uso.mp4",
        idDrive: "1DXK3K8RxIVpjI6kwPPfVC2oC9JaPI7z_",
        tipo: "video/mp4",
        srt: "1URb2X_2U-HyUrvc9hoMydwhpx-HiQAjm",
        materiales: [
          {
            nombre: "seven-days-jobs-v1_rev2_2025_03_13.zip",
            idDrive: "1iSxcwSox-XvL_z_RJz3xxB7UlIzxMCa-",
            tipo: "application/zip"
          }
        ]
      }
    ]
  },

  seccion5: {
    nombre: "Seguridad en Apigee X",
    videos: [
      {
        numero: 1,
        titulo: "Política BasicAuthentication",
        archivo: "1. Política BasicAuthentication.mp4",
        idDrive: "1ZrslD6L6BDfFMmAHUksGauaJcyz00Bpn",
        tipo: "video/mp4",
        srt: "1FfTMdFVFlyexZr7H_bBZ5xTgIlSqcIJ1"
      },
      {
        numero: 2,
        titulo: "Política JSONThreatProtection",
        archivo: "2. Política JSONThreatProtection.mp4",
        idDrive: "14AKq_XaSsrk1p9rqBYIyIDD2uYwhvSli",
        tipo: "video/mp4",
        srt: "1RAnrrGG6YNnW1zMCFbcoeEh_xJpookOI"
      },
      {
        numero: 3,
        titulo: "Política de SpikeArrest",
        archivo: "3. Política de SpikeArrest.mp4",
        idDrive: "12L0_-CWa1NmqPMknRDXvcd4yKvrkLWPB",
        tipo: "video/mp4",
        srt: "1U1VqQDIwRUAGt_hB877WS9JZPVWE0F8U"
      },
      {
        numero: 4,
        titulo: "Oauth 2.0 Client credentials flow",
        archivo: "4. Oauth 2.0 Client credentials flow.mp4",
        idDrive: "1JrMtKNEhbxvXk6SfzHtNH3XA5FEfw_Tz",
        tipo: "video/mp4",
        srt: "1Fe3HwfBLLVQTYYbcuJSNVNS3r4YEkaEt"
      },
      {
        numero: 5,
        titulo: "Oauth 2.0 Creación de proxy de Oauth",
        archivo: "5. Oauth 2.0 Creación de proxy de Oauth.mp4",
        idDrive: "18exfgdXZRpA1FZLYZrqqvHjVmQUvhM5E",
        tipo: "video/mp4",
        srt: "1hQLZn24k9gJewIPdXoEj0KhX6mXXIdlF",
        materiales: [
          {
            nombre: "oauth-v1-example_rev2_2025_03_18.zip",
            idDrive: "1fMWMZ73lK_uI1zx37ANnUpHKH5_SarJK",
            tipo: "application/zip"
          }
        ]
      },
      {
        numero: 6,
        titulo: "Verificación de Access Token",
        archivo: "6. Verificación de Access Token.mp4",
        idDrive: "1XWnXNm-JITeR9kN73OoPA85QhtdpYlOj",
        tipo: "video/mp4",
        srt: "14CGPoE2xsE_S7alnuUKVK_K52oasr8Sa"
      },
      {
        numero: 7,
        titulo: "Sharedflow de seguridad",
        archivo: "7. Sharedflow de seguridad.mp4",
        idDrive: "10TMzpJB7-uXB5zxfIQ6dPSVbuV8D4SME",
        tipo: "video/mp4",
        srt: "11IWXv9q8VmFTRo18ix2BxG9u63yVnLya"
      }
    ]
  },

  seccion6: {
    nombre: "Monitoreo y logging en Apigee X",
    videos: [
      {
        numero: 1,
        titulo: "Service account para Cloud Logging",
        archivo: "1. Service account para Cloud Logging.mp4",
        idDrive: "1TCcqUg61YedwZflbjO6tP5XGLzrP_gnY",
        tipo: "video/mp4",
        srt: "1O-pShF_6GRDQ0ppqdqgIlFsLMUOEp7Tw"
      },
      {
        numero: 2,
        titulo: "Sharedflow para logs usando Cloud Logging",
        archivo: "2. Sharedflow para logs usando Cloud Logging.mp4",
        idDrive: "15rzjf8se78jLzlvSmkh3u-hux7UUT63Q",
        tipo: "video/mp4",
        srt: "1NZ-OwZ_owndwo5puUTMXosb4ef6SldO2",
        materiales: [
          {
            nombre: "sf-logging_rev5_2025_03_18.zip",
            idDrive: "19ZpYqCrjG0rPTD-i1Us6utS0yPyCL9fO",
            tipo: "application/zip"
          }
        ]
      },
      {
        numero: 3,
        titulo: "Flowhooks",
        archivo: "3. Flowhooks.mp4",
        idDrive: "1B9jYx0gCMO91q8jYs8yyorbRH6LNblEU",
        tipo: "video/mp4",
        srt: "1A1SSWAk-lXy2NNcnOn5PHFX6goQCHoii"
      },
      {
        numero: 4,
        titulo: "Fin del curso",
        archivo: "4. Fin del curso.mp4",
        idDrive: "1xEaO7Cor7bHyMIfyVDKdNl-_W0vneZIb",
        tipo: "video/mp4",
        srt: "1dyOzMYQYvrnCTTGFXgfE03sU5YjqvZVf"
      }
    ]
  }
};

// Total de videos en el curso (excluye secciones sin videos, como seccionAnexa)
const TOTAL_VIDEOS = Object.values(DRIVE_DATA).reduce((total, seccion) => {
  return total + (seccion.videos ? seccion.videos.length : 0);
}, 0);

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DRIVE_DATA, TOTAL_VIDEOS };
}
