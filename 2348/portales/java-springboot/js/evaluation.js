/**
 * GESSOF Academy - Módulo de Evaluación (Spring Boot)
 * Refactorizado para coincidir con el estilo del Portal Java Básico.
 */

const EvaluationManager = {
    // Estado interno del quiz
    _state: {
        preguntas: [],         // Preguntas en orden aleatorio
        indiceActual: 0,       // Pregunta actual (0-based)
        respuestas: {},        // { preguntaId: 'a'|'b'|'c'|'d' }
        puntajeObtenido: 0,
        iniciado: false,
        finalizado: false
    },

    // Clave localStorage (manteniéndola consistente con config.js si es posible)
    STORAGE_KEY: CONFIG.STORAGE_KEYS.EVALUATION_RESULTS,

    // Letras en orden fijo
    LETRAS: ['a', 'b', 'c', 'd'],

    /**
     * Inicializa el módulo de evaluación
     */
    init() {
        console.log('📝 Inicializando Módulo de Evaluación (Refactorizado)...');
        this.render();
    },

    /**
     * Mezcla un array (Fisher-Yates)
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
     * Prepara una pregunta: mezcla el CONTENIDO de las opciones y lo asigna a A-D
     */
    _prepararPregunta(q) {
        // Convertir opciones del formato de EVALUATION_DATA a un array de textos con su respuesta correcta
        const optionsArray = Object.entries(q.options).map(([key, text]) => ({
            texto: text,
            esCorrecta: key === q.correctAnswer
        }));

        const opcionesMezcladas = this._shuffle(optionsArray);
        const letras = this.LETRAS;

        const nuevasOpciones = opcionesMezcladas.map((op, i) => ({
            letra: letras[i],
            texto: op.texto,
            esCorrecta: op.esCorrecta
        }));

        const letraCorrecta = nuevasOpciones.find(o => o.esCorrecta).letra;

        return {
            ...q,
            opcionesList: nuevasOpciones, // Lista procesada para renderizar
            letraCorrecta: letraCorrecta
        };
    },

    /**
     * Obtiene el historial de intentos
     */
    _getHistorial() {
        try {
            const raw = localStorage.getItem(this.STORAGE_KEY);
            const history = raw ? JSON.parse(raw) : [];

            if (history.length === 0) return { intentos: 0, ultimoPuntaje: null, ultimaFecha: null, mejorPuntaje: null };

            const last = history[history.length - 1];
            const mejor = history.reduce((prev, current) => (prev.percent > current.percent) ? prev : current);

            return {
                intentos: history.length,
                ultimoPuntaje: last.score,
                ultimaFecha: last.date,
                mejorPuntaje: mejor.score,
                history: history
            };
        } catch (e) {
            return { intentos: 0, ultimoPuntaje: null, ultimaFecha: null, mejorPuntaje: null };
        }
    },

    /**
     * Guarda un resultado
     */
    _guardarResultado(score, percent, total) {
        const history = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
        history.push({
            date: new Date().toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
            score: score,
            total: total,
            percent: percent,
            passed: percent >= EVALUATION_DATA.passingScore
        });
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    },

    /**
     * Renderiza la pantalla inicial
     */
    render() {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const historial = this._getHistorial();
        const numPreguntas = EVALUATION_DATA.totalQuestions;
        const totalPuntos = EVALUATION_DATA ? numPreguntas : 15; // Usamos 1 punto por pregunta por defecto
        const aprobacionPercent = EVALUATION_DATA.passingScore;
        const puntosAprobar = Math.ceil((aprobacionPercent / 100) * numPreguntas);

        let historialHTML = '';
        if (historial.intentos > 0) {
            const pctUltimo = Math.round((historial.ultimoPuntaje / numPreguntas) * 100);
            const pctMejor = Math.round((historial.mejorPuntaje / numPreguntas) * 100);
            const aprobadoUltimo = pctUltimo >= aprobacionPercent;
            const colorUltimo = aprobadoUltimo ? '#10b981' : '#ef4444';
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
                                ${historial.ultimoPuntaje}/${numPreguntas} pts (${pctUltimo}%) — ${textoUltimo}
                            </span>
                        </div>
                        <div class="eval-hist-item">
                            <span class="eval-hist-label"><i class="fas fa-trophy"></i> Mejor puntaje</span>
                            <span class="eval-hist-value" style="color:var(--primary)">
                                ${historial.mejorPuntaje}/${numPreguntas} pts (${pctMejor}%)
                            </span>
                        </div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-inicio">
                <div class="eval-hero-icon"><i class="fas fa-clipboard-check"></i></div>
                <h2 class="eval-titulo">${EVALUATION_DATA.title}</h2>
                <p class="eval-subtitulo">Demuestra lo que aprendiste durante el curso</p>

                <div class="eval-info-grid">
                    <div class="eval-info-card">
                        <i class="fas fa-question-circle"></i>
                        <div><strong>${numPreguntas}</strong><span>Preguntas</span></div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-star"></i>
                        <div><strong>${numPreguntas} pts</strong><span>Puntaje total</span></div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-check-circle"></i>
                        <div><strong>${puntosAprobar} pts</strong><span>Para aprobar (${aprobacionPercent}%)</span></div>
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
                        Necesitas obtener al menos <strong>${aprobacionPercent}%</strong> para aprobar
                        y acceder al siguiente nivel: <strong>Apigee X</strong>.
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

                <button class="eval-btn-comenzar" onclick="EvaluationManager.comenzar()">
                    <i class="fas fa-play-circle"></i>
                    ${historial.intentos > 0 ? 'Intentar de nuevo' : 'Comenzar evaluación'}
                </button>
            </div>
        `;
    },

    /**
     * Comienza el quiz
     */
    comenzar() {
        const preguntasMezcladas = this._shuffle(EVALUATION_DATA.questions);
        this._state.preguntas = preguntasMezcladas.map(p => this._prepararPregunta(p));
        this._state.indiceActual = 0;
        this._state.respuestas = {};
        this._state.puntajeObtenido = 0;
        this._state.iniciado = true;
        this._state.finalizado = false;

        this._renderPregunta();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    /**
     * Renderiza una pregunta
     */
    _renderPregunta() {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const { preguntas, indiceActual } = this._state;
        const pregunta = preguntas[indiceActual];
        const total = preguntas.length;
        const progreso = Math.round((indiceActual / total) * 100);

        const respuestaActual = this._state.respuestas[pregunta.id] || null;

        const opcionesHTML = pregunta.opcionesList.map(op => {
            const estaSeleccionada = respuestaActual === op.letra;
            return `
                <button class="eval-opcion ${estaSeleccionada ? 'seleccionada' : ''}"
                        id="opcion-${op.letra}"
                        onclick="EvaluationManager._seleccionarOpcion(${pregunta.id}, '${op.letra}', this)"
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
                        <span class="eval-nivel-badge eval-nivel-medio">
                            Microservicios · 1 punto
                        </span>
                    </div>
                    <div class="eval-barra-progreso">
                        <div class="eval-barra-fill" style="width: ${progreso}%"></div>
                    </div>
                </div>

                <div class="eval-pregunta-card">
                    <p class="eval-pregunta-texto">${pregunta.text}</p>
                </div>

                <div class="eval-opciones" id="eval-opciones-container">
                    ${opcionesHTML}
                </div>

                <div class="eval-quiz-footer" id="eval-footer" style="display:${respuestaActual ? 'flex' : 'none'}">
                    <button class="eval-btn-siguiente" onclick="EvaluationManager._siguiente()">
                        ${indiceActual + 1 < total
                ? 'Siguiente pregunta <i class="fas fa-arrow-right"></i>'
                : 'Ver resultados <i class="fas fa-flag-checkered"></i>'}
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Selecciona una opción
     */
    _seleccionarOpcion(preguntaId, letraElegida, btnElement) {
        if (this._state.respuestas[preguntaId]) return;

        this._state.respuestas[preguntaId] = letraElegida;

        document.querySelectorAll('.eval-opcion').forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('seleccionada');
        });
        btnElement.classList.add('seleccionada');

        const footer = document.getElementById('eval-footer');
        if (footer) footer.style.display = 'flex';
    },

    /**
     * Avanza o finaliza
     */
    _siguiente() {
        this._state.indiceActual++;
        if (this._state.indiceActual < this._state.preguntas.length) {
            this._renderPregunta();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            let puntaje = 0;
            this._state.preguntas.forEach(p => {
                const respUsuario = this._state.respuestas[p.id];
                if (respUsuario === p.letraCorrecta) {
                    puntaje++;
                }
            });
            this._state.puntajeObtenido = puntaje;
            const percent = Math.round((puntaje / this._state.preguntas.length) * 100);
            this._state.finalizado = true;
            this._guardarResultado(puntaje, percent, this._state.preguntas.length);
            this._renderResultados();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },

    /**
     * Renderiza resultados finales
     */
    _renderResultados() {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const { puntajeObtenido, preguntas, respuestas } = this._state;
        const total = preguntas.length;
        const porcentaje = Math.round((puntajeObtenido / total) * 100);
        const aprobado = porcentaje >= EVALUATION_DATA.passingScore;

        const aciertos = puntajeObtenido;

        const revisionHTML = preguntas.map((pregunta, idx) => {
            const respUsuario = respuestas[pregunta.id];
            const esCorrecta = respUsuario === pregunta.letraCorrecta;
            const opElegida = pregunta.opcionesList.find(o => o.letra === respUsuario);
            const opCorrecta = pregunta.opcionesList.find(o => o.esCorrecta);

            // La explicación está en q.explanation, debemos formatearla si es necesario
            // Sin embargo, el portal básico regenera la explicación a partir de las opciones.
            // Pero aquí la explicación ya viene pre-formateada en EVALUATION_DATA.
            // Usaremos la explicación original para mantener la fidelidad al MD.

            return `
                <div class="eval-revision-card ${esCorrecta ? 'revision-ok' : 'revision-fail'}">
                    <div class="eval-revision-header">
                        <span class="eval-rev-num">Pregunta ${idx + 1}</span>
                        <span class="eval-rev-estado ${esCorrecta ? 'estado-ok' : 'estado-fail'}">
                            ${esCorrecta
                    ? `<i class="fas fa-check"></i> Correcta (+1 pto)`
                    : `<i class="fas fa-times"></i> Incorrecta (0 pts)`}
                        </span>
                    </div>

                    <p class="eval-rev-pregunta">${pregunta.text}</p>

                    <div class="eval-rev-respuestas">
                        <div class="eval-rev-elegida ${esCorrecta ? '' : 'elegida-mal'}">
                            <i class="fas fa-user"></i>
                            Tu respuesta: <strong>${respUsuario.toUpperCase()}) ${opElegida ? opElegida.texto : '—'}</strong>
                        </div>
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
                            <div class="eval-exp-formatted">
                                ${this.formatMarkdown(pregunta.explanation)}
                            </div>
                        </div>
                    </details>
                </div>
            `;
        }).join('');

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
                ? '¡Excelente trabajo! Has demostrado dominar los fundamentos de Microservicios con Spring Boot. ¡Estás listo para el siguiente nivel!'
                : `Obtuviste ${puntajeObtenido} de ${total} puntos (${porcentaje}%). Necesitas al menos ${EVALUATION_DATA.passingScore}% para aprobar. ¡Repasa el curso y vuelve a intentarlo!`}
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
                            <div class="eval-stat"><i class="fas fa-times"></i><span><strong>${total - aciertos}</strong> incorrectas</span></div>
                        </div>
                    </div>
                </div>

                <div class="eval-acciones">
                    <button class="eval-btn-accion secundario" onclick="EvaluationManager.render()">
                        <i class="fas fa-home"></i> Volver al inicio
                    </button>
                    <button class="eval-btn-accion primario" onclick="EvaluationManager.comenzar()">
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
    },

    /**
     * Formateador simple de markdown
     */
    formatMarkdown(text) {
        if (!text) return '';
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/✅/g, '<span class="emoji-status">✅</span>')
            .replace(/❌/g, '<span class="emoji-status">❌</span>')
            .replace(/\n/g, '<br>');
    }
};

// Integración con el sistema de navegación
document.addEventListener('DOMContentLoaded', () => {
    const evalTab = document.querySelector('button[onclick*="section-evaluacion"]');
    if (evalTab) {
        const originalOnClick = evalTab.onclick;
        evalTab.onclick = (e) => {
            originalOnClick(e);
            EvaluationManager.init();
        };
    }
});
