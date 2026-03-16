/**
 * GESSOF Academy - Evaluation Module
 * Portal: Angular de Cero a Experto
 * 
 * Sistema de quiz con 15 preguntas, aleatorización,
 * historial de intentos y revisión de respuestas incorrectas.
 * Aprobación: 12/15 (80%)
 */

const Evaluation = {
    state: null,

    init() {
        this.renderStart();
    },

    /**
     * Carga el historial de intentos desde localStorage
     */
    loadHistory() {
        return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.EVALUATION_RESULTS) || 'null');
    },

    /**
     * Guarda el resultado actual en localStorage
     */
    saveResult(result) {
        const history = this.loadHistory() || { intentos: 0, mejorPuntaje: 0, ultimoPuntaje: 0 };
        history.intentos++;
        history.ultimoPuntaje = result.puntaje;
        history.mejorPuntaje = Math.max(history.mejorPuntaje, result.puntaje);
        localStorage.setItem(CONFIG.STORAGE_KEYS.EVALUATION_RESULTS, JSON.stringify(history));
        return history;
    },

    /**
     * Renderiza la pantalla de inicio
     */
    renderStart() {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const history = this.loadHistory();
        const historialHtml = history ? `
            <div class="eval-historial-card">
                <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.75rem;">
                    <i class="fas fa-history" style="color:var(--primary);font-size:1.2rem;"></i>
                    <strong style="color:var(--text-primary);">Tu historial</strong>
                </div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.5rem;text-align:center;">
                    <div>
                        <div style="font-size:1.5rem;font-weight:800;color:var(--primary);">${history.intentos}</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Intentos</div>
                    </div>
                    <div>
                        <div style="font-size:1.5rem;font-weight:800;color:var(--accent-green);">${history.mejorPuntaje}/${EVAL_DATA.totalPreguntas}</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Mejor puntaje</div>
                    </div>
                    <div>
                        <div style="font-size:1.5rem;font-weight:800;color:var(--text-secondary);">${history.ultimoPuntaje}/${EVAL_DATA.totalPreguntas}</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);">Último intento</div>
                    </div>
                </div>
            </div>
        ` : '';

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-inicio">
                <div class="eval-hero-icon"><i class="fab fa-angular"></i></div>
                <h2 class="eval-titulo">${EVAL_DATA.titulo}</h2>
                <p style="color:var(--text-secondary);margin-bottom:1.5rem;">${EVAL_DATA.descripcion}</p>

                <div class="eval-info-grid">
                    <div class="eval-info-card">
                        <i class="fas fa-question-circle" style="color:var(--primary);font-size:1.5rem;"></i>
                        <div>
                            <div style="font-weight:700;color:var(--text-primary);">${EVAL_DATA.totalPreguntas} Preguntas</div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">3 niveles de dificultad</div>
                        </div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-trophy" style="color:var(--accent-orange);font-size:1.5rem;"></i>
                        <div>
                            <div style="font-weight:700;color:var(--text-primary);">Aprobar: ${EVAL_DATA.puntajeAprobacion}/${EVAL_DATA.totalPreguntas}</div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">80% mínimo requerido</div>
                        </div>
                    </div>
                    <div class="eval-info-card">
                        <i class="fas fa-random" style="color:var(--accent-purple);font-size:1.5rem;"></i>
                        <div>
                            <div style="font-weight:700;color:var(--text-primary);">Aleatorizado</div>
                            <div style="font-size:0.8rem;color:var(--text-muted);">Orden diferente cada vez</div>
                        </div>
                    </div>
                </div>

                ${historialHtml}

                <button class="eval-btn-comenzar" onclick="Evaluation.start()">
                    <i class="fas fa-play"></i> Comenzar Evaluación
                </button>
            </div>
        `;
    },

    /**
     * Inicia la evaluación aleatorizando preguntas y opciones
     */
    start() {
        // Aleatorizar preguntas
        const preguntas = [...EVAL_DATA.preguntas].sort(() => Math.random() - 0.5);
        // Aleatorizar opciones de cada pregunta
        const preguntasAleatorias = preguntas.map(p => ({
            ...p,
            opciones: [...p.opciones].sort(() => Math.random() - 0.5)
        }));

        this.state = {
            preguntas: preguntasAleatorias,
            indice: 0,
            respuestas: {},
            respondidas: 0
        };

        this.renderQuestion(0);
    },

    /**
     * Renderiza la pregunta actual
     */
    renderQuestion(indice) {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const { preguntas } = this.state;
        const pregunta = preguntas[indice];
        const total = preguntas.length;
        const progreso = Math.round(((indice) / total) * 100);

        container.innerHTML = `
            <div class="eval-pantalla eval-pantalla-quiz">
                <!-- Barra de progreso -->
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
                    <span style="font-size:0.85rem;color:var(--text-muted);">Pregunta ${indice + 1} de ${total}</span>
                    <span style="font-size:0.85rem;font-weight:700;color:var(--primary);">${progreso}% completado</span>
                </div>
                <div class="eval-barra-progreso">
                    <div class="eval-barra-fill" style="width:${progreso}%;"></div>
                </div>

                <!-- Badge de nivel y sección -->
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                    <span style="font-size:0.8rem;font-weight:600;color:var(--text-muted);">${pregunta.nivel}</span>
                    <span style="font-size:0.8rem;color:var(--text-muted);">• Sección: ${pregunta.seccion}</span>
                </div>

                <!-- Pregunta -->
                <div class="eval-pregunta-card">
                    <p class="eval-pregunta-texto">${pregunta.texto}</p>
                </div>

                <!-- Opciones -->
                <div class="eval-opciones" id="opciones-container">
                    ${pregunta.opciones.map(op => `
                        <button class="eval-opcion" id="opcion-${op.letra}"
                            onclick="Evaluation.selectOption('${pregunta.id}', '${op.letra}', this)">
                            <span class="eval-opcion-letra">${op.letra}</span>
                            <span>${op.texto}</span>
                        </button>
                    `).join('')}
                </div>

                <!-- Botón siguiente (se muestra al responder) -->
                <div id="eval-nav" style="display:none;text-align:right;">
                    <div id="eval-justificacion" style="background:var(--bg-main);border-radius:var(--radius-md);padding:1rem;margin-bottom:1rem;font-size:0.88rem;color:var(--text-secondary);text-align:left;border-left:3px solid var(--primary);"></div>
                    <button class="eval-btn-comenzar" onclick="Evaluation.nextQuestion()">
                        ${indice + 1 < total ? 'Siguiente Pregunta <i class="fas fa-arrow-right"></i>' : 'Ver Resultados <i class="fas fa-flag-checkered"></i>'}
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Maneja la selección de una respuesta (Sin feedback inmediato)
     */
    selectOption(preguntaId, letraSeleccionada, button) {
        const { preguntas, indice } = this.state;
        const pregunta = preguntas[indice];

        // Solo permitir una respuesta
        if (this.state.respuestas[preguntaId]) return;

        this.state.respuestas[preguntaId] = letraSeleccionada;

        // Visualmente marcar la opción seleccionada
        document.querySelectorAll('.eval-opcion').forEach(btn => btn.classList.remove('seleccionada'));
        button.classList.add('seleccionada');

        // Mostrar botón de navegación
        const navEl = document.getElementById('eval-nav');
        if (navEl) navEl.style.display = 'block';
    },

    /**
     * Avanza a la siguiente pregunta o muestra resultados
     */
    nextQuestion() {
        this.state.indice++;
        if (this.state.indice < this.state.preguntas.length) {
            this.renderQuestion(this.state.indice);
        } else {
            this.showResults();
        }
    },

    /**
     * Calcula y muestra los resultados finales con revisión detallada
     */
    showResults() {
        const container = document.getElementById('evaluationContainer');
        if (!container) return;

        const { preguntas, respuestas } = this.state;
        let puntaje = 0;
        preguntas.forEach(p => {
            if (respuestas[p.id] === p.correcta) puntaje++;
        });

        const aprobado = puntaje >= EVAL_DATA.puntajeAprobacion;
        const porcentaje = Math.round((puntaje / preguntas.length) * 100);
        const history = this.saveResult({ puntaje });

        // Cards de revisión detallada (Numerada)
        const revisionHtml = preguntas.map((p, i) => {
            const seleccionada = respuestas[p.id];
            const esCorrecta = seleccionada === p.correcta;
            const opcionSeleccionada = p.opciones.find(o => o.letra === seleccionada);
            const opcionCorrecta = p.opciones.find(o => o.letra === p.correcta);

            return `
                <div class="eval-revision-card ${esCorrecta ? 'revision-ok' : 'revision-fail'}">
                    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:1rem;">
                        <div style="display:flex; gap:0.75rem;">
                            <span style="background:var(--bg-main); color:var(--text-primary); width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.8rem; border:1px solid var(--border);">${i + 1}</span>
                            <p style="font-size:0.95rem; font-weight:700; color:var(--text-primary); margin:0; line-height:1.4;">${p.texto}</p>
                        </div>
                        <i class="fas ${esCorrecta ? 'fa-check-circle' : 'fa-times-circle'}" style="color:${esCorrecta ? '#10b981' : '#ef4444'}; font-size:1.4rem;"></i>
                    </div>
                    
                    <div style="margin-left:2.5rem; display:grid; gap:0.5rem; border-top:1px solid var(--border); padding-top:0.75rem;">
                        <p style="font-size:0.88rem; color:${esCorrecta ? 'var(--accent-green)' : '#ef4444'}; margin:0;">
                            <strong>Tu respuesta:</strong> (${seleccionada}) ${opcionSeleccionada?.texto || 'No respondida'}
                        </p>
                        ${!esCorrecta ? `
                            <p style="font-size:0.88rem; color:var(--accent-green); margin:0;">
                                <strong>Respuesta correcta:</strong> (${p.correcta}) ${opcionCorrecta?.texto}
                            </p>
                        ` : ''}
                        
                        <div style="background:var(--bg-main); border-radius:10px; padding:0.85rem; margin-top:0.5rem;">
                            <p style="font-size:0.82rem; color:var(--text-secondary); margin:0; line-height:1.5;">
                                <i class="fas fa-info-circle" style="color:var(--primary); margin-right:6px;"></i>
                                <strong>Explicación:</strong> ${p.justificacion}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <div class="eval-pantalla">
                <div class="eval-resultado-hero ${aprobado ? 'aprobado' : 'reprobado'}">
                    <div style="font-size:4rem; margin-bottom:0.5rem;">${aprobado ? '🏆' : '📚'}</div>
                    <h2 style="margin:0; font-size:1.8rem; font-weight:800;">${aprobado ? '¡Aprobado!' : 'No aprobado'}</h2>
                    <p style="margin:0.5rem 0 0; opacity:0.9;">${aprobado ? '¡Excelente dominio del contenido de Angular!' : 'Repasa las secciones con errores e intenta de nuevo.'}</p>
                    <div style="font-size:3rem; font-weight:900; margin-top:1rem;">${puntaje}/${preguntas.length}</div>
                    <div style="font-size:1.2rem; opacity:0.9;">${porcentaje}% de rendimiento</div>
                </div>

                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(130px, 1fr)); gap:1rem; margin-bottom:2rem;">
                    <div class="eval-info-card"><i class="fas fa-redo" style="color:var(--primary); font-size:1.4rem;"></i><div><div style="font-weight:700;">${history.intentos}</div><div style="font-size:0.78rem; color:var(--text-muted);">Intentos realizados</div></div></div>
                    <div class="eval-info-card"><i class="fas fa-star" style="color:var(--accent-orange); font-size:1.4rem;"></i><div><div style="font-weight:700;">${history.mejorPuntaje}/${preguntas.length}</div><div style="font-size:0.78rem; color:var(--text-muted);">Mejor puntaje</div></div></div>
                </div>

                <div style="display:flex; justify-content:center; margin-bottom:2.5rem;">
                    <button class="eval-btn-comenzar" onclick="Evaluation.start()" style="padding: 1.25rem 3rem;">
                        <i class="fas fa-redo"></i> Reintentar Evaluación Teórica
                    </button>
                </div>

                <div style="border-bottom:2px solid var(--border); margin-bottom:1.5rem; padding-bottom:0.5rem; display:flex; align-items:center; gap:0.75rem;">
                    <i class="fas fa-list-check" style="color:var(--primary);"></i>
                    <h3 style="font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0;">Resultados Detallados</h3>
                </div>
                
                <div style="display:grid; gap:1rem;">
                    ${revisionHtml}
                </div>
            </div>
        `;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
