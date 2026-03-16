/**
 * EVALUACION.JS - PORTAL JAVA BÁSICO
 * ====================================
 * Componente de evaluación del curso.
 *
 * Comportamiento de aleatoriedad:
 *   - El ORDEN de las preguntas cambia en cada intento.
 *   - Las letras A, B, C, D se mantienen en ese orden alfabético,
 *     pero el CONTENIDO asignado a cada letra varía aleatoriamente.
 *
 * Feedback:
 *   - Durante el quiz NO se muestra si la respuesta es correcta/incorrecta.
 *   - Solo al final (pantalla de resultados) se revela qué estuvo bien y qué no.
 *
 * Persistencia: historial de intentos en localStorage.
 * Aprobación: 80% = 24/30 puntos.
 */

const Evaluacion = {

    // Estado interno del quiz en curso
    _state: {
        preguntas: [],         // Preguntas en orden aleatorio, con opciones asignadas a letras A-D
        indiceActual: 0,       // Pregunta actual (0-based)
        respuestas: {},        // { preguntaId: 'a'|'b'|'c'|'d' }  ← letra elegida
        puntajeObtenido: 0,
        iniciado: false,
        finalizado: false
    },

    // Clave localStorage
    STORAGE_KEY: 'java_basico_evaluacion_historial',

    // Letras en orden fijo
    LETRAS: ['a', 'b', 'c', 'd'],

    // =================== UTILIDADES ===================

    /**
     * Fisher-Yates: mezcla un array sin mutar el original.
     */
    _shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    /**
     * Prepara una pregunta: mezcla el CONTENIDO de opciones y
     * lo asigna a las letras A, B, C, D en ese orden fijo.
     * Devuelve la pregunta lista para renderizar.
     */
    _prepararPregunta(preguntaOriginal) {
        const opcionesmezcladas = this._shuffle(preguntaOriginal.opciones);
        const letras = this.LETRAS;

        // Asignamos letras A-B-C-D al contenido mezclado
        const opciones = opcionesmezcladas.map((op, i) => ({
            letra: letras[i],
            texto: op.texto,
            esCorrecta: op.esCorrecta,
            explicacion: op.explicacion
        }));

        // Identificar qué letra quedó como correcta
        const letraCorrecta = opciones.find(o => o.esCorrecta).letra;

        return {
            ...preguntaOriginal,
            opciones,
            letraCorrecta
        };
    },

    // =================== PERSISTENCIA ===================

    _getHistorial() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            return raw ? JSON.parse(raw) : { intentos: 0, ultimoPuntaje: null, ultimaFecha: null, mejorPuntaje: null };
        } catch (e) {
            return { intentos: 0, ultimoPuntaje: null, ultimaFecha: null, mejorPuntaje: null };
        }
    },

    _guardarResultado(puntaje) {
        const h = this._getHistorial();
        h.intentos = (h.intentos || 0) + 1;
        h.ultimoPuntaje = puntaje;
        h.ultimaFecha = new Date().toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });
        h.mejorPuntaje = h.mejorPuntaje !== null ? Math.max(h.mejorPuntaje, puntaje) : puntaje;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(h));
    },

    // =================== PANTALLA DE INICIO ===================

    render() {
        const container = document.getElementById('evaluacion-container');
        if (!container) return;

        const historial = this._getHistorial();
        const total = EVALUACION_DATA.puntajeTotal;
        const aprobacion = EVALUACION_DATA.puntajeAprobacion;
        const numPreguntas = EVALUACION_DATA.preguntas.length;

        let historialHTML = '';
        if (historial.intentos > 0) {
            const pctUltimo = Math.round((historial.ultimoPuntaje / total) * 100);
            const pctMejor = Math.round((historial.mejorPuntaje / total) * 100);
            const aprobadoUltimo = historial.ultimoPuntaje >= aprobacion;
            const colorUltimo = aprobadoUltimo ? 'var(--success, #10b981)' : 'var(--danger, #ef4444)';
            const textoUltimo = aprobadoUltimo ? '✅ Aprobado' : '❌ No aprobado';

            historialHTML = `
                <div class="eval-historial-card">
                    <h4><i class="fas fa-history"></i> Tu historial de intentos</h4>
                    <div class="eval-historial-grid">
                        <div class="eval-hist-item">
                            <span class="eval-hist-label"><i class="fas fa-redo"></i> Intentos realizados</span>
                            <span class="eval-hist-value">${historial.intentos}</span>
                        </div>
                        <div class="eval-hist-item">
                            <span class="eval-hist-label"><i class="fas fa-clock"></i> Último intento</span>
                            <span class="eval-hist-value">${historial.ultimaFecha}</span>
                        </div>
                        <div class="eval-hist-item">
                            <span class="eval-hist-label"><i class="fas fa-chart-bar"></i> Último puntaje</span>
                            <span class="eval-hist-value" style="color:${colorUltimo}">
                                ${historial.ultimoPuntaje}/${total} pts (${pctUltimo}%) — ${textoUltimo}
                            </span>
                        </div>
                        <div class="eval-hist-item">
                            <span class="eval-hist-label"><i class="fas fa-trophy"></i> Mejor puntaje</span>
                            <span class="eval-hist-value" style="color:var(--primary)">
                                ${historial.mejorPuntaje}/${total} pts (${pctMejor}%)
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-inicio">
                <div class="eval-hero-icon"><i class="fas fa-clipboard-check"></i></div>
                <h2 class="eval-titulo">Evaluación Final: Java Básico</h2>
                <p class="eval-subtitulo">Demuestra lo que aprendiste durante el curso</p>

                <div class="eval-info-grid">
                    <div class="eval-info-card">
                        <i class="fas fa-question-circle"></i>
                        <div><strong>${numPreguntas}</strong><span>Preguntas</span></div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-star"></i>
                        <div><strong>${total} pts</strong><span>Puntaje total</span></div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-check-circle"></i>
                        <div><strong>${aprobacion} pts</strong><span>Para aprobar (80%)</span></div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-random"></i>
                        <div><strong>Aleatorio</strong><span>Preguntas y contenido</span></div>
                    </div>
                </div>

                <div class="eval-descripcion">
                    <p>
                        <i class="fas fa-info-circle"></i>
                        Esta evaluación consta de <strong>${numPreguntas} preguntas</strong> sobre los temas del curso.
                        Necesitas obtener al menos <strong>${aprobacion} de ${total} puntos (80%)</strong> para aprobar
                        y acceder al siguiente nivel: <strong>Java Spring Boot</strong>.
                    </p>
                    <p>
                        <i class="fas fa-shuffle"></i>
                        Cada intento mezcla el orden de las preguntas y el contenido asignado a las alternativas
                        A, B, C y D — resultados diferentes cada vez.
                    </p>
                    <p>
                        <i class="fas fa-eye-slash"></i>
                        Las respuestas correctas e incorrectas <strong>solo se revelan al finalizar</strong> la evaluación.
                    </p>
                </div>

                ${historialHTML}

                <button class="eval-btn-comenzar" onclick="Evaluacion.comenzar()">
                    <i class="fas fa-play-circle"></i>
                    ${historial.intentos > 0 ? 'Intentar de nuevo' : 'Comenzar evaluación'}
                </button>
            </div>
        `;
    },

    // =================== INICIO DEL QUIZ ===================

    comenzar() {
        // Mezclar el ORDEN de las preguntas
        const preguntasMezcladas = this._shuffle(EVALUACION_DATA.preguntas);

        // Para cada pregunta, mezclar el CONTENIDO de las opciones y asignar letras A-D
        this._state.preguntas = preguntasMezcladas.map(p => this._prepararPregunta(p));
        this._state.indiceActual = 0;
        this._state.respuestas = {};
        this._state.puntajeObtenido = 0;
        this._state.iniciado = true;
        this._state.finalizado = false;

        this._renderPregunta();
    },

    // =================== PANTALLA DE PREGUNTA ===================

    _renderPregunta() {
        const container = document.getElementById('evaluacion-container');
        if (!container) return;

        const { preguntas, indiceActual } = this._state;
        const pregunta = preguntas[indiceActual];
        const total = preguntas.length;
        const progreso = Math.round((indiceActual / total) * 100);

        const nivelesLabel = { facil: '🟢 Fácil', medio: '🟡 Medio', dificil: '🔴 Difícil' };

        // Verificar si ya respondió esta pregunta (por si navega hacia atrás en el futuro)
        const respuestaActual = this._state.respuestas[pregunta.id] || null;

        const opcionesHTML = pregunta.opciones.map(op => {
            const estaSeleccionada = respuestaActual === op.letra;
            return `
                <button class="eval-opcion ${estaSeleccionada ? 'seleccionada' : ''}"
                        id="opcion-${op.letra}"
                        onclick="Evaluacion._seleccionarOpcion(${pregunta.id}, '${op.letra}', this)"
                        ${respuestaActual ? 'disabled' : ''}>
                    <span class="eval-opcion-letra">${op.letra.toUpperCase()}</span>
                    <span class="eval-opcion-texto">${op.texto}</span>
                </button>
            `;
        }).join('');

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-quiz">

                <div class="eval-quiz-header">
                    <div class="eval-progreso-info">
                        <span class="eval-pregunta-num">Pregunta ${indiceActual + 1} de ${total}</span>
                        <span class="eval-nivel-badge eval-nivel-${pregunta.nivel}">
                            ${nivelesLabel[pregunta.nivel] || ''} · ${pregunta.puntos} ${pregunta.puntos === 1 ? 'punto' : 'puntos'}
                        </span>
                    </div>
                    <div class="eval-barra-progreso">
                        <div class="eval-barra-fill" style="width: ${progreso}%"></div>
                    </div>
                </div>

                <div class="eval-pregunta-card">
                    <p class="eval-pregunta-texto">${pregunta.pregunta}</p>
                </div>

                <div class="eval-opciones" id="eval-opciones-container">
                    ${opcionesHTML}
                </div>

                <div class="eval-quiz-footer" id="eval-footer" style="display:${respuestaActual ? 'flex' : 'none'}">
                    <button class="eval-btn-siguiente" onclick="Evaluacion._siguiente()">
                        ${indiceActual + 1 < total
                ? 'Siguiente pregunta <i class="fas fa-arrow-right"></i>'
                : 'Ver resultados <i class="fas fa-flag-checkered"></i>'}
                    </button>
                </div>
            </div>
        `;
    },

    // =================== SELECCIÓN DE OPCIÓN ===================

    _seleccionarOpcion(preguntaId, letraElegida, btnElement) {
        // Ya respondió esta pregunta → ignorar
        if (this._state.respuestas[preguntaId]) return;

        // Guardar respuesta
        this._state.respuestas[preguntaId] = letraElegida;

        // Marcar visualmente la opción seleccionada (SIN revelar correcta/incorrecta)
        document.querySelectorAll('.eval-opcion').forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('seleccionada');
        });
        btnElement.classList.add('seleccionada');

        // Mostrar botón siguiente
        const footer = document.getElementById('eval-footer');
        if (footer) footer.style.display = 'flex';
    },

    // =================== AVANCE ===================

    _siguiente() {
        this._state.indiceActual++;
        if (this._state.indiceActual < this._state.preguntas.length) {
            this._renderPregunta();
        } else {
            // Calcular puntaje TOTAL ahora (feedback diferido)
            let puntaje = 0;
            this._state.preguntas.forEach(p => {
                const respUsuario = this._state.respuestas[p.id];
                if (respUsuario === p.letraCorrecta) {
                    puntaje += p.puntos;
                }
            });
            this._state.puntajeObtenido = puntaje;
            this._state.finalizado = true;
            this._guardarResultado(puntaje);
            this._renderResultados();
        }
    },

    // =================== PANTALLA DE RESULTADOS ===================

    _renderResultados() {
        const container = document.getElementById('evaluacion-container');
        if (!container) return;

        const { puntajeObtenido, preguntas, respuestas } = this._state;
        const total = EVALUACION_DATA.puntajeTotal;
        const aprobacion = EVALUACION_DATA.puntajeAprobacion;
        const porcentaje = Math.round((puntajeObtenido / total) * 100);
        const aprobado = puntajeObtenido >= aprobacion;

        const aciertos = preguntas.filter(p => respuestas[p.id] === p.letraCorrecta).length;

        // ---- Revisión detallada por pregunta ----
        const revisionHTML = preguntas.map((pregunta, idx) => {
            const respUsuario = respuestas[pregunta.id];
            const esCorrecta = respUsuario === pregunta.letraCorrecta;
            const opElegida = pregunta.opciones.find(o => o.letra === respUsuario);
            const opCorrecta = pregunta.opciones.find(o => o.esCorrecta);

            // Explicación completa, siguiendo el formato del archivo MD
            // ✅ X) es CORRECTA porque ...
            // ❌ X) es FALSA porque ...
            const explicacionHTML = pregunta.opciones.map(op => {
                const icono = op.esCorrecta ? '✅' : '❌';
                const estado = op.esCorrecta ? 'es CORRECTA' : 'es FALSA';
                return `
                    <div class="eval-exp-item ${op.esCorrecta ? 'exp-correcta' : 'exp-incorrecta'}">
                        <span class="eval-exp-icon">${icono}</span>
                        <div>
                            <strong>${op.letra}) ${estado}</strong> porque ${op.explicacion}
                        </div>
                    </div>
                `;
            }).join('');

            return `
                <div class="eval-revision-card ${esCorrecta ? 'revision-ok' : 'revision-fail'}">
                    <div class="eval-revision-header">
                        <span class="eval-rev-num">Pregunta ${idx + 1}</span>
                        <span class="eval-rev-estado ${esCorrecta ? 'estado-ok' : 'estado-fail'}">
                            ${esCorrecta
                    ? `<i class="fas fa-check"></i> Correcta (+${pregunta.puntos} pts)`
                    : `<i class="fas fa-times"></i> Incorrecta (0 pts)`}
                        </span>
                    </div>

                    <p class="eval-rev-pregunta">${pregunta.pregunta}</p>

                    <div class="eval-rev-respuestas">
                        ${respUsuario
                    ? `<div class="eval-rev-elegida ${esCorrecta ? '' : 'elegida-mal'}">
                                <i class="fas fa-user"></i>
                                Tu respuesta: <strong>${respUsuario.toUpperCase()}) ${opElegida ? opElegida.texto : '—'}</strong>
                               </div>`
                    : '<div class="eval-rev-elegida elegida-mal"><i class="fas fa-minus-circle"></i> Sin respuesta</div>'}
                        ${!esCorrecta
                    ? `<div class="eval-rev-correcta">
                                <i class="fas fa-check-circle"></i>
                                Respuesta correcta: <strong>${pregunta.letraCorrecta.toUpperCase()}) ${opCorrecta ? opCorrecta.texto : ''}</strong>
                               </div>`
                    : ''}
                    </div>

                    <details class="eval-explicacion-detalle">
                        <summary><i class="fas fa-lightbulb"></i> Ver explicación completa</summary>
                        <div class="eval-explicacion-contenido">
                            <p class="eval-exp-titulo"><strong>EXPLICACIÓN:</strong></p>
                            ${explicacionHTML}
                        </div>
                    </details>
                </div>
            `;
        }).join('');

        // ---- Hero de resultado ----
        const dashOffset = 2 * Math.PI * 54 * (1 - porcentaje / 100);

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-resultado">

                <div class="eval-resultado-hero ${aprobado ? 'aprobado' : 'reprobado'}">
                    <div class="eval-resultado-icon">
                        <i class="fas ${aprobado ? 'fa-trophy' : 'fa-redo'}"></i>
                    </div>
                    <h2>${aprobado ? '¡Felicitaciones, aprobaste!' : 'Sigue practicando'}</h2>
                    <p class="eval-resultado-mensaje">
                        ${aprobado
                ? '¡Excelente trabajo! Has demostrado dominar los fundamentos de Java Básico. ¡Estás listo para el curso de Java Spring Boot!'
                : `Obtuviste ${puntajeObtenido} de ${total} puntos. Necesitas al menos ${aprobacion} puntos (80%) para aprobar. ¡Repasa el curso y vuelve a intentarlo!`}
                    </p>

                    <div class="eval-puntaje-display">
                        <div class="eval-puntaje-circulo">
                            <svg viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="10"/>
                                <circle cx="60" cy="60" r="54" fill="none" stroke="white" stroke-width="10"
                                    stroke-dasharray="${(2 * Math.PI * 54).toFixed(2)}"
                                    stroke-dashoffset="${dashOffset.toFixed(2)}"
                                    stroke-linecap="round"
                                    transform="rotate(-90 60 60)"/>
                            </svg>
                            <div class="eval-puntaje-texto">
                                <span class="eval-puntaje-num">${porcentaje}%</span>
                                <span class="eval-puntaje-sub">${puntajeObtenido}/${total} pts</span>
                            </div>
                        </div>
                        <div class="eval-puntaje-stats">
                            <div class="eval-stat"><i class="fas fa-check"></i><span><strong>${aciertos}</strong> correctas</span></div>
                            <div class="eval-stat"><i class="fas fa-times"></i><span><strong>${preguntas.length - aciertos}</strong> incorrectas</span></div>
                        </div>
                    </div>

                    ${aprobado ? `
                        <div class="eval-next-level">
                            <i class="fas fa-rocket"></i>
                            <span>¡Siguiente paso: <strong>Java Spring Boot</strong>!</span>
                        </div>` : ''}
                </div>

                <div class="eval-acciones">
                    <button class="eval-btn-accion secundario" onclick="Evaluacion.render()">
                        <i class="fas fa-home"></i> Volver al inicio
                    </button>
                    <button class="eval-btn-accion primario" onclick="Evaluacion.comenzar()">
                        <i class="fas fa-redo"></i> Intentar de nuevo
                    </button>
                </div>

                <div class="eval-revision-section">
                    <h3 class="eval-revision-titulo">
                        <i class="fas fa-list-check"></i> Revisión completa de respuestas
                    </h3>
                    <p class="eval-revision-desc">
                        Revisa cada pregunta y despliega la explicación para entender por qué cada alternativa es correcta o incorrecta.
                    </p>
                    <div class="eval-revision-lista">
                        ${revisionHTML}
                    </div>
                </div>

            </div>
        `;
    }
};
