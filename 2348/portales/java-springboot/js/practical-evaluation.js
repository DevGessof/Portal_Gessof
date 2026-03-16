/**
 * GESSOF Academy - Módulo de Evaluación Práctica
 */

const PracticalEvaluationManager = {
    _state: {
        exerciseSelected: null,
        completed: false
    },

    STORAGE_KEY: 'gessof_practical_eval_status',

    init() {
        console.log('🛠️ Inicializando Módulo de Evaluación Práctica...');
        this._loadStatus();
        this.render();
    },

    _loadStatus() {
        const status = localStorage.getItem(this.STORAGE_KEY);
        if (status) {
            this._state.completed = JSON.parse(status).completed || false;
        }
    },

    _saveStatus() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify({ completed: this._state.completed }));
    },

    render() {
        const container = document.getElementById('eval-practica');
        if (!container) return;

        if (!this._state.exerciseSelected) {
            this._renderMain(container);
        } else {
            this._renderExercise(container, this._state.exerciseSelected);
        }
    },

    _renderMain(container) {
        const data = PRACTICAL_EVALUATION_DATA;

        container.innerHTML = `
            <div class="practical-eval-container">
                <div class="eval-header-info" style="margin-bottom: 2.5rem; text-align: center;">
                    <div class="eval-hero-icon" style="background: var(--primary-light); color: white; width: 80px; height: 80px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem; box-shadow: var(--shadow-lg);">
                        <i class="fas fa-microchip"></i>
                    </div>
                    <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">${data.title}</h2>
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">Aplica tus conocimientos en un entorno real de desarrollo</p>
                </div>

                <div class="requirements-section glass-panel" style="margin-bottom: 3rem; padding: 2.5rem; border-radius: 24px;">
                    <h3 style="display: flex; align-items: center; gap: 0.75rem; font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--primary);">
                        <i class="fas fa-globe"></i> REQUISITOS GLOBALES
                    </h3>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                        <div>
                            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-link" style="color: var(--accent-blue);"></i> APIs a consumir
                            </h4>
                            <ul style="list-style: none; padding: 0;">
                                ${data.globalRequirements.apis.map(api => `
                                    <li style="margin-bottom: 0.75rem;">
                                        <a href="${api.url}" target="_blank" style="color: var(--primary); text-decoration: none; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                                            <i class="fas fa-external-link-alt" style="font-size: 0.8rem;"></i> ${api.name}
                                        </a>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <div>
                            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-cogs" style="color: var(--accent-orange);"></i> Requisitos Generales
                            </h4>
                            <ul style="list-style: none; padding: 0;">
                                ${data.globalRequirements.general.map(req => `
                                    <li style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); display: flex; gap: 0.5rem;">
                                        <i class="fas fa-check" style="color: var(--accent-green); margin-top: 0.2rem; font-size: 0.8rem;"></i> ${req}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--border);">

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                         <div>
                            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-database" style="color: var(--accent-purple);"></i> Persistencia (JPA)
                            </h4>
                            <ul style="list-style: none; padding: 0;">
                                ${data.globalRequirements.jpa.map(req => `
                                    <li style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); display: flex; gap: 0.5rem;">
                                        <i class="fas fa-check" style="color: var(--accent-green); margin-top: 0.2rem; font-size: 0.8rem;"></i> ${req}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div>
                            <h4 style="font-size: 1rem; color: var(--text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-vial" style="color: var(--accent-red);"></i> Pruebas Unitarias
                            </h4>
                            <ul style="list-style: none; padding: 0;">
                                ${data.globalRequirements.testing.map(req => `
                                    <li style="margin-bottom: 0.5rem; font-size: 0.9rem; color: var(--text-secondary); display: flex; gap: 0.5rem;">
                                        <i class="fas fa-check" style="color: var(--accent-green); margin-top: 0.2rem; font-size: 0.8rem;"></i> ${req}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="exercise-selector" style="text-align: center;">
                    <h3 style="font-size: 1.5rem; font-weight: 700; color: var(--text-primary); margin-bottom: 2rem;">Elige un ejercicio para realizar</h3>
                    <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
                        ${data.exercises.map(ex => `
                            <div class="exercise-card glass-panel" onclick="PracticalEvaluationManager.selectExercise(${ex.id})" 
                                 style="flex: 1; min-width: 300px; max-width: 450px; padding: 2rem; border-radius: 20px; cursor: pointer; transition: all 0.3s ease; text-align: left; border: 1px solid var(--border);">
                                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
                                    <span style="background: var(--primary-light); color: white; padding: 0.4rem 1rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700;">EJERCICIO ${ex.id}</span>
                                    <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
                                </div>
                                <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 1rem; line-height: 1.4;">${ex.title}</h4>
                                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">${ex.id === 1 ? 'Enfoque en filtrado y transformación de datos usando RestTemplate.' : 'Enfoque en orquestación reactiva con WebClient, RestTemplate y Apache Camel.'}</p>
                                <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--primary); font-weight: 700; font-size: 0.9rem;">
                                    Comenzar ejercicio <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                ${this._state.completed ? `
                    <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; border-radius: 16px; display: flex; align-items: center; gap: 1rem; color: #10b981; justify-content: center;">
                        <i class="fas fa-check-circle" style="font-size: 1.5rem;"></i>
                        <span style="font-weight: 700;">¡Has completado la evaluación práctica!</span>
                    </div>
                ` : ''}
            </div>
        `;
    },

    selectExercise(id) {
        this._state.exerciseSelected = id;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    _renderExercise(container, id) {
        const ex = PRACTICAL_EVALUATION_DATA.exercises.find(e => e.id === id);
        if (!ex) return;

        container.innerHTML = `
            <div class="exercise-detail-container fadeIn">
                <button onclick="PracticalEvaluationManager.backToMain()" style="background: none; border: none; color: var(--primary); font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 2rem; font-size: 1rem;">
                    <i class="fas fa-arrow-left"></i> Volver a requisitos globales
                </button>

                <div class="glass-panel" style="padding: 2.5rem; border-radius: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
                        <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin: 0;">${ex.title}</h2>
                        <span style="background: var(--primary); color: white; padding: 0.5rem 1.2rem; border-radius: 50px; font-weight: 700; font-size: 0.85rem;">REQUERIMIENTO DETALLADO</span>
                    </div>

                    <div class="exercise-content">
                        <div style="background: rgba(0,0,0,0.03); padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem; border-left: 4px solid var(--primary);">
                            <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); margin-bottom: 0.75rem;">Endpoint(s)</h4>
                            ${ex.endpoint ? `<code style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: var(--primary);">${ex.endpoint}</code>` : ''}
                            ${ex.endpoints ? ex.endpoints.map(ep => `<div style="margin-bottom: 0.5rem;"><code style="font-family: 'JetBrains Mono', monospace; font-size: 1rem; color: var(--primary);">${ep}</code></div>`).join('') : ''}
                        </div>

                        <h3 style="font-size: 1.25rem; color: var(--text-primary); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
                            <i class="fas fa-list-ul" style="color: var(--primary);"></i> Tareas a realizar
                        </h3>

                        <ul style="list-style: none; padding: 0;">
                            ${ex.requirements.map((req, i) => `
                                <li style="margin-bottom: 1.2rem; background: var(--bg-card); padding: 1.2rem; border-radius: 16px; border: 1px solid var(--border); display: flex; gap: 1rem; transition: transform 0.2s ease;">
                                    <span style="width: 28px; height: 28px; background: var(--primary-light); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: 700; font-size: 0.8rem;">${i + 1}</span>
                                    <span style="color: var(--text-primary); line-height: 1.5;">${req}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <div style="margin-top: 3rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 2rem;">
                         <div style="max-width: 500px;">
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">Al finalizar tu desarrollo, asegúrate de que todos los requisitos globales y específicos se cumplan correctamente.</p>
                         </div>
                         <button onclick="PracticalEvaluationManager.completeExercise()" class="eval-btn-comenzar" style="margin: 0; padding: 1rem 2rem;">
                            <i class="fas fa-check-circle"></i> Marcar como Finalizado
                         </button>
                    </div>
                </div>
            </div>
        `;
    },

    backToMain() {
        this._state.exerciseSelected = null;
        this.render();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    completeExercise() {
        if (confirm('¿Has completado el ejercicio siguiendo todos los requerimientos técnicos?')) {
            this._state.completed = true;
            this._saveStatus();
            alert('¡Excelente trabajo! Has marcado la evaluación práctica como completada.');
            this.backToMain();
        }
    }
};

// Integración (Similar a EvaluationManager)
document.addEventListener('DOMContentLoaded', () => {
    // Escuchar el cambio a la pestaña de evaluación práctica
    // Nota: El switchEvalTab es manejado en index.html

    // Necesitamos asegurarnos que cuando se haga click en "Evaluación Práctica (Nueva)" se inicialice
    const practicaTab = document.querySelector('button[onclick*="eval-practica"]');
    if (practicaTab) {
        const originalOnClick = practicaTab.onclick;
        practicaTab.onclick = (e) => {
            if (typeof originalOnClick === 'function') originalOnClick(e);
            PracticalEvaluationManager.init();
        };
    }
});
